export interface Comment {
    id: number,
    parentId: number,
    storyId: number,
    datetime: string,
    authorId: number,
    comment: string,
}

export const GET_COMMENTS = 'COMMENTS:FETCH';
export const SUCCESS_COMMENTS = 'COMMENTS:SUCCESS';
export const ERROR_COMMENTS = 'COMMENTS:ERROR';