import { defineCollection, z } from 'astro:content'
import { eventArchiveSlugs } from './data/eventArchive'

const posts = defineCollection({
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      category: z.enum(['series', 'tech', 'journal', 'review', 'notice', 'finance']),
      coverImage: z.string().optional(),
      eventSlug: z.enum(eventArchiveSlugs).optional(),
      author: z
        .object({
          operatorId: z.string().regex(/^operator-\d{3}$/),
        })
        .optional(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      seriesMeta: z
        .object({
          season: z.string().optional(),
          team: z.string().optional(),
          label: z.string().optional(),
          issueLabel: z.string().optional(),
        })
        .optional(),
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

      if (value.category === 'series') {
        if (!value.coverImage) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['coverImage'],
            message: 'series 글에는 coverImage가 필요합니다.',
          })
        }

        if (!value.seriesMeta?.season) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['seriesMeta', 'season'],
            message: 'series 글에는 seriesMeta.season이 필요합니다.',
          })
        }

        if (!value.seriesMeta?.team) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['seriesMeta', 'team'],
            message: 'series 글에는 seriesMeta.team이 필요합니다.',
          })
        }

        if (!value.seriesMeta?.label) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['seriesMeta', 'label'],
            message: 'series 글에는 seriesMeta.label이 필요합니다.',
          })
        }

        if (!value.seriesMeta?.issueLabel) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['seriesMeta', 'issueLabel'],
            message: 'series 글에는 seriesMeta.issueLabel이 필요합니다.',
          })
        }
      }
    }),
})

export const collections = { posts }
