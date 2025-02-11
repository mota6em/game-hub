import React from "react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) {
    return null;
  }
  if (error) {
    throw error;
  }
  const first = data?.results[0];
  if (!first) {
    return null;
  }
  return (
    <div className="container align-items-center justify-content-center">
      <video
        className="object-fit-xxl-contain border rounded video"
        src={first.data[480]}
        poster={first.preview}
        controls
      />
    </div>
  );
};

export default GameTrailer;
