import db from '../topic-of-the-day/src/lib/db';
import { getTopVotes, countVotes, lastTimeStamp } from '../topic-of-the-day/src/lib/topic-of-the-day'
import Blocks from '../topic-of-the-day/src/lib/Blocks.json';
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
    const topic_doc = await db.find({ Read: lastTimeStamp });
    const [topVote] = topic_doc
    const submitted = topVote['Name & Slack Handle (if you would like to be tagged. If you would not like to be tagged, leave blank!)'] ? topVote['Name & Slack Handle (if you would like to be tagged. If you would not like to be tagged, leave blank!)'] : "Anonymous";
    const topic = topVote['Message/Topic (please add a URL link if there is one) *'] ? topVote['Message/Topic (please add a URL link if there is one) *'] : "No Topic Today Please Add More To The Google Form"
    const topOfTheWeekBlock = [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `"*${topic}*"`
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `--> Submitted by ${submitted}`,
          "verbatim": false
        }
      },
      {
        "type": "divider"
      },
    ]

    const blocks = [...Blocks];
    const allDocs = await db.find({ Read: "" });
    const votes = countVotes(allDocs).sort((a, b) => (a.voteCounts < b.voteCounts) ? 1 : -1)
    blocks.splice(5, 0, ...topOfTheWeekBlock)
    blocks.splice(7, 0, ...await getTopVotes(votes));

    await client.chat.update({
      token: process.env.SLACK_BOT_TOKEN,
      channel: body.channel.id,
      ts: body.message.ts,
      blocks
    });
    client.chat.postEphemeral({
      token: process.env.SLACK_BOT_TOKEN,
      channel: body.channel.id,
      user: body.user.id,
      text: `Hey @${body.user.name}. Vote Submitted`,
    });
  },
};
