import { combineReducers } from "redux";

import characters from "./characters";
import data from "./dados"
import comics from "./comics"

export default combineReducers({
  characters,
  data,
  comics,
})