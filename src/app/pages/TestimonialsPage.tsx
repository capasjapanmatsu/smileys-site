import { PageLayout } from "../components/PageLayout";
import { FadeInSection } from "../components/FadeInSection";
import { testimonials } from "../content/testimonials";
import { createBreadcrumbList } from "../lib/schema";

export function TestimonialsPage() {
  return (
    <PageLayout
      title="お客様の声 | Smiley's Kennel"
      description="Smiley's からお迎えいただいたオーナー様の声。福岡・長崎など各地からご家族が増えています。"
      canonicalPath="/testimonials"
      ogImage="/hero.webp"
      breadcrumbs={[{ label: "お客様の声" }]}
      jsonLd={[createBreadcrumbList([{ label: "お客様の声" }], "/testimonials")]}
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-light mb-4 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              お客様の声
            </h1>
            <p className="text-center text-gray-600 mb-12 font-light">
              当犬舎からお迎えいただいたオーナー様の声をご紹介します
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-4xl mx-auto space-y-8">
          {testimonials.map((item, index) => (
            <FadeInSection key={item.id} delay={index * 0.05}>
              <article className="bg-white border border-gray-200 p-6 md:p-8">
                <p className="text-gray-700 font-light leading-relaxed whitespace-pre-line">
                  {item.text}
                </p>
                <p className="mt-6 text-sm text-gray-500 font-light">
                  {item.prefecture} {item.name}
                </p>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
