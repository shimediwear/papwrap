import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  import {FaAirFreshener, FaBan} from "react-icons/fa"
  import {MdMicrowave} from "react-icons/md"
  import {FcBiohazard} from "react-icons/fc"
  

  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Faetures2() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Use Case
            </Text>
            <Heading>Great substitute to Aluminum Foils</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            It helps to preserve the food nutrients while packing under it for a longer time. Made from 100% Organic Cellulose these food wrapping paper sheets are healthier than silver foil paper sheets.
            </Text>
            <Stack
              spacing={2}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={FaAirFreshener} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Breathable & Keep Food Alive'}
              />
              <Feature
                icon={<Icon as={MdMicrowave} color={'blue.500'} w={5} h={5} />}
                iconBg={useColorModeValue('blue.100', 'blue.900')}
                text={'Microwave & Oven Safe'}
              />
              <Feature
                icon={
                  <Icon as={FaBan} color={'red.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('red.100', 'red.900')}
                text={'No Aluminum Foil'}
              />
               <Feature
                icon={
                  <Icon as={FcBiohazard} color={'green.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Bio Degradable'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                '/papwrap1.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }