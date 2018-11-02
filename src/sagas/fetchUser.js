import { call, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios'

function* fetch_user() {
  try {
    const users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users'); // axios.get('https://jsonplaceholder.typicode.com/users')      
    yield put({ type: 'FETCH_SUCESS', uu: users });
  } catch (e) {
    yield put({ type: 'FETCH_FAIL', errors: e });
  }
}

function* fetch_todo() {
  const todos = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos'); // axios.get('https://jsonplaceholder.typicode.com/users')      
  console.log(todos);
}

function* user() {
  yield takeEvery('FETCH_REQUEST', fetch_user); // 正在加载数据
}

function* todo() {
  yield takeEvery('FETCH_TODO', fetch_todo);
}

// 使用数组导出
const rootUser = [
  user(),
  todo()
]

export default rootUser;