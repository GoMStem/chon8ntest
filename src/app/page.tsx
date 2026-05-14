import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blogData";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "AI 기반 자동화",
    description: "최신 인공지능 기술로 반복 업무를 자동화하고 팀의 생산성을 3배 향상시키세요. 머신러닝 모델이 24시간 비즈니스를 최적화합니다.",
    color: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "실시간 데이터 분석",
    description: "대시보드 하나로 비즈니스의 모든 지표를 한눈에 파악하세요. 데이터 기반 의사결정으로 경쟁 우위를 확보합니다.",
    color: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "엔터프라이즈 보안",
    description: "SOC 2 Type II 인증과 ISO 27001 규격을 준수하는 최고 수준의 보안으로 소중한 데이터를 보호합니다.",
    color: "from-purple-50 to-violet-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "글로벌 인프라",
    description: "전 세계 12개 리전에 분산된 클라우드 인프라로 어디서든 99.99% 가용성을 보장합니다. 지연 없는 글로벌 서비스를 경험하세요.",
    color: "from-orange-50 to-amber-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    title: "빠른 도입 & 온보딩",
    description: "평균 2주 내 도입 완료. 전담 솔루션 아키텍트와 함께 기존 시스템과의 완벽한 통합을 지원합니다.",
    color: "from-pink-50 to-rose-50",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "전문가 24/7 지원",
    description: "언제든지 전문 엔지니어팀이 함께합니다. 평균 응답 시간 15분 이내, SLA 99.9% 보장으로 안심하고 비즈니스에 집중하세요.",
    color: "from-teal-50 to-cyan-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

const stats = [
  { value: "500+", label: "고객사", sublabel: "글로벌 파트너" },
  { value: "1,200+", label: "완료 프로젝트", sublabel: "성공적인 도입 사례" },
  { value: "85명", label: "팀원", sublabel: "최고의 인재들" },
  { value: "99.2%", label: "고객 만족도", sublabel: "Net Promoter Score 72" },
];

const recentPosts = blogPosts.slice(0, 3);

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-white pt-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-green-50 rounded-full blur-3xl opacity-60 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl opacity-40 -translate-x-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700 mb-8 animate-fade-in-up">
              <span className="text-green-500">✦</span>
              <span>혁신적인 솔루션</span>
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up delay-100">
              미래를 만드는{" "}
              <span className="gradient-text block sm:inline">기술,</span>
              <br className="hidden sm:block" />
              지금{" "}
              <span className="gradient-text">시작하세요</span>
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-10 animate-fade-in-up delay-200">
              GreenTech Solutions는 AI 기반 혁신 솔루션으로 여러분의 비즈니스를 다음 단계로
              이끌어 드립니다. 복잡한 기술 문제를 단순하고 강력하게 해결합니다.
            </p>

            <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up delay-300">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl shadow-lg shadow-green-200 hover:shadow-green-300 transition-all duration-200 hover:-translate-y-0.5"
              >
                무료로 시작하기
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-green-400 hover:text-green-700 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                회사 소개 보기
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 animate-fade-in-up delay-400">
              <p className="text-sm text-gray-400">신뢰받는 파트너:</p>
              {["삼성전자", "LG CNS", "카카오", "네이버"].map((company) => (
                <span key={company} className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors cursor-default">
                  {company}
                </span>
              ))}
            </div>
          </div>

          {/* Floating card — desktop only */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block animate-float">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-72">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-green-600" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">이번 달 매출</p>
                  <p className="text-lg font-bold text-gray-900">+127%</p>
                </div>
              </div>
              <div className="space-y-2">
                {[90, 75, 85, 60].map((w, i) => (
                  <div key={i} className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">AI가 분석한 성과 지표</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">핵심 기능</span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              비즈니스 성장을 위한
              <br />
              <span className="gradient-text">모든 것이 준비되어 있습니다</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              최첨단 기술과 직관적인 인터페이스로 복잡한 비즈니스 문제를 쉽고 빠르게 해결하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${feature.color} rounded-2xl p-8 border border-white hover:border-green-200 hover:shadow-lg transition-all duration-300`}
              >
                <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={feature.iconColor}>{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform duration-200">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto bg-gradient-to-br from-green-100 via-emerald-50 to-white rounded-3xl overflow-hidden border border-green-100 shadow-xl flex flex-col items-center justify-center p-12">
                <div className="w-24 h-24 bg-green-500 rounded-3xl flex items-center justify-center mb-8 shadow-lg shadow-green-200">
                  <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">글로벌 기술 혁신</h3>
                <p className="text-sm text-gray-500 text-center">세계 각지의 기업과 함께 미래를 만들어갑니다</p>
                <div className="mt-8 grid grid-cols-3 gap-4 w-full">
                  {["🇰🇷", "🇺🇸", "🇯🇵", "🇸🇬", "🇩🇪", "🇬🇧"].map((flag, i) => (
                    <div key={i} className="flex items-center justify-center w-10 h-10 bg-white rounded-xl shadow-sm text-xl mx-auto">
                      {flag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-green-600 text-lg">🏆</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">2025 수상</p>
                    <p className="text-sm font-bold text-gray-900">Best AI Startup</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">우리에 대해</span>
              <h2 className="mt-3 text-4xl font-bold text-gray-900 leading-tight">
                기술로 더 나은
                <br />
                <span className="gradient-text">세상을 만듭니다</span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                2021년 설립된 GreenTech Solutions는 AI와 지속 가능한 기술을 결합하여 기업들이
                더 효율적이고 환경 친화적으로 운영될 수 있도록 돕고 있습니다.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                우리는 단순히 소프트웨어를 제공하는 것이 아니라, 고객의 성공을 위한 진정한
                기술 파트너가 되고자 합니다. 500개 이상의 기업과 함께 성장하며 쌓아온
                노하우를 바탕으로 여러분의 비즈니스를 혁신합니다.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "AI 기반 비즈니스 인텔리전스 플랫폼",
                  "ISO 27001 / SOC 2 Type II 인증 보안",
                  "업계 최고 수준 99.99% 업타임 SLA",
                  "국내외 85명 이상의 전문 엔지니어팀",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-green-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 group"
                >
                  자세히 알아보기
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">블로그</span>
              <h2 className="mt-3 text-4xl font-bold text-gray-900">
                최신 인사이트 &{" "}
                <span className="gradient-text">스토리</span>
              </h2>
              <p className="mt-3 text-gray-500">기술, 비즈니스, 그리고 혁신에 대한 이야기를 나눕니다.</p>
            </div>
            <Link
              href="/blog"
              className="mt-6 sm:mt-0 inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 group"
            >
              전체 글 보기
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-green-950 border border-gray-800 overflow-hidden p-12 lg:p-20 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-green-500/10 blur-3xl rounded-full" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm font-medium text-green-400 mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                지금 바로 시작할 수 있습니다
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                비즈니스 혁신을
                <br />
                <span className="gradient-text">오늘부터 시작하세요</span>
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                14일 무료 체험, 신용카드 불필요. 500개 이상의 기업이 이미 GreenTech Solutions와
                함께 성장하고 있습니다.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-400 rounded-xl shadow-lg shadow-green-900/50 transition-all duration-200 hover:-translate-y-0.5"
                >
                  14일 무료 체험 시작
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border border-gray-700 hover:border-gray-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  전문가와 상담하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
