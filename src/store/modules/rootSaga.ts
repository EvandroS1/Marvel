import { all, takeLatest } from 'redux-saga/effects'

import { ActionTypes } from './characters/actionTypes'
import { load, loadSearch } from './characters/sagas'

export default function* rootSaga(): any {
  return yield all([
    takeLatest(ActionTypes.LOAD_REQUEST, load),
    takeLatest(ActionTypes.LOAD_SEARCH_REQUEST, loadSearch),
  ])
}