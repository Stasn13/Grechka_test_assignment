import { all } from 'redux-saga/effects';
import posts from './posts';
import postById from './postById';
import userById from './userById';
import comments from './comments';

export default function* root() {
    yield all([
        posts(),
        postById(),
        userById(),
        comments()
    ]);
}
