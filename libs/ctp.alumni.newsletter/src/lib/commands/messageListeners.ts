import { ctpAlumniNewsletter } from '../..';
import { ctpAlumniNewsletterSrcLibTopicOfTheWeek } from '../topic-of-the-week/src'
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
  // '#totw': async function ({
  //   message,
  //   event,
  //   client,
  //   say,
  //   body,
  // }): Promise<any> {
  //   try {
  //     const { user } = await client.users.info({
  //       token: process.env.SLACK_BOT_TOKEN,
  //       user: message.user,
  //     });
  //     if (user.is_admin) {
  //       await say({
  //         blocks: await ctpAlumniNewsletterSrcLibTopicOfTheWeek(client),
  //       });
  //     }
  //     else{
  //       throw Error("User Not Authorized To Run totw")
  //     }
  //   } catch (e) {
  //     client.chat.postEphemeral({
  //       token: process.env.SLACK_BOT_TOKEN,
  //       channel: message.channel,
  //       user: message.user,
  //       text: `Error ${e}`,
  //     });
  //   }
  // },
};