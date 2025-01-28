import React from "react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: Record<number, object> = {
    3: { src: "src/assets/imgs/meh.webp", alt: "meh" },
    4: { src: "src/assets/imgs/thumbs-up.webp", alt: "recommended" },
    5: { src: "src/assets/imgs/bulls-eye.webp", alt: "exceptional" },
  };
  return (
    <div className="pt-1">
      <img
        src={emojiMap[rating]?.src}
        alt={emojiMap[rating]?.alt}
        className="emoji"
      ></img>
    </div>
  );
};

export default Emoji;
