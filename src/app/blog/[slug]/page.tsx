import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import { getPostBySlug, getRelatedPosts } from "@/lib/blogData";
import type { Metadata } from "next";

export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "포스트를 찾을 수 없습니다" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderContent(raw: string) {
  const lines = raw.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }

    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="text-lg font-semibold text-gray-800 mt-6 mb-3">{line.slice(4)}</h3>);
    } else {
      elements.push(<p key={i} className="text-gray-600 leading-relaxed mb-4">{line}</p>);
    }
    i++;
  }

  return elements;
}

export default async function BlogDetailPage(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const headings = post.content
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => l.slice(3).trim());

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-green-600 transition-colors">홈</Link>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-300">
              <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            <Link href="/blog" className="hover:text-green-600 transition-colors">블로그</Link>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-300">
              <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-900 font-medium truncate max-w-xs">{post.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-16">
          {/* Main Article */}
          <article>
            {/* Header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-3 py-1 bg-green-50 text-green-700 rounded-full">
                  {post.category}
                </span>
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                {post.title}
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8">{post.excerpt}</p>

              {/* Author & Meta */}
              <div className="flex items-center justify-between flex-wrap gap-4 py-6 border-t border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {post.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.authorRole} · GreenTech Solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {post.readTime} 읽기
                  </span>
                </div>
              </div>
            </header>

            {/* Cover image placeholder */}
            <div className="h-72 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl flex items-center justify-center mb-10 border border-green-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/70 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-green-600" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </div>
                <p className="text-sm text-green-600 font-medium">{post.imageAlt}</p>
              </div>
            </div>

            {/* Content */}
            <div className="prose-green max-w-none">
              {renderContent(post.content)}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm font-semibold text-gray-700 mb-4">이 글이 유용했다면 공유해 주세요</p>
              <div className="flex gap-3">
                {[
                  { label: "트위터 공유", color: "bg-black text-white hover:bg-gray-800" },
                  { label: "링크드인 공유", color: "bg-blue-600 text-white hover:bg-blue-700" },
                  { label: "링크 복사", color: "bg-gray-100 text-gray-700 hover:bg-gray-200" },
                ].map((btn) => (
                  <button
                    key={btn.label}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${btn.color}`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            {/* Table of Contents */}
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                  목차
                </h3>
                <nav className="space-y-2">
                  {headings.map((heading, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block text-sm text-gray-600 hover:text-green-600 transition-colors py-1 border-l-2 border-transparent hover:border-green-400 pl-3"
                    >
                      {heading}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Author Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">작성자</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {post.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.authorRole}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  GreenTech Solutions의 {post.authorRole}로, 기술 혁신과 비즈니스 성장의 교차점에서 일하고 있습니다.
                </p>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">태그</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1.5 bg-green-50 text-green-700 rounded-full hover:bg-green-100 transition-colors cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        <section className="mt-20 pt-12 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">관련 글</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 text-center border border-green-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">더 많은 인사이트를 받아보세요</h3>
          <p className="text-gray-600 mb-6">매주 최신 기술 트렌드와 비즈니스 인사이트를 이메일로 전달합니다.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="이메일 주소"
              className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 transition-all"
            />
            <button className="px-6 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors">
              구독하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
