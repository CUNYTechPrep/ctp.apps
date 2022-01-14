if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
import {
  appActions,
  appEvents,
  messageListeners,
} from '@cunytechprep/ctp.alumni.newsletter';
/* 
This sample slack application uses SocketMode
For the companion getting started setup guide, 
see: https://slack.dev/bolt-js/tutorial/getting-started 
*/
import { App } from '@slack/bolt';
// Initializes your app with your bot token and app token
const config = {
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
}
const app = new App(config);


(async () => {
  // Start your app
  try {
    for (let [key, asyncFunction] of Object.entries(messageListeners)) {
      const regx = new RegExp(key);
      console.log('loading message listeners', regx);
      app.message(regx, asyncFunction);
    }
    for (let [key, asyncFunction] of Object.entries(appActions)) {
      console.log('loading action listeners', key);
      app.action(key, asyncFunction);
    }
    for (let [key, asyncFunction] of Object.entries(appEvents)) {
      console.log('loading event listeners', key);
      app.event(key, asyncFunction);
    }
    await app.start(parseInt(process.env.PORT) || 3000);
    console.log('⚡ Bot is running! ⚡');
  } catch (e) {
    console.error(e)
  }
})();
