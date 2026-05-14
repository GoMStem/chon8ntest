import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "GreenTech Solutions — 미래를 만드는 기술, 지금 시작하세요",
    template: "%s | GreenTech Solutions",
  },
  description:
    "GreenTech Solutions는 AI 기반 혁신 솔루션으로 기업의 디지털 전환을 이끌어 드립니다. 미래를 만드는 기술, 지금 시작하세요.",
  keywords: ["AI", "디지털전환", "그린테크", "스타트업", "클라우드", "SaaS"],
  authors: [{ name: "GreenTech Solutions" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "GreenTech Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
