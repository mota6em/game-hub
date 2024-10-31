import { ColorModeContext, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../assests/profile.png';
import ColorModeWitch from './ColorModeWitch';
import SearchInput from './SearchInput';
function NavBar() {
  return (
    <HStack margin={'10px 15px'}>
        <Image src={logo} boxSize={'40px'} margin={'3px'}></Image>
        <SearchInput></SearchInput>
        <ColorModeWitch/>
    </HStack>
  )
}

export default NavBar
