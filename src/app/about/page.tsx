import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "회사 소개",
  description: "GreenTech Solutions — AI와 지속 가능한 기술로 기업의 미래를 함께 만들어갑니다.",
};

const team = [
  {
    name: "김민준",
    role: "CEO & 공동 창업자",
    bio: "전 삼성 SDS 수석 엔지니어. KAIST 컴퓨터공학 박사. AI 기반 기업 솔루션 분야 15년 경력. Forbes 30 Under 30 선정.",
    emoji: "👨‍💼",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "이서연",
    role: "COO & 공동 창업자",
    bio: "전 McKinsey & Company 컨설턴트. 서울대 경영학 MBA. 스타트업 스케일링과 ESG 전략 전문가. 10개 이상 기업 IPO 자문 경험.",
    emoji: "👩‍💼",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "박지호",
    role: "CTO",
    bio: "전 Google Cloud 수석 엔지니어. 미국 MIT 컴퓨터공학 석사. 클라우드 네이티브 아키텍처와 분산 시스템 전문가. 특허 12건 보유.",
    emoji: "👨‍💻",
    color: "from-purple-400 to-violet-500",
  },
  {
    name: "최유진",
    role: "CPO",
    bio: "전 카카오 프로덕트 디렉터. 연세대 HCI 석사. 사용자 중심 설계와 그로스 해킹 전문가. 누적 1000만 사용자 제품 빌딩 경험.",
    emoji: "👩‍🎨",
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "정현우",
    role: "Head of Engineering",
    bio: "전 네이버 클라우드 플랫폼 팀장. 포항공대 컴퓨터공학 석사. DevOps와 SRE 전문가. 99.999% 가용성 시스템 설계 경험.",
    emoji: "👨‍🔬",
    color: "from-teal-400 to-cyan-500",
  },
  {
    name: "한소희",
    role: "Head of Design",
    bio: "전 라인 시니어 UX 디자이너. 홍익대 시각디자인 학사. B2B SaaS 디자인 시스템 구축 및 브랜드 아이덴티티 전문가.",
    emoji: "👩‍🎤",
    color: "from-pink-400 to-rose-500",
  },
];

const timeline = [
  {
    year: "2021",
    quarter: "Q1",
    title: "GreenTech Solutions 창업",
    desc: "서울 강남구 역삼동 소규모 사무실에서 5명의 팀으로 시작. 첫 번째 AI 분석 플랫폼 프로토타입 완성.",
  },
  {
    year: "2021",
    quarter: "Q4",
    title: "시드 투자 20억 원 유치",
    desc: "소프트뱅크 벤처스, 카카오 인베스트먼트로부터 시드 투자 유치. 팀 규모 15명으로 확대.",
  },
  {
    year: "2022",
    quarter: "Q2",
    title: "제품 정식 출시 & 첫 100개 고객사",
    desc: "GreenTech AI Platform v1.0 정식 출시. 3개월 만에 유료 고객사 100개 돌파. NPS 78점 달성.",
  },
  {
    year: "2022",
    quarter: "Q4",
    title: "시리즈 A 80억 원 투자 유치",
    desc: "한국투자파트너스, Altos Ventures 주도로 시리즈 A 완료. 일본, 싱가포르 시장 진출 준비.",
  },
  {
    year: "2023",
    quarter: "Q2",
    title: "아시아 시장 확장",
    desc: "도쿄, 싱가포르 지사 설립. 아시아 태평양 지역 고객사 150개 돌파. 팀 규모 45명으로 성장.",
  },
  {
    year: "2024",
    quarter: "Q1",
    title: "시리즈 B 150억 원 투자 유치",
    desc: "글로벌 VC 주도로 시리즈 B 완료. 유럽 시장 진출 및 연구개발 확대. 누적 투자 250억 원 달성.",
  },
  {
    year: "2024",
    quarter: "Q3",
    title: "고객사 400개 돌파 & Best AI Startup 수상",
    desc: "글로벌 고객사 400개 돌파. Gartner Cool Vendor 선정. Forbes Asia 30 Under 30 팀원 2명 선정.",
  },
  {
    year: "2026",
    quarter: "현재",
    title: "500개 고객사, IPO 준비",
    desc: "전 세계 500개 이상 고객사, 85명 팀원. 2027년 코스닥 상장을 목표로 준비 중. ARR 200억 원 돌파.",
  },
];

