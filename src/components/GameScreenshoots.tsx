import React from "react";
import useGameScreenshoots from "../hooks/useGameScreenshoots";
interface Props {
  gameId: number;
}
const GameScreenshoots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameScreenshoots(gameId);
  if (isLoading) {
    return null;
  }
  if (error) {
    throw error;
  }
  console.log(data);
  return (
    <div className=" px-2 px-md-4 py-2  row d-flex align-items-center justify-content-center">
      {data?.results.map((screenshoot) => (
        <img
          key={screenshoot.id}
          src={screenshoot.image}
          alt="screenshoot"
          className="p-1 screenshoot col-12 col-md-6"
        />
      ))}
    </div>
  );
};

export default GameScreenshoots;
