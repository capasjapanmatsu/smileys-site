import { PageLayout } from "../components/PageLayout";
import { FadeInSection } from "../components/FadeInSection";
import { aeoFaqs, tldrs } from "../content/aeo";
import { Link } from "react-router-dom";

export function FaqPage() {
  const faqSchemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: aeoFaqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  return (
    <PageLayout
      title="サモエド ブリーダーFAQ | 熊本・九州の犬舎"
      description="熊本・九州のサモエド ブリーダー犬舎によくある質問をまとめたFAQです。予約方法、飼育、検査方針を簡潔に確認できます。"
      canonicalPath="/faq"
      ogImage="/hero.webp"
      jsonLd={faqSchemas}
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection delay={0.05}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              FAQ
            </h1>
            <div className="border border-gray-200 bg-gray-50 p-6 md:p-8 mb-12">
              <ul className="space-y-2 text-gray-700 font-light leading-relaxed">
                {tldrs.faq.map((line) => (
                  <li key={line}>・{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInSection>

        <div className="max-w-4xl mx-auto space-y-4">
          {aeoFaqs.map((item, index) => (
            <FadeInSection key={item.q} delay={index * 0.06}>
              <article className="bg-white border border-gray-200 p-6 md:p-7">
                <h2 className="text-xl text-gray-900 mb-3 font-medium">{item.q}</h2>
                {item.q === "現在、子犬の募集はありますか？" ? (
                  <p className="text-gray-700 font-light leading-relaxed">
                    出産後の募集ではなく、事前予約より受け付けております。その為、出産前に予約で埋まってしまうことがあります。詳しくは
                    <Link to="/breeding-schedule" className="underline underline-offset-4 hover:text-gray-900 mx-1">
                      繁殖予定
                    </Link>
                    をご覧ください。
                  </p>
                ) : (
                  <p className="text-gray-700 font-light leading-relaxed">{item.a}</p>
                )}
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
