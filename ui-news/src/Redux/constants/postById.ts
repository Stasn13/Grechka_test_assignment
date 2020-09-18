export interface Post {
    id: number,
    title: string,
    authorId: number,
    image: string,
    datetime: string,
    description: string
}

export const GET_POST_BY_ID = 'POST_BY_ID:FETCH';
export const SUCCESS_POST_BY_ID = 'POST_BY_ID:SUCCESS';
export const ERROR_POST_BY_ID = 'POST_BY_ID:ERROR';