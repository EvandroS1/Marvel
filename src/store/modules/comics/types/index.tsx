export interface Comics {
  id: number;
  title: string;
  thumbnail: {
    extension: string,
    path: string
  };
  // description: string;
}

export interface ComicsState {
  readonly data: Comics[];
  readonly loading: boolean;
  readonly error: boolean;
}
