import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeInSection } from "../components/FadeInSection";
import { PageLayout } from "../components/PageLayout";
import { ParentDogProfile } from "../components/ParentDogProfiles";
import {
  getParentDog,
  parentDogFullName,
  parentDogs,
  type ParentDogId,
} from "../content/parentDogs";
import { buildSeoTitle } from "../content/siteIdentity";
import { createBreadcrumbList } from "../lib/schema";
import { APP_ROUTE_PATHS } from "../routePaths";

export function ParentDogPage({ id }: { id: ParentDogId }) {
  const dog = getParentDog(id);
  const fullName = parentDogFullName(dog);
  const otherDogs = parentDogs.filter((other) => other.id !== id);
  const breadcrumbs = [
    { label: "親犬紹介", path: APP_ROUTE_PATHS.kubitka },
    { label: dog.name },
  ];

  return (
    <PageLayout
      title={buildSeoTitle(dog.seoTitle)}
      description={dog.seoDescription}
      canonicalPath={dog.path}
      ogImage={dog.profileImage.split("?")[0]}
      breadcrumbs={breadcrumbs}
      jsonLd={[createBreadcrumbList(breadcrumbs, dog.path)]}
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <article className="max-w-4xl mx-auto border border-gray-200 bg-white p-6 md:p-8">
            <h1
              className="text-3xl md:text-4xl font-light mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {fullName}
            </h1>
            <p className="text-sm md:text-base text-gray-600 mb-4">{dog.birthInfo}</p>
            <div className="mb-5">
              <img
                src={dog.profileImage}
                alt={`サモエドの親犬 ${fullName}`}
                className="w-full max-w-2xl h-auto object-cover"
                width={dog.profileImageWidth}
                height={dog.profileImageHeight}
              />
            </div>
            <ParentDogProfile id={id} />
          </article>

          <nav
            aria-label="ほかの親犬"
            className="max-w-4xl mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm md:text-base"
          >
            <Link
              to={APP_ROUTE_PATHS.kubitka}
              className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              親犬一覧へ戻る
            </Link>
            {otherDogs.map((other) => (
              <Link
                key={other.id}
                to={other.path}
                className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-gray-900 transition-colors"
              >
                {other.name}の詳細を見る
                <ChevronRight className="w-4 h-4" />
              </Link>
            ))}
          </nav>
        </FadeInSection>
      </div>
    </PageLayout>
  );
}
