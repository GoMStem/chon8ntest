"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    label: "주소",
    value: "서울특별시 강남구 테헤란로 152\nGreenTech Tower 15층",
    href: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    label: "이메일",
    value: "hello@greentech.io",
    href: "mailto:hello@greentech.io",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
    label: "전화",
    value: "02-1234-5678",
    href: "tel:02-1234-5678",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    label: "운영 시간",
    value: "평일 09:00 – 18:00\n(주말 및 공휴일 제외)",
    href: null,
  },
];

const inquiryTypes = [
  "제품/서비스 문의",
  "파트너십 제안",
  "기술 지원",
  "투자 문의",
  "채용 문의",
  "언론/PR 문의",
  "기타",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    type: inquiryTypes[0],
    message: "",
    agree: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700 mb-6">
            <span>문의하기</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            무엇이든{" "}
            <span className="gradient-text">물어보세요</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            제품 문의, 파트너십 제안, 기술 지원 등 어떤 내용이든 연락 주세요.
            영업일 기준 24시간 이내에 답변 드립니다.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">연락처 정보</h2>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-green-600 shadow-sm flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-gray-700 hover:text-green-600 transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative border border-gray-200">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-3">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-green-600" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">강남구 테헤란로 152</p>
                  <p className="text-xs text-gray-500 mt-1">GreenTech Tower 15층</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-xs text-green-600 hover:text-green-700 font-medium underline"
                  >
                    Google Maps에서 보기
                  </a>
                </div>
                {/* Grid lines for map feel */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="absolute w-full h-px bg-gray-500" style={{ top: `${(i + 1) * 16.67}%` }} />
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="absolute h-full w-px bg-gray-500" style={{ left: `${(i + 1) * 12.5}%` }} />
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4">빠른 답변이 필요하신가요?</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 text-sm text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <span className="text-lg">📚</span>
                    도움말 센터 방문하기
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-sm text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <span className="text-lg">💬</span>
                    라이브 채팅 시작하기
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-sm text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <span className="text-lg">🎥</span>
                    제품 데모 예약하기
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center py-16 px-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-green-600" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">문의가 접수되었습니다!</h2>
                    <p className="text-gray-600 mb-2">
                      <strong>{form.name}</strong>님, 감사합니다.
                    </p>
                    <p className="text-gray-600 mb-8">
                      영업일 기준 24시간 이내에 <strong>{form.email}</strong>로 답변 드리겠습니다.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", company: "", phone: "", type: inquiryTypes[0], message: "", agree: false });
                      }}
                      className="px-6 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-colors"
                    >
                      새 문의 작성하기
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8 lg:p-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">문의 양식</h2>
                  <p className="text-gray-500 mb-8 text-sm">
                    * 표시된 항목은 필수 입력사항입니다.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          성함 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="홍길동"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          회사명
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="(주) 홍길동 컴퍼니"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          이메일 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="hello@company.com"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          연락처
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="010-0000-0000"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        문의 유형 <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="type"
                        required
                        value={form.type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        {inquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        문의 내용 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="어떤 도움이 필요하신가요? 자세히 알려주시면 더 빠르고 정확하게 답변 드릴 수 있습니다."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 focus:bg-white transition-all resize-none"
                      />
                      <p className="mt-1 text-xs text-gray-400 text-right">{form.message.length} / 1000자</p>
                    </div>

                    {/* Agreement */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="agree"
                        name="agree"
                        required
                        checked={form.agree}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 accent-green-500 cursor-pointer"
                      />
                      <label htmlFor="agree" className="text-sm text-gray-600 cursor-pointer">
                        <span className="text-red-500">*</span>{" "}
                        <a href="#" className="text-green-600 hover:underline">개인정보 처리방침</a>에 동의하며,
                        문의 처리를 위한 개인정보 수집 및 이용에 동의합니다.
                      </label>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-600 disabled:bg-green-300 rounded-xl transition-all shadow-md shadow-green-200 hover:shadow-green-300 hover:-translate-y-0.5 duration-200 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          처리 중...
                        </>
                      ) : (
                        <>
                          문의 보내기
                          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.154.75.75 0 0 0 0-1.115A28.897 28.897 0 0 0 3.105 2.288Z" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">자주 묻는 질문</h2>
            <p className="mt-3 text-gray-500">많이 문의하시는 내용들을 모았습니다.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "무료 체험 기간은 얼마나 되나요?",
                a: "모든 플랜은 신용카드 없이 14일 무료 체험을 제공합니다. 체험 기간 동안 모든 기능을 제한 없이 사용하실 수 있습니다.",
              },
              {
                q: "기존 시스템과 통합이 가능한가요?",
                a: "네, 저희 플랫폼은 REST API와 Webhook을 통해 기존 ERP, CRM, 데이터베이스 등과 쉽게 통합됩니다. 전담 솔루션 아키텍트가 통합 과정을 지원합니다.",
              },
              {
                q: "데이터 보안은 어떻게 관리되나요?",
                a: "SOC 2 Type II 인증과 ISO 27001 규격을 준수하며, 모든 데이터는 AES-256으로 암호화됩니다. 고객 데이터는 고객의 동의 없이 절대 공유하지 않습니다.",
              },
              {
                q: "계약 해지는 어떻게 하나요?",
                a: "월간 구독은 언제든지 해지할 수 있습니다. 연간 구독의 경우 잔여 기간에 대한 환불 정책이 적용됩니다. 자세한 내용은 이용약관을 참고해 주세요.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-green-200 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-green-100 rounded-lg text-green-600 text-xs font-bold flex items-center justify-center">
                    Q
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
