import { Box, Button, Flex, Grid, IconButton, Image, Text } from "@chakra-ui/react";
import { FaIdCard } from "react-icons/fa";
import Navigation from "../components/Navigation";
export default function Home(){
    return (
        <Flex>
            <Navigation/>
            <Grid w="70%" mt={10} ml={7} px={30} columnGap={10} rowGap={20} templateColumns={"repeat(3, 1fr)"}>
                <Box w="100%" aria-rowspan={2}>
                    <Flex direction="column" align="center">
                        <IconButton
                            bg="grey.100"
                            w="100%"
                            h="100%"
                            color="green.200"
                            icon={<FaIdCard size='50%'/>}
                            aria-label="Work permit"
                        />
                        <Text fontSize="md" as='b'>Work permit</Text>
                    </Flex>
                </Box>
                <Box w="100%" aria-rowspan={2}>
                    <Flex direction="column" align="center">
                        <IconButton
                            bg="grey.100"
                            w="100%"
                            h="100%"
                            color="green.200"
                            icon={<FaIdCard size='50%'/>}
                            aria-label="Work permit"
                        />
                        <Text fontSize="md" as='b'>Work permit</Text>
                    </Flex>
                </Box>
                <Box w="100%" aria-rowspan={2}>
                    <Flex direction="column" align="center">
                        <IconButton
                            bg="grey.100"
                            w="100%"
                            h="100%"
                            color="green.200"
                            icon={<FaIdCard size='50%'/>}
                            aria-label="Work permit"
                        />
                        <Text fontSize="md" as='b'>Work permit</Text>
                    </Flex>
                </Box>
                <Box w="100%" aria-rowspan={2}>
                    <Flex direction="column" align="center">
                        <IconButton
                            bg="grey.100"
                            w="100%"
                            h="100%"
                            color="green.00"
                            icon={<FaIdCard size='50%'/>}
                            aria-label="Work permit"
                        />
                        <Text fontSize="md" as='b'>Work permit</Text>
                    </Flex>
                </Box>
                <Box w="100%" aria-rowspan={2}>
                    <Flex direction="column" align="center">
                        <IconButton
                            bg="grey.100"
                            w="100%"
                            h="100%"
                            color="green.300"
                            icon={<FaIdCard size='50%'/>}
                            aria-label="Work permit"
                        />
                        <Text fontSize="md" as='b'>Work permit</Text>
                    </Flex>
                </Box>
                <Box w="100%" aria-rowspan={2}>
                    <Flex direction="column" align="center">
                        <IconButton
                            bg="grey.100"
                            w="100%"
                            h="100%"
                            color="green.300"
                            icon={<FaIdCard size='50%'/>}
                            aria-label="Work permit"
                        />
                        <Text fontSize="md" as='b'>Work permit</Text>
                    </Flex>
                </Box>
                <Box w="100%" aria-rowspan={2}>
                    <Flex direction="column" align="center">
                        <IconButton
                            bg="grey.100"
                            w="100%"
                            h="100%"
                            color="green.300"
                            icon={<FaIdCard size='50%'/>}
                            aria-label="Work permit"
                        />
                        <Text fontSize="md" as='b'>Work permit</Text>
                    </Flex>
                </Box>
                <Box w="100%" aria-rowspan={2}>
                    <Flex direction="column" align="center">
                        <IconButton
                            bg="grey.100"
                            w="100%"
                            h="100%"
                            color="green.300"
                            icon={<FaIdCard size='50%'/>}
                            aria-label="Work permit"
                        />
                        <Text fontSize="md" as='b'>Work permit</Text>
                    </Flex>
                </Box>
                <Box w="100%" aria-rowspan={2}>
                    <Flex direction="column" align="center">
                        <IconButton
                            bg="grey.100"
                            w="100%"
                            h="100%"
                            color="green.300"
                            icon={<FaIdCard size='50%'/>}
                            aria-label="Work permit"
                        />
                        <Text fontSize="md" as='b'>Work permit</Text>
                    </Flex>
                </Box>
            </Grid>
        </Flex>    
    );
}