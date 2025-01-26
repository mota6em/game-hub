import React from "react";
import { Platform } from "../assets/ts/types";
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

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <span className="d-flex align-items-center d-flex flex-wrap col-11 px-2">
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return (
          <div key={platform.id} className="d-flex align-items-center px-2">
            {Icon && <Icon className="text-gray me-1 fs-5 my-1" />}
          </div>
        );
      })}
    </span>
  );
};

export default PlatformIconList;
