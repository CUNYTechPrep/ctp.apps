
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
      <Image src={"https://raw.githubusercontent.com/CUNYTechPrep/ctp.apps/master/libs/ctp.alumni.newsletter/src/lib/assets/C7DemoNightInvite.gif"} alt="Invite Image" />
    <Section>
      <b>
      `{new Date().toISOString()}` CUNY Tech Prep: Demo Night Fall 2021
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
    </Section>
    <Section>
    <Mrkdwn >
      <br/>
        <b>
        <a href="https://cuny-tech-prep-demo-night-fall2021.eventbrite.com/?aff=AlumniNewsLetter"> 
        Please Share This Link With Your Networks  
        </a>
      </b>
      </Mrkdwn >
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
 
    </Section>
  <Section>
    <b>Can't Attend But Want to Ask A Question</b>
    &nbsp;
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScsGFx8jty8t8RN_weeiIoknl3VBYljb6OraZ76UW1joeAQ3A/viewform">
      use this form
    </a>
  </Section>
    <Divider />
    <Section>
     <p> *Reminder* We are offering CTP alumni like you support with:</p>
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
    <Section>
    <Mrkdwn >
      `*Let us know you read this by reacting with an emoji!*`
      </Mrkdwn>
    </Section>
  </Blocks>
  );

export default CtpAlumniNewsletter;

