import React from "react";
import useGenres from "../hooks/useGenres";
import GenreCard from "./GenreCard";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <div>
      {data.map((genre) => (
        <GenreCard key={genre.id} genre={genre}/>
      ))}
    </div>
  );
};

export default GenreList;
