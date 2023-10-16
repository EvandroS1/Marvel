import { ActionType } from "typesafe-actions";
import { saveValueSuccess, setInputSearchValue } from "./actions";
import { put } from "redux-saga/effects";
// import { loadSuccess } from "../characters/actions";

export function* saveInputData(action: ActionType<typeof setInputSearchValue>): any {
  const value = action.payload;
  // console.log('value',value);
  
  
  
  yield put(saveValueSuccess(value));
  // yield put(setInputSearchValue(value));

  // console.log('hello');
}
