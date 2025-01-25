import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { FetchGamesResponse } from "../assets/ts/types";

const GameGrid = () => {
  const [errors, setErrors] = useState("");
  const [games, setGames] = useState([]);
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErrors(err.message));
  });
  return (
    <>
      {errors && <p>{errors} </p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
