import { authConstants } from '../constants';
import { restaurantService } from '../services';

const initialState = { restaurant: {}, restaurants: [] };

export function restaurantReducer(state = initialState, action) {
    switch (action.type) {
        case "RESTAURANT GET REQUEST":
            return {
                restaurant: action.restaurant
            };
        case "RESTAURANTS GET REQUEST":
            return {
                restaurants: action.restaurants
            };
        default:
            return state;
    }
}
