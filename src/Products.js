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
    Image
} from '@chakra-ui/react';
import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
} from 'react-icons/fc';
import { ReactElement } from 'react';
import { MdMicrowave, MdOutlineStickyNote2, MdRecycling } from "react-icons/md";
import { GiGreaseTrap, GiBrainFreeze } from "react-icons/gi"
import { BsMoisture } from "react-icons/bs"
import OrderModal from './OrderModal';

const Card = ({ heading, description, img, href }) => {
    return (
        <Box
            maxW={{ base: 'full', md: '275px' }}
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            p={5}
            _hover={{ cursor: 'pointer', transform: 'scale(1.1)' }}
        >
            <Stack align={'center'} spacing={2}>
                <Image
                    src={img}
                    alt={heading}
                    borderRadius='lg'
                />
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

export default function Products() {
    return (
        <Box p={4}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    Available as you want
                </Heading>
                <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                    Our food wrapping paper comes in a convenient packaging that makes it easy to use and store.
                </Text>
            </Stack>

            <Container maxW={'5xl'} mt={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                    <Card
                        heading={'21 Mtr Roll'}
                        img="/21mtr.jpeg"
                        description={
                            'The roll with cutter blade allows for quick and easy cutting of the paper to the desired length, without the need for scissors or other cutting tools.'
                        }

                    />
                    <Card
                        heading={"60 Sheets Pack"}
                        img="/60sheets.jpeg"
                        description={
                            '60 Sheets pack are designed for convenience, as they provide a pre-cut option for those who prefer not to use the roll with cutter blade.'
                        }

                    />
                    <Card
                        heading={"72 Sheets Pack"}
                        img="/60sheets.jpeg"
                        description={
                            '72 Sheets pack are designed for convenience, as they provide a pre-cut option for those who prefer not to use the roll with cutter blade.'
                        }

                    />
                    <Text fontSize={{ base: 'sm', sm: 'lg' }} bgGradient='linear(to-l, red.300, green.300)'
                        bgClip='text'
                        fontWeight='extrabold'>
                        Can be customized too.
                    </Text>
            <OrderModal/>
                </Flex>
            </Container>
        </Box>
    );
}