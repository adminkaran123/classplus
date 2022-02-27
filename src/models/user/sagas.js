import { fetchUserDetail } from "../../services/user.service";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Worker saga will be fired on USER_FETCH_REQUESTED actions

const API_URL = "https://6219cb2181d4074e85b19c98.mockapi.io/api";

function* fetchUser(action) {
  try {
    const url = API_URL + "/user/1";
    const response = yield call(fetch, url);
    const data = yield response.json();

    yield put({ type: "USER_FETCH_SUCCEEDED", user: data });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* updateUser(action) {
  console.log(action);
  yield put({ type: "UPDATE_USER", spending_limit: action.payload });
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export function* getUserInfo() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  yield takeEvery("USER_UPDATE_REQUESTED", updateUser);
}

export default getUserInfo;
