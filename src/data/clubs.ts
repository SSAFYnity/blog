export const clubArchive = [
  {
    slug: 'doljabi-climbing',
    title: '돌잡이',
    summary: '클라이밍을 함께 즐기고 친목을 다지는 모임',
  },
] as const

export const clubArchiveSlugs = clubArchive.map((club) => club.slug) as [
  (typeof clubArchive)[number]['slug'],
  ...(typeof clubArchive)[number]['slug'][]
]

export const clubArchiveMap = Object.fromEntries(
  clubArchive.map((club) => [club.slug, club])
) as Record<(typeof clubArchive)[number]['slug'], (typeof clubArchive)[number]>

function getOfficialSiteBaseUrl() {
  if (import.meta.env.DEV) {
    const hostname =
      typeof window !== 'undefined' && window.location.hostname
        ? window.location.hostname
        : '127.0.0.1'

    return `http://${hostname}:4321`
  }

  return 'https://ssafynity.github.io'
}

export function getClubArchiveUrl(slug: (typeof clubArchive)[number]['slug']) {
  return `/blog/club/${slug}/`
}

export function getClubOfficialUrl(slug: (typeof clubArchive)[number]['slug']) {
  return `${getOfficialSiteBaseUrl()}/clubs/${slug}/`
}
