import * as utils from '******/utils';
import { createAction, handleActions } from 'redux-actions';
import { call, all, takeEvery} from "redux-saga/effects";

function createSelectors(module) {
  const selectors = {};

  if(module.initialState) {
    Object.assign(selectors, utils.createSelectors(module.initialState, module.name))
  }

  return Object.assign(selectors, module.selectors(module));
}

function createActions(module) {
  const actions = {
    purge: createAction(`${module.name}/PURGE`),
  }

  return Object.assign(actions, module.actions(module));
}

function createReducer(module) {
  return handleActions({
    ...module.reducer(module),
    [module.actions.purge]: () => module.initialState,
  }, module.initialState );
}

function createSagas(module) {
  return module.sagas(module);
}


function createModule(options = {}) {
  const module = Object.assign(
    {
      actions() {},
      selectors() {},
      reducer() {},
      sagas() {},
    },
    options
  );

  module.selectors = createSelectors(module);
  module.actions = createActions(module);
  module.reducer = createReducer(module);
  module.sagas = createSagas(module);

  return module;
};

export default createModule;
