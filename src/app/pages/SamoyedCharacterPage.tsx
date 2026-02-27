"use client";

import { PageLayout } from "../components/PageLayout";
import { FadeInSection } from "../components/FadeInSection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function SamoyedCharacterPage() {
  return (
    <PageLayout
      title="サモエドの特徴と性格 | Smiley's犬舎"
      description="サモエドの起源、性格、FCIスタンダード、健康管理、日々のお手入れまでを熊本のサモエド専門犬舎Smiley'sがわかりやすくご紹介します。"
      canonicalPath="/samoyed"
      ogImage="/samoyed-character-main.webp"
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-5xl md:text-6xl font-light mb-12 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              サモエドってどんな犬？
            </h1>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg leading-relaxed text-gray-700 font-light mb-6">
              かつては北極圏でソリを引き、人と共に暮らしてきたワーキングドッグ。ふわふわの純白コート、微笑んでいるようなサモエドスマイル、そして家族を気遣う穏やかな性格が最大の魅力です。
            </p>
            <p className="text-lg leading-relaxed text-gray-700 font-light mb-6">
              ショードッグとして評価される骨格・歩様・被毛を保つためには、計画的な繁殖と血統管理が欠かせません。当犬舎では海外の名門ラインを継承しながら、健康面と気質面のバランスにこだわっています。
            </p>
            <p className="text-lg leading-relaxed text-gray-700 font-light">
              サモエドは、ロシアのシベリア北部が原産の犬種です。極寒の地でトナカイの群れを守り、人々と共に暮らしてきた歴史を持ち、その美しい白い毛並みと温厚な性格で世界中で愛されています。
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="relative h-80 md:h-96 mb-20 overflow-hidden max-w-4xl mx-auto">
            <ImageWithFallback
              src="/samoyed-character-main.webp"
              alt="サモエドの特徴的な笑顔"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </FadeInSection>

        <div className="max-w-4xl mx-auto space-y-16">
          <FadeInSection delay={0.05}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                サミースマイル
              </h2>
              <p className="text-gray-700 font-light leading-relaxed">
                サモエドの口角が上がった独特の表情は「サミースマイル」と呼ばれ、
                その愛らしさから多くの人々を魅了しています。
                これは寒冷地で凍らないよう口を閉じて呼吸するための進化とも言われ、
                穏やかで友好的な性格の表れでもあります。
              </p>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.08}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                起源と歴史
              </h2>
              <ul className="space-y-4 text-gray-700 font-light leading-relaxed">
                <li>原産はロシア北部・シベリア。FCIの表記も「北ロシアおよびシベリア」。</li>
                <li>サモエード系民族が連れていた犬がルーツで、狩猟・そり引き・トナカイ牧畜に従事。</li>
                <li>犬はテントの中で人と眠り「リビングヒーター」として家族を温めていました。</li>
                <li>1890年代に英国の動物学者 Ernest Kilburn Scott が数頭を持ち帰り、1909年に初の犬種標準が制定。</li>
              </ul>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                FCIスタンダードの要点
              </h2>
              <ul className="space-y-4 text-gray-700 font-light leading-relaxed">
                <li>体高はオス54〜60cm / メス50〜56cm、やや長方形シルエット。</li>
                <li>骨量は十分にしつつ軽快で、力と優雅さのバランスがキーワード。</li>
                <li>ダブルコート（固い外被＋綿のような下毛）。純白〜ホワイト&ビスケットが理想。</li>
                <li>効率的で伸びやかなトロットが評価されます。</li>
              </ul>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.12}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                気質と働き
              </h2>
              <ul className="space-y-4 text-gray-700 font-light leading-relaxed">
                <li>社交的で人が大好き。テント生活の歴史から「家族と一緒」が大前提。</li>
                <li>スピッツらしい独立心ゆえに、ポジティブ強化＆一貫したトレーニングが必須。</li>
                <li>番犬向きではなく、フレンドリーなコンパニオン兼ワーキングドッグ。</li>
                <li>今でも北欧ではスキージョアリングやカート競技に参加する働き系ラインが維持されています。</li>
              </ul>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.14}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                性格の特徴
              </h2>
              <ul className="space-y-4 text-gray-700 font-light leading-relaxed">
                <li>・明るく人懐っこく、家族との触れ合いを好む</li>
                <li>・穏やかで友好的、子供や他の動物とも仲良くなりやすい</li>
                <li>・知的で学習能力が高く、適切なしつけで素晴らしいパートナーに</li>
                <li>・遊び好きで活発、適度な運動が必要</li>
              </ul>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.16}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                タイプ・健康・ケア
              </h2>
              <ul className="space-y-4 text-gray-700 font-light leading-relaxed">
                <li>ロシアではベア型（丸顔）、ウルフ型（走行性能）、フォックス型などの非公式タイプが語られます。</li>
                <li>HD/ED・遺伝性眼疾患・心疾患・内分泌疾患・皮膚アレルギーが主な管理ポイント。</li>
                <li>週2〜3回のブラッシングと換毛期の集中的なお手入れ、1〜2時間の運動＋頭を使う遊びが推奨。</li>
                <li>ダブルコートのバリカン刈りは厳禁。紫外線トラブルや被毛ダメージの原因になります。</li>
              </ul>
            </section>
          </FadeInSection>

          <FadeInSection delay={0.18}>
            <section>
              <h2
                className="text-2xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                被毛とお手入れ
              </h2>
              <p className="text-gray-700 font-light leading-relaxed">
                ダブルコートの豊かな被毛は、寒さから身を守るためのもので、
                純白からクリーム色の美しい毛色が特徴です。
                抜け毛が多いため、週に数回のブラッシングが推奨されます。
                定期的なトリミングで皮膚の通気性を保つことも大切です。
              </p>
            </section>

            <section>
              <p className="text-lg leading-relaxed text-gray-700 font-light">
                暮らしの中では、毎日のブラッシングや十分な運動時間、家族と一緒に過ごす時間が必要です。サモエドと暮らすことは、自然と暮らしに笑顔とアウトドアの楽しさが増えることでもあります。
              </p>
            </section>
          </FadeInSection>
        </div>
      </div>
    </PageLayout>
  );
}
