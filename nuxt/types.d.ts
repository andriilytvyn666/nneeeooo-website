type Webdev = {
  webdev: webdevItem[]
}

// Items

type designItem = {
  date: string
  posts: {
    preview: image
    link: string
  }[]
}

type photoItem = {
  date: string
  images: image[]
}

type webdevItem = {
  thumbnail169: image
  thumbnail43: image
  title: string
  description: string
  stack: string
  link: string
}

type animeFavorites = {
  idList: string[]
  externalLink: string
}

// Basics
type image = {
  asset: { _ref: string }
}
