# 構造化データ（JSON-LD）追加レポート

## 1. 修正したファイル一覧

| ファイル | 変更内容 |
|----------|----------|
| `src/app/lib/schema.ts` | 新規作成：BreadcrumbList 生成ヘルパー |
| `src/app/components/SamoyedBreederSite.tsx` | LocalBusiness 強化、FAQ 重複削除 |
| `src/app/pages/FaqPage.tsx` | BreadcrumbList schema 追加 |
| `src/app/pages/BreedingSchedulePage.tsx` | BreadcrumbList schema 追加 |
| `src/app/pages/BloodlinePage.tsx` | BreadcrumbList schema 追加 |

## 2. 追加した schema の一覧

### LocalBusiness（トップページ）
- **場所**: `SamoyedBreederSite.tsx`（トップページ）
- **変更**: 既存の LocalBusiness を強化
  - `logo` 追加
  - `sameAs`: LINE URL
  - `areaServed`: 日本
  - `contactPoint`: 詳細（営業時間など）

### Organization（トップページ・既存を維持）
- **場所**: `SamoyedBreederSite.tsx`
- **変更**: `contactPoint` に `availableLanguage` 追加

### FAQPage（FAQ ページ）
- **場所**: `FaqPage.tsx`
- **変更**: 既存を維持、`aeoFaqs` の全件を mainEntity に含む

### BreadcrumbList（パンくずがある各ページ）
- **場所**: `FaqPage.tsx`, `BreedingSchedulePage.tsx`, `BloodlinePage.tsx`
- **内容**: ホーム → 各ページの階層

### 重複削除
- **FAQPage schema**: トップページから削除（FAQ ページのみに集約）

## 3. 各 schema を入れたページ

| ページ | LocalBusiness | Organization | WebSite | FAQPage | BreadcrumbList |
|--------|---------------|--------------|---------|---------|----------------|
| トップ（/） | ✓ | ✓ | ✓ | — | — |
| FAQ（/faq） | — | — | — | ✓ | ✓ |
| 繁殖予定（/breeding-schedule） | — | — | — | — | ✓ |
| 血統（/bloodline） | — | — | — | — | ✓ |

## 4. 未確定情報（TODO 一覧）

| 項目 | 状態 | 備考 |
|------|------|------|
| 電話番号 | 実データ使用 | +81-90-9588-8128 |
| LINE URL | 実データ使用 | https://lin.ee/Ngs8RXx |
| 住所 | 実データ使用 | 熊本県熊本市北区龍田2丁目14-16 |
| 営業時間 | 実データ使用 | 土日 13:00-17:00 |

※ 現時点で TODO コメントで残す未確定情報はなし

## 5. 今後追加すると良い schema 候補

| schema | 対象 | 効果 |
|--------|------|------|
| **Article** | ブログ記事 | リッチリザルト表示の可能性 |
| **HowTo** | お迎えまでの流れ | 手順の構造化 |
| **Product** | 子犬紹介 | ペット販売のリッチ結果（要検討） |
| **Event** | 見学予約・繁殖予定 | イベント表示 |
| **Review** / **AggregateRating** | お客様の声 | 星評価のリッチ結果 |

## 技術メモ

- **XSS**: `JSON.stringify()` によりエスケープ済み
- **ドメイン**: すべて `https://smileys.one` で統一
- **SeoHead**: 既存の `jsonLd` prop で注入、責務重複なし
