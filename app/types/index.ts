export type Color =
  | 'normal'
  | 'brand'
  | 'blue'
  | 'blue'
  | 'green'
  | 'pink'
  | 'red'
  | 'teal'
  | 'yellow'
  | undefined
  | any

export type BlogArticle = {
  _id?: string
  title?: string
  description?: string
  content?: string
  publishedAt?: string
  createdAt?: string
  updatedAt?: string
}
