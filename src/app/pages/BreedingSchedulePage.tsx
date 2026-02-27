"use client";

import { lazy, Suspense, useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { FadeInSection } from "../components/FadeInSection";
import { ChevronRight } from "lucide-react";

const ContactFormModal = lazy(() =>
  import("../components/ContactFormModal").then((m) => ({ default: m.ContactFormModal }))
);

export function BreedingSchedulePage() {
  const [contactFormModalOpen, setContactFormModalOpen] = useState(false);

  return (
    <PageLayout
      title="繁殖予定 | 熊本・九州のサモエド ブリーダー犬舎"
      description="熊本・九州のサモエド ブリーダー犬舎の繁殖予定ページです。事前予約とお問い合わせ方法をご案内しています。"
      canonicalPath="/breeding-schedule"
      ogImage="/breeding-schedule-main.webp"
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
              2026年度の予約は全てご予約済みになっています。
              現在は２０２７年度出産予定のご予約を受け付けております。
              子犬はご予約で埋まることがほとんどですので、事前のご予約をお願いいたします。
            </p>

            <div className="mb-12">
              <img
                src="/breeding-schedule-main.webp"
                alt="繁殖予定のサモエド紹介画像"
                className="w-full h-auto object-cover border border-gray-200"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>

            <div className="border border-gray-200 p-8 mb-12">
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                2027年度 繁殖予定
              </h2>
              <ul className="space-y-4 text-gray-700 font-light">
                <li>・出産予定：2027年度</li>
                <li>・ご予約は随時受け付けております</li>
                <li>・詳細についてはお気軽にお問い合わせください</li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-gray-600 font-light mb-6">
                事前予約・見学希望（お問い合わせ）をご希望の方は、下記よりお申し込みください。
              </p>
              <button
                onClick={() => setContactFormModalOpen(true)}
                className="inline-flex items-center gap-3 text-sm tracking-widest border-b-2 border-gray-900 pb-2 hover:gap-5 transition-all duration-300 group"
              >
                事前予約（お問い合わせ）
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
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
