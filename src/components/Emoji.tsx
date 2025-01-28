import mehImg from "../assets/imgs/meh.webp";
import thumbsUpImg from "../assets/imgs/thumbs-up.webp";
import bullsEyeImg from "../assets/imgs/bulls-eye.webp";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: Record<number, object> = {
    3: { src: mehImg, alt: "meh" },
    4: { src: thumbsUpImg, alt: "recommended" },
    5: { src: bullsEyeImg, alt: "exceptional" },
  };
  return (
    <div className="pt-1">
      <img {...emojiMap[rating]} className="emoji"></img>
    </div>
  );
};

export default Emoji;
