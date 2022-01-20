import Blocks from './Blocks.json';
import db from './db';

const countVotes = (rows) =>
  rows.map(({ Votes, ...rest }) => ({
    ...rest,
    Votes,
    voteCounts: Votes?.split(',').length || 1
  }
  ));

async function getTopVotes(topThree, client): Promise<Array<any>> {
  const blocks_votes = await Promise.all(topThree.map(async ({ Timestamp, Votes, ...rest }) => ([
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: rest['Message/Topic (please add a URL link if there is one) *'],
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
    // {
    //   "type": "context",
    //   "elements":
    //     [
    //       Votes?.split(',').length === 1 ?
    //         {
    //           "type": "plain_text",
    //           "emoji": true,
    //           "text": `${Votes} || no votes`
    //         } :
    //         Votes?.split(',')
    //           .map(async userId => {
    //             const { user } = await client.users.info({
    //               token: process.env.SLACK_BOT_TOKEN,
    //               user: userId,
    //             });
    //             return ([
    //               {
    //                 "type": "image",
    //                 "image_url": "https://api.slack.com/img/blocks/bkb_template_images/profile_1.png",
    //                 "alt_text": "Michael Scott"
    //               },
    //               {
    //                 "type": "image",
    //                 "image_url": "https://api.slack.com/img/blocks/bkb_template_images/profile_2.png",
    //                 "alt_text": "Dwight Schrute"
    //               },
    //               {
    //                 "type": "image",
    //                 "image_url": "https://api.slack.com/img/blocks/bkb_template_images/profile_3.png",
    //                 "alt_text": "Pam Beasely"
    //               },
    //             ])
    //           }),
    //       {
    //         "type": "plain_text",
    //         "emoji": true,
    //         "text": `${Votes?.split(',').length - 1} votes`
    //       }
    //     ]
    //},
  ]
  )))

  const blocks = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: 'What should we talk about next week? :arrow_right:   :parrot: :bike: :computer:',
        "emoji": true
      },
    },
    ...blocks_votes.flat(),
    {
      type: 'divider',
    },
    {
      type: 'divider',
    },
  ];
  return blocks;
}

export async function ctpAlumniNewsletterSrcLibTopicOfTheWeek(client): Promise<any> {
  const blocks = [...Blocks];
  const docs = await db.find({
    Read: ""
  });


  const votes = countVotes(docs).sort((a, b) => (a.voteCounts > b.voteCounts) ? 1 : -1)
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
      }
    ]
    //Read topVote since its being used
    db.update(
      {
        Timestamp: topVote.Timestamp,
      },
      {
        Read: new Date().toISOString()
      })
    blocks.splice(4, 0, ...topOfTheWeekBlock)
    votes.shift()
    if (votes.length)
      blocks.splice(7, 0, ...await getTopVotes(votes, client));
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
    blocks.splice(4, 0, {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*:zero: Topics Submitted* :shocked_face_with_exploding_head:"
      }
    })
  }
  return blocks;
}
