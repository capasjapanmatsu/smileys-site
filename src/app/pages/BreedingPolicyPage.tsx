"use client";

import { PageLayout } from "../components/PageLayout";
import { FadeInSection } from "../components/FadeInSection";
import { tldrs } from "../content/aeo";

export function BreedingPolicyPage() {
  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "繁殖理念と想い",
      inLanguage: "ja-JP",
      author: { "@type": "Organization", name: "Smiley's Kennel" },
      publisher: { "@type": "Organization", name: "Smiley's Kennel" },
      mainEntityOfPage: "https://www.sammy-smile.com/policy",
      description:
        "熊本・九州のサモエド ブリーダー犬舎として、少頭数・予約制で行う繁殖理念をまとめたページです。",
    },
  ];

  return (
    <PageLayout
      title="繁殖理念 | 熊本・九州のサモエド ブリーダー犬舎"
      description="熊本・九州のサモエド ブリーダー犬舎として、少頭数・予約制で行う繁殖理念とお迎え方針をまとめています。"
      canonicalPath="/policy"
      ogImage="/hero.webp"
      jsonLd={schemas}
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-5xl md:text-6xl font-light mb-12 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              繁殖理念
            </h1>
            <div className="border border-gray-200 bg-gray-50 p-6 md:p-8 mb-12">
              <ul className="space-y-2 text-gray-700 font-light leading-relaxed">
                <li>・熊本・九州のサモエド専門ブリーダー犬舎です。</li>
                <li>・少頭数制で、一頭一頭に向き合いながらサモエドの子犬をご紹介しています。</li>
                <li>・血統・健康・気質の調和を大切にした計画繁殖を行っています。</li>
              </ul>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="max-w-4xl mx-auto mb-20">
            <p className="text-xl font-light text-gray-800 leading-relaxed mb-6">
              私たちにとって繁殖は仕事ではなく、情熱です。
            </p>
            <p className="text-lg leading-relaxed text-gray-700 font-light">
              熊本にて、少頭数・小規模でサモエドのブリーディングを行っております。
              一つひとつの繁殖は、長い時間をかけた考察と計画の成果であり、
              その唯一の目的は利益ではなく、犬種の改良に貢献することです。
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-3xl">
              <img
                src="/policy-showdog.webp"
                alt="ショー会場で立つサモエド"
                className="w-full h-44 md:h-56 object-cover"
                width={1024}
                height={768}
                loading="lazy"
              />
              <img
                src="/policy-awards.webp"
                alt="ドッグショーのトロフィーとロゼット"
                className="w-full h-44 md:h-56 object-cover"
                width={798}
                height={1000}
                loading="lazy"
              />
            </div>
          </div>
        </FadeInSection>

        <div className="max-w-4xl mx-auto space-y-16">
          <FadeInSection delay={0.05}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                家族としての犬たち
              </h2>
              <p className="text-gray-700 font-light leading-relaxed">
                当犬舎の犬たちは家族の一員です。
                日常生活やスポーツ、休日、そしてソファーまで共にする存在です。
                そのため、愛情を十分に注げるよう少数でのブリーディングを行っており、
                常に子犬がいるわけではございません。
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.08}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                販売ではなく、託す
              </h2>
              <p className="text-gray-700 font-light leading-relaxed">
                私たちは「販売」を目的とした繁殖はしておりません。
                質の高い牡牝を血統に残すこと、そして子犬のニーズを理解し、
                その犬種を心から愛するご家庭へ託すことを目的としております。
                子犬たちは生まれる前から愛され、期待されてこの世に誕生します。
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.11}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                目指すサモエド像
              </h2>
              <p className="text-gray-700 font-light leading-relaxed">
                スタンダードに限りなく近く、健康で、愛らしい気質を持ち、
                社交的で飼い主に寄り添い、作業能力を備えたサモエド。
                それにより犬種の改良に貢献することを使命としております。
                1頭1頭大切に育てた子犬たちを一人一人丁寧にご案内しお渡し致します。
                生涯にわたり大切に愛してくださるご家族のもとへお迎えいただいております。
              </p>
            </section>
          </FadeInSection>
        </div>
      </div>
    </PageLayout>
  );
}
