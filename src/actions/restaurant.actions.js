import { authConstants } from "../constants";
import { restaurantService } from "../services";
import { alertActions } from "./";

export const restaurantActions = {
  get,
  getAll,
};

function get(id) {
  const restaurant = restaurantService.get(id);
  return { type: "RESTAURANT GET REQUEST", restaurant };
}

function getAll(limit, pageNumber) {
  const restaurants = restaurantService.getAll(limit, pageNumber);
  return { type: "RESTAURANTS GET REQUEST", restaurants };
}
