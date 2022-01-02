import { ctpAlumniNewsletter } from '../..';
export const messageListeners = {
/**
 * return pong on ping
 * @param {*} { message, say }
 * @return {*}  {Promise<any>}
 */
ping: async function ({ message, say }): Promise<any> {
      await say({
        text: `<@${message.user}>. pong :tennis:`,
      });
    },

/**
 * Return The Newsletter Copy When Keyword is 
 * events or latest events
 * @param {*} {
 *       message,
 *       event,
 *       client,
 *       say,
 *       body,
 *     }
 * @return {*}  {Promise<any>}
 */
'events|latest events': async function ({
      message,
      event,
      client,
      say,
      body,
    }): Promise<any> {
      try {
        // const { user } = await client.users.info({
        //   token: process.env.SLACK_BOT_TOKEN,
        //   user: message.user,
        // });
        await say({
          blocks: await ctpAlumniNewsletter({ user: message.user }),
        });
      } catch (e) {
        client.chat.postEphemeral({
          token: process.env.SLACK_BOT_TOKEN,
          channel: message.channel,
          user: message.user,
          text: `Error ${e}`,
        });
      }
    },
  };