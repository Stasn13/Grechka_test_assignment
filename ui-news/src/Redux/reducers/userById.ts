import * as Types from '../constants/userById';

const initialState = {
    loader: true,
    data: [],
    error: false,
    commentsUsers: []
};

const userById = (state = initialState, action: any) => {
    switch (action.type) {
        case Types.GET_USER_BY_ID:
            return {
                ...state,
                loader: true,
                error: false,
            };
        case Types.SUCCESS_USER_BY_ID:
            return {
                ...state,
                loader: false,
                data: action.payload,
            };
        case Types.ERROR_USER_BY_ID:
            return {
                ...state,
                loader: false,
                error: action.payload,
            };
        case Types.GET_MULTIPLY_USER_BY_ID:
            return {
                ...state,
                loader: true,
                error: false,
            };
        case Types.SUCCESS_MULTIPLY_USER_BY_ID:
            return {
                ...state,
                loader: false,
                commentsUsers: action.payload
            };
        case Types.ERROR_MULTIPLY_USER_BY_ID:
            return {
                ...state,
                loader: false,
                error: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default userById;