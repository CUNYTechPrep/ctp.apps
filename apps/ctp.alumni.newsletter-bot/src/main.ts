require('dotenv').config();
const { App } = require('@slack/bolt');
import CtpAlumniNewsletter from '@cunytechprep/ctp.alumni.newsletter';
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

app.message('ping', async ({ message, ack, say }) => {
  await say({
   text: `<@${message.user}>. pong :tennis:`,
  });
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

// Listens to incoming messages that contain "hello"
app.message(/events/, async ({ message, event, client, say, body, ...rest }) => {
  try {
    // const { user } = await client.users.info({
    //   token: process.env.SLACK_BOT_TOKEN,
    //   user: message.user,
    // });
    await say({
      blocks: CtpAlumniNewsletter({ user: message.user }),
    });
  } catch (e) {
    app.client.chat.postEphemeral({
      token: process.env.SLACK_BOT_TOKEN,
      channel: body.channel.id,
      user: body.user.id,
      text: `Error ${e}`,
    });
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
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
