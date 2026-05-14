"use client";

import { useState } from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { blogPosts, categories } from "@/lib/blogData";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filtered =
    activeCategory === "전체"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

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

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="블로그 검색..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
            />
          </div>
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
              {/* Featured first post */}
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
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-gray-400" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
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
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
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
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-green-50 border-t border-green-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            새 글이 올라올 때마다 받아보세요
          </h2>
          <p className="text-gray-600 mb-8">
            매주 수요일, GreenTech의 최신 기술 인사이트와 업계 트렌드를 이메일로 전달합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
            />
            <button className="px-6 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors whitespace-nowrap shadow-sm">
              구독하기
            </button>
          </div>
          <p className="mt-3 text-xs text-gray-400">스팸 없음. 언제든 구독 취소 가능.</p>
        </div>
      </section>
    </div>
  );
}
