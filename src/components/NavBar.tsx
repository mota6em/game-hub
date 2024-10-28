import { ColorModeContext, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assests/profile.png';
import ColorModeWitch from './ColorModeWitch';
function NavBar() {
  return (
    <HStack justifyContent={'space-between'} margin={'0 15px'}>
        <Image src={logo} boxSize={'40px'} margin={'3px'}></Image>
        <ColorModeWitch/>
    </HStack>
  )
}

export default NavBar
