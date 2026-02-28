import { FadeInSection } from "../components/FadeInSection";
import { PageLayout } from "../components/PageLayout";

const legalItems: Array<{ label: string; value: string }> = [
  { label: "事業所名", value: "smiley's" },
  { label: "犬舎名", value: "SammySmile(サミースマイル犬舎)" },
  { label: "動物取扱責任者", value: "松本 亜理沙" },
  {
    label: "動物取扱業登録番号・登録年月日・有効期限",
    value: "第一種動物取扱業熊市販第R7-12号 / 令和2年9月2日 / 令和12年9月1日",
  },
  {
    label: "販売価格以外の必要な料金",
    value:
      "JKC血統書代・1回目ワクチン代・フィラリア駆除薬・マイクロチップ代は販売価格に含まれます。振込手数料、および獣医による健康診断料（血液検査等の簡易ではない検査）はお客様負担です。",
  },
  { label: "お支払い方法", value: "銀行振込・現金" },
  {
    label: "ご予約",
    value:
      "子犬代金の30%をご予約金としてお預かりします。お客様都合でのキャンセルはご予約金の返金はできません（当犬舎都合の場合は全額返金）。残金はお引渡し前日までのお振込み、または当日現金でお支払いください。",
  },
  {
    label: "引渡し時期",
    value: "生後60日以降。法律上、対面での販売説明および売買契約が必要なため、ご来訪をお願いしています。",
  },
  {
    label: "返品・クレーム",
    value:
      "生体につき、お客様都合による返品・交換・返金はできません。成長過程での性格・毛質・毛色・サイズ・噛み合わせ・繁殖障害など予測困難な要素については保証対象外です。",
  },
];

export function LegalNoticePage() {
  return (
    <PageLayout
      title="特定商取引法に基づく表記 | Smiley's Kennel"
      description="Smiley's Kennel（サミースマイル犬舎）の特定商取引法に基づく表記です。お支払い方法、ご予約金、引渡し時期、保証・返品方針をご案内します。"
      canonicalPath="/legal"
      ogImage="/hero.webp"
    >
      <div className="container mx-auto px-6 md:px-12">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-light mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              特定商取引法に基づく表記
            </h1>

            <div className="border border-gray-200 bg-white divide-y divide-gray-200">
              {legalItems.map((item) => (
                <div key={item.label} className="grid md:grid-cols-[260px_1fr] gap-3 px-5 py-4 md:px-7">
                  <h2 className="text-sm md:text-base tracking-wide text-gray-600">{item.label}</h2>
                  <p className="text-sm md:text-base text-gray-900 leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <h2 className="text-lg md:text-xl text-gray-900">売主責任生体保証</h2>
              <p>
                譲渡日から15日以内に、譲渡日までに確認できなかった先天性疾患、または原因が明らかに当犬舎にある病死があった場合は、当犬舎負担で同等・同品種のペットを提供します。
              </p>
              <p>
                譲渡日から60日以内に、譲渡日までに確認できなかった先天性疾患、または原因が明らかに当犬舎にある病気による病死があった場合は、販売価格の50%で同等・同品種のペットを提供します。保証は代替ペットの提供であり、治療費および金銭補償は対象外です。
              </p>
              <p>
                重大な過失や故意、給餌・給水不足、ワクチン未接種、事故・天災、転売・譲渡後、虚偽申告などは保証対象外です。詳細は契約時の説明内容をご確認ください。
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </PageLayout>
  );
}
