import meh from "../assests/meh.webp";
import thmbsUp from "../assests/thumbs-up.webp";
import bullsEye from "../assests/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: Number;
}

const Emoji = ({ rating }: Props) => {

  const emojiMap: { [key: Number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thmbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional" },
  };
  return <Image {...emojiMap[rating]} boxSize="25px" />;
};

export default Emoji;
