import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, VStack } from "@chakra-ui/react";
import { FaLock, FaRegCalendarAlt, FaRegMap, FaUserAstronaut } from "react-icons/fa";
import { useState } from 'react';
import Calendar from 'react-calendar';
import CalendarPopUpModal from "../components/CalendarPopUpModal";

interface WorkpermitRequestModalProps {
    isOpen: boolean;
    onClose:() => void;
}

export default function WorkpermitRequestModal({onClose, isOpen}:WorkpermitRequestModalProps){
    const{isOpen:isRequestOpen, onClose:onRequestClose, onOpen:onRequestOpen} = useDisclosure();

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
                        <Button color="blue.400" onClick={onRequestOpen} size={'md'}><FaRegCalendarAlt/></Button>} />
                             <CalendarPopUpModal isOpen={isRequestOpen} onClose={onRequestClose} />
                        <Input variant={"filled"} placeholder="분실 날짜"/>
                    </InputGroup>
                </VStack>
                <Button mt={4} colorScheme={"blue"} w="100%"> 재발급 요청 </Button>
            </ModalBody>
        </ModalContent>
    </Modal>
    )
}