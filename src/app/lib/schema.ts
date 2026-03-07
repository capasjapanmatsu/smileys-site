/**
 * JSON-LD 構造化データ用ヘルパー
 */

const BASE_URL = "https://smileys.one";

export type BreadcrumbItem = { label: string; path?: string };

/**
 * パンくずリスト用 BreadcrumbList schema を生成
 * @param breadcrumbs パンくず項目（最後の項目は現在ページ）
 * @param currentPath 現在の canonical パス（例: /breeding-schedule）
 */
export function createBreadcrumbList(
  breadcrumbs: BreadcrumbItem[],
  currentPath: string
): Record<string, unknown> {
  const itemListElement: Record<string, unknown>[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: `${BASE_URL}/`,
    },
  ];

  breadcrumbs.forEach((item, i) => {
    const position = i + 2;
    const path = item.path ?? currentPath;
    const url = `${BASE_URL}${path}`;
    itemListElement.push({
      "@type": "ListItem",
      position,
      name: item.label,
      item: url,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}
