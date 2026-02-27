"use client";

import { PageLayout } from "../components/PageLayout";
import { FadeInSection } from "../components/FadeInSection";

export function BreedingPolicyPage() {
  return (
    <PageLayout
      title="繁殖理念と想い | Smiley's犬舎"
      description="繁殖は仕事ではなく情熱という理念のもと、家族として寄り添うサモエドを丁寧に育てるSmiley's犬舎の繁殖方針と想いをご案内します。"
      canonicalPath="/breeding-policy"
      ogImage="/hero.webp"
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
                出所の分からない中間業者へ渡すことはございません。
                生涯にわたり大切に愛してくださるご家族のもとへお迎えいただいております。
              </p>
            </section>
          </FadeInSection>
        </div>
      </div>
    </PageLayout>
  );
}
