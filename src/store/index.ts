import { Store, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { CharactersState } from './modules/characters/types';

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga';
import { QuerySearchState } from './modules/dados/types';
import { ComicsState } from './modules/comics/types';

export interface ApplicationState {
  characters: CharactersState
}
export interface DataState {
  data: QuerySearchState
}
export interface ComicGlobalState {
  comics: ComicsState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store;