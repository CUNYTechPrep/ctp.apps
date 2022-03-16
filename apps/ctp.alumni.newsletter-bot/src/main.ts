if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
import activeBotWorker from './active';
/* 
This sample slack application uses SocketMode
For the companion getting started setup guide, 
see: https://slack.dev/bolt-js/tutorial/getting-started 
*/
import { App } from '@slack/bolt';
import { runIt  } from './cron';
// Initializes your app with your bot token and app token
const config = {
  token: process.env[process.env.APP + '_SLACK_BOT_TOKEN'],
  socketMode: true,
  appToken: process.env[process.env.APP + '_SLACK_APP_TOKEN'],
  signingSecret: process.env[process.env.APP + '_SLACK_SIGNING_SECRET'],
};
export const app = new App(config);

(async () => {
  // Start your app
  const { appActions, appEvents, messageListeners } = activeBotWorker;
  try {
    for (let [key, asyncFunction] of Object.entries(messageListeners)) {
      const regx = new RegExp(key);
      console.log('loading message listeners', regx);
      app.message(regx, asyncFunction as any);
    }
    for (let [key, asyncFunction] of Object.entries(appActions)) {
      console.log('loading action listeners', key);
      app.action(key, asyncFunction as any);
    }
    for (let [key, asyncFunction] of Object.entries(appEvents)) {
      console.log('loading event listeners', key);
      app.event(key, asyncFunction as any);
    }
    await app.start(parseInt(process.env.PORT) || 3000);
    console.log('⚡ Bot is running! ⚡');
  } catch (e) {
    console.error(e);
  }
})();


runIt()