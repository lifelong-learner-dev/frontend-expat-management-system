import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, VStack, IconButton, Text, useColorMode, useColorModeValue, Link, Menu, MenuButton, MenuList, MenuItem, Portal, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";

export default function Navigation(){
  return (
    <Box w="25%" h="100vh" bg="grey.200" py={4} px={2}>
      <VStack spacing={4} align="start">
        <Accordion defaultIndex={[0]} allowMultiple w="100%">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel as='button' pb={3} border='0.5px solid' borderColor='gray.100' w='100%' textAlign="left" fontSize={["sm", "md", "lg"]}>
              User
            </AccordionPanel>
            <AccordionPanel as='button' pb={3} border='0.5px solid' borderColor='gray.100' w='100%' >
              <Text fontSize={["xs", "md", "lg"]} textAlign="left">Work permit</Text>
            </AccordionPanel>
            <AccordionPanel as='button' pb={3} border='0.5px solid' borderColor='gray.100' w='100%' textAlign="left">
              Residence permit
            </AccordionPanel>
            <AccordionPanel as='button' pb={3} border='0.5px solid' borderColor='gray.100' w='100%' textAlign="left">
              Driver's license
            </AccordionPanel>
            <AccordionPanel as='button' pb={3} border='0.5px solid' borderColor='gray.100' w='100%' textAlign="left">
              Lorem
            </AccordionPanel>
            <AccordionPanel as='button' pb={3} border='0.5px solid' borderColor='gray.100' w='100%' textAlign="left">
              Lorem
            </AccordionPanel>
            <AccordionPanel as='button' pb={3} border='0.5px solid' borderColor='gray.100' w='100%' textAlign="left">
              Lorem
            </AccordionPanel>
            <AccordionPanel as='button' pb={3} border='0.5px solid' borderColor='gray.100' w='100%' textAlign="left">
              Lorem
            </AccordionPanel>
            <AccordionPanel as='button' pb={3} border='0.5px solid' borderColor='gray.100' w='100%' textAlign="left">
              Lorem
            </AccordionPanel>
            <AccordionPanel as='button' pb={3} border='0.5px solid' borderColor='gray.100' w='100%' textAlign="left">
              Lorem
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  );
};




