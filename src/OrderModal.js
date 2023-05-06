import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Link,
    TableContainer,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

function OrderModal() {
    const [isOpen, setOpen] = useState(false)
    const onOpen = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Button
                onClick={onOpen}
                rounded={'full'}
                bg={'red.400'}
                color={'white'}
                _hover={{
                    bg: 'red.500',
                }}>
                Order Now
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Order Pap Wrap</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>

                                        <Th>21 Mtrs Roll</Th>
                                        <Th>60 Sheets Pack</Th>
                                        <Th>72 Sheets Pack</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td><Link href='https://amzn.eu/d/3Y7Wrwf' isExternal>
                                            Amazon <ExternalLinkIcon mx='2px' />
                                        </Link>
                                        </Td>
                                        <Td><Link href='https://amzn.eu/d/64Qd8rr' isExternal>
                                            Amazon <ExternalLinkIcon mx='2px' />
                                        </Link>
                                        </Td>
                                        <Td><Link href='https://amzn.eu/d/h2JLZIo' isExternal>
                                            Amazon <ExternalLinkIcon mx='2px' />
                                        </Link>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td><Link href='https://www.flipkart.com/shi-pap-wrap-food-wrapping-paper-pack-1-shrinkwrap/p/itm4b33f6388f17f' isExternal>
                                            Flipkart <ExternalLinkIcon mx='2px' />
                                        </Link>
                                        </Td>
                                        <Td><Link href='https://www.flipkart.com/pap-wrap-always-fresh-food-wrapping-paper-60-sheets-foil/p/itm672c6929a5311' isExternal>
                                            Flipkart <ExternalLinkIcon mx='2px' />
                                        </Link>
                                        </Td>
                                        <Td><Link href='https://www.flipkart.com/shi-pap-wrap-food-wrapping-paper-72-sheets-parchment/p/itme391f23f0b179' isExternal>
                                            Flipkart <ExternalLinkIcon mx='2px' />
                                        </Link>
                                        </Td>                                    </Tr>

                                </Tbody>
                            </Table>
                        </TableContainer>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default OrderModal