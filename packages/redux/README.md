## createModule
Idea behind this utility is to reduce redux boilerplate and simplify creation of any kind of state and side effects. Under the hood it utilize `redux-actions` for reducers as it was a part of the main project already.

### Features
* based on initialState it will create all needed selectors
* create action `purge` to clear the store

## examples

### basic state
```js
import { createModule } from '******/redux';

export default createModule({
  name: 'EXAMPLE_STATE',

  initialState: {
    isVisible: false
  },

  actions: ({ name }) => ({
    toggle: createAction(`${name}/TOGGLE`),
  }),

  reducer: ({ actions }) => ({
    [actions.toggle]: (state, actions) => ({
        isVisible: !state.isVisible
    })
  }),

  selectors: ({ name }) => ({
      customSelctor: (state, action) => state[name].isVisible
        ? 'visible'
        : 'not visible'
  })
}
```

```
WHATS  INSIDE
{
    name: 'EXAMPLE_STATE',
    initialState: { ...},
    actions: {
        toggle: () => {},
        purge: () => {}, <- created automatically
    },
    reducer: () => {},
    selectors: {
        isVisible: () => {}, <- as you can see it creates this selector automatically
        customSelector: () => {},
    }
}
```

### network flow
```js
import * as api from '../api';
import { createRoutine, createRoutineHandlers, createRoutineSaga } from '******/utils';
import { createModule } from '******/redux';
import { call, all, takeEvery } from 'redux-saga/effects';

export default createModule({
  name: 'EXAMPLE_FETCH',

  initialState: {
    data: null,
    error: null,
    isLoading: false,
    isSuccess: false,
  },

  actions: ({ name }) => ({
    fetch: createRoutine(`${name}/FETCH`),
  }),

  reducer: ({ actions }) => ({
    ...createRoutineHandlers(actions.export),
  }),

  sagas: ({ actions: { fetch } }) => {
    function* fetchSaga(action) {
      const response = yield call(api.fetch, action.payload);
      return response.data;
    };

    return function* sagas() {
      yield all([
        takeEvery(fetch.TRIGGER, createRoutineSaga(fetch, exportSaga)),
      ])
    };
  }
```
```
WHATS  INSIDE
{
    name: 'EXAMPLE_FETCH',
    initialState: { ... },
    actions: {
        fetch: {
            TRIGGER: () => {},
            REQUEST: () => {},
            SUCCESS: () => {},
            FAILURE: () => {},
            FULFILL: () => {},
        },
        purge: () => {}, <- created automatically
    },
    reducer: () => {},
    selectors: {
        data: () => {}, <- as you can see it creates this selector automatically
        error: () => {},
        isLoading: () => {},
        isSuccess: () => {},
    },
    sagas: () => {}
}
```
