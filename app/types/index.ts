import dayjs from 'dayjs'

export type TDate = string | number | dayjs.Dayjs | Date | null | undefined

export type TLocale = string | 'en' | 'ja'

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

export type TProject = {
  _id?: string
  title?: string
  description?: string
  content?: string
  publishedAt?: string
  createdAt?: string
  updatedAt?: string
}
