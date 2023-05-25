import { CheckIcon, WarningIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { Input, IconButton, HStack, Box, Center, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';


export default function HeaderSecond() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (): void => {
    // Perform search logic here with the searchTerm
    console.log('Searching for:', searchTerm);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  const boxColor = useColorModeValue("gray.800", "yellow.600");
  const accordionColor = useColorModeValue("yellow.600", "gray.800");

  return (
    <Box bg={boxColor} >
      <HStack justifyContent="space-between">
        <Accordion bg={accordionColor} defaultIndex={[0]} allowMultiple w={{ base: '55%', md: '40%', lg:'30%'}}>
          <AccordionItem h="40%">
            <h2>
              <AccordionButton color='white'>
                <Box as="span" flex='1' textAlign='left' h="40%" fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                  <WarningIcon color="purple" mr={2} boxSize={4}/>
                  <Text as='b'>Announcement</Text> 
                  <Text ml={6}>(Click for the details)</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={1} fontSize="xm" color='white'>
              <CheckIcon color="green.400" mr={2} />  
                <Link fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}> 
                  Residence permit -
                  <Text ml={6}>
                    The required documents changed.
                  </Text>
                </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <HStack justifyContent="right" py={3} px={10} w="40%">    
                <Input
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Search..."
                    textColor={"gray.100"}
                    size="md"
                    bg={"whiteAlpha"}
                />
                <IconButton
                    ml='2'
                    aria-label="Search"
                    icon={<FaSearch size="50%" />}
                    colorScheme="blue"
                    size="md"
                    onClick={handleSearch}
                />
        </HStack>
      </HStack>
    </Box>
  );
};