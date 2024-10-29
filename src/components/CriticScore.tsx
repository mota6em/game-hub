import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 85 ? "green" : score > 60 ? "blue" : "";
  return <Badge fontSize={'14px'} borderRadius={'5px'} paddingX={2} colorScheme={color}>{score}</Badge>;
};

export default CriticScore;
