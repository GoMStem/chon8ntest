import { getAllPosts, getPostBySlug } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="mb-6">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-xl text-gray-500 mb-8">{post.description}</p>

        <div className="flex items-center gap-3 pb-8 border-b border-gray-100 mb-10">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            {post.author[0]}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{post.author}</p>
            <p className="text-xs text-gray-400">{post.date}</p>
          </div>
        </div>

        <div className="flex gap-2 mb-10 flex-wrap">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        <div
          className="prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </div>
  )
}