
import { Actions,Mrkdwn, Blocks, Overflow, OverflowItem, Image, Header, Section, Context, Divider, Button} from 'jsx-slack'


export const CtpAlumniNewsletter = (props) => (
    <Blocks>
    <Header>
      :newspaper:  CUNY Tech Alumni Newsletter  :newspaper:
    </Header>
    <Context>
      *November 9, 2021*  |  CUNY Tech Announcements
    </Context>
    <Divider />
    <Section>
      :calendar: |&nbsp;&nbsp;&nbsp;<b>UPCOMING EVENTS</b>&nbsp;&nbsp;| :calendar:
    </Section>
    <Section>
      <b>
      `12/14/2021` Demo Night
      </b>
    <img src="https://cunytechprep.nyc/img/banner-logo.png" alt="yhatt" />
  </Section>
  <Divider />
  <Section>
      :calendar: |&nbsp;&nbsp;&nbsp;<b>PAST EVENTS</b>&nbsp;&nbsp;| :calendar:
    </Section>
    <Section>
      <b>
      `08/23-27/2021` *Welcome To CTP Hackathon* \n https://www.ctphackathon.com/
      </b>
    <img src="https://api.slack.com/img/blocks/bkb_template_images/notifications.png" alt="yhatt" />
  </Section>
    <Divider />
    <Section>
      *Reminder* We are offering CTP alumni like you support with:
    </Section>
    <Actions>
    <Overflow actionId="overflow_menu">
      <OverflowItem value="share">Technical interviews</OverflowItem>
      <OverflowItem value="reply">Job searching</OverflowItem>
      <OverflowItem url="https://example.com/">Open-source projects</OverflowItem>
    </Overflow>
  </Actions>
    <Divider />
    <Context>
    <Section>
    <Mrkdwn >
      :pushpin: Do you have something to include in the newsletter? Please make a 
      <a href="https://github.com/CUNYTechPrep/ctp.apps"> pull-request </a>
    </Mrkdwn>
  </Section>
    </Context>
  </Blocks>
  );

export default CtpAlumniNewsletter;

