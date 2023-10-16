import { call, put } from "redux-saga/effects";
import { api, baseUrl, queryy } from "../../../utils/api"; // Importe baseUrl aqui

import {
  loadSuccess,
  loadFailure,
  loadSearchRequest,
  loadSearchOrderbyRequest,
} from "./actions";
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

// retorna os personagens que começam com o valor passado no input 
export function* loadSearch(action: ActionType<typeof loadSearchRequest>): any {
  const character = action.payload.trim();

  try {
    // console.log(character);

    const response = yield call(
      baseUrl.get,
      `/characters?nameStartsWith=${character}&${queryy}`
    ); // Use baseUrl aqui
    const data = response.data.data;
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loadFailure());
  }
}
//ordena de a - z, z - a
export function* loadOrderby(
  action: ActionType<typeof loadSearchOrderbyRequest>
  ): any {
  // console.log('load', action.payload);
  const z = action.payload;
  let dot = "-";
  if (z == true) {
    dot = "";
  } else {
    dot = "-";
  }

  try {
    // console.log('',querySearch);
    
    const response = yield call(
      baseUrl.get,`/characters?orderBy=${dot}name&${queryy}`
    ); // Use baseUrl aqui
    
    const data = response.data.data;
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loadFailure());
  }
}
export function* loadOrderbySearch(
  action: ActionType<typeof loadSearchOrderbyRequest>
  ): any {
  console.log('load', action.payload);
  const z = action.payload;
  let dot = "-";
  if (z == true) {
    dot = "";
  } else {
    dot = "-";
  }

  try {
    // console.log('',querySearch);
    
    const response = yield call(
      baseUrl.get,`/characters?orderBy=${dot}name&${queryy}`
    ); // Use baseUrl aqui
    
    const data = response.data.data;
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loadFailure());
  }
}
