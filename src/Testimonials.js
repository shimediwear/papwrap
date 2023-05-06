import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>What Our Customers Say</Heading>
          <Text></Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>High Quality Paper</TestimonialHeading>
              <TestimonialText>
                I was looking for a reliable and eco-friendly food wrapping paper for my small café, and I'm so glad I found Pap Wrap. Their paper is high-quality, easy to use, and environmentally conscious. Plus, the packaging options make it so convenient for me to order exactly what I need.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '/user.png'
              }
              name={'Bhasin Bakery'}
              title={'Bakery Owner'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Grease & Moisture Resistance</TestimonialHeading>
              <TestimonialText>
                I was skeptical at first, but Pap Wrap's food wrapping paper really lives up to its claims. The grease and moisture resistance are amazing, and the durability and tear-resistance make it a great value for the price. I also love that it's recyclable and eco-friendly, so I can feel good about using it in my business.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '/user.png'
              }
              name={'Dayal'}
              title={'United Store'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Perfect Packaging</TestimonialHeading>
              <TestimonialText>
                I've been using Pap Wrap's food wrapping paper for my meal prep business for several months now, and I couldn't be happier. The packaging options are perfect for my needs, and the paper itself is of the highest quality. My customers have even commented on how fresh and appealing their meals look thanks to the paper's moisture resistance.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '/user.png'
              }
              name={'Apna Bazaar'}
              title={'CEO'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}