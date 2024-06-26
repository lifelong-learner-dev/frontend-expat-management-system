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

interface IWorkpermitProps {
    pk:number;
    name: string;
    expat: string;
    krstatus: string;
    krstatus_display: string;
}

export default function ExpatWorkpermit({
  name,
  expat,
  krstatus,
  krstatus_display,
}: IWorkpermitProps) {
  const boxColor = useColorModeValue("gray.100", "gray.700");
  const navigate = useNavigate();
  return (
    <Box minWidth={{base:'400px', md:'550px', lg:'650px'}}>
        <Accordion allowToggle mt={'3'} mr={'2'}>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ bg: 'cyan.100', color: 'black' }}>
                        <Box as="b" flex='1' textAlign='center' fontSize={{ base: 'sm', md: 'xm', lg: 'md' }}>
                        워크퍼밋 신청 및 연장 정보
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel mt={'1'} textAlign={'left'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                        <TableContainer fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} maxWidth={{base:'400px', md:'550px', lg:'650px'}}>
                        <Table variant='simple' size={"xs"}>
                            <Thead>
                            <Tr bg='cyan.100'>
                                <Th textColor='black' textAlign={'center'}>신청 현황</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                            <Tr>
                                <Td textAlign={'center'}>{krstatus_display}</Td>
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