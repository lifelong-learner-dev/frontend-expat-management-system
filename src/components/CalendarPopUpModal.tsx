import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, VStack } from "@chakra-ui/react";
import { FaLock, FaRegCalendarAlt, FaRegMap, FaUserAstronaut } from "react-icons/fa";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import {OnChangeDateCallback} from '../types.d';

interface CalendarPopUpModalProps {
    isOpen: boolean;
    onClose:() => void;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarPopUpModal({onClose, isOpen}:CalendarPopUpModalProps){
    const [value, onChange] = useState<Value>(new Date());
    const{isOpen:isRequestOpen, onClose:onRequestClose, onOpen:onRequestOpen} = useDisclosure();
    const handleDateChange: OnChangeDateCallback<Value> = (date: Value | ValuePiece[]) => {
        if (date && !(date instanceof Array)) {
          onChange(date);
        }
      };
    
      const handleApplyDate = () => {
        onClose(); // Close the modal
        // Perform any other logic you need with the selected date, e.g., update the input field value
        // In this example, I'm just logging the selected date to the console.
        console.log('Selected Date:', value);
      };
    return (
        <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay/>
        <ModalContent>
        <ModalHeader>워크퍼밋을 분실하신 날짜를 선택해주세요</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <Calendar onChange={handleDateChange} value={value} />
            {value instanceof Date && (
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<Box color="blue.400"><FaRegCalendarAlt /></Box>} />
                <Input value={value.toLocaleDateString()} readOnly />
              </InputGroup>
            )}
            <Button onClick={handleApplyDate} colorScheme="blue">
              Apply Date
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
    )
}
