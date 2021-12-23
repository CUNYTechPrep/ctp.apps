import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  SimpleGrid,
  HStack,
  VStack,
  ChakraProvider,
  Icon,
  theme,
} from '@chakra-ui/react';
import {
  FcGlobe,
  FcDonate,
  FcInTransit,
  FcCheckmark as CheckIcon,
  FcIdea,
} from 'react-icons/fc';
import { Link } from 'gatsby';
import { Illustration } from '../components/illustration';

const apps = [
  {
    title: 'CUNY Tech Prep Alumni Advice',
    text: 'Advice for current students from past expereience. An alumni and want to contribute make a PR!',
    link: 'ctp.alumni.advice/',
  },
  {
    title: 'CUNY Tech Prep Alumni Newsletter',
    text: 'Data Visulizations Taken From Alumni Surveys',
    link: `https://app.slack.com/block-kit-builder/T01CFBHT2MV#%7B%22blocks%22:%5B%7B%22type%22:%22header%22,%22text%22:%7B%22type%22:%22plain_text%22,%22text%22:%22:newspaper:%20%20CUNY%20Tech%20Alumni%20Newsletter%20%20:newspaper:%22%7D%7D,%7B%22type%22:%22context%22,%22elements%22:%5B%7B%22text%22:%22*November%209,%202021*%20%20%7C%20%20CUNY%20Tech%20Announcements%22,%22type%22:%22mrkdwn%22%7D%5D%7D,%7B%22type%22:%22divider%22%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22:calendar:%20%7C%20%20%20*UPCOMING%20EVENTS*%20%20%7C%20:calendar:%20%22%7D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22%6012/14/2021%60%20*Demo%20Night*%22%7D,%22accessory%22:%7B%22type%22:%22image%22,%22image_url%22:%22https://img.evbuc.com/https://cdn.evbuc.com/images/182770579/230874640264/1/original.20211109-130648?w=800&auto=format,compress&q=75&sharp=10&rect=0,102,824,412&s=7969e2f3468f2acc7a4722c224fa4871%22,%22alt_text%22:%22calendar%20thumbnail%22%7D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22Please%20join%20us%20for%20night%20of%20networking%20on%20Tuesday,%20December%2014th%20from%205:30pm%20to%207:00pm.%22%7D,%22accessory%22:%7B%22type%22:%22button%22,%22text%22:%7B%22type%22:%22plain_text%22,%22text%22:%22Click%20To%20RSVP%22,%22emoji%22:true%7D,%22value%22:%22click_me_123%22,%22url%22:%22https://www.eventbrite.com/e/cuny-tech-prep-demo-night-fall-2021-tickets-205207460037%22,%22action_id%22:%22button-action%22%7D%7D,%7B%22type%22:%22divider%22%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22:calendar:%20%7C%20%20%20*PAST%20EVENTS*%20%20%7C%20:calendar:%20%22%7D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22%6008/23-27/2021%60%20*Welcome%20To%20CTP%20Hackathon*%20%5Cn%20https://www.ctphackathon.com/%22%7D,%22accessory%22:%7B%22type%22:%22image%22,%22image_url%22:%22https://api.slack.com/img/blocks/bkb_template_images/notifications.png%22,%22alt_text%22:%22calendar%20thumbnail%22%7D%7D,%7B%22type%22:%22divider%22%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22*EVENT%20INFORMATION*%22%7D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22This%20is%20an%20opportunity%20to%20watch%20some%20great%20project%20pitches,%20share%20your%20expert%20feedback,%20and%20mingle%20with%20talented,%20job-ready%20tech%20fellows%20and%20start%20assessing%20their%20fit%20for%20internships%20and%20entry%20level%20positions!%22,%22verbatim%22:false%7D%7D,%7B%22type%22:%22divider%22%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22*Reminder*%20We%20are%20offering%20CTP%20alumni%20like%20you%20support%20with:...%22%7D,%22accessory%22:%7B%22type%22:%22checkboxes%22,%22options%22:%5B%7B%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22*Technical%20interviews*%22%7D,%22value%22:%22value-0%22%7D,%7B%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22*Job%20searching*%22%7D,%22value%22:%22value-1%22%7D,%7B%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22*Open-source%20projects*%22%7D,%22value%22:%22value-2%22%7D%5D,%22action_id%22:%22checkboxes-action%22%7D%7D,%7B%22type%22:%22context%22,%22elements%22:%5B%7B%22type%22:%22mrkdwn%22,%22text%22:%22https://calendly.com/aem-ctp/45-meeting%22%7D%5D%7D,%7B%22type%22:%22divider%22%7D,%7B%22type%22:%22context%22,%22elements%22:%5B%7B%22type%22:%22mrkdwn%22,%22text%22:%22:pushpin:%20Do%20you%20have%20something%20to%20include%20in%20the%20newsletter?%20Please%20reach%20out%20to%20Sam%20Witke%22%7D%5D%7D%5D%7D`
  },
  {
    title: 'CUNY Tech Prep Alumni Survey',
    text: 'Data Visulizations Taken From Alumni Surveys',
    link: `https://github.com/CUNYTechPrep/ctp.apps/blob/master/apps/ctp.alumni.survey/2021AlumniSurvey.ipynb`
  },
  {
    title: 'Want To Create An App?',
    text: 'Follow the contributing guide on the github page.',
    link: 'https://github.com/CUNYTechPrep/ctp.apps/issues/new?assignees=&labels=%F0%9F%91%80+needs+triage%2C+%F0%9F%92%A1+feature&template=feature_request.md&title=Feature%3A+',
  },
];
const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        shadow="md"
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function CallToActionWithIllustration() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 12, md: 15 }}
        >
          <Heading
            fontWeight={500}
            fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
            padding={8}
            lineHeight={'110%'}
          >
            CTP Open Source Apps{' '}
            <Text as={'span'} color={'orange.400'}>
              homepage
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Open Sourced Apps Developed by CUNY Tech Prep Alumni/Students
          </Text>
          <Stack direction={'row'}>
            <a href="https://ctpalumni.slack.com/archives/C02C7QJ5U93">
              <Button
                shadow="md"
                rounded={'full'}
                px={6}
                colorScheme={'orange'}
                bg={'orange.400'}
                _hover={{ bg: 'orange.500' }}
              >
                #Join the Slack Channel
              </Button>
            </a>
            <a href="https://github.com/CUNYTechPrep/ctp.apps/blob/main/README.md">
              <Button rounded={'full'} px={6}>
                Learn more
              </Button>
            </a>
          </Stack>
          <Flex w={'full'}>
            <Illustration
              height={{ sm: '24rem', lg: '28rem' }}
              mt={{ base: 12, sm: 16 }}
            />
          </Flex>
        </Stack>
        <Box p={4}>
          <Stack spacing={1} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Apps</Heading>
          </Stack>
          <Container maxW={'6xl'} mt={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {apps.map((feature, index) => (
                <HStack key={String(index)} align={'top'}>
                  <Box color={'green.400'} px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'}>
                    <Text fontWeight={600}>{feature.title}</Text>
                    <Text color={'gray.600'}>{feature.text}</Text>
                  </VStack>
                  <Link to={`${feature.link}`}>
                    <Button shadow="md" colorScheme="teal" variant="outline">
                      Open
                    </Button>
                  </Link>
                </HStack>
              ))}
            </SimpleGrid>
            <Stack
              py={{ base: 10, md: 18 }}
              spacing={1}
              as={Container}
              maxW={'3xl'}
              textAlign={'center'}
            >
              <Heading fontSize={'3m'}>
                This project was generated using{' '}
                <a href="https://nx.dev/">[ Nx. ]</a>
              </Heading>

              <Text color={'gray.600'} fontSize={'xl'}>
                <p>Here are some things you can do with ctp.app.</p>
                <details>
                  <summary>Add A React/Angular/Next/ App</summary>
                  <pre>{`# Generate an App 
      nx generate @nrwl/react:application NAME
 # Add a component
 nx g @nrwl/react:component xyz --project ui`}</pre>
                </details>
                <details>
                  <summary>Run affected commands</summary>
                  <pre>{`# see what's been affected by changes
 nx affected:dep-graph

 # run tests for current changes
 nx affected:test

 # run e2e tests for current changes
 nx affected:e2e
 `}</pre>
                </details>
              </Text>
            </Stack>
            <Box p={4}>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
                <Link to={`https://cunytechprep.github.io/ctp.apps/graph`}>
                  <Feature
                    icon={<Icon as={FcGlobe} w={10} h={10} />}
                    title={'Dependency Graph'}
                    text={'Click to See the dependency graph'}
                  />
                </Link>
                <Link
                  to={`https://github.com/CUNYTechPrep/.github/blob/feature/SW/open-saused/CONTRIBUTING.md`}
                >
                  <Feature
                    icon={<Icon as={FcDonate} w={10} h={10} />}
                    title={'CONTRIBUTING.md'}
                    text={'Contributions welcome!'}
                  />
                </Link>
                <Link
                  to={`https://github.com/CUNYTechPrep/ctp.apps/blob/main/CODE_OF_CONDUCT.md`}
                >
                  <Feature
                    icon={<Icon as={FcInTransit} w={10} h={10} />}
                    title={'Code Of Conduct'}
                    text={
                      'Our Pledge, Standards, Enforcement Responsibilities.'
                    }
                  />
                </Link>
                <Link
                  to={`https://github.com/CUNYTechPrep/ctp.apps/discussions`}
                >
                  <Feature
                    icon={<Icon as={FcIdea} w={10} h={10} />}
                    title={'Discussions'}
                    text={'Use discussions to ask and answer questions.'}
                  />
                </Link>
              </SimpleGrid>
            </Box>
          </Container>
        </Box>
      </Container>
    </ChakraProvider>
  );
}
