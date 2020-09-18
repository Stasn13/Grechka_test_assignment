import * as Types from '../constants/posts';

export const getPosts = () => ({
    type: Types.GET_ALL_POSTS,
});

export const success = (posts: any) => ({
    type: Types.SUCCESS_ALL_POSTS,
    payload: posts,
});

export const error = (error: any) => ({
    type: Types.ERROR_ALL_POSTS,
    payload: error,
});
