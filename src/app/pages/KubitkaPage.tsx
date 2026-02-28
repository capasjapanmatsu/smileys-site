import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FadeInSection } from "../components/FadeInSection";
import { PageLayout } from "../components/PageLayout";

const championTitles = [
  "モルドバ ベビーチャンピオン",
  "ウクライナ ベビーチャンピオン",
  "ブルガリア パピーチャンピオン",
  "コソボ ジュニアチャンピオン",
  "アルバニア ジュニアチャンピオン",
  "バルカン連盟 ジュニアチャンピオン",
  "モルドバ ジュニアチャンピオン",
  "ウクライナ ジュニアチャンピオン",
];

const bloodlines = [
  "ROYBRIDGE",
  "DUCKSLAKE",
  "FAIRVILLE",
  "BELIY VOLK",
  "DAENERYS / DESANT",
];

const geneticTests = [
  "骨形成不全症: クリア",
  "第7因子欠乏症: クリア",
  "変性性脊髄症（DM）: クリア",
  "進行性網膜萎縮症（PRA）: クリア",
];

export function KubitkaPage() {
  const location = useLocation();

  const smoothScrollToId = (id: string, duration = 1400) => {
    const target = document.getElementById(id);
    if (!target) return;

    const headerOffset = 96;
    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    requestAnimationFrame(() => smoothScrollToId(id));
  }, [location.hash]);

  return (
    <PageLayout
      title="親犬紹介（サム・クビトカ・カイ）| Smiley's Kennel"
      description="サム・クビトカ（クイティカ）・カイの血統背景、タイトル実績、遺伝子検査結果をご紹介します。"
      canonicalPath="/kubitka"
      ogImage="/parent-kubitka.webp"
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-5">
              <h1
                className="text-4xl md:text-5xl font-light mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                親犬紹介
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
                <a
                  href="#sam"
                  className="underline underline-offset-4 hover:text-gray-900 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    history.replaceState(null, "", "#sam");
                    smoothScrollToId("sam", 1600);
                  }}
                >
                  サム詳細を見る
                </a>
                <a
                  href="#kubitka"
                  className="underline underline-offset-4 hover:text-gray-900 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    history.replaceState(null, "", "#kubitka");
                    smoothScrollToId("kubitka", 1600);
                  }}
                >
                  クビトカ詳細を見る
                </a>
                <a
                  href="#kai"
                  className="underline underline-offset-4 hover:text-gray-900 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    history.replaceState(null, "", "#kai");
                    smoothScrollToId("kai", 1600);
                  }}
                >
                  カイ詳細を見る
                </a>
              </div>
            </div>

            <section id="sam" className="border border-gray-200 bg-white p-6 md:p-8 scroll-mt-28">
              <h2 className="text-2xl md:text-3xl font-light mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                サム（BELIY VOLK SENSEY）
              </h2>
              <div className="mb-5">
                <img
                  src="/sam-profile.webp"
                  alt="サム（BELIY VOLK SENSEY）"
                  className="w-full max-w-2xl h-auto object-cover"
                  width={1024}
                  height={1024}
                  loading="lazy"
                />
              </div>
              <p className="text-sm md:text-base text-gray-600 mb-4">2019年7月18生まれ / From Russia / male</p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                ロシアの名門 BELIY VOLK犬舎直系として迎えたサム（BELIY VOLK SENSEY）は、
                優れた骨格構成・美しい被毛・しなやかな歩様を兼ね備えた正統派ショー血統のサモエドです。
              </p>
              <h3 className="text-xl font-light mb-3">血統背景</h3>
              <p className="text-gray-700 font-light leading-relaxed mb-3">
                サムの血統は世界中のショーラインで高く評価される血筋を受け継いでいます。
              </p>
              <ul className="space-y-2 text-gray-900 mb-4">
                <li>・BELIY VOLK DIVIDE ET IMPERA 直系</li>
                <li>・BELIY VOLK DAVID ET EMPIRE</li>
              </ul>
              <p className="text-gray-700 font-light leading-relaxed">
                BELIY VOLK YAROMIR VELIKIYは43カ国以上でタイトルを獲得した伝説的サモエドであり、
                その父犬BELIY VOLK DIVIDE ET IMPERAの直系血統を継ぐサムも、骨太で美しい骨格構成、豊かなコート、
                力強くしなやかな歩様、安定した気質を備えています。
              </p>
              <h3 className="text-xl font-light mt-6 mb-3">ロシア名門 BELIY VOLK の血統</h3>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                BELIY VOLK 犬舎はロシア国内外でショー成績・犬質ともに評価が高く、
                サムはその血統価値を色濃く受け継いでいます。
              </p>
              <ul className="space-y-2 text-gray-900 mb-4">
                <li>・ロシアチャンピオン（CH.RUS）</li>
                <li>・ヨーロッパにてリザーブベストイン（RBIS）</li>
              </ul>
              <h3 className="text-xl font-light mt-6 mb-3">遺伝子検査</h3>
              <ul className="space-y-2 text-gray-900">
                {geneticTests.map((test) => (
                  <li key={`sam-${test}`}>・{test}</li>
                ))}
              </ul>
            </section>

            <section id="kubitka" className="border border-gray-200 bg-white p-6 md:p-8 scroll-mt-28">
              <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                クビトカ（DAENERYS QUITIKA WHITE DREAM）
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-4">2024年1月4日生まれ / From Ukraine / Female</p>
              <div className="mb-5">
                <img
                  src="/kubitka-profile.webp"
                  alt="クビトカ（DAENERYS QUITIKA WHITE DREAM）"
                  className="w-full max-w-2xl h-auto object-cover"
                  width={1024}
                  height={1024}
                  loading="lazy"
                />
              </div>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                ウクライナ有名犬舎 DAENERYS / DESANT（デザナリー）出身の優良血統の女の子です。
                世界的に評価される BELIY VOLK YAROMIR VELIKIY 系統も受け継ぎ、
                骨格と歩様の美しさを次世代へ伝えることを重視しています。
              </p>
              <h3 className="text-xl font-light mb-3">ショータイトル実績</h3>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                合計8タイトルを取得しており、骨格・歩様・被毛・表現力・気質の各面で、
                国際基準に照らした高い評価を受けています。
              </p>
              <ul className="space-y-2 text-gray-900">
                {bloodlines.map((line) => (
                  <li key={`k-blood-${line}`}>・{line}</li>
                ))}
              </ul>
              <p className="text-gray-700 font-light leading-relaxed mt-3">
                上記の世界的有名犬舎の血統を受け継いでいます。
              </p>
              <ul className="space-y-2 text-gray-900 mt-4">
                {championTitles.map((title) => (
                  <li key={`k-title-${title}`}>・{title}</li>
                ))}
              </ul>
              <h3 className="text-xl font-light mt-6 mb-3">Crufts 出陳資格（2025）</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                2025年 Crufts（クラフツ）出陳資格（Qualified for Crufts）を正式に取得しています。
                Crufts は世界最大規模のドッグショーであり、資格取得そのものが犬質の高さを示す重要な実績です。
                輸送時期の都合により出陳は見送りとなりましたが、資格は正式に保有していました。
              </p>
              <h3 className="text-xl font-light mt-6 mb-3">遺伝子検査</h3>
              <ul className="space-y-2 text-gray-900">
                {geneticTests.map((test) => (
                  <li key={`kubitka-${test}`}>・{test}</li>
                ))}
              </ul>
            </section>

            <section id="kai" className="border border-gray-200 bg-white p-6 md:p-8 scroll-mt-28">
              <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                カイ（SAMMY.SMILE JP'S CASTOR）
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-4">2025年4月18日生まれ / Male</p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                サム直系の息子で、優れた骨格構成・美しい被毛・しなやかな歩様を兼ね備えた
                正統派ショー血統のサモエドです。
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                その父犬であるBELIY VOLK DIVIDE ET IMPERA直系血統を継ぐ BELIY VOLK SENSEY（サム）の息子として、
                骨太で美しい骨格構成、豊かなコート、力強くしなやかな歩様、安定した気質を受け継いでいます。
              </p>
              <h3 className="text-xl font-light mb-3">ロシア名門 BELIY VOLK の血統</h3>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                BELIY VOLK 犬舎はロシア国内外でショー成績・犬質ともに評価が高く、
                センセイの息子であるカイもその名門犬舎の血統価値を色濃く受け継いでいます。
              </p>
              <ul className="space-y-2 text-gray-900 mb-4">
                <li>・父犬はロシアチャンピオン（CH.RUS）</li>
                <li>・父犬はヨーロッパにてリザーブベストイン（RBIS）</li>
              </ul>
              <p className="text-gray-700 font-light leading-relaxed">デビューをお楽しみに。</p>
            </section>
          </div>
        </FadeInSection>
      </div>
    </PageLayout>
  );
}
