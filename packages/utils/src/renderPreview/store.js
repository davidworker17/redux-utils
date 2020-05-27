import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'

import app from '../appCore/reducer';
import { reducer as notifications } from '******/notification';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

function create(config) {
  const store = createStore(
      combineReducers({
          app,
          [config.name]: config.reducer,
          notifications
      }),
      composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(config.sagas);

  return store;
}

export default create;
