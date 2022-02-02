import Blocks from '../../../blocks/Blocks.json';
import db from './db';

export const countVotes = (rows) =>
  rows.map(({ Votes, ...rest }) => ({
    ...rest,
    voteCounts: Votes?.split(',').length || 0
  }
  ));

function rand() { return Math.floor(Math.random() * 90) };

const NUM_TO_SLACKMOJI = {
  1: ":one:",
  2: ":two:",
  3: ":three:",
  4: ":four:",
  5: ":five:",
  6: ":six:",
  7: ":seven:",
  8: ":eight:",
  9: ":nine:",
  10: ":keycap_ten:",
}

export const totdBlock = async () => {
  const docs = await db.find({ Read: "" });
  const votes = countVotes(docs).sort((a, b) => (a.voteCounts < b.voteCounts) ? 1 : -1)
  const [topVote] = votes
  if (topVote) {
    const submitted = topVote['Name & Slack Handle (if you would like to be tagged. If you would not like to be tagged, leave blank!)'] ? topVote['Name & Slack Handle (if you would like to be tagged. If you would not like to be tagged, leave blank!)'] : "Anonymous";
    const topic = topVote['Message/Topic (please add a URL link if there is one) *'] ? topVote['Message/Topic (please add a URL link if there is one) *'] : "No Topic Today Please Add More To The Google Form"
    await db.update(
      {
        Timestamp: topVote.Timestamp,
      },
      {
        Read: new Date().toISOString()
      })
    votes.shift();
    const blocks = [...Blocks];
    const todaysImage = 'https://picsum.photos/' + (600 + rand()) + '/' + (200 + rand()) + '?random=1'
    blocks.splice(4, 0, ...[
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
        }
      },
      {
        "type": "divider"
      },
      {
        "type": "image",
        "title": {
          "type": "plain_text",
          "text": "Today's Topic",
          "emoji": true
        },
        "image_url": "https://github.com/CUNYTechPrep/ctp.apps/blob/master/apps/ctp.alumni.newsletter-bot/src/assets/%23TOTD.gif?raw=true",
        "alt_text": "How To / Steps"
      },
      {
        "type": "image",
        "title": {
          "type": "plain_text",
          "text": "Today's Image "+todaysImage,
          "emoji": true
        },
        "image_url": todaysImage,
        "alt_text": todaysImage
      }
    ]
    )
    return { blocks, topic, votes };
  }
  return {
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*:zero: New Topics Submitted* :shocked_face_with_exploding_head:"
        }
      }
    ],
    votes: null

  }
}


export async function getTopVotes(votes, Topic): Promise<Array<any>> {
  const blocks_votes = votes.map(({ Timestamp, Votes, ...rest }) => ([
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `${NUM_TO_SLACKMOJI[rest['voteCounts']] || ":zero:"} : *${rest['Message/Topic (please add a URL link if there is one) *']}*`,
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          emoji: true,
          text: 'Vote',
        },
        value: `${JSON.stringify({ Timestamp, Topic })}`,
        action_id: 'vote_action',
      },
    },
  ]))

  const blocks = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: 'What should we talk about tommorow? :arrow_right: :parrot: :bike: :computer:',
        "emoji": true
      },
    },
    {
      "type": "divider"
    },
    ...blocks_votes.flat(),
  ];
  return blocks;
}

export async function voteBlock(topic, votes): Promise<any> {
  return getTopVotes(votes, topic);
}
