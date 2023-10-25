import { action } from "typesafe-actions";
import { ActionComicsTypes } from "./actionTypes";
import { Comics } from "./types";

export const loadComicsRequest = (id: string) => action(ActionComicsTypes.LOAD_REQUEST_CHARACTER_COMICS, id);

export const loadComicsSuccess: any = (data: Comics[]) => action(ActionComicsTypes.LOAD_REQUEST_CHARACTER_COMICS_SUCCESS, { data })
  // console.log('succes',data);

// };

export const loadComicsFailure = () => action(ActionComicsTypes.LOAD_REQUEST_CHARACTER_COMICS_FAILURE);

