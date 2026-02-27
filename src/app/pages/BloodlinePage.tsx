"use client";

import { PageLayout } from "../components/PageLayout";
import { FadeInSection } from "../components/FadeInSection";
import { tldrs } from "../content/aeo";

export function BloodlinePage() {
  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "サモエド血統へのこだわり",
      inLanguage: "ja-JP",
      author: { "@type": "Organization", name: "Smiley's Kennel" },
      publisher: { "@type": "Organization", name: "Smiley's Kennel" },
      mainEntityOfPage: "https://www.sammy-smile.com/bloodline",
      description:
        "熊本・九州のサモエド ブリーダー犬舎として、血統背景を確認できる繁殖計画と検査方針をまとめた解説ページです。",
    },
  ];

  return (
    <PageLayout
      title="サモエド血統 | 熊本・九州のサモエド ブリーダー犬舎"
      description="熊本・九州のサモエド ブリーダー犬舎として、血統背景の確認と健康・気質を重視した繁殖方針をご紹介します。"
      canonicalPath="/bloodline"
      ogImage="/bloodline-main.webp"
      jsonLd={schemas}
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-5xl md:text-6xl font-light mb-12 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              血統へのこだわり
            </h1>
            <div className="border border-gray-200 bg-gray-50 p-6 md:p-8 mb-12">
              <ul className="space-y-2 text-gray-700 font-light leading-relaxed">
                {tldrs.bloodline.map((line) => (
                  <li key={line}>・{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="max-w-4xl mx-auto mb-20">
            <p className="text-lg leading-relaxed text-gray-700 font-light">
              当犬舎では、ドッグショーへの参加や海外血統の導入、
              理想の血統犬を探すための時間・距離・費用は、決して惜しみません。
              犬種のスタンダードに限りなく近く、健康で愛らしい気質を持つサモエドの繁殖を心がけています。
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="max-w-4xl mx-auto mb-20 overflow-hidden border border-gray-200">
            <img
              src="/bloodline-main.webp"
              alt="ドッグショーで評価されたサモエド"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
            <p className="text-xs md:text-sm text-gray-600 font-light px-4 py-3 bg-white border-t border-gray-200">
              画像は当犬舎のクビトカのモルドバでのパピーチャンピオン時の画像です。
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
                スタンダードに忠実に
              </h2>
              <p className="text-gray-700 font-light leading-relaxed">
                日本犬畜犬団体（JKC）のスタンダードに基づき、
                体型・被毛・歩様・気質のすべてにおいて
                優れた個体を選んで繁殖を行っています。
                見た目の美しさだけでなく、健全な遺伝と健康を最優先に考えています。
              </p>
            </section>
            </FadeInSection>

            <FadeInSection delay={0.08}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                遺伝子検査
              </h2>
              <p className="text-gray-700 font-light leading-relaxed">
                両親犬ともに遺伝子検査を実施しており、
                サモエド特有の先天性疾患のリスクを把握したうえで繁殖計画を立てています。
                生まれてくる子犬たちが健康に育つことを何より願っています。
              </p>
            </section>
            </FadeInSection>

            <FadeInSection delay={0.11}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                海外血統との交流
              </h2>
              <p className="text-gray-700 font-light leading-relaxed">
                ロシア、ウクライナ、モルドバなど海外の優れた血統とのつながりを大切にし、
                チャンピオン血統の導入にも積極的に取り組んでいます。
                犬種の改良と健全な血統の維持に、少しでも貢献できればと考えています。
              </p>
            </section>
            </FadeInSection>

            <hr className="border-gray-200 my-16" />

            <FadeInSection delay={0.14}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                なぜ血統にこだわるのか
              </h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  サモエドはその雪のような被毛、優雅な歩様、穏やかな性格を代々引き継いできた犬種です。
                  しかし近年、「海外血統」という言葉だけが独り歩きし、本来のサモエドの骨格・気質・健康性が失われつつあります。
                </p>
                <p>
                  Sammy Smileでは血統背景の不明瞭な繁殖や近親交配を避け、
                  健康で穏やかでありながら骨格・被毛・顔立ち・歩様に優れた本物のサモエドを次世代へ繋ぐことを目指しています。
                </p>
              </div>
            </section>
            </FadeInSection>

            <hr className="border-gray-200 my-16" />

            <FadeInSection delay={0.17}>
            <section>
              <h2
                className="text-2xl font-light mb-6 flex items-center gap-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                🐾 世界と繋がる、本物の血統
              </h2>
              <p className="text-gray-700 font-light leading-relaxed mb-8">
                私たちはロシア・ウクライナ・英国の名門犬舎から正規輸入した直系血統を基盤としています。
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">✅ ロシア – BELIY VOLK（ベリーヴォルク）犬舎</h3>
                  <p className="text-gray-700 font-light leading-relaxed mb-4">
                    世界的ショーで多数のチャンピオンを輩出し、骨格の美しさ、落ち着いた性格、豊富な被毛を特徴とする犬舎です。
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    伝説の名犬「BELIY VOLK DIVIDE ET IMPERA（デイビットインペラ）」を曾祖父に持つ直系血統。
                    さらに43カ国でタイトルを獲得し、世界で最も有名なサモエドの一頭である「BELIY VOLK YAROMIR VELIKIY（ヤロミヤベルギー）」の血統も受け継ぎ、骨格と歩様を正しく伝えています。
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">✅ ウクライナ – DAENERYS / DESANT（デザナリー）犬舎</h3>
                  <p className="text-gray-700 font-light leading-relaxed mb-4">
                    ロシアBELIY VOLKの血統と英国名門血統を重ね、骨構成とバランスの取れた顔立ちを持つ名門犬舎。
                  </p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    ヤロミヤベルギー・デイビットインペラの血統を含みつつ、英国系DUCKSLAKE・ROYBRIDGE・KARAZOEの血統も引く貴重な血統構成を持っています。
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">✅ 英国王室とサモエドの歴史</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    19世紀後半、ヴィクトリア女王時代のイギリスでは探検隊によってシベリアからサモエド犬が持ち込まれました。
                    その後、ジョージ5世時代にイギリス王室でサモエドの繁殖が行われ、王室繁殖の個体が英国サモエド繁殖の基礎犬となりました。
                    この王室直系血統の一部が、英国の名門犬舎へと受け継がれ、現在の英国血統の礎となっています。
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">✅ 英国 – DUCKSLAKE・ROYBRIDGE・KARAZOE系</h3>
                  <p className="text-gray-700 font-light leading-relaxed">
                    英国王室ゆかりの血統を基に構築され、柔らかな表情、優雅な歩様、穏やかで人懐こい性格を守り続けてきた名門血統です。
                    現在も英国のショーラインとして高く評価され、骨格構成の美しさと気質の安定性を備えた貴重な血統です。
                  </p>
                </div>
              </div>
            </section>
            </FadeInSection>

            <hr className="border-gray-200 my-16" />

            <FadeInSection delay={0.2}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                🇺🇸 🇨🇦 アメリカ・カナダ血統との違いについて
              </h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  日本国内では「海外血統」としてアメリカ・カナダ血統のサモエドも流通していますが、欧州・英国のショーラインとは特徴が異なります。
                </p>
                <p>
                  🔹 アメリカ・カナダラインは明るく活発で愛嬌がありますが、
                  骨格の重厚感、被毛の豊富さ、歩様の優雅さ、気質の落ち着きにおいて、ロシア・ウクライナ・英国の伝統的ショーラインとは異なる傾向があります。
                </p>
                <p>
                  Sammy Smileでは世界基準の骨格構成、気質の安定性、豊富な被毛を備えた欧州・英国直系血統にこだわり、
                  サモエド本来の「優雅で穏やか、家族と共に落ち着いて暮らせる美しい犬」を次世代へ残していきます。
                </p>
              </div>
            </section>
            </FadeInSection>

            <hr className="border-gray-200 my-16" />

            <FadeInSection delay={0.23}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                💠 血統を守ることは、サモエドの未来を守ること
              </h2>
              <div className="space-y-6 text-gray-700 font-light leading-relaxed">
                <p>
                  犬は血統書の文字だけで価値が決まるのではありません。
                  骨格・歩様・顔立ち・被毛・気質が、どれだけ正しく次世代へ伝わるかが重要です。
                </p>
                <p>
                  Sammy Smileでは以下を徹底し、
                </p>
                <ul className="space-y-2 list-none">
                  <li>✅ 血統図で裏付けできる繁殖</li>
                  <li>✅ 海外現地犬舎との直接のやり取り</li>
                  <li>✅ 兄妹交配回避・繁殖間隔管理</li>
                  <li>✅ 繁殖犬の健康診断・適切な運動管理</li>
                </ul>
                <p>
                  ショードッグクラスの骨格・歩様を持ち、家庭犬として穏やかな性格を備えたサモエドを次世代へ残すことを使命としています。
                </p>
              </div>
            </section>
            </FadeInSection>

            <hr className="border-gray-200 my-16" />

            <FadeInSection delay={0.26}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                🩶 血統の価値を理解し、大切にしてくださる方へ
              </h2>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>
                  私たちは「価格」だけではなく、血統の正当な価値を大切にしてくださるご家族に、
                  大切に育てたサモエドたちをお迎えいただきたいと考えています。
                </p>
                <p className="text-lg font-medium">
                  本物のサモエドの未来を守る一歩を
                </p>
              </div>
            </section>
            </FadeInSection>
          </div>
        </div>
    </PageLayout>
  );
}
