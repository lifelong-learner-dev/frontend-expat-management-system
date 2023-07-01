import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Divider, HStack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useColorModeValue, VStack } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import useExpatOnlyPage from "../components/ExpatOnlyPage";
import useUser from "../lib/useUser";

export default function ExpatUser() {
  useExpatOnlyPage();
  const { user, userLoading } = useUser();
  const navigate = useNavigate();
  const boxColor = useColorModeValue("gray.100", "gray.700");
  return (
        <HStack justifyContent="space-around" alignItems={'top'} ml={{base:'5', md:'7', lg:'3'}} mr={{base:'5', md:'7', lg:'3'}}>
            <VStack ml={{base:'2', md:'4', lg:'7'}} mt={'10'}>    
                <Box minWidth={{base:'95px', md:'150px', lg:'200px'}}>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: 'cyan.100', color: 'black' }}>
                                <Box as="b" flex='1' textAlign='center' fontSize={{ base: 'sm', md: 'xm', lg: 'md' }}>
                                메뉴
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel ml={{base:'0', md:'5', lg:'7'}} mt={'1.5'} textAlign={'left'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                             <Link to={'/expathome'}> 메인 페이지 </Link>
                            </AccordionPanel>
                            <AccordionPanel ml={{base:'0', md:'5', lg:'7'}} mt={'1.5'} textAlign={'left'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                             <Link to={'/expathome'}> 개인 정보 </Link>
                            </AccordionPanel>
                            <AccordionPanel ml={{base:'0', md:'5', lg:'7'}} mt={'1.5'} textAlign={'left'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                             <Link to={'/expathome'}> 가족 이카멧 </Link>
                            </AccordionPanel>
                            <AccordionPanel ml={{base:'0', md:'5', lg:'7'}} mt={'1.5'} textAlign={'left'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                             <Link to={'/expathome'}> 회사 차량 </Link>
                            </AccordionPanel>
                            <AccordionPanel ml={{base:'0', md:'5', lg:'7'}} mt={'1.5'} textAlign={'left'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                             <Link to={'/expathome'}> 운전면허증 </Link>
                            </AccordionPanel>
                            <AccordionPanel ml={{base:'0', md:'5', lg:'7'}} mt={'1.5'} textAlign={'left'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                             <Link to={'/expathome'}> 거주지 정보 </Link>
                            </AccordionPanel>
                            <AccordionPanel ml={{base:'0', md:'5', lg:'7'}} mt={'1.5'} textAlign={'left'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                             <Link to={'/expathome'}> 이사 </Link>
                            </AccordionPanel>
                            <AccordionPanel ml={{base:'0', md:'5', lg:'7'}} mt={'1.5'} textAlign={'left'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                             <Link to={'/expathome'}> 그린 카드 </Link>
                            </AccordionPanel>
                            <AccordionPanel ml={{base:'0', md:'5', lg:'7'}} mt={'1.5'} textAlign={'left'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                             <Link to={'/expathome'}> 픽업 요청 </Link>
                            </AccordionPanel>
                            <AccordionPanel ml={{base:'0', md:'5', lg:'7'}} mt={'1.5'} textAlign={'left'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                             <Link to={'/expathome'}> 추가 정보 </Link>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </VStack>
            <Center height='950px'>
                <Divider mt={'7'} orientation='vertical' />
            </Center>
            <Box minWidth={{base:'400px', md:'550px', lg:'650px'}}>
                <TableContainer mt={"10"} mr={"10"} mb={'10'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} >
                <Table variant='simple'>
                    <TableCaption mb={'5'} textAlign={'left'}>업데이트가 필요한 정보는 총무팀에 알려주세요.</TableCaption>
                    <Thead>
                    <Tr bg='cyan.100'>
                        <Th textColor='black'>Subjects</Th>
                        <Th textColor='black'>Contents</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td bg={boxColor}> First name </Td>
                        <Td textTransform='capitalize'>{user?.first_name}</Td>
                    </Tr>
                    <Tr>
                        <Td bg={boxColor}>Last name</Td>
                        <Td textTransform='capitalize'>{user?.last_name}</Td>
                    </Tr>
                    <Tr>
                        <Td bg={boxColor}>Cellphone number</Td>
                        <Td>{user?.cellphone_number}</Td>
                    </Tr>
                    <Tr>
                        <Td bg={boxColor}>E-mail address</Td>
                        <Td>{user?.email}</Td>
                    </Tr>
                    <Tr>
                        <Td bg={boxColor}>House address</Td>
                        <Td textTransform='capitalize'>{user?.house_address}</Td>
                    </Tr>
                    <Tr>
                        <Td bg={boxColor}>Gender</Td>
                        <Td textTransform='capitalize'>{user?.gender}</Td>
                    </Tr>
                    <Tr>
                        <Td bg={boxColor}>Department</Td>
                        <Td textTransform='uppercase'>{user?.department}</Td>
                    </Tr>
                    <Tr>
                        <Td bg={boxColor}>Division</Td>
                        <Td textTransform='uppercase'>{user?.division}</Td>
                    </Tr>
                    <Tr>
                        <Td></Td>
                    </Tr>
                    <Tr bg={'cyan.100'}>
                        <Th textColor={'black'}>Turkish ID</Th>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td bg={boxColor}>Turkish ID number</Td>
                        <Td>{user?.turkish_id}</Td>
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
            </Box>
        </HStack>
    );
  }