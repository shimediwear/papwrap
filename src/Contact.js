import React, { useState } from 'react';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CircularProgress

} from '@chakra-ui/react';

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function Contact() {

  const [isSubmitted, setSubmitted] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  const handleSubmit = () => {
    setLoading(true);

    const access_key = "a3450945-970e-4a49-81d0-5f2872e4f917";
    const formData = { access_key, name, email, message };

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(async (response) => {
        let json = await response.json();
        if (!response.status == 200) {
          setError(true)
        }
      })
      .catch((error) => {
        console.log(error);
        setError(true)
      })
      .then(function () {
        setLoading(false);
        setSubmitted(true);
      });

  }

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <List spacing={3}>
                        <ListItem>
                          <ListIcon as={MdPhone} color='#1970F1' />
                          +91-9873635357
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdEmail} color='#1970F1' />
                          shimediwear123@gmail.com
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdLocationOn} color='#1970F1' />
                          93/13, Road No. 1A, Mundka Industrial Area, New Delhi - 110041.
                        </ListItem>

                      </List>

                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" name='name' onChange={e => setName(e.target.value)} />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="email" size="md" onChange={e => setEmail(e.target.value)} />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="message">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                          onChange={e => setMessage(e.target.value)}
                        />
                      </FormControl>
                      <FormControl id="submit" float="right">
                        <Button
                          variant="solid"
                          bg="red.500"
                          color="white"
                          _hover={{}}
                          onClick={handleSubmit}
                        >
                          Submit
                        </Button>
                      </FormControl>
                      {isLoading && <CircularProgress isIndeterminate color='red.500' />}
                      {
                        isSubmitted ? isError ? <Alert status='error'>
                          <AlertIcon />
                          There was an error processing your request
                        </Alert> : <Alert status='success'>
                          <AlertIcon />
                          Thanks for your message {name}
                        </Alert> : null
                      }

                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}