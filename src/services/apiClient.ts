import axios, { AxiosRequestConfig } from "axios";

const apiUrl =
  import.meta.env.MODE === "development"
    ? "http://192.168.100.4:3000/api"
    : "https://game-rental-backend-9149fe81c1f2.herokuapp.com/api";

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<T[]>(this.endpoint, config)
      .then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  delete = () => {
    return axiosInstance.delete<T>(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
