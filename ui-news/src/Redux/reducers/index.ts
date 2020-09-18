import {combineReducers} from 'redux';
import posts from './posts';
import postById from './postById';
import userById from './userById';
import comments from './comments';

export const rootReducer = combineReducers({
    posts,
    postById,
    userById,
    comments,
});

export type RootState = ReturnType<typeof rootReducer>
