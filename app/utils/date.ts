import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import relativeTime from 'dayjs/plugin/relativeTime'

import { TDate, TLocale } from '~/types'

dayjs().format()
dayjs.extend(relativeTime)

export const getYear = (locale: TLocale = 'en') =>
  dayjs().locale(locale).format('YYYY')

export const getDayName = (locale: TLocale = 'en') =>
  dayjs().locale(locale).format('dddd')

export const getDayPeriod = () => {
  const hour = Number(dayjs().format('H'))
  if (hour < 5) return 'dawn'
  if (hour < 12) return 'morning'
  if (hour < 17) return 'afternoon'
  if (hour < 21) return 'evening'
  if (hour < 24) return 'night'
  return ''
}

export const getDayNamePeriod = () => `${getDayName()} ${getDayPeriod()}`

export const getJoinedDate = (date: TDate) => dayjs(date).format('MMMM YYYY')

export const getCompleteDate = (date: TDate) =>
  dayjs(date).format('D MMMM YYYY')

export const getCompleteDateTime = (date: TDate) =>
  dayjs(date).format('D MMMM YYYY HH:mm')

export const getRelativePublishedDate = (date: TDate) => dayjs().to(dayjs(date))
