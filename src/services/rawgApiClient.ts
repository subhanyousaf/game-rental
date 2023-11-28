import axios, { AxiosRequestConfig } from "axios";

export interface FetchRawgGamesResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "81d85154b85c4221ba33523827409fa6",
  },
});

class RawgAPIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchRawgGamesResponse<T>>(this.endpoint, config)
      .then((res) => res.data.results);
  };
}

export default RawgAPIClient;
