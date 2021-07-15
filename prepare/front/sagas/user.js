import { all, fork, takeLatest, delay, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
  UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
} from '../reducers/user';

export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  };
};

// logout action
export const logoutRequestAction = () => {
  return {
    type: 'LOG_OUT_REQUEST',
  };
};

function logInAPI(data) {
  // return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  // return axios.post('/api/logout');
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI() { // signup api는 generator가 아님에 주의.
  // return axios.post('/api/signUp');
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function followAPI() { // signup api는 generator가 아님에 주의.
  // return axios.post('/api/follow');
}

function* follow(action) {
  try {
    // const result = yield call(followAPI);
    yield delay(1000);
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: FOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function unfollowAPI() { // signup api는 generator가 아님에 주의.
  // return axios.post('/api/unfollow');
}

function* unfollow(action) {
  try {
    // const result = yield call(unfollowAPI);
    yield delay(1000);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow); // takeLeading은 첫번째꺼
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow); // takeLeading은 첫번째꺼
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn); // LOG_IN이 들어오면 logIn을 실행하는 일종의 이벤트리스너?
} // take의 치명적 단점은 한 번 밖에 listend을 안한다는 것. --> 그래서 while true로 감쌈. or takeEvery 사용

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut); // takeLeading은 첫번째꺼
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp); // takeLeading은 첫번째꺼
}

export default function* userSaga() {
  yield all([
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
}
