/** 事業所名（運営・問い合わせ窓口。血統書には載らない） */
export const businessName = "Smiley's";

/** 犬舎名（血統書に載る名称） */
export const kennelNameJa = "サミースマイル犬舎";
export const kennelNameEn = "SAMMY.SMILE JP'S";
export const kennelNameFull = `${kennelNameJa}（${kennelNameEn}）`;

/** SEO・AI向けの表記（犬舎名を先に） */
export const seoTitleSuffix = "熊本・九州";
export const seoSiteName = `${kennelNameJa}（${businessName}）`;

export function buildSeoTitle(pageTitle: string): string {
  return `${pageTitle} | ${seoSiteName} | ${seoTitleSuffix}`;
}

export const homeSeoDescription = `${kennelNameFull}は熊本県熊本市北区のサモエド専門犬舎です。血統・健康・気質を重視し、遺伝子検査済みの親犬から少頭数で繁殖しています。見学・お迎え相談は事前予約制で全国からご案内しています。`;

export const organizationAlternateNames = [
  kennelNameEn,
  businessName,
  "SammySmile",
  "Sammy Smile Kennel",
] as const;
