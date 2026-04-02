export const site = {
  name: 'SSAFYnity 블로그',
  shortName: 'SSAFYnity',
  title: 'SSAFYnity 블로그',
  description: '공지, 일지, 기술, 후기, 회비 기록을 담는 SSAFYnity 공식 블로그',
  slogan: '싸피 수료생들이 직접 운영하는 동문회의 공식 블로그',
  baseUrl: 'https://ssafynity.github.io/blog',
  links: {
    home: 'https://ssafynity.github.io',
    github: 'https://github.com/SSAFYnity',
    instagram: 'https://www.instagram.com/ssafynity/',
    linkedin: 'https://www.linkedin.com/company/ssafynity',
    email: 'mailto:ssafynity@gmail.com',
  },
  categories: [
    {
      slug: 'notice',
      title: '공지',
      description: '동문회 운영 공지와 주요 안내를 전하는 글',
    },
    {
      slug: 'journal',
      title: '일지',
      description: '동문회 활동과 운영 흐름을 남기는 기록',
    },
    {
      slug: 'tech',
      title: '기술',
      description: '세미나, 개발 경험, 학습 인사이트를 다루는 글',
    },
    {
      slug: 'review',
      title: '후기',
      description: '참여자의 경험과 소감을 전하는 후기 글',
    },
    {
      slug: 'finance',
      title: '회비',
      description: '회비 집행 결과와 운영 내역을 공개하는 기록',
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
