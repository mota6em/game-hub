import React from "react";
import { Platform } from "../hooks/useGames";
import { Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}
const PlattformIconList = ({ platforms }: Props) => {
  const IconsDef: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      {platforms.map((platform) => (
        <Icon key={platform.id} color={'gray.400'} margin={1} as={IconsDef[platform.slug]}></Icon>
      ))}
    </>
  );
};

export default PlattformIconList;
