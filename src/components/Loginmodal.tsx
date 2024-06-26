import { useForm } from "react-hook-form";
import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useToast, VStack } from "@chakra-ui/react";
import { FaLock, FaUserAstronaut } from "react-icons/fa";
import React, {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {
    IUsernameLoginError,
    IUsernameLoginSuccess,
    IUsernameLoginVariables,
    usernameLogIn,
} from "../api";

interface LoginModalProps {
    isOpen: boolean;
    onClose:() => void;
}

interface IForm {
    username: string;
    password: string;
}

export default function LoginModal({isOpen, onClose}:LoginModalProps){
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<IForm>();
    const toast = useToast();
    const queryClient = useQueryClient();
    const mutation = useMutation(usernameLogIn, {
        onSuccess: () => {
            toast({
                title: "welcome !",
                status: "success",
            });
            onClose();
            queryClient.refetchQueries(["me"]);
            reset();
        },
    });
    const onSubmit = ({username, password}: IForm) => {
        mutation.mutate({username, password});
    };

    return (
        <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Log in</ModalHeader>
            <ModalCloseButton/>
            <ModalBody as="form" onSubmit={handleSubmit(onSubmit)}>
                <VStack>
                    <InputGroup>
                        <InputLeftElement children={
                            <Box color="blue.400"> <FaUserAstronaut/> </Box>} />
                        <Input 
                            isInvalid={Boolean(errors.username?.message)}
                            {...register("username", {
                                required:"Please write a username",
                            })}
                            variant={"filled"}
                            placeholder="Username"
                        />
                    </InputGroup> 
                    <InputGroup>
                        <InputLeftElement children={
                            <Box color="blue.400"><FaLock/></Box>} />
                        <Input 
                            isInvalid={Boolean(errors.password?.message)}
                            {...register("password", {
                                required: "Please write a password",
                            })}
                            type="password"
                            variant={"filled"}
                            placeholder="Password"
                        />
                    </InputGroup>
                </VStack>
                {mutation.isError ? (
                    <Text color="red.500" textAlign={"center"} fontSize="sm">
                        Username or Password are wrong
                    </Text>
                ) : null}
                <Button 
                    isLoading={mutation.isLoading}
                    type="submit"
                    mt={4} 
                    colorScheme={"blue"} 
                    w="100%"
                >
                    Log in
                </Button>
            </ModalBody>
        </ModalContent>
    </Modal>
    );
}