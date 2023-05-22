import { Box, Button, Flex, Grid, IconButton, Image, Text } from "@chakra-ui/react";
import { FaIdCard, FaUser } from "react-icons/fa";
export default function Home(){
    return (
            <Grid
                mt={2}
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
                                color="green.200"
                                icon={<FaUser size='50%'/>}
                                aria-label="User"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center">User</Text>
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
                                color="green.200"
                                icon={<FaUser size='50%'/>}
                                aria-label="User"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center">Work permit</Text>
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
                                color="green.200"
                                icon={<FaUser size='50%'/>}
                                aria-label="User"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center">Family residence permit</Text>
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
                                color="green.200"
                                icon={<FaUser size='50%'/>}
                                aria-label="User"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md'  }} textAlign="center">Company car</Text>
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
                                color="green.200"
                                icon={<FaUser size='50%'/>}
                                aria-label="User"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center">Driving license</Text>
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
                                color="green.200"
                                icon={<FaUser size='50%'/>}
                                aria-label="User"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center">Family residence permit</Text>
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
                                color="green.200"
                                icon={<FaUser size='50%'/>}
                                aria-label="User"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center">Family residence permit</Text>
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
                                color="green.200"
                                icon={<FaUser size='50%'/>}
                                aria-label="User"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center">Family residence permit</Text>
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
                                color="green.200"
                                icon={<FaUser size='50%'/>}
                                aria-label="User"/>
                            <Text fontSize={{ base: 'xs', md: 'xm', lg: 'md' }} textAlign="center">Family residence permit</Text>
                        </Box>
                    </Flex>
                </Box>
            </Grid>   
    );
}