import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface FetchGenresResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const controller = new AbortController();
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    // return () => controller.abort();
  }, []);
  return { data, error, isLoading };
};

export default useData;
