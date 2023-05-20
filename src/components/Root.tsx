import { Box, Button, HStack, IconButton, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FaRegGem, FaMoon, FaUserAstronaut, FaLock } from "react-icons/fa";

export default function Root(){
    const{isOpen, onClose, onOpen} = useDisclosure();
    return (
        <Box>
            <HStack justifyContent={"space-between"} py={5} px={10} borderBottomWidth={1}>
                <Box color="blue.800">
                    <FaRegGem size={"48"}/>
                </Box>
                <HStack spacing={2}>
                    <IconButton variant={"ghost"} aria-label="Toggle dark mode" icon={<FaMoon/>} />
                    <Button onClick={onOpen}>Log in</Button>
                    <Button colorScheme={"blue"}>Sign up</Button>
                </HStack>
                <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>Log in</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <VStack>
                                <InputGroup>
                                <InputLeftElement children={
                                    <Box color="blue.800"> <FaUserAstronaut/> </Box>} />
                                    <Input variant={"filled"} placeholder="Username"/>
                                </InputGroup> 
                                <InputGroup>
                                <InputLeftElement children={
                                    <Box color="blue.800"><FaLock/></Box>} />
                                    <Input variant={"filled"} placeholder="Password"/>
                                </InputGroup>
                            </VStack>
                            <Button mt={4} colorScheme={"blue"} w="100%">Log in</Button>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </HStack>
            <Outlet />
        </Box>
    );
}