import { put, all, takeEvery, fork } from 'redux-saga/effects';
import api from '../../utils/api';
import * as Actions from '../actions/posts';
import * as Types from '../constants/posts';

function* getPosts() {
    try {
        const response = yield api.get('/news');
        yield put(Actions.success(response.data.news));
    } catch (e) {
        yield put(Actions.error(e));
    }
}

function* watchPosts() {
    yield takeEvery(Types.GET_ALL_POSTS, getPosts);
}

export default function* root() {
    yield all([fork(watchPosts)]);
}