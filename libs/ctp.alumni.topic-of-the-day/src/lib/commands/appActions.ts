import db from '../topic-of-the-day/src/lib/db';
import { getTopVotes, countVotes, voteBlock } from '../topic-of-the-day/src/lib/topic-of-the-day'
import { logger } from '@ctp.apps/logger';

async function voteHandler(client, payload, { user, channel }) {
  const { Timestamp } = JSON.parse(payload.value);
  let [docs] = await db.find({
    Timestamp,
  });

  if (docs.Votes?.includes(user.id)) {
    client.chat.postEphemeral({
      token: process.env.SLACK_BOT_TOKEN,
      channel: channel.id,
      user: user.id,
      text: `@${user.name}. Already Voted`,
    });
    return;
  }

  if (docs.Votes) {
    [docs] = await db.update({
      Timestamp,
    },
      {
        Votes: docs.Votes + ', ' + user.id,
      }
    );
  } else {
    [docs] = await db.update({
      Timestamp,
    },
      {
        Votes: user.id,
      }
    );
  }
  client.chat.postEphemeral({
    token: process.env.SLACK_BOT_TOKEN,
    channel: channel.id,
    user: user.id,
    text: `Hey @${user.name}. Vote Submitted`,
  });
}

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
  vote_action: async ({ client, say, body: { user, channel, message }, ack, payload, ...rest }) => {
    //1. Vote
    await voteHandler(client, payload, { user, channel });
    const { Topic } = JSON.parse(payload.value);
    logger.info("Vote Submitted for ", Topic)
    //2. Update Message
    const topic_doc = await db.find({ 'Message/Topic (please add a URL link if there is one) *': Topic });
    const [topVote] = topic_doc
    const topic = topVote['Message/Topic (please add a URL link if there is one) *'] ? topVote['Message/Topic (please add a URL link if there is one) *'] : "No Topic Today Please Add More To The Google Form"
    const allDocs = await db.find({ Read: "" });
    const votes = countVotes(allDocs).sort((a, b) => (a.voteCounts < b.voteCounts) ? 1 : -1)
    //3. Update Slack
    await client.chat.update({
      token: process.env.SLACK_BOT_TOKEN,
      channel: channel.id,
      ts: message.ts,
      blocks: await voteBlock(topic, votes),
    });
  }
};
