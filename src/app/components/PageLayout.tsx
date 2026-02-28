"use client";

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { SeoHead } from "./SeoHead";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>[];
}

export function PageLayout({ children, title, description, canonicalPath, ogImage, jsonLd }: PageLayoutProps) {
  return (
    <div
      className="min-h-screen bg-white overflow-x-hidden"
      style={{ fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif" }}
    >
      <SeoHead
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        ogImage={ogImage}
        jsonLd={jsonLd}
      />

      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-40 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/samoyed-icon.webp"
              alt="サモエドアイコン"
              className="h-10 md:h-12 w-auto object-contain"
              width={40}
              height={40}
            />
            <img
              src="/logo.webp"
              alt="Smiley's Kennel - サモエド専門犬舎"
              className="h-10 md:h-12 w-auto object-contain ml-2"
              width={264}
              height={80}
            />
          </Link>
          <Link
            to="/"
            className="px-5 py-2 min-h-[44px] bg-gray-900 text-white text-base tracking-wider hover:bg-gray-800 transition-colors inline-flex items-center"
          >
            TOP
          </Link>
        </div>
      </header>

      <motion.main
        className="pt-24 pb-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {children}
      </motion.main>

      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/samoyed-icon.webp"
                  alt="サモエドシルエット"
                  className="w-8 h-8 object-contain"
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <span
                  className="text-lg font-light tracking-widest"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Smiley's
                </span>
              </div>
              <div className="text-base md:text-sm text-gray-500 font-light space-y-1">
                <p>熊本県熊本市北区龍田2丁目14-16</p>
                <p>第一種動物取扱業熊市販第R7-12号</p>
                <p>
                  <Link to="/legal" className="underline underline-offset-4 hover:text-gray-300 transition-colors">
                    特定商取引法に基づく表記
                  </Link>
                </p>
                <p>
                  <Link to="/contact" className="underline underline-offset-4 hover:text-gray-300 transition-colors">
                    お問い合わせフォーム
                  </Link>
                </p>
                <p>
                  <a
                    href="https://lin.ee/Ngs8RXx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-gray-300 transition-colors"
                  >
                    Smiley's公式LINE
                  </a>
                </p>
              </div>
              <div className="text-base md:text-sm text-gray-400 font-light">
                <p>copyright © Smiley's All Rights Reserved.</p>
              </div>
            </div>

            <div className="w-full lg:max-w-[440px]">
              <div className="grid grid-cols-2 gap-2">
                <img
                  src="/cert-pet-breeding-instructor.png"
                  alt="ペット繁殖インストラクター 公認資格取得証明"
                  className="w-full max-w-[210px] h-auto bg-white p-1 ml-auto"
                  width={320}
                  height={92}
                  loading="lazy"
                />
                <img
                  src="/cert-dog-shitsuke-instructor.png"
                  alt="犬のしつけインストラクター 公認資格取得証明"
                  className="w-full max-w-[210px] h-auto bg-white p-1"
                  width={320}
                  height={92}
                  loading="lazy"
                />
                <img
                  src="/cert-dog-training-advisor.png"
                  alt="ドッグトレーニングアドバイザー 資格保持者"
                  className="w-full max-w-[210px] h-auto bg-white p-1 ml-auto"
                  width={320}
                  height={92}
                  loading="lazy"
                />
                <img
                  src="/cert-pet-breeder.png"
                  alt="犬・猫ペットブリーダー 資格保持者"
                  className="w-full max-w-[210px] h-auto bg-white p-1"
                  width={320}
                  height={92}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
