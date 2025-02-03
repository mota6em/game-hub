import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f9c76ecff713473e87809bcfe6a0e8ba",
  },
});
class APICLIENT<T> {
  endpoit: string;
  constructor(endpoit: string) {
    this.endpoit = endpoit;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoit, config)
      .then((res) => res.data);
  };
}
export default APICLIENT;
