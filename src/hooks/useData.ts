import React, { useEffect, useState } from "react";
import apiClients from "../sevices/api-clients";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    // const controller = new AbortController();
    setLoading(true);
    apiClients
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results), setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    // controller.abort();
  }, []);
  return { data, error, isLoading };
};

export default useData;
