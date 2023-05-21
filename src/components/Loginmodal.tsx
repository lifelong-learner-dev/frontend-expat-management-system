import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import { FaLock, FaUserAstronaut } from "react-icons/fa";

interface LoginModalProps {
    isOpen: boolean;
    onClose:() => void;
}
export default function LoginModal({onClose, isOpen}:LoginModalProps){
    return (
        <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Log in</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
                <VStack>
                    <InputGroup>
                    <InputLeftElement children={
                        <Box color="blue.400"> <FaUserAstronaut/> </Box>} />
                        <Input variant={"filled"} placeholder="Username"/>
                    </InputGroup> 
                    <InputGroup>
                    <InputLeftElement children={
                        <Box color="blue.400"><FaLock/></Box>} />
                        <Input variant={"filled"} placeholder="Password"/>
                    </InputGroup>
                </VStack>
                <Button mt={4} colorScheme={"blue"} w="100%">Log in</Button>
            </ModalBody>
        </ModalContent>
    </Modal>
    )
}