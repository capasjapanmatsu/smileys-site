import type { ParentDogId } from "../content/parentDogs";

const championTitles = [
  "モルドバ ベビーチャンピオン",
  "ウクライナ ベビーチャンピオン",
  "ブルガリア パピーチャンピオン",
  "コソボ ジュニアチャンピオン",
  "アルバニア ジュニアチャンピオン",
  "バルカン連盟 ジュニアチャンピオン",
  "モルドバ ジュニアチャンピオン",
  "ウクライナ ジュニアチャンピオン",
];

const bloodlines = [
  "ROYBRIDGE",
  "DUCKSLAKE",
  "FAIRVILLE",
  "BELIY VOLK",
  "DAENERYS / DESANT",
];

const geneticTests = [
  "骨形成不全症: クリア",
  "第7因子欠乏症: クリア",
  "変性性脊髄症（DM）: クリア",
  "進行性網膜萎縮症（PRA）: クリア",
];

function SamProfile() {
  return (
    <>
      <p className="text-gray-700 font-light leading-relaxed mb-4">
        ロシアの名門 BELIY VOLK犬舎直系として迎えたサム（BELIY VOLK SENSEY）は、
        優れた骨格構成・美しい被毛・しなやかな歩様を兼ね備えた正統派ショー血統のサモエドです。
      </p>
      <h2 className="text-xl font-light mb-3">血統背景</h2>
      <p className="text-gray-700 font-light leading-relaxed mb-3">
        サムの血統は世界中のショーラインで高く評価される血筋を受け継いでいます。
      </p>
      <ul className="space-y-2 text-gray-900 mb-4">
        <li>・BELIY VOLK DIVIDE ET IMPERA 直系</li>
        <li>・BELIY VOLK DAVID ET EMPIRE</li>
      </ul>
      <p className="text-gray-700 font-light leading-relaxed">
        BELIY VOLK YAROMIR VELIKIYは43カ国以上でタイトルを獲得した伝説的サモエドであり、
        その父犬BELIY VOLK DIVIDE ET IMPERAの直系血統を継ぐサムも、骨太で美しい骨格構成、豊かなコート、
        力強くしなやかな歩様、安定した気質を備えています。
      </p>
      <h2 className="text-xl font-light mt-6 mb-3">ロシア名門 BELIY VOLK の血統</h2>
      <p className="text-gray-700 font-light leading-relaxed mb-4">
        BELIY VOLK 犬舎はロシア国内外でショー成績・犬質ともに評価が高く、
        サムはその血統価値を色濃く受け継いでいます。
      </p>
      <ul className="space-y-2 text-gray-900 mb-4">
        <li>・ロシアチャンピオン（CH.RUS）</li>
        <li>・ヨーロッパにてリザーブベストイン（RBIS）</li>
      </ul>
      <h2 className="text-xl font-light mt-6 mb-3">遺伝子検査</h2>
      <ul className="space-y-2 text-gray-900">
        {geneticTests.map((test) => (
          <li key={`sam-${test}`}>・{test}</li>
        ))}
      </ul>
    </>
  );
}

function KubitkaProfile() {
  return (
    <>
      <p className="text-gray-700 font-light leading-relaxed mb-4">
        ウクライナ有名犬舎 DAENERYS / DESANT（デネリス）出身の優良血統の女の子です。
        世界的に評価される BELIY VOLK YAROMIR VELIKIY 系統も受け継ぎ、
        骨格と歩様の美しさを次世代へ伝えることを重視しています。
      </p>
      <h2 className="text-xl font-light mb-3">ショータイトル実績</h2>
      <p className="text-gray-700 font-light leading-relaxed mb-4">
        合計8タイトルを取得しており、骨格・歩様・被毛・表現力・気質の各面で、
        国際基準に照らした高い評価を受けています。
      </p>
      <ul className="space-y-2 text-gray-900">
        {bloodlines.map((line) => (
          <li key={`k-blood-${line}`}>・{line}</li>
        ))}
      </ul>
      <p className="text-gray-700 font-light leading-relaxed mt-3">
        上記の世界的有名犬舎の血統を受け継いでいます。
      </p>
      <ul className="space-y-2 text-gray-900 mt-4">
        {championTitles.map((title) => (
          <li key={`k-title-${title}`}>・{title}</li>
        ))}
      </ul>
      <h2 className="text-xl font-light mt-6 mb-3">Crufts 出陳資格（2025）</h2>
      <p className="text-gray-700 font-light leading-relaxed">
        2025年 Crufts（クラフツ）出陳資格（Qualified for Crufts）を正式に取得しています。
        Crufts は世界最大規模のドッグショーであり、資格取得そのものが犬質の高さを示す重要な実績です。
      </p>
      <h2 className="text-xl font-light mt-6 mb-3">遺伝子検査</h2>
      <ul className="space-y-2 text-gray-900">
        {geneticTests.map((test) => (
          <li key={`kubitka-${test}`}>・{test}</li>
        ))}
      </ul>
    </>
  );
}

function KaiProfile() {
  return (
    <>
      <p className="text-gray-700 font-light leading-relaxed mb-4">
        サム直系の息子で、優れた骨格構成・美しい被毛・しなやかな歩様を兼ね備えた
        正統派ショー血統のサモエドです。
      </p>
      <p className="text-gray-700 font-light leading-relaxed mb-4">
        その父犬であるBELIY VOLK DIVIDE ET IMPERA直系血統を継ぐ BELIY VOLK SENSEY（サム）の息子として、
        骨太で美しい骨格構成、豊かなコート、力強くしなやかな歩様、安定した気質を受け継いでいます。
      </p>
      <h2 className="text-xl font-light mb-3">ロシア名門 BELIY VOLK の血統</h2>
      <p className="text-gray-700 font-light leading-relaxed mb-4">
        BELIY VOLK 犬舎はロシア国内外でショー成績・犬質ともに評価が高く、
        センセイの息子であるカイもその名門犬舎の血統価値を色濃く受け継いでいます。
      </p>
      <ul className="space-y-2 text-gray-900 mb-4">
        <li>・父犬はロシアチャンピオン（CH.RUS）</li>
        <li>・父犬はヨーロッパにてリザーブベストイン（RBIS）</li>
      </ul>
      <p className="text-gray-700 font-light leading-relaxed">デビューをお楽しみに。</p>
    </>
  );
}

export function ParentDogProfile({ id }: { id: ParentDogId }) {
  if (id === "sam") return <SamProfile />;
  if (id === "kubitka") return <KubitkaProfile />;
  return <KaiProfile />;
}
