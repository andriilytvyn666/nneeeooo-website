type queryData = {
  MediaListCollection: MediaListCollection
}

type MediaListCollection = {
  lists: list[]
}

type list = {
  entries: entry[]
}

type entry = {
  media: media
}

type media = {
  isFavourite: boolean
  siteUrl: string
  id: number
  title: title
  coverImage: coverImage
  startDate: startDate
}

type title = {
  english: string
  romaji: string
  native: string
}

type coverImage = {
  medium: string
  extraLarge: string
}

type startDate = {
  year: number
  month: number
  day: number
}
