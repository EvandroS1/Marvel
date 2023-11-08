import { Reducer } from "redux";
import { CharactersState } from "./types";
import { ActionTypes } from "./actionTypes";

const INITIAL_STATE: CharactersState = {
  data: [],
  loading: false,
  error: false,
};
const reducer: Reducer<CharactersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.LOAD_SEARCH_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.LOAD_SEARCH_REQUEST_BY_ID:
      return { ...state, loading: true };
    case ActionTypes.LOAD_SEARCH_OREDERBY_VALUE_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data.results,
      };
    case ActionTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    case ActionTypes.SET_INNITIAL:
      return { ...state, loading: true, error: false, data: [] };
    default:
      return state;
  }
};

export default reducer;
