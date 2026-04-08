// 블로그 자체의 공통 메타데이터입니다.
// 브랜드/링크 값은 공식홈페이지를 기준으로 수동 동기화합니다.
// 카테고리 정의와 카테고리별 표시 정보는 블로그가 원본입니다.
// [업데이트 필요] 홈 URL, 공식 메일, SNS 링크 변경 시 메인 siteData.ts를 먼저 수정한 뒤 여기 반영하세요.
// [주의] 이 값은 블로그 Header, Footer, 메타 정보에 함께 반영됩니다.
// 함께 확인: /Users/hyeona/Dev/SSAFYnity/ssafynity.github.io/src/data/siteData.ts
export const site = {
  name: 'SSAFYnity 블로그',
  shortName: 'SSAFYnity',
  title: 'SSAFYnity 블로그',
  description: '공지, 일지, 기술, 후기, 회비 기록을 담는 SSAFYnity 공식 블로그',
  slogan: '싸피 수료생들이 직접 운영하는 동문회의 공식 블로그',
  baseUrl: 'https://ssafynity.github.io/blog',
  links: {
    home: 'https://ssafynity.github.io',
    privacy: 'https://ssafynity.github.io/privacy',
    terms: 'https://ssafynity.github.io/terms',
  },
  socialLinks: [
    {
      label: '문의하기',
      href: 'mailto:ssafynity@gmail.com',
      showInFooter: true,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/ssafynity/',
      showInFooter: true,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/ssafynity',
      showInFooter: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/SSAFYnity',
      showInFooter: false,
    },
  ],
  categories: [
    {
      slug: 'notice',
      title: '공지',
      description: '동문회 운영 공지와 주요 안내를 전하는 글',
    },
    {
      slug: 'journal',
      title: '일지',
      description: '동문회가 운영한 행사의 하루를 전하는 기록',
    },
    {
      slug: 'tech',
      title: '기술',
      description: '운영 개발과 세미나 내용을 함께 나누는 기록',
    },
    {
      slug: 'review',
      title: '후기',
      description: '실제 참가자들의 경험과 소감을 담은 후기',
    },
    {
      slug: 'finance',
      title: '회비',
      description: '동문회비 사용 내역을 투명하게 공개하는 기록',
    },
  ],
} as const

export type Category = (typeof site.categories)[number]
export type CategorySlug = Category['slug']

export const categoryMap = Object.fromEntries(
  site.categories.map((category) => [category.slug, category])
) as Record<CategorySlug, Category>

export const categoryStyles: Record<CategorySlug, string> = {
  tech: 'is-blue',
  journal: 'is-sky',
  review: 'is-slate',
  notice: 'is-navy',
  finance: 'is-amber',
}

export const getCategoryTitle = (slug: CategorySlug) => categoryMap[slug].title
