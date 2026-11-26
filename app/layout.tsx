import Script from "next/script";
import { NadooAd } from "@/components/NadooAd";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_NAME, SITE_SUB, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";
import { CoupangSticky } from "@/components/CoupangSticky";

const sans = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-noto-sans", weight: ["400", "500", "700"] });
const serif = Noto_Serif_KR({ subsets: ["latin"], variable: "--font-noto-serif", weight: ["400", "600", "700"] });

const description = `${SITE_TAGLINE}. ${SITE_SUB}`;

export const metadata: Metadata = {
  verification: { google: "LglMaYLzS6dacAPQ5ZgZdPgzdtfLbp_1Rk5vh3WNPlM", other: { "naver-site-verification": "b9c1d058dba91aba2c96d6b2156ad40fca05f6f4" } },
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
  description,
  keywords: ["영화 속 권총", "영화 총기", "건 아카이브", "더티 해리 매그넘", "존 윅 권총", "제임스 본드 발터 PPK", "다이 하드 베레타", "데저트 이글", "리볼버", "IMFDb"],
  openGraph: { type: "website", locale: "ko_KR", url: SITE_URL, siteName: SITE_NAME, title: SITE_NAME, description, images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title: SITE_NAME, description, images: ["/opengraph-image"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${sans.variable} ${serif.variable} min-h-screen bg-bg font-sans text-paper antialiased`}>
        <Header />
        <main>{children}<NadooAd types="vpnpromo" /><NadooAd /></main>
        <Footer />
        <CoupangSticky />
        <Script src="https://nadoo-ads.vercel.app/ads.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
