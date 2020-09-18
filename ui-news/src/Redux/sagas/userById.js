import {put, all, takeEvery, fork} from 'redux-saga/effects';
import api from '../../utils/api';
import * as Actions from '../actions/userById';
import * as Types from '../constants/userById';

function* getUserById(action) {
    try {
        const response = yield api.get(`/user/${action.payload}`);
        yield put(Actions.successUserById(response.data));
    } catch (e) {
        yield put(Actions.errorUserById(e));
    }
}

function* getMultiplyUserById(action) {
    try {
        const arrProm = action.payload.map((id) => api.get(`/user/${id}`));
        const response = yield Promise.all(arrProm);
        const data = response.map(response => response.data);
        yield put(Actions.successMultiplyUserById(data));
    } catch (e) {
        yield put(Actions.errorMultiplyUserById(e));
    }
}

function* watchUserById() {
    yield takeEvery(Types.GET_USER_BY_ID, getUserById);
}

function* watchMultiplyUserById() {
    yield takeEvery(Types.GET_MULTIPLY_USER_BY_ID, getMultiplyUserById);
}

export default function* root() {
    yield all([yield fork(watchUserById), yield fork(watchMultiplyUserById)]);
}