export interface Characters {
  id: number
  name: string
  thumbnail: string
}

export interface CharactersState {
  readonly data: Characters[]
  readonly loading: boolean
  readonly error: boolean
}