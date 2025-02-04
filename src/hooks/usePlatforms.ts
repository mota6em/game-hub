import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";
const apiClient = new APICLIENT<Platform>("/platforms/lists/parents");
interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
export default usePlatforms;
