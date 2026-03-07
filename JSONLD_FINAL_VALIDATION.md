# JSON-LD 構造化データ 最終確認結果

## 1. 最終確認結果サマリ

| 項目 | 結果 | 備考 |
|------|------|------|
| LocalBusiness @id | ✓ 対応済 | `@id` 追加、contactPoint 重複解消 |
| FAQPage Question/Answer | ✓ 一致 | 画面表示と schema 一致 |
| BreadcrumbList 順序・URL | ✓ 一致 | 画面上のパンくずと一致 |
| canonical / og:url / sitemap | ✓ 統一 | すべて `https://smileys.one` |
| schema 重複 | ✓ なし | 適切に分離 |

---

## 2. 修正したファイル一覧

| ファイル | 修正内容 |
|----------|----------|
| `src/app/components/SamoyedBreederSite.tsx` | WebSite / Organization / LocalBusiness に `@id` 追加、LocalBusiness の contactPoint を1つに整理 |
| `src/app/pages/FaqPage.tsx` | FAQPage に `@id` 追加 |

---

## 3. 修正が必要だった点

### 3.1 LocalBusiness schema
- **問題**: `contactPoint` プロパティが重複定義されていた（JSON では後勝ちのため無効な状態）
- **対応**: 1つの `contactPoint` に統合（`hoursAvailable` を含む詳細版を採用）

### 3.2 @id の追加
- **目的**: エンティティ識別子を明示し、検索エンジンでの参照を容易にする
- **対応**:
  - WebSite: `https://smileys.one/#website`
  - Organization: `https://smileys.one/#organization`
  - LocalBusiness: `https://smileys.one/#localbusiness`
  - FAQPage: `https://smileys.one/faq#faqpage`

---

## 4. 各項目の検証結果

### 4.1 LocalBusiness @id
- ✓ `@id` を追加
- ✓ `contactPoint` の重複を解消

### 4.2 FAQPage の Question / Answer
- ✓ `aeoFaqs` の全12件を mainEntity に含む
- ✓ 「現在、子犬の募集はありますか？」の回答: 画面表示（リンク部分は「繁殖予定」）と schema の文言が実質一致
- ✓ 質問・回答の順序は画面表示と一致

### 4.3 BreadcrumbList
- ✓ 画面上の順序: ホーム → 各ページ（FAQ / 繁殖予定 / 血統）
- ✓ URL: `https://smileys.one/`, `https://smileys.one/faq` など、すべて `https://smileys.one` ベース

### 4.4 canonical / og:url / sitemap
- ✓ SeoHead: `BASE_URL = "https://smileys.one"`
- ✓ index.html: canonical, og:url, og:image を `https://smileys.one` で統一
- ✓ vite.config: hostname `https://smileys.one`、robots.txt の Sitemap も同様
- ✓ public/robots.txt: `Sitemap: https://smileys.one/sitemap.xml`

### 4.5 schema の重複
- ✓ トップ: WebSite, Organization, LocalBusiness（異なる @type で役割が分かれている）
- ✓ FAQ ページ: FAQPage + BreadcrumbList（重複なし）
- ✓ 他ページ: 各ページ固有の schema のみ（重複なし）

---

## 5. 追加推奨項目

| 項目 | 優先度 | 内容 |
|------|--------|------|
| **Google リッチリザルトテスト** | 高 | 本番デプロイ後に [Rich Results Test](https://search.google.com/test/rich-results) で動作確認 |
| **Schema.org Validator** | 中 | [validator.schema.org](https://validator.schema.org/) での検証 |
| **BreadcrumbList の @id** | 低 | 必要に応じて `@id` を追加（現状は省略可） |
| **Article schema** | 低 | ブログ記事ページへの Article 追加を検討 |
