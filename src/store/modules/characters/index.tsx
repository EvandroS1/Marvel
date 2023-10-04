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
    case ActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        loadign: false,
        error: false,
        data: action.payload.data,
      };
    case ActionTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
  }
  return state;
};

export default reducer;