const values = [
  {
    icon: "💡",
    title: "혁신 우선",
    desc: "현상 유지에 안주하지 않습니다. 더 나은 방법이 있다면 과감히 도전합니다. 실패를 배움의 기회로 삼고 빠르게 반복합니다.",
  },
  {
    icon: "🤝",
    title: "고객 성공이 우리 성공",
    desc: "고객의 성공 없이 우리의 성공도 없습니다. 모든 결정의 중심에 고객을 놓고 진정한 파트너십을 추구합니다.",
  },
  {
    icon: "🌱",
    title: "지속 가능한 성장",
    desc: "단기 이익보다 장기적 가치를 우선합니다. 환경, 사회, 거버넌스 측면에서 책임 있는 기업이 되겠습니다.",
  },
  {
    icon: "🔓",
    title: "투명성과 신뢰",
    desc: "내부에서도, 고객과의 관계에서도 투명함을 기본으로 합니다. 좋은 소식만큼 나쁜 소식도 빠르게 공유합니다.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700 mb-6">
              <span>회사 소개</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              기술로 세상을
              <br />
              <span className="gradient-text">더 좋게 만듭니다</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              GreenTech Solutions는 2021년 서울에서 설립된 B2B AI 테크 기업입니다.
              우리는 첨단 기술과 지속 가능성의 가치를 결합하여, 고객 기업들이 더 효율적이고
              스마트하게 성장할 수 있도록 돕고 있습니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-all shadow-md shadow-green-200 hover:-translate-y-0.5 duration-200"
              >
                함께 일하기
              </Link>
              <a
                href="#team"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-700 border-2 border-gray-200 hover:border-green-300 rounded-xl transition-all hover:-translate-y-0.5 duration-200"
              >
                팀 만나기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-10 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl mb-6">🎯</div>
              <h2 className="text-2xl font-bold mb-4">미션</h2>
              <p className="text-green-50 leading-relaxed text-lg">
                모든 기업이 AI의 힘을 활용하여 더 나은 결정을 내리고, 더 효율적으로 운영하며,
                더 지속 가능한 방식으로 성장할 수 있도록 돕는 것.
              </p>
            </div>
            <div className="bg-gray-900 rounded-3xl p-10 text-white">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-6">🔭</div>
              <h2 className="text-2xl font-bold mb-4">비전</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                2030년까지 아시아 최고의 AI 솔루션 기업이 되어, 기술이 인류와 지구 모두에게
                이로운 방향으로 발전하는 데 기여하는 것.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">핵심 가치</span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">우리가 믿는 것들</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                <span className="text-4xl mb-5 block">{v.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">팀 소개</span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              최고의 인재들이
              <br />
              <span className="gradient-text">함께합니다</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              세계 최고의 기업에서 경험을 쌓은 전문가들이 공통의 미션 아래 모였습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-32 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                  <span className="text-6xl">{member.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-green-600 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-green-50 rounded-2xl p-8 text-center border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">우리와 함께 성장하세요</h3>
            <p className="text-gray-600 mb-6">현재 여러 포지션에서 열정적인 분들을 찾고 있습니다.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors shadow-sm"
            >
              채용 공고 보기
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">성장 스토리</span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              우리의 여정
            </h2>
            <p className="mt-4 text-gray-500">작은 스타트업에서 아시아를 대표하는 AI 기업으로.</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-green-100" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full sm:w-5/12 ml-16 sm:ml-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <div className={`bg-white rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300 ${i % 2 !== 0 ? "" : ""}`}>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-sm font-bold text-green-600">{item.year}</span>
                        <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">{item.quarter}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-8 sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-md mt-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investors & Recognition */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">투자사 & 수상 이력</p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {[
              "소프트뱅크 벤처스",
              "한국투자파트너스",
              "Altos Ventures",
              "카카오 인베스트먼트",
              "Forbes 30 Under 30",
              "Gartner Cool Vendor",
            ].map((item) => (
              <div key={item} className="text-gray-400 font-semibold text-sm hover:text-green-600 transition-colors cursor-default">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
