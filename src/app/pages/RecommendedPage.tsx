import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { FadeInSection } from "../components/FadeInSection";
import { PageLayout } from "../components/PageLayout";
import { createBreadcrumbList } from "../lib/schema";
import { APP_ROUTE_PATHS } from "../routePaths";

const MOFU_LAB_URL = "https://umaoyatsu.base.shop/";

export function RecommendedPage() {
  return (
    <PageLayout
      title="お迎え後のおすすめ｜おやつ・暮らしのヒント | Smiley's"
      description="サモエドのお迎え後に役立つおやつや暮らしのヒント。犬舎おすすめのおやつは MOFU LAB で扱っています。"
      canonicalPath={APP_ROUTE_PATHS.recommended}
      ogImage="/hero.webp"
      jsonLd={[createBreadcrumbList([{ label: "お迎え後のおすすめ" }], APP_ROUTE_PATHS.recommended)]}
      breadcrumbs={[{ label: "お迎え後のおすすめ" }]}
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-3xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-light mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              お迎え後のおすすめ
            </h1>
            <p className="text-lg leading-relaxed text-gray-700 font-light mb-10">
              サモエドとの暮らしは、お迎えしてからがいちばん長い時間です。ここでは、当犬舎で扱っているおやつと、お手入れの参考になるブログをまとめています。
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.08}>
          <div className="max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl font-light text-gray-900 mb-4">おやつ（MOFU LAB）</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              馬肉など、犬舎でも使っているおやつを MOFU LAB で販売しています。購入・決済・発送は別サイト（BASE）で完結します。
            </p>
            <a
              href={MOFU_LAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3 bg-gray-900 text-white text-base tracking-widest hover:bg-gray-800 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              MOFU LAB を見る
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.12}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-light text-gray-900 mb-4">暮らしのヒント</h2>
            <ul className="space-y-3 text-gray-700 font-light leading-relaxed">
              <li>
                <Link
                  to="/blog/samoyed-shedding-season"
                  className="underline underline-offset-4 hover:text-gray-900 transition-colors"
                >
                  サモエドの換毛期
                </Link>
                <span className="text-gray-500"> — 抜け毛の時期とお手入れ</span>
              </li>
              <li>
                <Link
                  to="/blog/samoyed-summer-care"
                  className="underline underline-offset-4 hover:text-gray-900 transition-colors"
                >
                  サモエドの夏の過ごし方
                </Link>
                <span className="text-gray-500"> — 室温・水分・暑さ対策</span>
              </li>
              <li>
                <Link
                  to="/blog/samoyed-summer-walks"
                  className="underline underline-offset-4 hover:text-gray-900 transition-colors"
                >
                  夏のお散歩
                </Link>
                <span className="text-gray-500"> — 量より質の考え方</span>
              </li>
            </ul>
          </div>
        </FadeInSection>
      </div>
    </PageLayout>
  );
}
