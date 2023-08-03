import { CheckIcon, WarningIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { Input, IconButton, HStack, Box, Center, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { getAnnouncements } from '../api';
import { IHeaderSecondAnnouncement } from '../types';
import HeaderSecondAnnouncement from './HeaderSecondAnnouncement';

export default function HeaderSecond() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (): void => {
    // Perform search logic here with the searchTerm
    if (!data) return; // Return if data is not available
    const filteredData = data.filter((announcement) =>
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Searching for:', searchTerm);
    console.log('Filtered Data:', filteredData);
    // Now you can use the filteredData to display the results.
    // For now, we'll just log the filtered data.
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
  const { isLoading, data } = useQuery<IHeaderSecondAnnouncement[]>(["announcement"], getAnnouncements);
  const filteredData = data?.filter((announcement) =>
    announcement.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Box bg={boxColor} >
      <HStack justifyContent="space-between">
        <Accordion bg={accordionColor} defaultIndex={[0]} allowMultiple w={{ base: '55%', md: '40%', lg:'30%'}}>
          <AccordionItem h="40%">
            <h2>
              <AccordionButton color='white'>
                <Box as="span" flex='1' textAlign='left' h="40%" fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}>
                  <WarningIcon color="purple" mr={2} boxSize={4}/>
                  <Text as='b'> 알림(공지) </Text> 
                  <Text ml={6}> (자세한 내용을 위해 클릭해주세요.) </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            {filteredData?.map((announcement) => (
                  <HeaderSecondAnnouncement
                    title={announcement.title}
                    subtitle={announcement.subtitle}
                  />              
            ))}
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
                    w={'20%'}
                    ml='2'
                    aria-label="Search"
                    icon={<FaSearch size="50%" />}
                    colorScheme="blackAlpha"
                    size="md"
                    onClick={handleSearch}
                />
        </HStack>
      </HStack>
    </Box>
  );
};