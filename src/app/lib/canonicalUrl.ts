const BASE_URL = "https://smileys.one";

/**
 * GitHub Pages はディレクトリを末尾スラッシュ付きで 200 応答するため、
 * canonical / sitemap / JSON-LD も同じ形に揃える。
 * 例: /privacy → /privacy/ ／ ルートは /
 */
export function withTrailingSlash(path: string): string {
  if (!path || path === "/") return "/";

  const match = path.match(/^([^?#]*)([?#].*)?$/);
  const pathname = match?.[1] || "/";
  const suffix = match?.[2] || "";

  if (pathname === "/") return `/${suffix}`;

  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return `${normalized}${suffix}`;
}

export function toCanonicalUrl(path: string): string {
  if (path.startsWith(BASE_URL)) {
    const rest = path.slice(BASE_URL.length) || "/";
    return `${BASE_URL}${withTrailingSlash(rest)}`;
  }
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${BASE_URL}${withTrailingSlash(path)}`;
}

export { BASE_URL };
