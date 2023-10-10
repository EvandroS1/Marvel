import { call, put } from "redux-saga/effects";
import { api, searchApi, queryy } from "../../../utils/api"; // Importe searchApi aqui

import { loadSuccess, loadFailure, loadSearchRequest } from "./actions";
import { ActionType } from "typesafe-actions";

export function* load(): any {
  try {
    const response = yield call(api.get, "");
    const data = response.data.data;
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loadFailure());
  }
}

export function* loadSearch(action: ActionType<typeof loadSearchRequest>): any {
  const character = action.payload.trim();

  try {
    console.log(character);
    
    const response = yield call(searchApi.get, `/characters?nameStartsWith=${character}&${queryy}`); // Use searchApi aqui
    const data = response.data.data;
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loadFailure());
  }
}
