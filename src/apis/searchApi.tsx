import axios, { AxiosResponse } from "axios";
import { Restaurant } from "../store/restaurant/apiTypes";
import { allDataEndPoint, baseUrl, searchEndPoint } from "./baseUrl";

export const fetchRestaurantsApi = async (
  query: string
): Promise<AxiosResponse<Restaurant[]>> => {
  const response = await axios.post(
    `${baseUrl}${searchEndPoint}`,
    { search: query },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response;
};

export const fetchAllRestaurantsAPI = async (): Promise<
  AxiosResponse<Restaurant[]>
> => {
  const response = await axios.get(`${baseUrl}${allDataEndPoint}`);
  return response;
};
