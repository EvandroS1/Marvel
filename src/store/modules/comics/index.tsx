import { Reducer } from "redux";
import { ComicsState } from "./types";
import { ActionComicsTypes } from "./actionTypes";

const INITIAL_STATE: ComicsState = {
  data: [],
  loading: false,
  error: false,
};
const reducer: Reducer<ComicsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionComicsTypes.LOAD_REQUEST_CHARACTER_COMICS:
      return { ...state, loading: true };
    case ActionComicsTypes.LOAD_REQUEST_CHARACTER_COMICS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: true,
        data: action.payload.data,
        
      };

    case ActionComicsTypes.LOAD_REQUEST_CHARACTER_COMICS_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    case ActionComicsTypes.SET_NONE_COMIC:
      return { ...state, loading: false, error: false, data: [] };
    default:
      return state;
  }
};

export default reducer;
