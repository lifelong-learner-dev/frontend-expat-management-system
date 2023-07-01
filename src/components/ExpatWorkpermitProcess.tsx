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

interface IWorkpermitProcessProps {
    title: string;
    subtitle: string;
    contents: string;
    detailed_information: string;
    subtitle2: string;
    contents2: string;
    detailed_information2: string;
    subtitle3: string;
    contents3: string;
    detailed_information3: string;
    subtitle4: string;
    contents4: string;
    detailed_information4: string;
    subtitle5: string;
    contents5: string;
    detailed_information5: string;
    subtitle6: string;
    contents6: string;
    detailed_information6: string;
    subtitle7: string;
    contents7: string;
    detailed_information7: string;
    subtitle8: string;
    contents8: string;
    detailed_information8: string;
    subtitle9: string;
    contents9: string;
    detailed_information9: string;
    subtitle10: string;
    contents10: string;
    detailed_information10: string;
    responsible_person: string;
}

export default function ExpatWorkpermitProcess({
  title,
  subtitle,
  contents,
  detailed_information,
  subtitle2,
  contents2,
  detailed_information2,
  subtitle3,
  contents3,
  detailed_information3,
  subtitle4,
  contents4,
  detailed_information4,
  subtitle5,
  contents5,
  detailed_information5,
  subtitle6,
  contents6,
  detailed_information6,
  subtitle7,
  contents7,
  detailed_information7,
  subtitle8,
  contents8,
  detailed_information8,
  subtitle9,
  contents9,
  detailed_information9,
  subtitle10,
  contents10,
  detailed_information10,
  responsible_person,
}: IWorkpermitProcessProps) {
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