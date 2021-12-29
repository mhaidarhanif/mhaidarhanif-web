import metaDefault from '../meta.json'

type CreateMeta = {
  title: string
  description: string
  name?: string
  color?: string
  ogImageAlt?: string
  ogImageUrl?: string
  twiterImageUrl?: string
  url?: string
  route?: string
  locale?: string
}

export const createMeta = ({
  title,
  description,
  name,
  color,
  ogImageAlt,
  ogImageUrl,
  twiterImageUrl,
  url,
  route,
  locale,
}: CreateMeta) => {
  return {
    title: title || name || metaDefault.title,
    description: description || metaDefault.description,

    'application-name': name || title || metaDefault.name,
    'apple-mobile-web-app-title': title || name || metaDefault.title,
    'theme-color': color || metaDefault.color,
    'msapplication-TileColor': color || metaDefault.color,
    'msapplication-config':
      url || metaDefault.url + 'icons/browserconfig.xml?v=1',

    'og:site_name': name || title || metaDefault.name,
    'og:title': title || name || metaDefault.title,
    'og:description': description || metaDefault.description,
    'og:locale': locale || metaDefault.locale,
    'og:url': route
      ? `https://kontenbase.com/${route}`
      : url || metaDefault.url,
    'og:image': ogImageUrl
      ? metaDefault.url + ogImageUrl
      : metaDefault.url + metaDefault.ogImageUrl,
    'og:image:type': 'image/jpeg',
    'og:image:alt': ogImageAlt ? ogImageAlt : title || metaDefault.ogImageAlt,

    'og:type': 'profile',
    'profile:first_name': 'M Haidar',
    'profile:last_name': 'Hanif',
    'profile:gender': 'male',
    'profile:username': 'mhaidarhanif',

    'twitter:card': 'summary_large_image',
    'twitter:site': '@mhaidarhanif',
    'twitter:creator': '@mhaidarhanif',
    'twitter:title': title || name || metaDefault.title,
    'twitter:description': description || metaDefault.description,
    'twitter:image': twiterImageUrl
      ? metaDefault.url + twiterImageUrl
      : metaDefault.url + metaDefault.twiterImageUrl,

    'fb:app_id': metaDefault.fbAppId,
  }
}
