import React from 'react'
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import OrderModal from './OrderModal';

function Hero() {
  return (
    <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading as='h1' fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              color={'green.500'}
              position={'relative'}
           >
              Pap Wrap
            </Text>
            <br />{' '}
            <Text color={'red.500'} as={'span'}>
              Food Wrapping Paper
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            US FDA Approved Food Wrapping paper to keep your food healthy for a longer period of time.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <OrderModal/>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Pap Wrap'}
          objectFit={'cover'}
          src={
            '/papwrap2.jpeg'
          }
        />
      </Flex>
    </Stack>
  )
}

export default Hero
