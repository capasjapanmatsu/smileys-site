import { FadeInSection } from "../components/FadeInSection";
import { PageLayout } from "../components/PageLayout";
import { galleryImages } from "../content/gallery";
import { buildSeoTitle } from "../content/siteIdentity";
import { createBreadcrumbList } from "../lib/schema";
import { APP_ROUTE_PATHS } from "../routePaths";

export function GalleryPage() {
  return (
    <PageLayout
      title={buildSeoTitle("Gallery｜巣立った子犬達")}
      description="サミースマイル犬舎から新しいご家族のもとへ巣立ったサモエドの子犬達の写真ギャラリーです。"
      canonicalPath={APP_ROUTE_PATHS.gallery}
      ogImage={galleryImages[0]}
      breadcrumbs={[{ label: "Gallery" }]}
      jsonLd={[createBreadcrumbList([{ label: "Gallery" }], APP_ROUTE_PATHS.gallery)]}
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-5xl font-light italic tracking-wide mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Gallery
            </h1>
            <p className="text-base text-gray-600 font-light tracking-wider">巣立った子犬達</p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {galleryImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`巣立ったサモエドの子犬ギャラリー ${index + 1}`}
              className="w-full aspect-square object-cover rounded-sm"
              loading="lazy"
              width={320}
              height={320}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
