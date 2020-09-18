import * as Types from '../constants/postById';

const initialState = {
    loader: true,
    data: [],
    error: false,
};

const postById = (state = initialState, action: any) => {
    switch (action.type) {
        case Types.GET_POST_BY_ID:
            return {
                ...state,
                loader: true,
                error: false,
            };
        case Types.SUCCESS_POST_BY_ID:
            return {
                ...state,
                loader: false,
                data: action.payload,
            };
        case Types.ERROR_POST_BY_ID:
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

export default postById;