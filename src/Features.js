import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc';
import { ReactElement } from 'react';
import { MdMicrowave, MdOutlineStickyNote2, MdRecycling} from "react-icons/md";
import {GiGreaseTrap, GiBrainFreeze} from "react-icons/gi"
import {BsMoisture} from "react-icons/bs"

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      p={5}
      _hover={{ bg: 'red.500', color: "white", cursor: 'pointer', transform: 'scale(1.1)' }}
      >
      <Stack align={'center'} spacing={2}>
        <Flex
          w={20}
          h={20}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Center>
          <Heading size="md">{heading}</Heading>
          </Center>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Features() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Why Pap Wrap?
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        Food Wrapping Paper is a Multi-purpose food grade paper ideal For Wrapping Daily Foods including breads, chapati's, parathas, bakery items, sandwiches, burgers, pizza and many more. Made specifically for home use for packing tiffin/lunch boxes.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Grease Resistant'}
            icon={<Icon as={GiGreaseTrap} w={10} h={10} color="red.500"/>}
            description={
              'It does not let the grease pass through, neither does it absorb the grease from the food, which keeps the taste of food intact and surroundings tidy. Eliminates weird aftertaste and foul smell completely as well.'
            }
       
          />
          <Card
            heading={'Microwave & Oven Safe'}
            icon={<Icon as={MdMicrowave} w={20} h={10} color="red.500"/>}
            description={
              'Food wrapped in this specialized paper can be used in microwave and ovens for reheating and cooking even up to the temperature of 220 degree Celsius.'
            }
         
          />
          <Card
            heading={'Reusable & Recyclable'}
            icon={<Icon as={MdRecycling} w={10} h={10} color="red.500"/>}
            description={
              'This paper can be reused for wrapping food items basing upon its hygienic standard after using. Naturally, it can be reused, recycled and reduced for preservation.'
            }
           
          />
          <Card
            heading={'Non-Sticky'}
            icon={<Icon as={MdOutlineStickyNote2} w={10} h={10} color="red.500"/>}
            description={
              'While the food is wrapped in this paper, it does not let the food stick to it, neither does the parts of paper stick to the food. It also allows the food to flip easily out of the packing, without clinging or sticking.'
            }
           
          />
          <Card
            heading={'Withstand in Freezer'}
            icon={<Icon as={GiBrainFreeze} w={10} h={10} color="red.500"/>}
            description={
              'It is perfect for food to be wrapped and stored appropriately for refrigeration or even deep freezing. This specialized paper can withstand both cooking hot & freezing cold.'
            }
          
          />
           <Card
            heading={'Moisture Balancing'}
            icon={<Icon as={BsMoisture} w={10} h={10} color="red.500"/>}
            description={
              'It does not trap the moisture from steamy hot wrapped food, instead it balances the moisture required by food to stay fresh and not soggy. The excess moisture evaporates to the surroundings without affecting the food.'
            }
          />
        </Flex>
      </Container>
    </Box>
  );
}