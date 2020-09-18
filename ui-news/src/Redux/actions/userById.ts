import * as Types from '../constants/userById'
import {User} from "../constants/userById";

export const getUserById = (id: any) => ({
    type: Types.GET_USER_BY_ID,
    payload: id
});

export const successUserById = (user: any) => ({
    type: Types.SUCCESS_USER_BY_ID,
    payload: user,
});

export const errorUserById = (error: any) => ({
    type: Types.ERROR_USER_BY_ID,
    payload: error,
});

export const getMultiplyUserById = (id: Array<number>) => ({
    type: Types.GET_MULTIPLY_USER_BY_ID,
    payload: id
});

export const successMultiplyUserById = (users: Array<User>) => ({
    type: Types.SUCCESS_MULTIPLY_USER_BY_ID,
    payload: users,
});

export const errorMultiplyUserById = (error: any) => ({
    type: Types.ERROR_MULTIPLY_USER_BY_ID,
    payload: error,
});