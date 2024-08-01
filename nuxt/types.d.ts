// Pages
type Content = {
  designs: image[]
  photos: image[]
  webdev: webdevItem[]
}

type designItem = {
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

// Basics
type image = {
  asset: { _ref: string }
}
