"use client";

import { lazy, Suspense, useState, useRef, useEffect } from "react";
import { PageLayout } from "../components/PageLayout";
import { FadeInSection } from "../components/FadeInSection";
import { ChevronRight } from "lucide-react";
import { createBreadcrumbList } from "../lib/schema";

const ContactFormModal = lazy(() =>
  import("../components/ContactFormModal").then((m) => ({ default: m.ContactFormModal }))
);

export function BreedingSchedulePage() {
  const [contactFormModalOpen, setContactFormModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const scheduleVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = scheduleVideoRef.current;
    if (!video) return;
    const play = () => {
      video.play().catch(() => {});
    };
    if (video.readyState >= 2) {
      play();
    } else {
      video.addEventListener("loadeddata", play);
      return () => video.removeEventListener("loadeddata", play);
    }
  }, []);

  return (
    <PageLayout
      title="繁殖予定・子犬予約 | Smiley's Kennel（熊本・九州）"
      description="事前予約制の繁殖予定と募集状況をご案内。2026年度以降の予約相談もお問い合わせください。熊本県の犬舎より全国へお迎え相談を承ります。"
      canonicalPath="/breeding-schedule"
      ogImage="/breeding-schedule-main.webp"
      breadcrumbs={[{ label: "繁殖予定" }]}
      jsonLd={[createBreadcrumbList([{ label: "繁殖予定" }], "/breeding-schedule")]}
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-5xl md:text-6xl font-light mb-12 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              繁殖予定
            </h1>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg leading-relaxed text-gray-700 font-light mb-8">
              ２０２６年度・２０２７年度の出産予定は、ともにキャンセル待ちとなっております。
              ２０２８年度出産予定のご予約は別途受け付けております。
              子犬はご予約で埋まることがほとんどですので、事前のご予約をお願いいたします。
            </p>

            <div className="mb-12 relative aspect-[3/2] w-full overflow-hidden border border-gray-200">
              <video
                ref={scheduleVideoRef}
                playsInline
                autoPlay
                muted
                loop
                preload="auto"
                onCanPlay={(e) => {
                  e.currentTarget.play().catch(() => {});
                }}
                onPlaying={() => setIsVideoPlaying(true)}
                className="absolute inset-0 w-full h-full object-cover"
                aria-label="繁殖予定のサモエド紹介動画"
              >
                <source src="/breeding-schedule-main.mp4" type="video/mp4" />
              </video>
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isVideoPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                aria-hidden={isVideoPlaying}
              >
                <img
                  src="/breeding-schedule-main.webp"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>
            </div>

            <div className="border border-gray-200 p-8 mb-12">
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ２０２６・２０２７年度 繁殖予定
              </h2>
              <ul className="space-y-4 text-gray-700 font-light">
                <li>・出産予定：２０２６・２０２７年度</li>
                <li>・２０２６年度・２０２７年度ともにキャンセル待ちとなっております</li>
                <li>・２０２８年のご予約は別途受付中です。繁殖ペアについてはお問い合わせください。</li>
                <li>・詳細についてはお気軽にお問い合わせください</li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-gray-600 font-light mb-6">
                事前予約・見学希望（お問い合わせ）は、メールまたはLINEよりお申し込みください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                <button
                  onClick={() => setContactFormModalOpen(true)}
                  className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3 bg-gray-900 text-white text-base tracking-widest hover:bg-gray-800 transition-colors"
                >
                  メールで事前予約
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href="https://lin.ee/Ngs8RXx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center min-h-[48px] px-8 py-3 border border-gray-900 text-gray-900 text-base tracking-widest hover:bg-gray-100 transition-colors"
                >
                  LINEでお問い合わせ
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>

      <Suspense fallback={null}>
        <ContactFormModal
          isOpen={contactFormModalOpen}
          onClose={() => setContactFormModalOpen(false)}
        />
      </Suspense>
    </PageLayout>
  );
}
