import { useSlackBot } from './use-slack-bot';
import { CtpAlumniNewsletter } from '../ctp.alumni.newsletter'

describe('useSlackBot', () => {
  it('should render successfully', async () => {
    process.env.SLACK_NEWSLETTER_CHANNEL='#test-env'
    await useSlackBot({
       channel: process.env.SLACK_NEWSLETTER_CHANNEL,
       blocks: CtpAlumniNewsletter()})
  });
});
