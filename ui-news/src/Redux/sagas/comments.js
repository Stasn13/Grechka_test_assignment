import { put, all, takeEvery, fork } from 'redux-saga/effects';
import api from '../../utils/api';
import * as Types from '../constants/comments';
import * as Actions from '../actions/comments';

function* getComments(action) {
    try {
        const response = yield api.get(`/comments/${action.payload}`);
        yield put(Actions.successComments(response.data));
    } catch (e) {
        yield put(Actions.errorComments(e));
    }
}

function* watchComments() {
    yield takeEvery(Types.GET_COMMENTS, getComments);
}

export default function* root() {
    yield all([fork(watchComments)]);
}