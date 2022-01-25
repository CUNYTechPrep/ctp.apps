import exp from 'constants';
import Blocks from './Blocks.json';
import db from './db';

export const countVotes = (rows) =>
  rows.map(({ Votes, ...rest }) => ({
    ...rest,
    voteCounts: Votes?.split(',').length || 0
  }
  ));

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

export async function getTopVotes(votes): Promise<Array<any>> {
  const blocks_votes = votes.map(({ Timestamp, Votes, ...rest }) => ([
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `${NUM_TO_SLACKMOJI[rest['voteCounts']] || ":zero:"} ${rest['Message/Topic (please add a URL link if there is one) *']}`,
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          emoji: true,
          text: 'Vote',
        },
        value: Timestamp,
        action_id: 'vote_action',
      },

    },
  ]))

  const blocks = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: 'What should we talk about next week? :arrow_right: :parrot: :bike: :computer:',
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
export let lastTimeStamp = null;


export async function ctpAlumniNewsletterSrcLibTopicOfTheWeek(client): Promise<any> {
  const blocks = [...Blocks];
  const docs = await db.find({ Read: "" });
  const votes = countVotes(docs).sort((a, b) => (a.voteCounts < b.voteCounts) ? 1 : -1)
  const [topVote] = votes
  if (topVote) {
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
    //Read topVote since its being used
    lastTimeStamp = new Date().toISOString();
    db.update(
      {
        Timestamp: topVote.Timestamp,
      },
      {
        Read: lastTimeStamp
      })

    blocks.splice(4, 0, ...topOfTheWeekBlock)
    votes.shift() // Remove topOfTheWeekBlock from votes
    if (votes.length)
      blocks.splice(7, 0, ...await getTopVotes(votes));
    else
      blocks.splice(7, 0, {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*:zero: Topics Submitted* :shocked_face_with_exploding_head:"
        }
      })
  }
  else {
    blocks.splice(5, 0, {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*:zero: New Topics Submitted* :shocked_face_with_exploding_head:"
      }
    })
  }
  return blocks;
}
