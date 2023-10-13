export interface ShowWithScore {
  score: number,
  show: Show
}

export interface Show {
  id: number,
  name: string,
  genres: string[],
  rating: Rating,
  url: string,
  status: string,
  schedule: Schedule,
  summary: string,
  image: Image
}

export interface Rating {
  average: number
}

export interface Schedule {
  time: string
  days: string[]
}

export interface Image {
  medium: string
  original: string
}