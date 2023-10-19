export interface Characters {
  id: number;
  name: string;
  thumbnail: {
    path: string,
    extension: string
  };
  description: string;
  comics: {
    available: number,
  };
  series: {
    available: number,
    
  }
}

export interface CharactersState {
  readonly data: Characters[];
  readonly loading: boolean;
  readonly error: boolean;
}
