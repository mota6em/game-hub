import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assests/profile.png';
function NavBar() {
  return (
    <HStack>
        <Image src={logo} boxSize={'40px'} margin={'3px'}></Image>
        <Text>Nav Bar</Text>
    </HStack>
  )
}

export default NavBar
