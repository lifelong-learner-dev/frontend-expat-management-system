import { FaCamera, FaRegHeart, FaStar } from "react-icons/fa";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

interface IWorkpermitRequestProps {
    pk:number;
    name: string;
    expat: string;
    location: string;
    date: Date;
    krstatus: string;
    krstatus_display: string;
    created_at: Date;
    updated_at: Date;
}

export default function ExpatWorkpermitRequest({
  name,
  expat,
  location,
  date,
  krstatus,
  krstatus_display,
  created_at,
  updated_at,
}: IWorkpermitRequestProps) {
  const boxColor = useColorModeValue("gray.100", "gray.700");
  const navigate = useNavigate();
  return (
    <Box minWidth={{base:'400px', md:'550px', lg:'650px'}}>
        <Accordion allowToggle mt={'3'} mr={'2'}>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ bg: 'cyan.100', color: 'black' }}>
                        <Box as="b" flex='1' textAlign='center' fontSize={{ base: 'sm', md: 'xm', lg: 'md' }}>
                        워크퍼밋 재신청 요청 (분실, 도난)
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel mt={'1'} textAlign={'left'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                        <TableContainer fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} maxWidth={{base:'400px', md:'550px', lg:'650px'}}>
                        <Table variant='simple' size={"xs"}>
                            <Tbody>
                            <Tr>
                                <Th  bg='cyan.100' textColor='black' textAlign={'center'}>분실 위치</Th>
                                <Td textAlign={'left'}>{location}</Td>
                            </Tr>
                            <Tr>
                                <Th bg='cyan.100' textColor='black' textAlign={'center'}>분실 일자</Th>
                                <Td textAlign={'left'}>Date:{date.toString()}</Td>
                            </Tr>
                            <Tr>
                                <Th bg='cyan.100' textColor='black' textAlign={'center'}>재신청 현황</Th>
                                <Td textAlign={'left'}>{krstatus_display}</Td>
                            </Tr>
                            <Tr>
                                <Th bg='cyan.100' textColor='black' textAlign={'center'}>신청 일자</Th>
                                <Td textAlign={'left'}>Date:{created_at.toString()}</Td>
                            </Tr>
                            <Tr>
                                <Th bg='cyan.100' textColor='black' textAlign={'center'}>업데이트 일자</Th>
                                <Td textAlign={'left'}>Date:{updated_at.toString()}</Td>
                            </Tr>
                            </Tbody>
                        </Table>
                        </TableContainer>
                    </AccordionPanel>
                </AccordionItem>
        </Accordion>
    </Box>
);
}