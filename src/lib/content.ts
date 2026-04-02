import type { CollectionEntry } from 'astro:content'

export function isPublicPost(post: CollectionEntry<'posts'>) {
  const slugLeaf = post.slug.split('/').at(-1) ?? post.slug
  return !post.data.draft && !slugLeaf.startsWith('_')
}

export function getFeaturedPost(posts: CollectionEntry<'posts'>[]) {
  const featuredPosts = posts.filter((post) => post.data.featured)

  if (featuredPosts.length > 1) {
    const slugs = featuredPosts.map((post) => post.slug).join(', ')
    throw new Error(
      `[posts] featured 글은 하나만 허용됩니다. 현재 ${featuredPosts.length}개가 설정되어 있습니다: ${slugs}`
    )
  }

  return featuredPosts[0] ?? posts[0]
}
