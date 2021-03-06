import { combineReducers } from 'redux';

import { authConstants } from '../constants';
import { authentication } from './auth.reducer';
import { restaurantReducer } from './restaurant.reducer';
import { alert } from './alert.reducer';



const appReducer = combineReducers({
  authentication,
  alert,
  restaurantReducer
});

const rootReducer = (state, action) => {
  if (action.type === authConstants.LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action)
}

export default rootReducer;
