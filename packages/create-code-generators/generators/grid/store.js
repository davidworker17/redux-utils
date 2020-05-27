import * as api from '../../api';
import { createRoutine, createRoutineHandlers, createRoutineSaga, createNotification } from '******/utils';
import { createModule } from '******/redux';
import { call, all, takeEvery } from 'redux-saga/effects';
import { createAction } from 'redux-actions';

export default createModule({
  name: '{{moduleName}}',

  initialState: {
    data: [],
    error: null,
    isLoading: false,
    isSuccess: false,
    totalSize: null,
    refreshToken: Math.random(),
  },

  actions: ({ name }) => ({
    {{requestName}}: createRoutine(`${name}/FETCH`),
    refreshData: createAction(`${name}/REFRESH_TOKEN`),
  }),

  reducer: ({ actions }) => ({
    ...createRoutineHandlers(actions.{{requestName}}),
    [actions.{{requestName}}.SUCCESS]: (state, action) => ({
      ...state,
      data: action.payload.rows,
      totalSize: action.payload.totalSize,
    }),
    [actions.refreshData]: state => ({
      ...state,
      refreshToken: Math.random(),
    })
  }),

  sagas: ({ actions: { {{requestName}} } }) => {
    function* {{requestName}}Saga(action) {
      const response = yield call(api.{{requestName}}, action.payload);
      return response.data.data.{{name}}.groupGrid;
    };

    return function* sagas() {
      yield all([
        takeEvery({{requestName}}.TRIGGER, createRoutineSaga({{requestName}}, {{requestName}}Saga)),
        takeEvery({{requestName}}.FAILURE, createNotification('error')),
      ])
    };
  }
});
