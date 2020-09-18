import * as Types from '../constants/comments';

const initialState = {
    loader: true,
    data: [],
    error: false,
};

const comments = (state = initialState, action: any) => {
    switch (action.type) {
        case Types.GET_COMMENTS:
            return {
                ...state,
                loader: true,
                error: false,
            };
        case Types.SUCCESS_COMMENTS:
            return {
                ...state,
                loader: false,
                data: action.payload,
            };
        case Types.ERROR_COMMENTS:
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

export default comments;