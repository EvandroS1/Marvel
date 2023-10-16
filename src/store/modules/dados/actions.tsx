// actions.ts
import { action } from "typesafe-actions";
import { ActionDataTypes } from "./actionTypes";

export const setInputSearchValue = (value: string) =>
  action(ActionDataTypes.SAVE_SEARCH_INPUT_DATA, value);

 
  export const saveValueSuccess: any = (data: string) => 
    action(ActionDataTypes.SAVE_SUCCESS, { data });
    // console.log('data', data);


  