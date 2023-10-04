import { all, takeLatest } from 'redux-saga/effects'

import { ActionTypes } from './characters/actionTypes'
import { load } from './characters/sagas'

export default function* rootSaga(): any {
  return yield all([
    takeLatest(ActionTypes.LOAD_REQUEST, load),
  ])
}