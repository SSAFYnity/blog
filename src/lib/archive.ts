import type { CollectionEntry } from 'astro:content'

import { eventArchiveMap } from '../data/eventArchive'

type PostEntry = CollectionEntry<'posts'>

type ReviewMeta = {
  authorType: 'member' | 'guest'
  name: string
  campus?: string
  cohort?: string
}

export function formatArchiveDate(date: Date) {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function formatReviewAuthor(review?: ReviewMeta) {
  if (!review) return null
  if (review.authorType === 'member') {
    return [review.name, review.campus, review.cohort].filter(Boolean).join(' · ')
  }

  return review.name
}

export function buildArchiveSearchText(post: PostEntry) {
  const reviewBits =
    post.data.review?.authorType === 'member'
      ? [
          post.data.review.name,
          post.data.review.campus,
          post.data.review.cohort,
          post.data.review.eventSlug ? eventArchiveMap[post.data.review.eventSlug]?.title : '',
        ]
      : [
          post.data.review?.name,
          post.data.review?.eventSlug ? eventArchiveMap[post.data.review.eventSlug]?.title : '',
        ]

  return [
    post.data.title,
    post.data.description,
    ...post.data.tags,
    ...reviewBits,
    post.body,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
}
