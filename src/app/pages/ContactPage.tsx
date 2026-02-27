import { PageLayout } from "../components/PageLayout";
import { FadeInSection } from "../components/FadeInSection";

export function ContactPage() {
  return (
    <PageLayout
      title="お問い合わせ | 熊本・九州のサモエド ブリーダー犬舎"
      description="熊本・九州のサモエド ブリーダー犬舎へのお問い合わせページです。見学予約・繁殖予定・お迎え相談を受け付けています。"
      canonicalPath="/contact"
      ogImage="/hero.webp"
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-3xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-light mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              お問い合わせ
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-10">
              見学予約、繁殖予定、子犬のお迎えに関するご相談は下記からご連絡ください。
              折り返しご案内いたします。
            </p>
            <div className="space-y-5 border border-gray-200 p-6 md:p-8 bg-white">
              <p className="text-gray-900 text-base md:text-lg">
                電話:{" "}
                <a className="underline underline-offset-4" href="tel:09095888128">
                  090-9588-8128
                </a>
              </p>
              <p className="text-gray-900 text-base md:text-lg">
                メール:{" "}
                <a
                  className="underline underline-offset-4 break-all"
                  href="mailto:sammysmilejp@gmail.com"
                >
                  sammysmilejp@gmail.com
                </a>
              </p>
              <p className="text-sm md:text-base text-gray-600">
                見学は事前予約制です。現在は2027年度出産予定のご予約を受け付けています。
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </PageLayout>
  );
}
