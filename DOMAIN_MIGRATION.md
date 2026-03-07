# ドメイン統一 作業レポート

## 1. 修正されたファイル一覧

| ファイル | 変更内容 |
|----------|----------|
| `src/app/components/SeoHead.tsx` | BASE_URL、twitter:url 追加 |
| `src/app/hooks/useSeo.ts` | BASE_URL |
| `src/app/components/SamoyedBreederSite.tsx` | JSON-LD内のURL（WebSite, Organization, LocalBusiness） |
| `src/app/pages/SamoyedCharacterPage.tsx` | mainEntityOfPage |
| `src/app/pages/BloodlinePage.tsx` | mainEntityOfPage |
| `src/app/pages/SamoyedLifePage.tsx` | mainEntityOfPage |
| `src/app/pages/BreedingPolicyPage.tsx` | mainEntityOfPage |
| `index.html` | og:url, og:image, twitter:image, canonical |
| `IMPROVEMENTS.md` | ドメイン統一の記述を更新 |

## 2. 変更箇所一覧

### SeoHead.tsx
- `BASE_URL`: `https://www.sammy-smile.com` → `https://smileys.one`
- `twitter:url` を追加（canonicalUrl を使用）

### useSeo.ts
- `BASE_URL`: `https://www.sammy-smile.com` → `https://smileys.one`

### SamoyedBreederSite.tsx（JSON-LD）
- WebSite: `url`
- Organization: `url`, `logo`
- LocalBusiness: `image`, `url`

### 各ページ（JSON-LD mainEntityOfPage）
- SamoyedCharacterPage: `/samoyed`
- BloodlinePage: `/bloodline`
- SamoyedLifePage: `/samoyed-life`
- BreedingPolicyPage: `/policy`

### index.html
- `og:url`: `https://smileys.one/`
- `og:image`: `https://smileys.one/hero.webp`
- `twitter:image`: `https://smileys.one/hero.webp`
- `canonical`: `https://smileys.one/`

## 3. sammy-smile.com が残っていないかの確認結果

**確認結果: 残っていません**

```bash
grep -r "sammy-smile\.com" .
# → 一致なし
```

※「SAMMY.SMILE JP'S」は犬舎名のため変更していません（URLではない）

## 4. sitemap の URL 一覧

ビルド後 `dist/sitemap.xml` に生成される URL（すべて `https://smileys.one/` 始まり）:

| URL |
|-----|
| https://smileys.one/ |
| https://smileys.one/samoyed |
| https://smileys.one/samoyed-life |
| https://smileys.one/bloodline |
| https://smileys.one/policy |
| https://smileys.one/breeding-schedule |
| https://smileys.one/faq |
| https://smileys.one/privacy |
| https://smileys.one/blog |
| https://smileys.one/blog/2026-reservation-status |
| https://smileys.one/blog/samoyed-summer-care |
| https://smileys.one/blog/puppy-socialization |
| https://smileys.one/blog/2023-litter-update |

## 5. canonical URL の確認

- **index.html**: `https://smileys.one/`（固定）
- **各ページ**: SeoHead の `BASE_URL + canonicalPath` で動的生成
  - 例: `/breeding-schedule` → `https://smileys.one/breeding-schedule`

## 確認済み（変更不要）

- **vite.config.ts**: 既に `hostname: 'https://smileys.one'`、robots.txt も `https://smileys.one/sitemap.xml`
- **public/robots.txt**: 既に `Sitemap: https://smileys.one/sitemap.xml`
- **内部リンク**: React Router の相対パス（`/`, `/samoyed` 等）のため変更不要
