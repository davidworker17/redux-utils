import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-subspace-saga';
import dynostore, { dynamicReducers, shallowStateHandler }  from '@redux-dynostore/core'
import { dynamicSagas } from '@redux-dynostore/redux-saga'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

const history = createBrowserHistory()
const defaultReducer = combineReducers({
  router: connectRouter(history),
})

export function create(reducers = defaultReducer, sagas) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history)
      ),
      dynostore(
        dynamicReducers({ stateHandler: shallowStateHandler }),
        dynamicSagas(sagaMiddleware)
      )
    )
  );

  return store;
}

const store = create();

export { store, history };
