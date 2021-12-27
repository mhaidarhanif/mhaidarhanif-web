export const isClient = typeof window === 'undefined' ? false : true
export const isServer = typeof window === 'undefined' ? true : false
