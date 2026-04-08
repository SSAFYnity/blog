import type { CollectionEntry } from 'astro:content'

export function isPublicPost(post: CollectionEntry<'posts'>) {
  const slugLeaf = post.slug.split('/').at(-1) ?? post.slug
  return !post.data.draft && !slugLeaf.startsWith('_')
}
