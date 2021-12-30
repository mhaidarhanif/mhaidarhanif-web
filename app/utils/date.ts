import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs().format()

type Locale = string | 'en' | 'ja'

export const getDayName = (locale: Locale = 'en') =>
  dayjs().locale(locale).format('dddd')

export const getYear = (locale: Locale = 'en') =>
  dayjs().locale(locale).format('YYYY')
