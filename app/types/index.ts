import dayjs from 'dayjs'

export type TDate = string | number | dayjs.Dayjs | Date | null | undefined

export type TLocale = string | 'en' | 'ja'

export type Color =
  | 'normal'
  | 'brand'
  | 'blue'
  | 'green'
  | 'orange'
  | 'pink'
  | 'red'
  | 'teal'
  | 'yellow'
  | undefined
  | any

export type TBlogArticle = {
  id?: string
  slug?: string
  title?: string
  description?: string
  date?: string
  excerpt?: string
  content?: {
    html?: string
    markdown?: string
    raw?: string
    text?: string
  }
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
