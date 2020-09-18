import * as Types from '../constants/comments';

export const getComments = (id: any) => ({
    type: Types.GET_COMMENTS,
    payload: id
});

export const successComments = (comments: any) => ({
    type: Types.SUCCESS_COMMENTS,
    payload: comments,
});

export const errorComments = (error: any) => ({
    type: Types.ERROR_COMMENTS,
    payload: error,
});
