import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";
interface Genre {
  id: number;
  name: string;
}
interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [genres, setGenre] = useState<Genre[]>([]);
  const controller = new AbortController();
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    // return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
