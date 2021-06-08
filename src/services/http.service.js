import axios from "axios";
import { logService } from "./";
import { authService } from './auth.service';

export const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};

const jwt = authService.getJwt();
if (jwt) httpService.setJwt(jwt);

axios.interceptors.response.use(null, async function(error) {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
  logService.log(error);
  if (expectedError) {
    error = error.response.data; // to return error obj with {message, error if exist}
  } 
  else {
    error = { message: 'Technical Problem! Please try again later or contact us!' };
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common = { 'Authorization': `bearer ${jwt}` }
}
