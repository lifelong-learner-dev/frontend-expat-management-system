import { AbsoluteCenter, Box, Button, Center, color, HStack, IconButton, Text, useColorMode, useColorModeValue, useDisclosure,} from "@chakra-ui/react";
import { FaRegGem, FaMoon, FaSun} from "react-icons/fa";
import LoginModal from "./Loginmodal";

export default function Header(){
    const{isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen} = useDisclosure();
    const{toggleColorMode} = useColorMode();
    const logoColor = useColorModeValue("yellow.700", "blue.200");
    const Icon = useColorModeValue(FaMoon, FaSun);
    return (
        <HStack justifyContent={"space-between"} py={5} px={30} borderBottomWidth={1}>
            <Box color='yellow.600'>
                <FaRegGem size={"48"}/>
            </Box>
            <Text fontSize={{ base: 'xm', md: 'xl', lg: '2xl' }} as='b'>Expat Management System</Text>
            <HStack spacing={2}>
                <IconButton onClick={toggleColorMode} 
                    variant={"ghost"} 
                    aria-label="Toggle dark mode" 
                    icon={<Icon/>}/>
                <Button onClick={onLoginOpen} colorScheme={"blue"}>Log in</Button>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
        </HStack>
    );
}