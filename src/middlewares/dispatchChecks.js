import jwtDecode from "jwt-decode";
import {alertConstants} from '../constants';
import { authService, httpService } from '../services';

export const checkRequests = ({ dispatch }) => next => async (action) => {
    if (action.type.includes('REQUEST')) {
        let isExpired = false;
        let decoded;
        const token = authService.getJwt();
        const dateNow = new Date();
        if (token) {
            decoded = jwtDecode(token, {complete: true});
            if(decoded.exp < (dateNow.getTime()/1000)) isExpired = true;
        }
        if (isExpired) {
            try {
                await authService.refreshToken();
            } catch (error) {
                authService.setCancelRequests(true);  
                setTimeout(() => {   
                    authService.setCancelRequests(false);
                    httpService.setJwt('');
                }, 3000);
            }
        }
    }

    if ((action.type.includes('FAILURE') || action.type.includes('ALERT_ERROR')) && authService.getCancelRequests() === 'true') {
        action = {
            type: alertConstants.ERROR,
            header: 'Session Expired',
            content: '',
        }
    }

    next(action);
} 