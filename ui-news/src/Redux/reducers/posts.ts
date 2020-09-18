import * as Types from '../constants/posts';

const initialState = {
    loader: true,
    data: [],
    error: false,
};

const posts = (state = initialState, action: any) => {
    switch (action.type) {
        case Types.GET_ALL_POSTS:
            return {
                ...state,
                loader: true,
                error: false,
            };
        case Types.SUCCESS_ALL_POSTS:
            return {
                ...state,
                loader: false,
                data: action.payload,
            };
        case Types.ERROR_ALL_POSTS:
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

export default posts;