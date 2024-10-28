import { useEffect, useState } from "react";
import apiClients from "../sevices/api-clients";
import { Text } from "@chakra-ui/react";
interface Game{
    id: number,
    name: string
}
interface FetchGamesResponse {
    count: number,
    results: Game[]
}
function GameGrid() {
    const [games, setGames]  =  useState<Game[]>([]); 
    const [error, setError]  =  useState(''); 
    useEffect(() => {
        apiClients.get<FetchGamesResponse>('/games').then(res => setGames(res.data.results)).catch(err => setError(err.message));
    })
    return (
        <>
        {error && <Text>Error 404</Text>}
        <ul>
            {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
        </>
  )
}

export default GameGrid