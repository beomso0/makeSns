import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
  UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
  LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE,
  LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE,
  CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE,
  LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE,
  LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE,
  REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE,
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
  return axios.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/user/logout');
}

function* logOut() {
  try {
    yield call(logOutAPI);
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

function signUpAPI(data) { // signup api는 generator가 아님에 주의.
  return axios.post('/user', data); // 데이터가 routes/user.js에서 req.body에 해당함.
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function followAPI(data) { // signup api는 generator가 아님에 주의.
  return axios.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield call(followAPI, action.data);
    yield put({
      type: FOLLOW_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: FOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function unfollowAPI(data) { // signup api는 generator가 아님에 주의.
  return axios.delete(`/user/${data}/unfollow`);
}

function* unfollow(action) {
  try {
    const result = yield call(unfollowAPI, action.data);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function loadMyInfoAPI() {
  return axios.get('/user');
}

function* loadMyInfo() {
  try {
    const result = yield call(loadMyInfoAPI);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function loadUserAPI(data) {
  return axios.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({ // put은 dispatch와 거의 같음.
      type: LOAD_USER_FAILURE,
      error: err.response.data,
    });
  }
}

function changeNicknameAPI(data) {
  return axios.patch('/user/nickname', { nickname: data });
}

function* changeNickname(action) {
  try {
    const result = yield call(changeNicknameAPI, action.data);
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
      data: result.data,
      // data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({ // put은 dispatch와 거의 같음.
      type: CHANGE_NICKNAME_FAILURE,
      // data: err.response.data,
    });
  }
}

function loadFollowersAPI() {
  return axios.get('/user/followers');
}

function* loadFollowers() {
  try {
    const result = yield call(loadFollowersAPI);
    yield put({
      type: LOAD_FOLLOWERS_SUCCESS,
      data: result.data,
      // data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({ // put은 dispatch와 거의 같음.
      type: LOAD_FOLLOWERS_FAILURE,
      // data: err.response.data,
    });
  }
}

function loadFollowingsAPI() {
  return axios.get('/user/followings');
}

function* loadFollowings() {
  try {
    const result = yield call(loadFollowingsAPI);
    yield put({
      type: LOAD_FOLLOWINGS_SUCCESS,
      data: result.data,
      // data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({ // put은 dispatch와 거의 같음.
      type: LOAD_FOLLOWINGS_FAILURE,
      // data: err.response.data,
    });
  }
}

function removeFollowerAPI(data) {
  return axios.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield call(removeFollowerAPI, action.data);
    yield put({
      type: REMOVE_FOLLOWER_SUCCESS,
      data: result.data,
      // data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({ // put은 dispatch와 거의 같음.
      type: REMOVE_FOLLOWER_FAILURE,
      // data: err.response.data,
    });
  }
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo); // takeLeading은 첫번째꺼
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

function* watchChangeNickname() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}

function* watchloadFollowers() {
  yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function* watchloadFollowings() {
  yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

function* watchremoveFollower() {
  yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
}

function* watchloadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

export default function* userSaga() {
  yield all([
    fork(watchremoveFollower),
    fork(watchloadFollowers),
    fork(watchloadFollowings),
    fork(watchChangeNickname),
    fork(watchloadUser),
    fork(watchLoadMyInfo),
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
}
