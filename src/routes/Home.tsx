import { Box, Button, Flex, Grid, IconButton, Image, Text } from "@chakra-ui/react";
import { FaCar, FaClipboardList, FaHouseUser, FaIdCard, FaLuggageCart, FaRoad, FaRoute, FaTruckMoving, FaUser, FaUserFriends, FaUsers } from "react-icons/fa";
export default function Home(){
    return (
        <Box alignItems="center" mt={200}>
            <Text fontSize={{ base: 'xm', md: 'xm', lg: '3xl' }} bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text' fontWeight='extrabold' textAlign="center">Welcome to Expat Manager System</Text>
            < Text fontSize={{ base: 'xm', md: 'xm', lg: '3xl' }} bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text' fontWeight='extrabold' textAlign="center" mt={30}> Please log in </Text>
        </Box>
    );
}