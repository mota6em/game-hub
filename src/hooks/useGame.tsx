import React from "react";
import APICLIENT from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APICLIENT<Game>("/games");
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
