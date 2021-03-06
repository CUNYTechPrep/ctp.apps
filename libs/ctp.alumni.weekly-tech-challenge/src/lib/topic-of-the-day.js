import Blocks from './blocks/Blocks.json';
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
  const docs = await db.find({ Read: "" }) || [];
  console.log(docs)
  const votes = countVotes(docs).sort((a, b) => (a.voteCounts > b.voteCounts) ? 1 : -1) || []
  const topVote = votes.pop()

  if (topVote) {
    console.log(topVote)
    const key = 'Title of question (please add a URL link if there is one)* '
    const user = 'Name & Slack Handle (if you would like to be tagged. If you would not like to be tagged, leave blank!)'
    const submitted = topVote[user] ? topVote[user] : "Anonymous";
    const topic = topVote[key] ? topVote[key] : "No Challenges Today Please Add More To The Google Form"

    await db.update({
      Timestamp: topVote.Timestamp,
    },
      {
        Read: new Date().toISOString()
      })

    const blocks = [...Blocks];
    const todaysImage = 'https://picsum.photos/' + (600 + rand()) + '/' + (200 + rand()) + '?random=1' 
    const question = topVote['Question Screen-Shot']
    blocks.splice(5, 0, ...[
      question && {
        "type": "image",
        "title": {
          "type": "plain_text",
          "text": "Today's Question",
          "emoji": true
        },
        "image_url":  question,
        "alt_text": question 
      },
       {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": topic.replaceAll('\\n', '\n')
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
          "text": "Today's Image " + todaysImage,
          "emoji": true
        },
        "image_url": todaysImage,
        "alt_text": todaysImage
      }
    ].filter(e => e))

    console.log({blocks})

    return { blocks, topic, votes };
  }
  return {
    blocks: [
      ...Blocks,
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


export async function getTopVotes(votes, Topic) {
  try {
    const key = 'Topic of the Question'
    const blocks_votes = votes.map(({ Timestamp, Votes, ...rest }) => ([
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `${NUM_TO_SLACKMOJI[rest['voteCounts']] || ":zero:"} : *${rest[key]}*`,
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
          text: 'What topic should we focus on next week? :arrow_right: :parrot: :bike: :computer:',
          "emoji": true
        },
      },
      {
        "type": "divider"
      },
      ...blocks_votes.flat(),
    ];
    return blocks;
  } catch (e) {
    console.error(e)
  }
}

export async function voteBlock(topic, votes) {
  try {
    return getTopVotes(votes, topic);
  } catch (e) {
    return null
  }
}
