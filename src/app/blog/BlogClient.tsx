"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import type { Post } from "@/lib/posts";

export default function BlogClient({
  posts,
  categories,
}: {
  posts: Post[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filtered =
    activeCategory === "전체"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / postsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  function handleCategory(cat: string) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700 mb-6">
            <span className="text-green-500">✦</span>
            <span>GreenTech 블로그</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            기술과 혁신의{" "}
            <span className="gradient-text">이야기</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            AI, 클라우드, 스타트업 성장에 관한 깊이 있는 인사이트를 만나보세요.
            GreenTech 팀이 직접 경험하고 배운 것들을 공유합니다.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-green-500 text-white shadow-sm shadow-green-200"
                    : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="ml-2 text-xs bg-white/20 px-1.5 py-0.5 rounded-full">
                    {filtered.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginated.length > 0 ? (
            <>
              {currentPage === 1 && activeCategory === "전체" && (
                <div className="mb-8">
                  <BlogCard post={paginated[0]} featured={true} />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(currentPage === 1 && activeCategory === "전체"
                  ? paginated.slice(1)
                  : paginated
                ).map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <p className="text-gray-500">해당 카테고리의 게시글이 없습니다.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-16">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 disabled:opacity-30 hover:border-green-400 hover:text-green-600 transition-colors"
              >
                ←
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                    currentPage === page
                      ? "bg-green-500 text-white shadow-sm"
                      : "border border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-600"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 disabled:opacity-30 hover:border-green-400 hover:text-green-600 transition-colors"
              >
                →
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}