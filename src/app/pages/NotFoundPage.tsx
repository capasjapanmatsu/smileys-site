import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { FadeInSection } from "../components/FadeInSection";
import { PageLayout } from "../components/PageLayout";
import { buildSeoTitle } from "../content/siteIdentity";
import { APP_ROUTE_PATHS } from "../routePaths";

const guideLinks = [
  { label: "トップページ", path: APP_ROUTE_PATHS.home },
  { label: "親犬紹介", path: APP_ROUTE_PATHS.kubitka },
  { label: "繁殖予定", path: APP_ROUTE_PATHS.breedingSchedule },
  { label: "ギャラリー", path: APP_ROUTE_PATHS.gallery },
  { label: "ブログ", path: APP_ROUTE_PATHS.blog },
  { label: "よくある質問", path: APP_ROUTE_PATHS.faq },
];

export function NotFoundPage() {
  return (
    <PageLayout title={buildSeoTitle("ページが見つかりません（404）")}>
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-2xl mx-auto text-center">
            <p
              className="text-6xl md:text-7xl font-light italic tracking-wide text-gray-300 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              404
            </p>
            <h1
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ページが見つかりません
            </h1>
            <p className="text-gray-700 font-light leading-relaxed mb-10">
              お探しのページは移動または削除された可能性があります。
              <br className="hidden sm:block" />
              お手数ですが、下記のページからお探しください。
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm md:text-base">
              {guideLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </FadeInSection>
      </div>
    </PageLayout>
  );
}
