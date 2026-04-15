import { defineCollection, z } from 'astro:content'
import { eventArchiveSlugs } from './data/eventArchive'

const posts = defineCollection({
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      category: z.enum(['tech', 'journal', 'review', 'notice', 'finance']),
      eventSlug: z.enum(eventArchiveSlugs).optional(),
      author: z
        .object({
          operatorId: z.string().regex(/^operator-\d{3}$/),
        })
        .optional(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      review: z
        .object({
          authorType: z.enum(['member', 'guest']),
          operatorId: z.string().regex(/^operator-\d{3}$/).optional(),
          name: z.string(),
          campus: z.string().optional(),
          cohort: z.string().optional(),
          link: z.string().url().optional(),
          eventSlug: z.enum(eventArchiveSlugs).optional(),
        })
        .optional(),
    })
    .superRefine((value, ctx) => {
      if (value.category === 'journal' && !value.author?.operatorId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['author', 'operatorId'],
          message: 'journal 글에는 author.operatorId가 필요합니다.',
        })
      }

      if (value.category === 'review' && value.review?.authorType === 'member' && !value.review.operatorId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['review', 'operatorId'],
          message: '운영진 review 글에는 review.operatorId가 필요합니다.',
        })
      }
    }),
})

export const collections = { posts }
