import { combineReducers } from "redux";

import characters from "./characters";
import data from "./dados"

export default combineReducers({
  characters,
  data,
})