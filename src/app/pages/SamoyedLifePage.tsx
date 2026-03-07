"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { FadeInSection } from "../components/FadeInSection";
import { useIsMobile } from "../components/ui/use-mobile";
import { APP_ROUTE_PATHS } from "../routePaths";

export function SamoyedLifePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const lifeVideoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();
  const isDesktop = !isMobile;

  useEffect(() => {
    const video = lifeVideoRef.current;
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

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "サモエドがいる暮らし",
      inLanguage: "ja-JP",
      author: { "@type": "Organization", name: "Smiley's Kennel" },
      publisher: { "@type": "Organization", name: "Smiley's Kennel" },
      mainEntityOfPage: "https://www.sammy-smile.com/samoyed-life",
      description:
        "サモエドと暮らすことの魅力。和み、家族の相棒、毎日の散歩で人も健康に。絆を深め、家族の一員としての暮らしをご紹介します。",
    },
  ];

  const highlights = [
    {
      title: "心を和ませてくれる存在",
      description:
        "サモエドのふわふわとした白い被毛、穏やかな瞳、いつも笑っているようなサミースマイル。ただそばにいるだけで、日々の疲れやストレスが和らぎ、心が癒されます。帰宅したときに尻尾を振って迎えてくれる姿は、何よりのご褒美です。",
    },
    {
      title: "お子さんのいるご家庭の相棒に",
      description:
        "サモエドは社交的で人懐こく、家族との絆を大切にする犬種です。お子さんがいるご家庭では、一緒に遊び、成長を見守り、かけがえのない相棒になってくれるでしょう。責任を持って世話をすることで、お子さんの心も育っていきます。",
    },
    {
      title: "毎日の散歩で、人も健康に",
      description:
        "サモエドは活発で運動が好き。毎日の散歩は愛犬だけでなく、飼い主様ご自身の健康づくりにもつながります。朝の新鮮な空気を吸い、季節の移ろいを感じながら歩く時間は、心身ともにリフレッシュできる大切な習慣になります。",
    },
    {
      title: "絆を深め、家族として",
      description:
        "日々の食事、散歩、お手入れ、遊び。そうした積み重ねのなかで、サモエドとの絆は深まっていきます。やがてそれは、単なるペットという枠を超え、家族の一員として寄り添う存在へ。ともに過ごす時間は、かけがえのない思い出となっていきます。",
    },
  ];

  return (
    <PageLayout
      title="サモエドがいる暮らし | 熊本・九州のサモエド ブリーダー犬舎"
      description="サモエドと暮らす魅力をご紹介。和み、お子さんの相棒、毎日の散歩で人も健康に。絆を深め、家族としての暮らしをSmiley'sがお伝えします。"
      canonicalPath="/samoyed-life"
      ogImage="/samoyed-life-main.webp"
      jsonLd={schemas}
    >
      {/* 動画（縦長460x800）と文字がスクロールで一緒に動く */}
      <section className="relative bg-black min-h-screen">
        {/* 動画：縦長（460x800）の対比で表示 */}
        <div className="relative w-full aspect-[460/800] overflow-hidden">
          <video
            ref={lifeVideoRef}
            playsInline
            autoPlay
            muted
            loop
            preload="auto"
            onCanPlay={(e) => {
              e.currentTarget.play().catch(() => {});
            }}
            onPlaying={() => setIsVideoPlaying(true)}
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-label="サモエドがいる暮らしの紹介動画"
          >
            <source src="/samoyed-life-main.mp4" type="video/mp4" />
          </video>
          <div
            className={`absolute inset-0 z-[1] transition-opacity duration-500 ${
              isVideoPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            aria-hidden={isVideoPlaying}
          >
            <img
              src="/samoyed-life-main.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
              width={460}
              height={800}
            />
          </div>
          <div className="absolute inset-0 bg-black/65 z-[2]" />
        </div>

        {/* スマホ: 動画の下にテキスト配置 / PC: 動画の上にオーバーレイ */}
        <div className="relative z-10 -mt-0 md:-mt-[148%] pt-16 md:pt-24 pb-24 md:pb-32 px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center text-white space-y-16 md:space-y-32">
            <FadeInSection delay={0} fromBottomOnDesktop isDesktop={isDesktop}>
              <h1
                className="text-4xl md:text-6xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                サモエドがいる暮らし
              </h1>
              <p className="text-base md:text-xl font-light mb-8 leading-relaxed md:leading-loose text-white/90">
                愛犬とともに過ごす日々の幸せをご紹介します
              </p>
              <p className="text-sm md:text-lg font-light leading-relaxed md:leading-loose text-white/85">
                サモエドとの暮らしは、毎日が小さな発見と喜びに満ちています。
                ここでは、サモエドがご家族にもたらしてくれる豊かさについて、いくつかの視点からお伝えします。
              </p>
            </FadeInSection>

            {highlights.map((item, index) => (
              <FadeInSection
                key={item.title}
                delay={0.05 + index * 0.08}
                fromBottomOnDesktop
                isDesktop={isDesktop}
              >
                <div>
                  <h2
                    className="text-xl md:text-3xl font-light mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h2>
                  <p className="text-base md:text-xl font-light leading-relaxed md:leading-loose text-white/90">
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}

            <FadeInSection delay={0.1} fromBottomOnDesktop isDesktop={isDesktop}>
              <p className="text-base md:text-lg font-light mb-6 leading-relaxed md:leading-loose text-white/90">
                サモエドをお迎えしたい方は、ぜひ当犬舎までお問い合わせください。
              </p>
              <Link
                to={APP_ROUTE_PATHS.breedingSchedule}
                className="inline-flex items-center gap-2 text-base md:text-lg tracking-widest border-b-2 border-white/80 py-2 hover:border-white transition-colors text-white"
              >
                繁殖予定・お問い合わせ
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
