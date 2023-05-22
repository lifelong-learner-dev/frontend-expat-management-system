import { Input, IconButton, HStack, Box, Center, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
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

  return (
    <Box bg="grey.200">
      <HStack justifyContent="space-between">
        <Accordion defaultIndex={[0]} allowMultiple w="50%" h="30%">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' h="50%" fontSize="xs">
                  Announcement
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2} fontSize="xs">
              Residence permit

              - The required documents changed.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <HStack justifyContent="right" py={3} px={10} borderBottomWidth={1}>    
                <Input
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Search..."
                    size="md"
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