export interface User {
    id: number,
    firstName: string,
    lastName: string,
}

export const GET_USER_BY_ID = 'USER_BY_ID:FETCH';
export const SUCCESS_USER_BY_ID = 'USER_BY_ID:SUCCESS';
export const ERROR_USER_BY_ID = 'USER_BY_ID_ALL:ERROR';

export const GET_MULTIPLY_USER_BY_ID = 'USER_MULTIPLY_BY_ID:FETCH';
export const SUCCESS_MULTIPLY_USER_BY_ID = 'USER_MULTIPLY_BY_ID:SUCCESS';
export const ERROR_MULTIPLY_USER_BY_ID = 'USER_MULTIPLY_BY_ID_ALL:ERROR';