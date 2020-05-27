import { actions as notification } from '******/notification';
import { put } from 'redux-saga/effects';

export default function createNotification(type, msg) {
  return function* notify(action) {
    yield put(notification[type](msg || action.payload));
  }
}
