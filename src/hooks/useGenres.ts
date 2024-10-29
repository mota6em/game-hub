import React, { useEffect, useState } from 'react'
import apiClients from '../sevices/api-clients';
import { CanceledError } from 'axios';

interface Genre{
    id: number,
    name: string,
    slug: string
}
interface FetchedGenres{
    count: number,
    results:Genre[]
}
const useGenres = () => {
    const [isLoading, setLoading] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
      // const controller = new AbortController();
      setLoading(true);
      apiClients
        .get<FetchedGenres>("/genres")
        .then((res) => {
          setGenres(res.data.results), setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          if (err instanceof CanceledError) return;
          setError(err.message);
        });
      // controller.abort();
    }, []);
    return { genres, error, isLoading };
}

export default useGenres