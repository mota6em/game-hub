import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f9c76ecff713473e87809bcfe6a0e8ba",
  },
});
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
