import { call, put } from "redux-saga/effects";
import { api, baseUrl, queryy } from "../../../utils/api"; // Importe baseUrl aqui

import {
  loadSuccess,
  loadFailure,
  loadSearchRequest,
  loadSearchOrderbyRequest,
  loadOrderbyRequest,
  loadSearchByRequest,
} from "./actions";
import { ActionType } from "typesafe-actions";

export function* load(): any {  
  try {
    const response = yield call(api.get, "");
    const data = response.data.data;
    yield put(loadSuccess(data));
    // console.log('load');
    
  } catch (error) {
    yield put(loadFailure());
  }
}

export function* setNone(): any {
  console.log('dataa');
  
}
// const url_1 =`/characters?nameStartsWith=${character}&${queryy}` 


// retorna os personagens que começam com o valor passado no input 
export function* loadSearch(action: ActionType<typeof loadSearchRequest>): any {
  const character = action.payload.trim();

  try {
    // console.log('k', character);

    const response = yield call(baseUrl.get, `/characters?nameStartsWith=${character}&${queryy}`); // Use baseUrl aqui
    const data = response.data.data;
    yield put(loadSuccess(data));

  } catch (error) {
    yield put(loadFailure());
  }
}
export function* loadSearchId(action: ActionType<typeof loadSearchByRequest>): any {
  const id = action.payload;

  try {
    // console.log('k', character);

    const response = yield call(baseUrl.get, `/characters/${id}?${queryy}`); // Use baseUrl aqui
    const data = response.data.data;
    yield put(loadSuccess(data));

  } catch (error) {
    yield put(loadFailure());
  }
}
//ordena de a - z, z - a
export function* loadOrderby(
  action: ActionType<typeof loadOrderbyRequest>
  ): any {
  // console.log('load', action.payload);
  const z = action.payload;
  // console.log('z', z);
  
  let dot = "-";
  if (z == true) {
    dot = "";
  } 
  if (z == false) {
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
  // console.log('load_value', action.payload);
  const z = action.payload.z;
  const y = action.payload.y;
  let dot = "-";
  if (z == true) {
    dot = "";
  } 
  if (z == false) {
    dot = "-";
  }

  try {
    // console.log('',querySearch);
    
    const response = yield call(
      baseUrl.get,`/characters?nameStartsWith=${y}&orderBy=${dot}name&${queryy}`
    ); // Use baseUrl aqui
    
    const data = response.data.data;
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loadFailure());
  }
}
