import * as Types from '../constants/postById';

export const getPostById = (id: any) => ({
    type: Types.GET_POST_BY_ID,
    payload: id
});

export const successById = (post: any) => ({
    type: Types.SUCCESS_POST_BY_ID,
    payload: post,
});

export const errorById = (error: any) => ({
    type: Types.ERROR_POST_BY_ID,
    payload: error,
});