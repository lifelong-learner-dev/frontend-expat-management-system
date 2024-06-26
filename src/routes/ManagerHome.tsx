import { Box, Button, Flex, Grid, IconButton, Image, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FaCar, FaClipboardList, FaHouseUser, FaIdCard, FaLuggageCart, FaRoad, FaRoute, FaTruckMoving, FaUser, FaUserFriends, FaUsers } from "react-icons/fa";
import useManagerOnlyPage from "../components/ManagerOnlyPage";
import ProtectedPage from "../components/ProtectedPage";
export default function ManagerHome(){
    useManagerOnlyPage();
    return (
            <Grid
                mt={1}
                mb={10}
                px={{
                base: 10,
                lg: 40,
                }}
                columnGap={4}
                rowGap={8}
                templateColumns={{
                sm: "repeat(3, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(3, 1fr)",
                "2xl": "repeat(5, 1fr)",
                }}>
                <Box display="grid"
                    gridGap="var(--chakra-space-5)"
                    gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                    marginTop="var(--chakra-space-7)">
                    <Flex direction="column" align="center">
                        <Box width="50%" height="80%">
                            <IconButton
                                bg="grey.100"
                                w="100%"
                                h="100%"
                                color="yellow.600"
                                icon={<FaUser size='50%'/>}
                                aria-label="User"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center"> Personal information </Text>
                        </Box>
                    </Flex>
                </Box>
                <Box display="grid"
                    gridGap="var(--chakra-space-5)"
                    gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                    marginTop="var(--chakra-space-7)">
                    <Flex direction="column" align="center">
                        <Box width="50%" height="80%">
                            <IconButton
                                bg="grey.100"
                                w="100%"
                                h="100%"
                                color="yellow.600"
                                icon={<FaIdCard size='50%'/>}
                                aria-label="Work permit"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center"> Work permit(Expat)</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box display="grid"
                    gridGap="var(--chakra-space-5)"
                    gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                    marginTop="var(--chakra-space-7)">
                    <Flex direction="column" align="center">
                        <Box width="50%" height="80%">
                            <IconButton
                                bg="grey.100"
                                w="100%"
                                h="100%"
                                color="yellow.600"
                                icon={<FaUsers size='50%'/>}
                                aria-label="Family residence permit"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center"> Family residence permit </Text>
                        </Box>
                    </Flex>
                </Box>
                <Box display="grid"
                    gridGap="var(--chakra-space-5)"
                    gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                    marginTop="var(--chakra-space-7)">
                    <Flex direction="column" align="center">
                        <Box width="50%" height="80%">
                            <IconButton
                                bg="grey.100"
                                w="100%"
                                h="100%"
                                color="yellow.600"
                                icon={<FaCar size='50%'/>}
                                aria-label="Company car"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md'  }} textAlign="center"> Company car </Text>
                        </Box>
                    </Flex>
                </Box>
                <Box display="grid"
                    gridGap="var(--chakra-space-5)"
                    gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                    marginTop="var(--chakra-space-7)">
                    <Flex direction="column" align="center">
                        <Box width="50%" height="80%">
                            <IconButton
                                bg="grey.100"
                                w="100%"
                                h="100%"
                                color="yellow.600"
                                icon={<FaRoad size='50%'/>}
                                aria-label="User"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center"> Driving license </Text>
                        </Box>
                    </Flex>
                </Box>
                <Box display="grid"
                    gridGap="var(--chakra-space-5)"
                    gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                    marginTop="var(--chakra-space-7)">
                    <Flex direction="column" align="center">
                        <Box width="50%" height="80%">
                            <IconButton
                                bg="grey.100"
                                w="100%"
                                h="100%"
                                color="yellow.600"
                                icon={<FaHouseUser size='50%'/>}
                                aria-label="House"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center"> House </Text>
                        </Box>
                    </Flex>
                </Box>
                <Box display="grid"
                    gridGap="var(--chakra-space-5)"
                    gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                    marginTop="var(--chakra-space-7)">
                    <Flex direction="column" align="center">
                        <Box width="50%" height="80%">
                            <IconButton
                                bg="grey.100"
                                w="100%"
                                h="100%"
                                color="yellow.600"
                                icon={<FaTruckMoving size='50%'/>}
                                aria-label="Moving"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center"> Moving(Overseas/Domestic) </Text>
                        </Box>
                    </Flex>
                </Box>
                <Box display="grid"
                    gridGap="var(--chakra-space-5)"
                    gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                    marginTop="var(--chakra-space-7)">
                    <Flex direction="column" align="center">
                        <Box width="50%" height="80%">
                            <IconButton
                                bg="grey.100"
                                w="100%"
                                h="100%"
                                color="yellow.600"
                                icon={<FaRoute size='50%'/>}
                                aria-label="Green card"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center"> Green card </Text>
                        </Box>
                    </Flex>
                </Box>
                <Box display="grid"
                    gridGap="var(--chakra-space-5)"
                    gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                    marginTop="var(--chakra-space-7)">
                    <Flex direction="column" align="center">
                        <Box width="50%" height="80%">
                            <IconButton
                                bg="grey.100"
                                w="100%"
                                h="100%"
                                color="yellow.600"
                                icon={<FaLuggageCart size='50%'/>}
                                aria-label="Pick up"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center"> Pick up request (First arrival, Last departure) </Text>
                        </Box>
                    </Flex>
                </Box>
                <Box display="grid"
                    gridGap="var(--chakra-space-5)"
                    gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                    marginTop="var(--chakra-space-7)">
                    <Flex direction="column" align="center">
                        <Box width="50%" height="80%">
                            <IconButton
                                bg="grey.100"
                                w="100%"
                                h="100%"
                                color="yellow.600"
                                icon={<FaClipboardList size='50%'/>}
                                aria-label="Pick ups"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center"> Additional information </Text>
                        </Box>
                    </Flex>
                </Box>
            </Grid>   
    );
}