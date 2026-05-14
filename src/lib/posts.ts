import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export type Post = {
  slug: string
  title: string
  date: string
  description: string
  category: string
  author: string
  tags: string[]
}

// 모든 글 목록 가져오기
export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        description: data.description || '',
        category: data.category || '기타',
        author: data.author || '관리자',
        tags: data.tags || [],
      }
    })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

// 특정 글 하나 가져오기
export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${decodeURIComponent(slug)}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    description: data.description || '',
    category: data.category || '기타',
    author: data.author || '관리자',
    tags: data.tags || [],
    contentHtml,
  }
}