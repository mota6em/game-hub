import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlattformIconList from "./PlattformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../sevices/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={"10px"} overflow={"hidden"}>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <HStack>
              <PlattformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              ></PlattformIconList>
            </HStack>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
