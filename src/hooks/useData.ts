import React, { useEffect, useState } from "react";
import apiClients from "../sevices/api-clients";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string, requestConfig? : AxiosRequestConfig, deps?: any[]) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    // const controller = new AbortController();
    setLoading(true);
    apiClients
      .get<FetchResponse<T>>(endpoint, {...requestConfig})
      .then((res) => {
        setData(res.data.results), setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    // controller.abort();
  },deps?  [...deps] : []);
  return { data, error, isLoading };
};

export default useData;
