import React from "react";
import axios from "axios";
import { locationBaseUrl } from "./baseUrl";

const fetchLocation = () => {
  const response = axios.get(locationBaseUrl);

  return response;
};

export default fetchLocation;
