import { db } from '../topic-of-the-week/src';
export const appActions = {
  /**
   * Click Event to Say Thanks
   * @param {*} { client, body, ack }
   */
  thank_you_for_clicking: async ({ client, body, ack }) => {
    await ack();
    client.chat.postEphemeral({
      token: process.env.SLACK_BOT_TOKEN,
      channel: body.channel.id,
      user: body.user.id,
      text: `Hey @${body.user.name}. Thank you for clicking`,
    });
  },
  vote_action: async ({ client, say, body, ack, payload, ...rest }) => {
    const { value } = payload;
    let [docs] = await db.find({
      Timestamp: value,
    });

    if (docs.Votes?.includes(body.user.id)) {
      client.chat.postEphemeral({
        token: process.env.SLACK_BOT_TOKEN,
        channel: body.channel.id,
        user: body.user.id,
        text: `@${body.user.name}. Already Voted`,
      });
      return
    }

    if (docs.Votes) {
      [docs] = await db.update({
        Timestamp: value,
      },
        {
          Votes: docs.Votes + ', ' + body.user.id,
        }
      );
    } else {
      [docs] = await db.update({
        Timestamp: value,
      },
        {
          Votes: body.user.id,
        }
      );
    }

    const { user } = await client.users.info({
      token: process.env.SLACK_BOT_TOKEN,
      user: body.user.id,
    });
    const votes = docs.Votes?.split(',').length
    await ack();
    await say({
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: 'Next Weeks Topic Discussion Poll?',
          },
        },
        {
          type: 'divider',
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*${docs['Message/Topic (please add a URL link if there is one) *']}*  :    ${votes} votes`,
          },
        },
      ],
    });
    client.chat.postEphemeral({
      token: process.env.SLACK_BOT_TOKEN,
      channel: body.channel.id,
      user: body.user.id,
      text: `Hey @${body.user.name}. Vote Submitted`,
    });
  },
};
