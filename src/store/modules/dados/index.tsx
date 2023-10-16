// reducer.ts
import { Reducer } from "redux";
import { QuerySearchState } from "./types";
import { ActionDataTypes } from "./actionTypes";

const INITIAL_STATE: QuerySearchState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<QuerySearchState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionDataTypes.SAVE_SEARCH_INPUT_DATA:
      return { ...state, loading: false};
      case ActionDataTypes.SAVE_SUCCESS:
        console.log('payload',action.payload);
        
        return { ...state, loading: false, data: action.payload.data}
    default:
      return state;
  }
};

export default reducer;
