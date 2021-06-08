import jwtDecode from "jwt-decode";
import { httpService } from "./http.service";
import { apiUrll } from "../config";

const apiEndpoint = apiUrll + "/restaurants";
const tokenKey = "token";
const refreshTokenKey = "refreshToken";
const cancel = "cancelRequests";

export const restaurantService = {
  get,
  getAll,
};

async function get(id) {
  const { data: restaurant } = await httpService.get(
    apiEndpoint + "/get?id=" + id
  );
  return restaurant;
}

async function getAll(limit, pageNumber) {
  const { data: restaurants } = await httpService.get(
    apiEndpoint + "/getall?limit=" + limit + "&pageNumber=" + pageNumber
  );
  return restaurants;
}
