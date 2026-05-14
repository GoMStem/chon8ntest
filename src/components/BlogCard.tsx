import Link from "next/link";
import type { BlogPost } from "@/lib/blogData";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    "기술 트렌드": "bg-blue-50 text-blue-700",
    ESG: "bg-green-50 text-green-700",
    엔지니어링: "bg-purple-50 text-purple-700",
    그로스: "bg-orange-50 text-orange-700",
    "개발 문화": "bg-pink-50 text-pink-700",
    창업: "bg-yellow-50 text-yellow-700",
  };

  const colorClass = categoryColors[post.category] ?? "bg-gray-100 text-gray-700";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 overflow-hidden ${
        featured ? "lg:flex" : ""
      }`}
    >
      {/* Image Placeholder */}
      <div
        className={`bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center ${
          featured ? "lg:w-2/5 min-h-48 lg:min-h-0" : "h-48"
        }`}
      >
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-white/70 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-8 h-8 text-green-600"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3z"
              />
            </svg>
          </div>
          <p className="text-xs text-green-600/70 font-medium">{post.imageAlt}</p>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col justify-between ${featured ? "lg:w-3/5" : ""}`}>
        <div>
          {/* Category & Tags */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
              {post.category}
            </span>
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3
            className={`font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-200 mb-2 line-clamp-2 ${
              featured ? "text-xl" : "text-base"
            }`}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </div>

        {/* Author & Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {post.author[0]}
            </div>
            <div>
              <p className="text-xs font-medium text-gray-900">{post.author}</p>
              <p className="text-xs text-gray-400">{post.authorRole}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-3.5 h-3.5"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {post.readTime}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
