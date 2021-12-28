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
  fbAppId?: string
}

export const createMeta = ({
  title = metaDefault.title,
  description = metaDefault.description,
  name = metaDefault.name,
  color = metaDefault.color,
  ogImageAlt = metaDefault.ogImageAlt,
  ogImageUrl = metaDefault.ogImageUrl,
  twiterImageUrl = metaDefault.twiterImageUrl,
  url = metaDefault.url,
  route = metaDefault.route,
  fbAppId = metaDefault.fbAppId,
}: CreateMeta) => {
  return {
    title: title,
    description: description,

    'application-name': name,
    'apple-mobile-web-app-title': title,
    'theme-color': color,
    'msapplication-TileColor': color,
    'msapplication-config': url + '/icons/browserconfig.xml?v=1',

    'og:site_name': name,
    'og:title': title,
    'og:description': description,
    'og:url': url || `https://kontenbase.com/${route}`,
    'og:locale': 'en_US',
    'og:image': url + ogImageUrl,
    'og:image:alt': ogImageAlt,
    'og:image:type': 'image/jpeg',
    'og:type': 'profile',
    'profile:first_name': 'John',
    'profile:last_name': 'Doe',
    'profile:gender': 'male',
    'profile:username': 'johndoe',

    'twitter:card': 'summary_large_image',
    'twitter:site': '@mhaidarhanif',
    'twitter:creator': '@mhaidarhanif',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': url + twiterImageUrl,

    'fb:app_id': fbAppId,
  }
}
