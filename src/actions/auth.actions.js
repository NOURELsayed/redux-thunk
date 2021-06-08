import {authConstants} from '../constants';
import {authService} from '../services';
import {alertActions} from './';

export const authActions = {
  login,
  logout,
};

function login(email, password) {
  return async dispatch => {
    await dispatch(request({email}));
    try {
      const { token, refreshToken } = await authService.login(email, password);
      authService.loginWithJwt(token, refreshToken);
      const user = await authService.getCurrentUser();
      dispatch(success(user));
    } catch (ex) {
      dispatch(failure(ex));
      dispatch(alertActions.error({header: ex.message}));
    }
  };

  function request(user) {
    return {type: authConstants.LOGIN_REQUEST, user}
  }

  function success(user) {
    return {type: authConstants.LOGIN_SUCCESS, user}
  }

  function failure(error) {
    return {type: authConstants.LOGIN_FAILURE, error}
  }
}

function logout() {
  authService.logout();
  return {type: authConstants.LOGOUT};
}
