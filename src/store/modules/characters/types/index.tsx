export interface Characters {
  id: number;
  name: string;
  thumbnail: {
    path: string,
    extension: string
  }
}

export interface CharactersState {
  readonly data: Characters[];
  readonly loading: boolean;
  readonly error: boolean;
}
