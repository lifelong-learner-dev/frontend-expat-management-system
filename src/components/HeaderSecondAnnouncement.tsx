import { CheckIcon, WarningIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { Input, IconButton, HStack, Box, Center, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface IHeaderSecondAnnouncementProps {
    title: string;
    subtitle: string;
}

export default function HeaderSecondAnnouncement({
    title,
    subtitle,}:IHeaderSecondAnnouncementProps){
  return (
            <AccordionPanel pb={1} fontSize="xm" color='white'>
              <CheckIcon color="green.400" mr={2} />  
                <Link fontSize={{ base: 'xs', md: 'xm', lg: 'md' }}> 
                   {title}
                  <Text ml={6}>
                    {subtitle}
                  </Text>
                </Link>
            </AccordionPanel>
  );
};