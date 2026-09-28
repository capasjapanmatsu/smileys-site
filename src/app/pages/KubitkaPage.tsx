import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { FadeInSection } from "../components/FadeInSection";
import { PageLayout } from "../components/PageLayout";
import { parentDogFullName, parentDogs } from "../content/parentDogs";
import { buildSeoTitle } from "../content/siteIdentity";
import { createBreadcrumbList } from "../lib/schema";
import { APP_ROUTE_PATHS } from "../routePaths";

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
      title={buildSeoTitle("親犬紹介（サム・クビトカ・カイ）")}
      description="サミースマイル犬舎の親犬サム・クビトカ（クイティカ）・カイの一覧です。各親犬の詳細ページで血統背景、タイトル実績、遺伝子検査結果をご紹介しています。"
      canonicalPath={APP_ROUTE_PATHS.kubitka}
      ogImage="/parent-kubitka.webp"
      breadcrumbs={[{ label: "親犬紹介" }]}
      jsonLd={[createBreadcrumbList([{ label: "親犬紹介" }], APP_ROUTE_PATHS.kubitka)]}
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <h1
                className="text-4xl md:text-5xl font-light mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                親犬紹介
              </h1>
            </div>

            {parentDogs.map((dog) => {
              const fullName = parentDogFullName(dog);
              return (
                <section
                  key={dog.id}
                  id={dog.id}
                  className="border border-gray-200 bg-white p-6 md:p-8 scroll-mt-28"
                >
                  <div className="grid gap-6 md:grid-cols-[240px_1fr] md:items-start">
                    <Link to={dog.path} className="block">
                      <img
                        src={dog.profileImage}
                        alt={`サモエドの親犬 ${fullName}`}
                        className="w-full h-auto aspect-square object-cover"
                        width={dog.profileImageWidth}
                        height={dog.profileImageHeight}
                        loading="lazy"
                      />
                    </Link>
                    <div>
                      <div className="text-sm tracking-widest text-gray-500 mb-1">{dog.role}</div>
                      <h2
                        className="text-2xl md:text-3xl font-light mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        <Link to={dog.path} className="hover:text-gray-600 transition-colors">
                          {fullName}
                        </Link>
                      </h2>
                      <p className="text-sm md:text-base text-gray-600 mb-4">{dog.birthInfo}</p>
                      <p className="text-gray-700 font-light leading-relaxed mb-4">{dog.summary}</p>
                      <Link
                        to={dog.path}
                        className="inline-flex items-center gap-2 text-base md:text-sm underline underline-offset-4 hover:text-gray-900 transition-colors"
                      >
                        {dog.name}の詳細を見る
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </PageLayout>
  );
}
