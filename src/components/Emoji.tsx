import meh from "../assests/meh.webp";
import thmbsUp from "../assests/thumbs-up.webp";
import bullsEye from "../assests/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: Number;
}

const Emoji = ({ rating }: Props) => {

  const emojiMap: { [key: Number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: '25px' },
    4: { src: thmbsUp, alt: "recommended" , boxSize: '25px'},
    5: { src: bullsEye, alt: "exceptional" , boxSize: '35px'},
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
