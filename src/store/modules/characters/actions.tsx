import { action } from "typesafe-actions";
import { Characters } from "./types";
import { ActionTypes } from "./actionTypes";

export const loadRequest = () => action(ActionTypes.LOAD_REQUEST);


export const setInnitial = () => action(ActionTypes.SET_INNITIAL);

//  vai na função loadSearch do sagas
export const loadSearchRequest = (querySearch: string) => action(ActionTypes.LOAD_SEARCH_REQUEST, querySearch);


export const loadSearchByRequest = (id: string) => action(ActionTypes.LOAD_SEARCH_REQUEST_BY_ID, id);

//  vai na função loadOrderbySearch do sagas
export const loadOrderbyRequest = (z: boolean) => action(ActionTypes.LOAD_OREDERBY_REQUEST, z);


export const loadSearchOrderbyRequest = (z: boolean, y: string) => action(ActionTypes.LOAD_SEARCH_OREDERBY_VALUE_REQUEST, {z, y});

export const loadSuccess = (data: Characters[]) =>
  action(ActionTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(ActionTypes.LOAD_FAILURE);
