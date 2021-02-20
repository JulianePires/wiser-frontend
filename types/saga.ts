import { Action } from "@reduxjs/toolkit";
import axios from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { emitError, nextAttempt, setLoading, setUser, authenticate } from "./store";

function* validateCredentials(action: Action) {
  const { loading, attempts } = yield select();

  if (!loading && authenticate.match(action)) {
    yield put(setLoading(true));
    const URL =
      attempts % 2 == 0
        ? "https://602e837a4410730017c50cf5.mockapi.io/api/form"
        : "https://602e837a4410730017c50cf5.mockapi.io/api/form2";

    try {
      const res = yield call(axios.post, URL, {
        email: action.payload.email,
        password: action.payload.password,
      });

      yield put(setUser(res.data));
    } catch (err) {
      switch (err.response.status) {
        case 400:
          if (err.response.data.error === "INVALID_CREDENTIALS") {
            yield put(emitError(err.response.data));
          }
      }
    }
    yield put(nextAttempt());
    yield put(setLoading(false));
  }
}

function* authSaga() {
  yield takeLatest(authenticate.type, validateCredentials);
}

export default authSaga;