import React from 'react';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import allSagas from './sagas';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from "./reducers";

const initialState = {};
const saga = createSagaMiddleware();
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(saga)));
saga.run(allSagas);

const Redux = (props: any) => {
    return <Provider store={store}>{props.children}</Provider>;
};

export default Redux;
