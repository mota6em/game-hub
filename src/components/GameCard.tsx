import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlattformIconList from "./PlattformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../sevices/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <HStack marginBottom={3} justifyContent={"space-between"}>
            <HStack>
              <PlattformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              ></PlattformIconList>
            </HStack>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize={"2xl"}>{game.name}<Emoji rating={game.rating_top}></Emoji></Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
