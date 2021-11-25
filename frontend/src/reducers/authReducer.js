import { LOGIN_SUCCESS, LOG_OUT } from '../actions/actionTypes';

const initialState = {
    loggedIn: false,
    loading: true,
    user: null,
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                loading: false,
                user: payload,
            };
        case LOG_OUT:
            return {
                loggedIn: false,
                loading: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;
