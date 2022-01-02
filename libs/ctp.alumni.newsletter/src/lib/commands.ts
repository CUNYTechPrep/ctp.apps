import { ctpAlumniNewsletter } from "../lib/ctp.alumni.newsletter"

export const messageListeners = {
  ping: async ({ message, ack, say }) => {
    await say({
      text: `<@${message.user}>. pong :tennis:`,
    });
  },
  "events|latest events": 
    async ({ message, event, client, say, body, ...rest }) => {
    try {
      // const { user } = await client.users.info({
      //   token: process.env.SLACK_BOT_TOKEN,
      //   user: message.user,
      // });
      await say({
        blocks: ctpAlumniNewsletter({ user: message.user }),
      });
    } catch (e) {
      client.chat.postEphemeral({
        token: process.env.SLACK_BOT_TOKEN,
        channel: body.channel.id,
        user: body.user.id,
        text: `Error ${e}`,
      });
    }
  }
};

export const appActions = {

}
