import { call, put } from "redux-saga/effects";

function createRoutineSaga(routine, saga) {
  function* routineSaga(action) {
    try {
      yield put(routine.REQUEST(action.payload));

      const response = yield call(saga, action);

      if (!response) {
        throw new Error("Request failed");
      }

      yield put(routine.SUCCESS(response));
      return response;
    } catch (e) {
      yield put(routine.FAILURE(e.message, action.payload));
    } finally {
      yield put(routine.FULFILL(action.payload));
    }
  }

  return routineSaga;
}

export default createRoutineSaga;
