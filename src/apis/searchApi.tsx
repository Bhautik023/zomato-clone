import axios, { AxiosResponse } from "axios";
import { Restaurant } from "../store/restaurant/apiTypes";
import { allDataEndPoint, restaurantBaseUrl, searchEndPoint } from "./baseUrl";

export const fetchRestaurantsApi = async (
  query: string
): Promise<AxiosResponse<Restaurant[]>> => {
  const response = await axios.post(
    `${restaurantBaseUrl}${searchEndPoint}`,
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
  const response = await axios.get(`${restaurantBaseUrl}${allDataEndPoint}`);
  return response;
};
