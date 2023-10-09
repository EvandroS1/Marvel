import { call, put } from "redux-saga/effects";
import api from "../../../utils/api";

import { loadSuccess, loadFailure } from "./actions";

export function* load(): any {
  try {
    const response = yield call(api.get, "");
    const data = response.data.data;
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loadFailure());
  }
}
export function* loadSearch(): any {
  try {
    const response = yield call(api.get, "");
    const data = response.data.data;
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loadFailure());
  }
}
