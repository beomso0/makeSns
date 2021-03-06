import produce from 'immer';

export const initialState = {
  loadUserLoading: false,
  loadUserDone: false, // 로그인 시도 중.
  loadUserError: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false, // 로그인 시도 중.
  loadMyInfoError: null,
  followLoading: false,
  followDone: false, // 로그인 시도 중.
  followError: null,
  unfollowLoading: false,
  unfollowDone: false, // 로그인 시도 중.
  unfollowError: null,
  logInLoading: false,
  logInDone: false, // 로그인 시도 중.
  logInError: null,
  logOutLoading: false,
  logOutDone: false, // 로그아웃 시도 중.
  logOutError: null,
  signUpLoading: false,
  signUpDone: false, // 로그인 시도 중.
  signUpFailure: null,
  loadFollowersLoading: false,
  loadFollowersDone: false, // 로그인 시도 중.
  loadFollowersFailure: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false, // 로그인 시도 중.
  loadFollowingsFailure: null,
  removeFollowerLoading: false,
  removeFollowerDone: false, // 로그인 시도 중.
  removeFollowerFailure: null,
  me: null,
  userInfo: null,
};

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_USER_REQUEST: // saga에서 action type name에 맞게 지정.
        draft.loadUserlLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;
      case LOAD_USER_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.loadUserLoading = false;
        draft.loadUserDone = true; // 내가 바꾸고 싶은 부분만 수정
        draft.userInfo = action.data;
        break;
      case LOAD_USER_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;
      case LOAD_MY_INFO_REQUEST: // saga에서 action type name에 맞게 지정.
        draft.loadMyInfolLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.loadMyInfoError = null;
        draft.loadMyInfoDone = false;
        break;
      case LOAD_MY_INFO_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true; // 내가 바꾸고 싶은 부분만 수정
        draft.me = action.data;
        break;
      case LOAD_MY_INFO_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;
      case FOLLOW_REQUEST: // saga에서 action type name에 맞게 지정.
        draft.followlLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.followError = null;
        draft.followDone = false;
        break;
      case FOLLOW_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.followLoading = false;
        draft.followDone = true; // 내가 바꾸고 싶은 부분만 수정
        draft.me.Followings.push({ id: action.data.UserId });
        break;
      case FOLLOW_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.followLoading = false;
        draft.followError = action.error;
        break;
      case UNFOLLOW_REQUEST: // saga에서 action type name에 맞게 지정.
        draft.unfollowlLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;
      case UNFOLLOW_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.unfollowLoading = false;
        draft.unfollowDone = true; // 내가 바꾸고 싶은 부분만 수정
        draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data.UserId);
        // 언팔할 사람만 빠짐
        break;
      case UNFOLLOW_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;
      case LOG_IN_REQUEST: // saga에서 action type name에 맞게 지정.
        draft.logInlLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.logInError = null;
        draft.logInDone = false;
        break;
      case LOG_IN_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.logInLoading = false;
        draft.logInDone = true; // 내가 바꾸고 싶은 부분만 수정
        draft.me = action.data;
        break;
      case LOG_IN_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.logOutLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.logOutDone = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE: // saga에서 action type name에 맞게 지정.
        return {
          ...state, // 참조관계 유지
          logOutLoading: false, // 내가 바꾸고 싶은 부분만 수정
          logOutError: action.error,
        };
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.signUpLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.signUpLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.signUpError = action.error;
        break;
      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      case CHANGE_NICKNAME_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.changeNicknameDone = true;
        break;
      case CHANGE_NICKNAME_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.changeNicknameLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.changeNicknameError = action.error;
        break;
      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.loadFollowersDone = false;
        draft.loadFollowersError = null;
        break;
      case LOAD_FOLLOWERS_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.me.Followers = action.data;
        draft.loadFollowersLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.loadFollowersDone = true;
        break;
      case LOAD_FOLLOWERS_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.loadFollowersLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.loadFollowersError = action.error;
        break;
      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.loadFollowingsDone = false;
        draft.loadFollowingsError = null;
        break;
      case LOAD_FOLLOWINGS_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.me.Followings = action.data;
        draft.loadFollowingsLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.loadFollowingsDone = true;
        break;
      case LOAD_FOLLOWINGS_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.loadFollowingsLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.loadFollowingsError = action.error;
        break;
      case REMOVE_FOLLOWER_REQUEST:
        draft.removeFollowerLoading = true; // 내가 바꾸고 싶은 부분만 수정
        draft.removeFollowerDone = false;
        draft.removeFollowerError = null;
        break;
      case REMOVE_FOLLOWER_SUCCESS: // saga에서 action type name에 맞게 지정.
        draft.me.Followers = draft.me.Followers.filter((v) => v.id !== action.data.UserId);
        draft.removeFollowerLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.removeFollowerDone = true;
        break;
      case REMOVE_FOLLOWER_FAILURE: // saga에서 action type name에 맞게 지정.
        draft.removeFollowerLoading = false; // 내가 바꾸고 싶은 부분만 수정
        draft.removeFollowerError = action.error;
        break;
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;
        // return {
        //   ...state,
        //   me: {
        //     ...state.me,
        //     Posts: [{ id: action.data }, ...state.me.Posts],
        //   },
        // };
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
        break;
        // 나중에 성능 문제 생기면 filter 대신 unshift 사용할 것.
        // return {
        //   ...state,
        //   me: {
        //     ...state.me,
        //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
        //   },
        // };
      default:
        break;
    }
  });
};

// login action creator
export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

// logout action
export const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST,
});

export default reducer;
