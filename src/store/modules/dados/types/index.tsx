export interface QuerySearch {
  querySearchh: string;
}
export interface Theme {
  theme: string;
}

export interface QuerySearchState  {
  readonly data: QuerySearch[];
  readonly loading: boolean;
  readonly error: boolean;

}