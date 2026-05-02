export const seriesDirectory = {
  '월간 SSAFYnity': {
    slug: 'monthly-ssafynity',
    description: '콘텐츠팀이 매월 전하는 동문회 소식과 커뮤니티 하이라이트입니다.',
    eyebrow: 'Monthly Magazine',
  },
  '개발자라면 공감하는 순간': {
    slug: 'developer-empathy',
    description: '개발자의 웃픈 순간을 짧은 영상과 가벼운 글로 풀어내는 공감형 콘텐츠입니다.',
    eyebrow: 'Developer Reel',
  },
} as const

export function getSeriesDirectoryMeta(label: string) {
  return seriesDirectory[label as keyof typeof seriesDirectory] ?? {
    slug: label
      .toLowerCase()
      .replace(/[^a-z0-9가-힣]+/g, '-')
      .replace(/^-|-$/g, ''),
    description: 'SSAFYnity가 이어서 발행하는 시리즈형 콘텐츠입니다.',
    eyebrow: 'Series',
  }
}

export function getSeriesLabelBySlug(slug: string) {
  return Object.entries(seriesDirectory).find(([, meta]) => meta.slug === slug)?.[0] ?? null
}
