import * as api from '../../api';
import { createRoutine, createRoutineHandlers, createRoutineSaga } from '******/utils';
import { createModule } from '******/redux';
import { call, all, takeEvery } from 'redux-saga/effects';

export default createModule({
  name: '{{moduleName}}',

  initialState: {
    data: null,
    error: null,
    isLoading: false,
    isSuccess: false,
  },

  actions: ({ name }) => ({
    {{requestName}}: createRoutine(`${name}/FETCH`),
  }),

  reducer: ({ actions }) => ({
    ...createRoutineHandlers(actions.{{requestName}}),
  }),

  sagas: ({ actions: { {{requestName}} } }) => {
    function* {{requestName}}Saga(action) {
      const response = yield call(api.{{requestName}}, action.payload);
      return response.data.data.{{name}};
    };

    return function* sagas() {
      yield all([
        takeEvery({{requestName}}.TRIGGER, createRoutineSaga({{requestName}}, {{requestName}}Saga)),
      ])
    };
  }
});
