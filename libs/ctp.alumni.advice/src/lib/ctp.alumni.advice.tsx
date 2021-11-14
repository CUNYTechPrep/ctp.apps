import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './color-mode-switcher/color-mode-switcher';
import GridBlur from './testimonials/testimonials';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack>
            <GridBlur />
            <Link
              color="teal.500"
              href="https://cunytechprep.nyc/"
              fontSize={'2l'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn About CTP
            </Link>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize={12}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
