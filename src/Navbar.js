import React from "react";
import Image from "next/image";
import {
    Button,
    Flex,
    Stack,
    Text,
    Heading
} from '@chakra-ui/react';
import OrderModal from "./OrderModal";
const Navbar = () => {
    return (
        <>
            <Flex px={2} flex={1} align={'center'} justify={'space-between'}>

                <Image
                    src="/logo.png"
                    width={60}
                    height={60}
                    alt="Pap Wrap logo"
                />
                {/* <Heading color={'green.500'}>
                    Pap Wrap
                </Heading> */}
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <OrderModal/>
                </Stack>
            </Flex>
            <hr/>

        </>
    )
}

export default Navbar;