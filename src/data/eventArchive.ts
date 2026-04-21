// 공식홈페이지 행사 데이터를 기준으로 수동 동기화하는 참조 테이블입니다.
// 후기 글의 eventSlug 검증과 메인 사이트 상세 링크 연결에 사용합니다.
// slug/title/kind 변경 시 공식홈페이지 수정 후 이 파일도 함께 반영합니다.
// [업데이트 필요] 행사 slug/title/kind 변경 시 메인 행사 데이터를 먼저 수정한 뒤 이 파일을 함께 반영하세요.
// [주의] 공개된 slug는 가능하면 변경하지 않습니다.
// 함께 확인: /Users/hyeona/Dev/SSAFYnity/ssafynity.github.io/src/data/events/index.ts
// 함께 확인: /Users/hyeona/Dev/SSAFYnity/ssafynity.github.io/src/data/events/
type EventArchiveKind = 'regular' | 'ongoing' | 'special'

type EventArchiveItem = {
  slug: string
  title: string
  kind?: EventArchiveKind
  eventDateLabel?: string
}

export const eventArchive = [
  { slug: '2022-founding-ceremony', title: 'SSAFYnity 발대식', kind: 'special', eventDateLabel: '2022년 6월 9일 · 19:00 - 21:00' },
  { slug: '2022-operator-mt', title: '1대 집행부 MT', eventDateLabel: '2022년 7월 30일 17:00 - 7월 31일 11:00' },
  { slug: '2022-open-talk', title: '여름 세미나 - 오픈토크', kind: 'special', eventDateLabel: '2022년 8월 27일 · 15:00 - 17:00' },
  { slug: '2022-sports-day', title: '제1회 SSAFYnity 가을 운동회', kind: 'regular', eventDateLabel: '2022년 10월 22일 · 14:00 - 18:00' },
  { slug: '2023-night-of-ssafynity', title: '제 1회 싸피인의 밤', kind: 'regular', eventDateLabel: '2023년 1월 14일 · 17:00 - 20:00' },
  { slug: '2023-operator-spring-mt', title: '2대 집행부 MT', eventDateLabel: '2023년 3월 25일 17:00 - 3월 26일 11:00' },
  { slug: '2023-ssafynale', title: '제 1회 SSAFYnale', kind: 'regular', eventDateLabel: '2023년 6월 10일 · 13:00 - 18:00' },
  { slug: '2023-sports-day', title: '제 2회 가을체육대회', kind: 'regular', eventDateLabel: '2023년 9월 23일 · 13:00 - 17:00' },
  { slug: '2023-seminar', title: '제 1회 세미나', kind: 'regular', eventDateLabel: '2023년 11월 25일 · 14:00 - 18:00' },
  { slug: '2024-night-of-ssafynity', title: '싸피인의 밤', kind: 'regular', eventDateLabel: '2024년 2월 17일 · 14:30 - 18:00' },
  { slug: '2024-operator-spring-mt', title: '3대 운영진 MT' },
  { slug: '2024-member-mt', title: '정회원 MT', kind: 'ongoing' },
  { slug: '2024-ssafynale', title: '제 2회 SSAFYnale', kind: 'regular' },
  { slug: '2024-job-challenge-1', title: '취준챌린지 1기', kind: 'special' },
  { slug: '2024-job-challenge-2', title: '취준챌린지 2기', kind: 'special' },
  { slug: '2024-sports-day', title: '제 3회 가을체육대회', kind: 'regular', eventDateLabel: '2024년 9월 28일 · 14:00 - 18:00' },
  { slug: '2024-job-challenge-3', title: '취준챌린지 3기', kind: 'special' },
  { slug: '2024-seminar', title: '제 2회 세미나', kind: 'regular' },
  { slug: '2025-job-challenge-4', title: '취준챌린지 4기', kind: 'special' },
  { slug: '2025-job-challenge-5', title: '취준챌린지 5기', kind: 'special' },
  { slug: '2025-night-of-ssafynity', title: '싸피인의 밤', kind: 'regular', eventDateLabel: '2025년 3월 8일 · 16:00 - 19:00' },
  { slug: '2025-job-challenge-6', title: '취준챌린지 6기', kind: 'special' },
  { slug: '2025-ssafynale', title: '제 3회 SSAFYnale', kind: 'regular' },
  { slug: '2025-potluck-party', title: '포트락 파티', kind: 'regular' },
  { slug: '2025-career-party', title: '커리어파티', kind: 'regular' },
] as const satisfies readonly EventArchiveItem[]

export const eventKindLabels = {
  regular: '정기 행사',
  ongoing: '상시 행사',
  special: '단발성 행사',
} as const

export type EventArchiveSlug = (typeof eventArchive)[number]['slug']

export const eventArchiveSlugs = eventArchive.map((event) => event.slug) as [
  EventArchiveSlug,
  ...EventArchiveSlug[]
]

export const eventArchiveMap = Object.fromEntries(
  eventArchive.map((event) => [event.slug, event])
) as Record<EventArchiveSlug, EventArchiveItem>

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

export function getEventArchiveUrl(slug: EventArchiveSlug) {
  return `${getOfficialSiteBaseUrl()}/events/archive/${slug}`
}
