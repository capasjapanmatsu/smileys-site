import { Check, Smartphone, Lock, Users, TrendingUp, ShieldCheck, MapPin, DollarSign } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DogRunLanding() {
  const scrollToApply = () => {
    const applySection = document.getElementById('apply-section');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApply = () => {
    // ここに申し込みフォームへの遷移処理を実装
    alert('お申し込みフォームへ遷移します');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">DogRun Platform</span>
          </div>
          <button 
            onClick={handleApply}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-colors font-medium"
          >
            お申し込みはこちら
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                スマートロックで実現する<br />
                <span className="text-blue-600">新しいドッグラン経営</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                無人経営で24時間365日運営可能。初期費用を抑えて、あなたの土地をドッグランに。
                集客から予約、決済まで全てアプリで完結。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleApply}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  無料で資料請求
                </button>
                <button 
                  onClick={scrollToApply}
                  className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  詳しく見る
                </button>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">登録施設数</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">10万+</div>
                  <div className="text-sm text-gray-600">利用ユーザー数</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">オーナー満足度</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1596653048850-7918adea48b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZ3MlMjBwbGF5aW5nJTIwcGFya3xlbnwxfHx8fDE3NzA3MDYzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Happy dogs playing in dog run"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">完全無人運営</div>
                    <div className="text-sm text-gray-600">人件費ゼロ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2つの運営パターン */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">選べる2つの運営プラン</h2>
            <p className="text-xl text-gray-600">あなたのビジネスモデルに合わせて選択できます</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 有料ドッグラン */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                おすすめ
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">有料ドッグラン運営</h3>
                  <p className="text-blue-600 font-medium">収益化モデル</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">スマートロックで完全無人運営</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">アプリ内で自動決済・売上管理</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">24時間365日営業可能</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">料金設定は自由にカスタマイズ</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">月間収益平均: 15万円〜50万円</span>
                </li>
              </ul>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="text-sm text-gray-600 mb-1">想定月間収益</div>
                <div className="text-3xl font-bold text-blue-600">¥150,000〜</div>
              </div>
            </div>

            {/* 無料ドッグラン */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">無料ドッグラン運営</h3>
                  <p className="text-green-600 font-medium">集客強化モデル</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">店舗併設で集客力アップ</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">カフェ、ペットショップとの相乗効果</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">アプリ内で施設を宣伝</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">予約管理で混雑を防止</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">新規顧客獲得のチャンス</span>
                </li>
              </ul>

              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="text-sm text-gray-600 mb-1">期待効果</div>
                <div className="text-2xl font-bold text-green-600">来店客数2〜3倍増</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={handleApply}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              今すぐ始める
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* システムの特徴 */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">プラットフォームの特徴</h2>
            <p className="text-xl text-gray-600">最新テクノロジーで運営を完全サポート</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Lock className="w-9 h-9 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">スマートロックシステム</h3>
              <p className="text-gray-600 leading-relaxed">
                アプリでの予約と同時に解錠コードを発行。完全無人でセキュリティも万全。人件費ゼロで24時間営業が可能です。
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-9 h-9 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">専用アプリで集客</h3>
              <p className="text-gray-600 leading-relaxed">
                10万人以上のユーザーがアプリ内でドッグランを検索。位置情報から近くの施設を自動表示し、予約まで完結します。
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-9 h-9 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ワクチン管理機能</h3>
              <p className="text-gray-600 leading-relaxed">
                狂犬病予防接種・ワクチン接種状況をアプリで自動確認。オーナー様のチェック業務を大幅削減し、安全性も確保します。
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-9 h-9 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">売上分析ダッシュボード</h3>
              <p className="text-gray-600 leading-relaxed">
                日別・月別の売上、利用者数、ピークタイムなどをリアルタイムで確認。データに基づいた経営判断が可能です。
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-9 h-9 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">地図検索機能</h3>
              <p className="text-gray-600 leading-relaxed">
                ユーザーは現在地から近くのドッグランを簡単検索。口コミや評価も表示され、予約率が向上します。
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-9 h-9 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">予約・決済の自動化</h3>
              <p className="text-gray-600 leading-relaxed">
                予約受付から決済、売上管理まで全自動。キャンセル処理も自動化され、運営の手間を最小限に抑えます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 導入の流れ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">導入の流れ</h2>
            <p className="text-xl text-gray-600">最短2週間でオープン可能</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-bold text-gray-900 mb-2">お申し込み</h4>
                <p className="text-sm text-gray-600">フォームから簡単申し込み</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-bold text-gray-900 mb-2">現地調査</h4>
                <p className="text-sm text-gray-600">施設の確認と最適プラン提案</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-bold text-gray-900 mb-2">設備設置</h4>
                <p className="text-sm text-gray-600">スマートロック等の設置</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h4 className="font-bold text-gray-900 mb-2">運営開始</h4>
                <p className="text-sm text-gray-600">アプリに掲載し運営スタート</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={handleApply}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              無料相談を申し込む
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">よくあるご質問</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white rounded-lg shadow-sm p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                初期費用はどのくらいかかりますか？
                <span className="text-blue-600 text-xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                スマートロック設置費用として5万円〜、その他の初期費用は施設の規模や状態により異なります。詳しくは無料相談にてお見積もりいたします。
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-sm p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                月額の利用料金はかかりますか？
                <span className="text-blue-600 text-xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                プラットフォーム利用料として月額9,800円、売上の10%を手数料としていただきます。無料ドッグランの場合は月額3,980円のみです。
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-sm p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                どのくらいのスペースが必要ですか？
                <span className="text-blue-600 text-xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                最小20坪程度から運営可能です。小型犬専用エリアとして始めることもできます。広さに応じた最適なプランをご提案いたします。
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-sm p-6 group">
              <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                トラブルが発生した場合のサポートはありますか？
                <span className="text-blue-600 text-xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                24時間365日のサポート体制を整えています。緊急時の連絡先もアプリ内に表示され、ユーザー間のトラブルにも対応いたします。
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply-section" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">今すぐドッグラン経営を始めませんか？</h2>
          <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
            初期費用を抑え、無人経営で安定収益。まずは無料相談で詳しい資料をお送りします。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={handleApply}
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-5 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              お申し込みはこちら
            </button>
            <div className="text-left">
              <div className="text-sm text-blue-100">お電話でのお問い合わせ</div>
              <div className="text-2xl font-bold">0120-XXX-XXX</div>
              <div className="text-sm text-blue-100">平日 9:00〜18:00</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">無料</div>
              <div className="text-blue-100">資料請求・相談</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">2週間</div>
              <div className="text-blue-100">最短でオープン</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">24時間</div>
              <div className="text-blue-100">サポート対応</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold">DogRun Platform</span>
              </div>
              <p className="text-sm">
                日本中のドッグランと愛犬家をつなぐプラットフォーム
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm">
                <li>有料ドッグラン運営</li>
                <li>無料ドッグラン運営</li>
                <li>スマートロックシステム</li>
                <li>アプリ集客サポート</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">サポート</h4>
              <ul className="space-y-2 text-sm">
                <li>よくあるご質問</li>
                <li>導入事例</li>
                <li>お問い合わせ</li>
                <li>資料請求</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">会社情報</h4>
              <ul className="space-y-2 text-sm">
                <li>運営会社</li>
                <li>利用規約</li>
                <li>プライバシーポリシー</li>
                <li>特定商取引法</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 DogRun Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
