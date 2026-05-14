import { getAllPosts } from '@/lib/posts'
import BlogClient from './BlogClient'

export default function BlogPage() {
  const posts = getAllPosts()
  const uniqueCategories = Array.from(new Set(posts.map(p => p.category)))
  const categories = ['전체', ...uniqueCategories]

  return <BlogClient posts={posts} categories={categories} />
}