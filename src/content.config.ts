import { defineCollection, z } from 'astro:content'
import { eventArchiveSlugs } from './data/eventArchive'

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['tech', 'journal', 'review', 'notice', 'finance']),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    review: z
      .object({
        authorType: z.enum(['member', 'guest']),
        name: z.string(),
        campus: z.string().optional(),
        cohort: z.string().optional(),
        link: z.string().url().optional(),
        eventSlug: z.enum(eventArchiveSlugs).optional(),
      })
      .optional(),
  }),
})

export const collections = { posts }
