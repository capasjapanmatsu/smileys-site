import { FadeInSection } from "../components/FadeInSection";
import { PageLayout } from "../components/PageLayout";

export function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="プライバシーポリシー | Smiley's Kennel"
      description="Smiley's Kennel（サミースマイル犬舎）のプライバシーポリシーです。お客様の個人情報の取り扱いについてご説明します。"
      canonicalPath="/privacy"
      ogImage="/hero.webp"
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-light mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              プライバシーポリシー
            </h1>

            <p className="text-sm md:text-base text-gray-600 mb-10 text-right">
              制定日：2025年3月3日
            </p>

            <div className="prose prose-gray max-w-none space-y-8 text-sm md:text-base text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-medium text-gray-900 mb-3">1. はじめに</h2>
                <p>
                  Smiley's（以下「当犬舎」といいます）は、お客様の個人情報の保護を重要な責務と認識し、個人情報の適切な取り扱いと保護に努めています。本プライバシーポリシーは、当犬舎が提供するサービスにおいて収集する個人情報の取り扱いについて定めるものです。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-gray-900 mb-3">2. 収集する情報</h2>
                <p>
                  当犬舎は、以下のような情報を収集する場合があります。
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>氏名</li>
                  <li>メールアドレス</li>
                  <li>電話番号</li>
                  <li>お問い合わせ内容</li>
                  <li>その他、お問い合わせやご予約の際にお客様がご提供いただく情報</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-medium text-gray-900 mb-3">3. 利用目的</h2>
                <p>
                  収集した個人情報は、以下の目的で利用いたします。
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>お問い合わせへの対応</li>
                  <li>見学予約の受付・管理</li>
                  <li>子犬のお申し込みに関するご連絡</li>
                  <li>当犬舎からのご案内・お知らせの送付</li>
                  <li>サービスの改善・品質向上</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-medium text-gray-900 mb-3">4. 第三者への提供</h2>
                <p>
                  当犬舎は、お客様の同意なく、収集した個人情報を第三者に提供することはありません。ただし、法令に基づく開示請求があった場合や、人の生命・身体・財産の保護のために必要な場合には、この限りではありません。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-gray-900 mb-3">5. 外部サービスの利用</h2>
                <p>
                  当ウェブサイトでは、LINEやその他の外部サービスへのリンクを掲載しています。これらのサービスをご利用になる場合、各サービスのプライバシーポリシーが適用されます。当犬舎は、外部サービスの個人情報の取り扱いについては責任を負いかねますので、ご利用の際は各サービスのポリシーをご確認ください。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-gray-900 mb-3">6. アクセス解析・Cookie</h2>
                <p>
                  当ウェブサイトでは、利用状況の分析やサイトの改善のため、アクセス解析ツールやCookieを使用する場合があります。これらにより収集されるデータは、個人を特定するものではなく、統計的な分析にのみ使用いたします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-gray-900 mb-3">7. 情報の管理</h2>
                <p>
                  当犬舎は、お客様の個人情報を適切に管理し、不正アクセス・紛失・破損・改ざん・漏洩などの防止に努めます。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-gray-900 mb-3">8. お問い合わせ</h2>
                <p>
                  個人情報の取り扱いに関するお問い合わせや、ご本人からの開示・訂正・削除のご請求は、お問い合わせフォームまたはお電話にてお申し込みください。
                </p>
                <p className="mt-4">
                  事業所名：Smiley's（サミースマイル犬舎）<br />
                  所在地：熊本県熊本市北区龍田2丁目14-16
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-gray-900 mb-3">9. 改定</h2>
                <p>
                  当犬舎は、必要に応じて本プライバシーポリシーを改定することがあります。改定した場合は、当ウェブサイト上でお知らせいたします。
                </p>
              </section>
            </div>
          </div>
        </FadeInSection>
      </div>
    </PageLayout>
  );
}
