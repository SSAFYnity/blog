import type { CategorySlug } from './site'

// 카테고리 아카이브 화면에서만 쓰는 운영용 데이터입니다.
// 페이지 내부에 흩어지기 쉬운 필터/빈 상태 문구를 한 곳에서 관리합니다.
// [업데이트 필요] 필터 문구, 빈 상태 문구, 연도 옵션 변경 시 이 파일만 수정하세요.
// [주의] 화면 문구 변경이므로 메인 사이트와 톤앤매너가 어긋나지 않는지 함께 확인하세요.
// 함께 확인: /Users/hyeona/Dev/SSAFYnity/Design/data.md
export const archiveYearOptions = [
  { value: '2026', label: '2026(5대)' },
  { value: '2025', label: '2025(4대)' },
  { value: '2024', label: '2024(3대)' },
  { value: '2023', label: '2023(2대)' },
  { value: '2022', label: '2022(1대)' },
] as const

export const archiveEmptyMessages: Record<CategorySlug, string> = {
  notice: '아직 등록된 공지 글이 없습니다. 운영 공지와 주요 안내는 이곳에 차례로 아카이브됩니다.',
  journal: '아직 추가로 아카이브된 일지가 없습니다. 행사와 운영 기록은 이곳에 차분히 쌓일 예정입니다.',
  series: '아직 등록된 연재 글이 없습니다. 시리즈형 기록과 기획 콘텐츠가 이곳에 차례로 쌓이게 됩니다.',
  tech: '아직 등록된 기술 글이 없습니다. 운영 개발과 세미나 기록은 이곳에 차례로 공개됩니다.',
  review: '아직 등록된 후기 글이 없습니다. 참여자의 경험과 소감은 준비되는 대로 이곳에 공개됩니다.',
  finance: '아직 등록된 회비 글이 없습니다. 회비 집행 기록과 운영 내역은 이곳에 정리됩니다.',
}

export const archiveFilterLabels = {
  reviewKind: '종류',
  allKinds: '전체 종류',
  audience: '작성자',
  allAudiences: '전체 작성자',
  memberAudience: '회원',
  guestAudience: '외부인원',
  year: '연도',
  allYears: '전체 연도',
  searchButton: '검색',
  newest: '최신순',
  oldest: '오래된순',
  reset: '초기화',
  filteredEmptyTitle: '조건에 맞는 글이 없습니다.',
  filteredEmptyDescription: '검색어 또는 필터를 조정하면 다른 아카이브를 확인할 수 있습니다.',
} as const

export const reviewAudienceLabels = {
  member: archiveFilterLabels.memberAudience,
  guest: archiveFilterLabels.guestAudience,
} as const
