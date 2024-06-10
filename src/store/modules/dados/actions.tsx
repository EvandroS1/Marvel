// actions.ts
import { action } from "typesafe-actions";
import { ActionDataTypes } from "./actionTypes";

export const setInputSearchValue = (value: string) =>
  action(ActionDataTypes.SAVE_SEARCH_INPUT_DATA, value);

  export const setNoneSearchValue = () =>
  action(ActionDataTypes.RESET);

  export const setThemee = (theme: string) =>
  action(ActionDataTypes.THEME, theme);

 
  export const saveValueSuccess: any = (data: string) => 
    action(ActionDataTypes.SAVE_SUCCESS, { data });
    // console.log('data', data);


  