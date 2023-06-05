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

interface IRoomProps {
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
  pk: number;
  isOwner: boolean;
}

export default function ExpatWorkpermit({
  pk,
  imageUrl,
  name,
  rating,
  city,
  country,
  price,
  isOwner,
}: IRoomProps) {
  const boxColor = useColorModeValue("gray.100", "gray.700");
  const navigate = useNavigate();
  return (
    <Box minWidth={{base:'400px', md:'550px', lg:'650px'}}>
        <Accordion allowToggle mt={'3'} mr={'2'}>
                <AccordionItem>
                    <h2>
                    <AccordionButton _expanded={{ bg: 'cyan.100', color: 'black' }}>
                        <Box as="b" flex='1' textAlign='center' fontSize={{ base: 'sm', md: 'xm', lg: 'md' }}>
                        워크퍼밋, 여권 세부 정보
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel mt={'1'} textAlign={'left'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                        <TableContainer fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} maxWidth={{base:'400px', md:'550px', lg:'650px'}}>
                        <Table variant='simple' size={"xs"}>
                            <TableCaption mb={'5'} textAlign={'left'}>업데이트가 필요한 정보는 총무팀에 알려주세요.</TableCaption>
                            <Thead>
                            <Tr bg='cyan.100'>
                                <Th textColor='black'>Subjects</Th>
                                <Th textColor='black'>Contents</Th>
                                <Th textColor='black'>Details</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                            <Tr>
                                <Td bg={boxColor}>Turkish ID number</Td>
                                <Td>{user?.turkish_id}</Td>
                                <Td>Turkish ID number</Td>
                            </Tr>
                            <Tr>
                                <Td bg={boxColor}>Turkish ID Expiry date</Td>
                                <Td>{user?.tc_id_expiry_date}</Td>
                            </Tr>
                            <Tr>
                                <Td></Td>
                            </Tr>
                            <Tr bg={'cyan.100'}>
                                <Th textColor={'black'}>Passport</Th>
                                <Td></Td>
                            </Tr>
                            <Tr>
                                <Td bg={boxColor}>Passport number</Td>
                                <Td>{user?.passport_number}</Td>
                            </Tr>
                            <Tr>
                                <Td bg={boxColor}>Passport Expiry date</Td>
                                <Td textTransform='capitalize'>{user?.passport_expiry_date}</Td>
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