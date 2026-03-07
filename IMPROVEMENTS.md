# ブリーダーサイト改善レポート

## 1. 改善点一覧（優先度付き）

### 最優先: 表示速度改善 ✅

| 項目 | 対応 | 状態 |
|------|------|------|
| hero画像のpreload | index.htmlに`<link rel="preload" href="/hero.webp" as="image" />`追加 | 完了 |
| LCP対象画像の最適化 | hero.webpにwidth/height(1920x1080)、decoding="sync"、alt追加 | 完了 |
| 画像サイズ属性 | 既存のwidth/heightは維持、heroに追加 | 完了 |
| below-the-foldのlazy load | 既にloading="lazy"で対応済み | 維持 |
| JSバンドルの分割 | vite manualChunksにrouter(chunk)追加 | 完了 |
| Google Fonts | 既にmedia="print" onloadで遅延読込、crossorigin追加 | 完了 |
| CLS対策 | heroにwidth/height指定でレイアウトシフト防止 | 完了 |

### 次: 問い合わせ導線改善 ✅

| 項目 | 対応 | 状態 |
|------|------|------|
| ファーストビューにCTA | 「見学予約・お問い合わせ」ボタン追加（フォーム直開） | 完了 |
| スクロール後もCTA表示 | スマホ用固定下部CTAバー（お問い合わせ/LINE）追加 | 完了 |
| CTA文言 | 見学予約・お問い合わせを明確化 | 完了 |
| スマホで押しやすいサイズ | min-h-[48px]、min-h-[44px]でタップ領域確保 | 維持・強化 |

### 次: SEO改善 ✅

| 項目 | 対応 | 状態 |
|------|------|------|
| OGP画像サイズ | SeoHeadにog:image:width/height追加 | 完了 |
| パンくず | PageLayoutにbreadcrumbs prop追加、繁殖予定/FAQ/血統に適用 | 完了 |
| 画像alt | hero画像に適切なalt追加 | 完了 |
| title/meta/canonical | 既存で対応済み | 維持 |
| 構造化データ | 既存でWebSite, Organization, LocalBusiness, FAQPage対応 | 維持 |

### 次: デザイン/文言

| 項目 | 対応 | 状態 |
|------|------|------|
| 子犬・親犬・資格の並び | 既存構成を維持（信頼獲得順は要検討） | 未実施 |
| CTA文言の細かい改善 | 必要に応じて調整 | 一部実施 |

---

## 2. 修正したファイル一覧

| ファイル | 変更内容 |
|----------|----------|
| `index.html` | hero.webpのpreload追加、フォントlinkにcrossorigin |
| `vite.config.ts` | manualChunksにrouter追加 |
| `src/app/components/SamoyedBreederSite.tsx` | hero画像最適化、ファーストビューCTA追加、固定下部CTA追加 |
| `src/app/components/SeoHead.tsx` | OGP画像width/height追加 |
| `src/app/components/PageLayout.tsx` | breadcrumbs prop追加、パンくず表示 |
| `src/app/pages/BreedingSchedulePage.tsx` | breadcrumbs追加 |
| `src/app/pages/FaqPage.tsx` | breadcrumbs追加 |
| `src/app/pages/BloodlinePage.tsx` | breadcrumbs追加 |

---

## 3. 変更内容の要約

### 速度

- **LCP改善**: hero.webpをpreloadし、width/heightでCLSを抑制
- **バンドル分割**: react-router-domを別chunkに分離し初期ロードを軽量化

### 問い合わせ導線

- **ファーストビュー**: 「見学予約・お問い合わせ」ボタンでフォームを即開ける
- **スマホ固定CTA**: スクロール後に下部に「お問い合わせ」「LINE」ボタンを表示

### SEO

- **OGP**: 画像サイズを指定
- **パンくず**: 繁殖予定、FAQ、血統ページに追加
- **alt**: hero画像に意味のあるaltを設定

---

## 4. まだ改善余地がある点

- （対応済み）ドメインを https://smileys.one に統一済み
- **不要ライブラリ**: MUI, react-slick, recharts等がpackage.jsonにあるが使用箇所が限定的。使用状況確認後に削除検討
- **Google Fonts self-host**: フォントを自前ホストにすると初回ロードをさらに改善可能
- **Galleryアニメーション**: 180秒の無限アニメーション。will-change等でレイヤー化されている可能性あり、負荷監視を推奨
- **BreadcrumbList JSON-LD**: パンくずの構造化データは未追加（追加でSEO効果あり）
- **子犬・親犬・資格の並び**: 信頼獲得を意識した順序の見直し

---

## 5. Lighthouse観点での想定改善ポイント

| 指標 | 想定改善 | 理由 |
|------|----------|------|
| **LCP** | 改善 | hero preload、width/height指定によるCLS抑制 |
| **FID/INP** | やや改善 | バンドル分割によるメインスレッド負荷軽減 |
| **CLS** | 改善 | hero画像のサイズ指定 |
| **TBT** | やや改善 | コード分割による初期JS削減 |
| **SEO** | 改善 | パンくず、OGP画像、altの最適化 |

※ 実際のスコアはLighthouseで計測してください。
