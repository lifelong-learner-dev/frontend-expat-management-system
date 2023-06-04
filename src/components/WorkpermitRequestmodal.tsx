import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import { FaLock, FaRegCalendarAlt, FaRegMap, FaUserAstronaut } from "react-icons/fa";

interface WorkpermitRequestModalProps {
    isOpen: boolean;
    onClose:() => void;
}
export default function WorkpermitRequestModal({onClose, isOpen}:WorkpermitRequestModalProps){
    return (
        <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>워크퍼밋 재발급 요청(분실, 도난)</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
                <VStack>
                    <InputGroup>
                    <InputLeftElement children={
                        <Box color="blue.400"> <FaRegMap/> </Box>} />
                        <Input variant={"filled"} placeholder="분실, 도난 위치 (영문 작성 필수)"/>
                    </InputGroup> 
                    <InputGroup>
                    <InputLeftElement children={
                        <Box color="blue.400"><FaRegCalendarAlt/></Box>} />
                        <Input variant={"filled"} placeholder="분실 날짜"/>
                    </InputGroup>
                </VStack>
                <Button mt={4} colorScheme={"blue"} w="100%"> 재발급 요청 </Button>
            </ModalBody>
        </ModalContent>
    </Modal>
    )
}