export const eventArchive = [
  { slug: '2022-founding-ceremony', title: 'SSAFYnity 발대식', kind: 'special' },
  { slug: '2022-operator-mt', title: '1대 집행부 MT' },
  { slug: '2022-open-talk', title: '여름 세미나 - 오픈토크', kind: 'special' },
  { slug: '2022-sports-day', title: '제1회 SSAFYnity 가을 운동회', kind: 'regular' },
  { slug: '2023-night-of-ssafynity', title: '제 1회 싸피인의 밤', kind: 'regular' },
  { slug: '2023-operator-spring-mt', title: '2대 집행부 MT' },
  { slug: '2023-ssafynale', title: '제 1회 SSAFYnale', kind: 'regular' },
  { slug: '2023-sports-day', title: '제 2회 가을체육대회', kind: 'regular' },
  { slug: '2023-seminar', title: '제 1회 세미나', kind: 'regular' },
  { slug: '2024-night-of-ssafynity', title: '싸피인의 밤', kind: 'regular' },
  { slug: '2024-operator-spring-mt', title: '3대 운영진 MT' },
  { slug: '2024-member-mt', title: '정회원 MT', kind: 'ongoing' },
  { slug: '2024-ssafynale', title: '제 2회 SSAFYnale', kind: 'regular' },
  { slug: '2024-job-challenge-1', title: '취준챌린지 1기', kind: 'special' },
  { slug: '2024-job-challenge-2', title: '취준챌린지 2기', kind: 'special' },
  { slug: '2024-sports-day', title: '제 3회 가을체육대회', kind: 'regular' },
  { slug: '2024-job-challenge-3', title: '취준챌린지 3기', kind: 'special' },
  { slug: '2024-seminar', title: '제 2회 세미나', kind: 'regular' },
  { slug: '2025-job-challenge-4', title: '취준챌린지 4기', kind: 'special' },
  { slug: '2025-job-challenge-5', title: '취준챌린지 5기', kind: 'special' },
  { slug: '2025-night-of-ssafynity', title: '싸피인의 밤', kind: 'regular' },
  { slug: '2025-job-challenge-6', title: '취준챌린지 6기', kind: 'special' },
  { slug: '2025-ssafynale', title: '제 3회 SSAFYnale', kind: 'regular' },
  { slug: '2025-potluck-party', title: '포트락 파티', kind: 'regular' },
  { slug: '2025-career-party', title: '커리어파티', kind: 'regular' },
] as const

export const eventKindLabels = {
  regular: '정기 행사',
  ongoing: '상시 행사',
  special: '단발성 행사',
} as const

export const eventArchiveSlugs = eventArchive.map((event) => event.slug) as [
  (typeof eventArchive)[number]['slug'],
  ...(typeof eventArchive)[number]['slug'][]
]

export const eventArchiveMap = Object.fromEntries(
  eventArchive.map((event) => [event.slug, event])
) as Record<(typeof eventArchive)[number]['slug'], (typeof eventArchive)[number]>

export function getEventArchiveUrl(slug: (typeof eventArchive)[number]['slug']) {
  return `https://ssafynity.github.io/events/archive/${slug}`
}
