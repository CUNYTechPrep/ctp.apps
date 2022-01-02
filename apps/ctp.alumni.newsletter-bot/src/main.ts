const { App } = require('@slack/bolt');
import {
  messageListeners,
} from '@cunytechprep/ctp.alumni.newsletter';
/* 
This sample slack application uses SocketMode
For the companion getting started setup guide, 
see: https://slack.dev/bolt-js/tutorial/getting-started 
*/

// Initializes your app with your bot token and app token
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const welcomeChannelId = '#introductions';
app.event('team_join', async ({ event, client, logger }) => {
  try {
    // Call chat.postMessage with the built-in client
    const result = await client.chat.postMessage({
      channel: welcomeChannelId,
      text: `Welcome to the team, <@${event.user}>! 🎉 You can introduce yourself in this channel.`,
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
});


app.action('thank_you_for_clicking', async ({ body, message }) => {
  app.client.chat.postEphemeral({
    token: process.env.SLACK_BOT_TOKEN,
    channel: body.channel.id,
    user: body.user.id,
    text: `Hey @${body.user.name}. Thank you for clicking`,
  });
});

(async () => {
  // Start your app
  for (let [key, asyncFunction] of Object.entries(messageListeners)) {
    const regx = new RegExp(key)
    console.log('loading message listeners', regx);
    app.message(regx, asyncFunction);
  }

  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
