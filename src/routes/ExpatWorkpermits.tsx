import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Divider, HStack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useColorModeValue, useDisclosure, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getWorkpermits, getWorkpermitsProcesses } from "../api";
import ExpatWorkpermit from "../components/ExpatWorkpermit";
import useExpatOnlyPage from "../components/ExpatOnlyPage";
import useSupporterOnlyPage from "../components/SupporterOnlyPage";
import WorkpermitRequestModal from "../components/WorkpermitRequestmodal";
import useUser from "../lib/useUser";
import { IWorkpermitList, IWorkpermitProcessList } from "../types";
import ExpatWorkpermitProcess from "../components/ExpatWorkpermitProcess";

export default function ExpatWorkpermits() {
  useExpatOnlyPage();
  const { user, userLoading } = useUser();
  const navigate = useNavigate();
  const boxColor = useColorModeValue("gray.100", "gray.700");
  const{isOpen:isRequestOpen, onClose:onRequestClose, onOpen:onRequestOpen} = useDisclosure();
  const { isLoading, data } = useQuery<IWorkpermitList[]>(["workpermits"], getWorkpermits);
  const {isLoading: isLoadingProcesses, data: processesData} = useQuery<IWorkpermitProcessList[]>(["workpermitsprocesses"], getWorkpermitsProcesses);
  return (
        <HStack justifyContent="space-around" alignItems={'top'} ml={{base:'5', md:'7', lg:'3'}} mr={{base:'5', md:'7', lg:'3'}}>
            <VStack ml={{base:'2', md:'4', lg:'7'}} mt={'10'}>    
                <Box minWidth={{base:'95px', md:'150px', lg:'200px'}}>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: 'cyan.100', color: 'black' }}>
                                <Box as="b" textAlign='center' fontSize={{ base: 'sm', md: 'xm', lg: 'md' }}>
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
                <Box>
                <Button minWidth={{base:'95px', md:'150px', lg:'200px'}} mt={'3'} fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} px={'1'} py={'1'} colorScheme={"yellow"} onClick={onRequestOpen}> 워크퍼밋 재발급 <br/> (분실, 도난) </Button>
                    <WorkpermitRequestModal isOpen={isRequestOpen} onClose={onRequestClose} />
                </Box>
            </VStack>
            <Center height='950px'>
                <Divider mt={'7'} orientation='vertical' />
            </Center>
            <VStack>
                <Box minWidth={{base:'400px', md:'550px', lg:'650px'}}>
                    <Accordion allowToggle mt={'10'} mr={'2'}>
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
                                        <TableContainer fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} >
                                        <Table variant='simple' size={"xs"}>
                                            <TableCaption mb={'5'} textAlign={'left'}>업데이트가 필요한 정보는 총무팀에 알려주세요.</TableCaption>
                                            <Thead>
                                            <Tr bg='cyan.100'>
                                                <Th textColor='black'>Subjects</Th>
                                                <Th textColor='black'>Contents</Th>
                                            </Tr>
                                            </Thead>
                                            <Tbody>
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
                                    </AccordionPanel>
                                </AccordionItem>
                    </Accordion>
                </Box>
                {data?.map((workpermit) => (
                    <ExpatWorkpermit
                    pk={workpermit.pk}
                    expat={workpermit.expat.username}
                    name={workpermit.name}
                    krstatus={workpermit.krstatus}
                    krstatus_display={workpermit.krstatus_display}
                  />              
                ))}

                {processesData?.map((workpermitprocess) => (
                    <ExpatWorkpermitProcess
                    title={workpermitprocess.title}
                    subtitle={workpermitprocess.subtitle}
                    contents={workpermitprocess.contents}
                    detailed_information={workpermitprocess.detailed_information}
                    subtitle2={workpermitprocess.subtitle2}
                    contents2={workpermitprocess.contents2}
                    detailed_information2={workpermitprocess.detailed_information2}
                    subtitle3={workpermitprocess.subtitle3}
                    contents3={workpermitprocess.contents3}
                    detailed_information3={workpermitprocess.detailed_information3}
                    subtitle4={workpermitprocess.subtitle4}
                    contents4={workpermitprocess.contents4}
                    detailed_information4={workpermitprocess.detailed_information4}
                    subtitle5={workpermitprocess.subtitle5}
                    contents5={workpermitprocess.contents5}
                    detailed_information5={workpermitprocess.detailed_information5}
                    subtitle6={workpermitprocess.subtitle6}
                    contents6={workpermitprocess.contents6}
                    detailed_information6={workpermitprocess.detailed_information6}
                    subtitle7={workpermitprocess.subtitle7}
                    contents7={workpermitprocess.contents7}
                    detailed_information7={workpermitprocess.detailed_information7}
                    subtitle8={workpermitprocess.subtitle8}
                    contents8={workpermitprocess.contents8}
                    detailed_information8={workpermitprocess.detailed_information8}
                    subtitle9={workpermitprocess.subtitle9}
                    contents9={workpermitprocess.contents9}
                    detailed_information9={workpermitprocess.detailed_information9}
                    subtitle10={workpermitprocess.subtitle10}
                    contents10={workpermitprocess.contents10}
                    detailed_information10={workpermitprocess.detailed_information10}
                    responsible_person={workpermitprocess.responsible_person.username}
                  />              
                ))}
            </VStack>
        </HStack>
    );
  }