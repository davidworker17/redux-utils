import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import Module from '../containers/Module';

const sagas = function* sagas() {
  yield all([
  ]);
}

const reducer = combineReducers({
});

export { Module, reducer, sagas };

export default Module;
