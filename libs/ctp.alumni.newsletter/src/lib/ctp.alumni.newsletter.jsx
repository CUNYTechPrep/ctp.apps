
import { Actions,Mrkdwn, Field, Blocks, Overflow, OverflowItem, Image, Header, Section, Context, Divider, Button} from 'jsx-slack'

export const CtpAlumniNewsletter = (props) => (
    <Blocks>
    <Header>
      :newspaper:  CUNY Tech Alumni Newsletter  :newspaper:
    </Header>
    <Context>
    <Mrkdwn >
      `{new Date().toISOString()}`  |  # *CUNY Tech Announcements*
      </Mrkdwn>
    </Context>
    <Divider />
    <Section>
      :calendar: |&nbsp;&nbsp;&nbsp;<b>UPCOMING EVENTS</b>&nbsp;&nbsp;| :calendar:
    </Section>
      <Image src={"https://cunytechprep.nyc/img/banner-logo.png"} alt="Invite Image" />
    <Section>
      <b>
      `12/14/2021` CUNY Tech Prep: Demo Night Fall 2021
      </b>
    <img src="https://cunytechprep.nyc/img/banner-logo.png" alt="yhatt" />
  </Section>
  <Section>
  Please join us for night of networking on Tuesday, December 14th from 5:30pm to 7:00pm
    <Button url="https://cuny-tech-prep-demo-night-fall2021.eventbrite.com/?aff=AlumniNewsLetter" actionId="action" value="value" style="primary">
     Click to RSVP 
    </Button>
  </Section>
  <Divider />
  <Section>
    <Mrkdwn >
      :flashing_lights: *EVENT INFORMATION* :flashing_lights:
    
    </Mrkdwn>
    <Field>
      :five:
      Break Out Rooms
    </Field>
    <Field>
      :four::six: 
      <br />
      Teams
    </Field>
    <Field>
      :three::zero:
      Web Dev Projects
    </Field>
    <Field>
      :one::seven: 
      <br />
      Data Science Projects
    </Field>
    Come on down and share the news with industry partners 
      https://cuny-tech-prep-demo-night-fall2021.eventbrite.com/?aff=AlumniSlack
    </Section>
    <Divider />
    <Section>
      *Reminder* We are offering CTP alumni like you support with:
    </Section>
    <Actions>
    <Overflow actionId="overflow_menu">
      <OverflowItem url="https://calendly.com/aem-ctp/45-meeting/">Technical interviews</OverflowItem>
      <OverflowItem url="https://calendly.com/aem-ctp/45-meeting/">Job searching</OverflowItem>
      <OverflowItem url="https://calendly.com/aem-ctp/45-meeting/">Open-source projects</OverflowItem>
    </Overflow>
  </Actions>
    <Divider />
    <Context>
    <Section>
    <Mrkdwn >
      :pushpin: Do you have something to include in the newsletter? Please make a &nbsp;
      <a href="https://github.com/CUNYTechPrep/ctp.apps"> pull-request </a>
    </Mrkdwn>
  </Section>
    </Context>
  </Blocks>
  );

export default CtpAlumniNewsletter;

