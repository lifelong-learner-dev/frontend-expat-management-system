import { AbsoluteCenter, Avatar, Box, Button, Center, color, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, ToastId, useColorMode, useColorModeValue, useDisclosure, useToast,} from "@chakra-ui/react";
import { FaRegGem, FaMoon, FaSun} from "react-icons/fa";
import useUser from "../lib/useUser";
import LoginModal from "./Loginmodal";
import { logOut } from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";

export default function Header(){
    const {userLoading, isLoggedIn, user} = useUser();
    const{isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen} = useDisclosure();
    const{toggleColorMode} = useColorMode();
    const logoColor = useColorModeValue("yellow.700", "blue.200");
    const Icon = useColorModeValue(FaMoon, FaSun);
    const toast = useToast();
    const queryClient = useQueryClient();
    const toastId = useRef<ToastId>();
    const mutation = useMutation(logOut, {
        onMutate: () => {
          toastId.current = toast({
            title: "Login out...",
            description: "Sad to see you go...",
            status: "loading",
            duration: 10000,
            position: "bottom-right",
          });
        },
        onSuccess: () => {
          if (toastId.current) {
            queryClient.refetchQueries(["me"]);
            toast.update(toastId.current, {
              status: "success",
              title: "Done!",
              description: "See you later!",
            });
          }
        },
      });
      const onLogOut = async () => {
        mutation.mutate();
      };
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
                {!userLoading ? (
          !isLoggedIn ? (
            <>
              <Button colorScheme={"blue"} onClick={onLoginOpen}>Log in</Button>
            </>
          ) : (
            <Menu>
              <MenuButton>
                <Avatar name={user?.username} size={"md"} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onLogOut}>Log out</MenuItem>
              </MenuList>
            </Menu>
          )
        ) : null}
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
        </HStack>
    );
}