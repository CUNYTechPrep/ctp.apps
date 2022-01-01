export function ctpAlumniNewsletter({ user }): any {
  return [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: ':newspaper:  CUNY Tech Alumni Newsletter  :newspaper:',
      },
    },
    {
      type: 'context',
      elements: [
        {
          text: `Hey there <@${user}>! Here are the latest CUNY Tech Prep Event Announcements`,
          type: 'mrkdwn',
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: ':calendar: |   *UPCOMING EVENTS*  | :calendar: ',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: "`January 25, 2022, 5:30 PM` *CUNY Tech Prep's Recruiting Fair*",
      },
      accessory: {
        type: 'image',
        image_url:
          'https://quiin.s3.us-east-1.amazonaws.com/events/pictures/000/303/890/original/Recruiting_Fair_banner_%282%29.png?1640214553',
        alt_text: 'calendar thumbnail',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: "Welcome to CUNY Tech Prep's Recruiting Fair! This event is an opportunity for our Fellows to connect directly with our employer partners to learn about their interview process and other insights to their hiring process. We're excited to be working with companies to share our CUNY talent.",
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Click To RSVP',
          emoji: true,
        },
        value: 'thank_you_for_clicking',
        url: 'https://hopin.com/events/recruiting-fair-cuny-tech-prep',
        action_id: 'thank_you_for_clicking',
      },
    },
    {
      type: 'divider',
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: ':calendar: |   *PAST EVENTS*  | :calendar: ',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '`*December 14, 2021*` CUNY Tech Prep: Demo Night Fall 2021',
      },
      accessory: {
        type: 'image',
        image_url:
          'https://api.slack.com/img/blocks/bkb_template_images/notifications.png',
        alt_text: 'calendar thumbnail',
      },
    },
    {
      type: 'divider',
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '*Follow us and let’s stay connected!*',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '\n :frame_with_picture: <instagram.com/cuny_tech_prep | Instagram> :linked_paperclips: <https://linkedin.com/company/cunytechprep|LinkedIn > :book: <https://www.facebook.com/cunytechprep|Facebook> \n :bird: <https://twitter.com/CUNYTechPrep|Twitter>  <https://nyc.us11.list-manage.com/subscribe?u=748a8fe32a12e67173ff5263c&id=414ee7c4b6|  Sign up for our :email: newsletter>',
        verbatim: false,
      },
    },
    {
      type: 'divider',
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '*Reminder* We are offering CTP alumni like you support with:...',
      },
      accessory: {
        type: 'checkboxes',
        options: [
          {
            text: {
              type: 'mrkdwn',
              text: '*Technical interviews*',
            },
            value: 'value-0',
          },
          {
            text: {
              type: 'mrkdwn',
              text: '*Job searching*',
            },
            value: 'value-1',
          },
          {
            text: {
              type: 'mrkdwn',
              text: '*Open-source projects*',
            },
            value: 'value-2',
          },
        ],
        action_id: 'checkboxes-action',
      },
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: 'https://calendly.com/aem-45min/45min',
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: ':pushpin: Do you have something to include in the newsletter? Please make a <https://github.com/CUNYTechPrep/ctp.apps/edit/master/libs/ctp.alumni.newsletter/src/lib/index.ts| pull-request>',
        },
      ],
    },
  ];
}