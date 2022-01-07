import NewsLetter from './NewsLetter.json';
import Config from '../../package.json'

/**
 *
 * ctpAlumniNewsletter
 * @export
 * @param {*} { user }
 * @return {*}  {*}
 */
export async function ctpAlumniNewsletter({ user }): Promise<any> {
  const newsLetter = [...NewsLetter]
  const text = {
    type: 'context',
    elements: [
      {
        text: `Hey there <@${user}>! Here are the latest CUNY Tech Prep Event Announcements`,
        type: 'mrkdwn',
      },
    ],
  };
  newsLetter.splice(1, 0, text);

  const status = {
    type: 'context',
    elements: [
      {
        text: `This :robot_face: is hosted with <${Config.url}|Heroku>`,
        type: 'mrkdwn',
      },
    ],
  }
  newsLetter.splice(NewsLetter.length-1, 0, status);

  return newsLetter;
}
