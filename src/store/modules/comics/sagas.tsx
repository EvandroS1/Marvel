import { ActionType } from "typesafe-actions";
import { loadComicsFailure, loadComicsRequest, loadComicsSuccess } from "./actions";
import { baseUrl, queryy } from "../../../utils/api";
import { call, put } from "redux-saga/effects";

export function* loadComics(action: ActionType<typeof loadComicsRequest>): any {
  const id = action.payload
  console.log(id);
  try {
    // console.log('k', character);

    const response = yield call(baseUrl.get, `/characters/${id}/comics?${queryy}`); // Use baseUrl aqui
    const data = response.data.data.results;
    // console.log('comics', data);
    yield put(loadComicsSuccess(data));
    

  } catch (error) {
    yield put(loadComicsFailure());
  }
}
