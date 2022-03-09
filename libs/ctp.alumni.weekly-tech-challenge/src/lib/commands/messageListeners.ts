import { voteBlock, totdBlock, countVotes } from '../topic-of-the-day'
import db from '../db';
import Blocks from '../blocks/Blocks.json'


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
  '#weekly-tech-challange': async function ({
    message,
    event,
    client,
    say,
    body,
  }): Promise<any> {
    try {
      const { user } = await client.users.info({
        token: process.env.SLACK_BOT_TOKEN,
        user: message.user,
      });
      if (user.is_admin) {
        const { blocks, topic, votes } = await totdBlock();
        await say({ blocks })
          setTimeout(async () => {
            await say({
              blocks: await voteBlock(topic, votes),
            });
          },1000 * 1000)
      } else {
        throw Error("User Not Authorized To Run")
      }
    } catch (e) {
      client.chat.postEphemeral({
        token: process.env.SLACK_BOT_TOKEN,
        channel: message.channel,
        user: message.user,
        text: `Error ${e}`,
      });
      console.error(e)
    }
  },
};