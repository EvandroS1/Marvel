import { all, takeLatest } from 'redux-saga/effects'

import { ActionTypes } from './characters/actionTypes'
import { load, loadOrderby, loadOrderbySearch, loadSearch, loadSearchId } from './characters/sagas'
import { saveInputData } from './dados/sagas'
import { ActionDataTypes } from './dados/actionTypes'
import { ActionComicsTypes } from './comics/actionTypes'
import { loadComics } from './comics/sagas'

export default function* rootSaga(): any {
  return yield all([
    takeLatest(ActionTypes.LOAD_REQUEST, load),
    takeLatest(ActionTypes.LOAD_SEARCH_REQUEST, loadSearch),
    takeLatest(ActionTypes.LOAD_OREDERBY_REQUEST, loadOrderby),
    takeLatest(ActionTypes.LOAD_SEARCH_REQUEST_BY_ID, loadSearchId),
    takeLatest(ActionTypes.LOAD_SEARCH_OREDERBY_VALUE_REQUEST, loadOrderbySearch),
    takeLatest(ActionDataTypes.SAVE_SEARCH_INPUT_DATA, saveInputData),
    takeLatest(ActionComicsTypes.LOAD_REQUEST_CHARACTER_COMICS, loadComics),
  ])
}