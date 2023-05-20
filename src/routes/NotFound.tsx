import { Button, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
    return <VStack bg="gray.100" justifyContent={"center"} minH="100vh">
        <Heading>Page not found.</Heading>
        <Text>It seems that you're lost.</Text>
        <NavLink to="/">
            <Button colorScheme={"twitter"} variant={"link"}>Go home &rarr;</Button>
        </NavLink>
    </VStack>;
}