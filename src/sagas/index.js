import { all } from 'redux-saga/effects';
import rootUser from './fetchUser';
import { add } from './counter';

export default function* rootSaga() {
  yield all([ // 同时并发多个
    ...rootUser,
    add()
  ])
}
