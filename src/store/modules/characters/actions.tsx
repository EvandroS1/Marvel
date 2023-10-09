import { action } from "typesafe-actions";
import { Characters } from "./types";
import { ActionTypes } from "./actionTypes";

export const loadRequest = () => action(ActionTypes.LOAD_REQUEST);

export const loadSearchRequest = (querySearch: string) => action(ActionTypes.LOAD_SEARCH_REQUEST, querySearch);

export const loadSuccess = (data: Characters[]) =>
  action(ActionTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(ActionTypes.LOAD_FAILURE);
