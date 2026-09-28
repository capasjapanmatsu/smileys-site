export type ParentDogId = "sam" | "kubitka" | "kai";

export type ParentDog = {
  id: ParentDogId;
  name: string;
  registeredName: string;
  path: string;
  role: string;
  homeTitle: string;
  summary: string;
  birthInfo: string;
  cardImage: string;
  profileImage: string;
  profileImageWidth: number;
  profileImageHeight: number;
  seoTitle: string;
  seoDescription: string;
};

export const parentDogs: ParentDog[] = [
  {
    id: "sam",
    name: "サム",
    registeredName: "BELIY VOLK SENSEY",
    path: "/kubitka/sam",
    role: "BOYS",
    homeTitle: "ロシアチャンピオン",
    summary:
      "ロシア – BELIY VOLK犬舎から来た男の子。この犬舎は世界的ショーで多数のチャンピオンを輩出し、骨格の美しさ、落ち着いた性格、豊富な被毛を特徴としおっとりとした優しい性格が特徴。 曾祖父に名犬「BELIY VOLK DIVIDE ET IMPERA」を持つ直系血統。",
    birthInfo: "2019年7月18生まれ / From Russia / male",
    cardImage: "/parent-sam.webp",
    profileImage: "/sam-profile.webp",
    profileImageWidth: 1024,
    profileImageHeight: 1024,
    seoTitle: "サム（BELIY VOLK SENSEY）｜親犬紹介",
    seoDescription:
      "ロシアの名門 BELIY VOLK犬舎直系の種犬サム（BELIY VOLK SENSEY）。血統背景、ロシアチャンピオン（CH.RUS）などの実績、遺伝子検査結果をご紹介します。",
  },
  {
    id: "kubitka",
    name: "クビトカ",
    registeredName: "DAENERYS QUITIKA WHITE DREAM",
    path: "/kubitka/kubitka",
    role: "GIRLS",
    homeTitle: "ウクライナ モルドバ他多数のジュニアチャンピオン",
    summary:
      "ウクライナ有名犬舎DAENERYS / DESANT犬舎より来た優良血統の女の子です。さらに43カ国でタイトルを獲得し、世界で最も有名なサモエドの一頭である「BELIY VOLK YAROMIR VELIKIY」の血統も受け継ぎ、骨格と歩様を正しく伝えています。",
    birthInfo: "2024年1月4日生まれ / From Ukraine / Female",
    cardImage: "/parent-kubitka.webp",
    profileImage: "/kubitka-profile.webp",
    profileImageWidth: 1024,
    profileImageHeight: 1024,
    seoTitle: "クビトカ（DAENERYS QUITIKA WHITE DREAM）｜親犬紹介",
    seoDescription:
      "ウクライナ DAENERYS / DESANT犬舎出身のクビトカ（DAENERYS QUITIKA WHITE DREAM）。血統背景、ショータイトル実績、Crufts出陳資格、遺伝子検査結果をご紹介します。",
  },
  {
    id: "kai",
    name: "カイ",
    registeredName: "SAMMY.SMILE JP'S CASTOR",
    path: "/kubitka/kai",
    role: "BOYS",
    homeTitle: "SAMMY.SMILE JP'S CASTOR",
    summary:
      "サム直系の息子で、優れた骨格構成・美しい被毛・しなやかな歩様を兼ね備えた正統派ショー血統のサモエドです。BELIY VOLK 名門犬舎の血統価値を色濃く受け継いでいます。",
    birthInfo: "2025年4月18日生まれ / Male",
    cardImage: "/parent-kai.webp",
    profileImage: "/kai-profile.webp?v=20260919",
    profileImageWidth: 1024,
    profileImageHeight: 768,
    seoTitle: "カイ（SAMMY.SMILE JP'S CASTOR）｜親犬紹介",
    seoDescription:
      "サム（BELIY VOLK SENSEY）直系の息子カイ（SAMMY.SMILE JP'S CASTOR）。ロシア名門 BELIY VOLK の血統背景をご紹介します。",
  },
];

export function getParentDog(id: ParentDogId): ParentDog {
  return parentDogs.find((dog) => dog.id === id)!;
}

export function parentDogFullName(dog: ParentDog): string {
  return `${dog.name}（${dog.registeredName}）`;
}
