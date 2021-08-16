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
    title: 'Want To Create An App?',
    text: 'Follow the contributing guide on the github page.',
    link: '404/',
  },
];
const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
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
          spacing={{ base: 8, md: 10 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
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
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}
            >
              #Join the Slack Channel
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
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
                  <Link replace to={`${window.location}${feature.link}`}>
                    <Button colorScheme="teal" variant="outline">
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
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Link to={`${window.location}/graph`}>
                  <Feature
                    icon={<Icon as={FcGlobe} w={10} h={10} />}
                    title={'Dependency Graph'}
                    text={'Click to See the dependency graph'}
                  />
                </Link>
                <Feature
                  icon={<Icon as={FcDonate} w={10} h={10} />}
                  title={'CONTRIBUTING.md'}
                  text={
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                  }
                />
                <Feature
                  icon={<Icon as={FcInTransit} w={10} h={10} />}
                  title={'Code Of Conduct'}
                  text={
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                  }
                />
              </SimpleGrid>
            </Box>
          </Container>
        </Box>
      </Container>
    </ChakraProvider>
  );
}
