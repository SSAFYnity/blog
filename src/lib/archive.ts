import type { CollectionEntry } from 'astro:content'

import { eventArchiveMap } from '../data/eventArchive'
import { publicOperatorProfileMap } from '../data/operatorProfiles'

type PostEntry = CollectionEntry<'posts'>

type ReviewMeta = {
  authorType: 'member' | 'guest'
  operatorId?: string
  name: string
  campus?: string
  cohort?: string
  eventSlug?: keyof typeof eventArchiveMap
}

function resolveReviewAuthor(review?: ReviewMeta) {
  if (!review?.operatorId) return null
  return publicOperatorProfileMap[review.operatorId] ?? null
}

export function getPostEventSlug(post: PostEntry) {
  return post.data.eventSlug ?? post.data.review?.eventSlug ?? null
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

  const resolvedReviewAuthor = resolveReviewAuthor(review)
  if (review.authorType === 'member') {
    return [
      resolvedReviewAuthor?.name ?? review.name,
      resolvedReviewAuthor?.campus ?? review.campus,
      resolvedReviewAuthor?.cohort != null ? `${resolvedReviewAuthor.cohort}기` : review.cohort,
    ]
      .filter(Boolean)
      .join(' · ')
  }

  return review.name
}

export function getReviewAuthorDisplayName(review?: ReviewMeta) {
  if (!review) return null
  return resolveReviewAuthor(review)?.name ?? review.name
}

export function buildArchiveSearchText(post: PostEntry) {
  const eventSlug = getPostEventSlug(post)
  const resolvedReviewAuthor = resolveReviewAuthor(post.data.review)
  const reviewBits =
    post.data.review?.authorType === 'member'
      ? [
          resolvedReviewAuthor?.name ?? post.data.review.name,
          resolvedReviewAuthor?.campus ?? post.data.review.campus,
          resolvedReviewAuthor?.cohort != null ? `${resolvedReviewAuthor.cohort}` : post.data.review.cohort,
          eventSlug ? eventArchiveMap[eventSlug]?.title : '',
        ]
      : [
          post.data.review?.name,
          eventSlug ? eventArchiveMap[eventSlug]?.title : '',
        ]

  return [
    post.data.title,
    post.data.description,
    ...post.data.tags,
    eventSlug ? eventArchiveMap[eventSlug]?.title : '',
    ...reviewBits,
    post.body,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
}
