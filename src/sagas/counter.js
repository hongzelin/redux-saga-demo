import { INCREMENT_ASYNC, INCREMENT } from '../constants';
import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

function* increase() {
  yield call(delay, 1000); // 需要执行异步的时候，直接调用call
  yield put({ type: INCREMENT });
}

export function* add() {
  yield takeEvery(INCREMENT_ASYNC, increase);
}
