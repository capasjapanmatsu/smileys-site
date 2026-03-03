export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  category?: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "2026-reservation-status",
    title: "2026年度のご予約について",
    excerpt: "今年度の予約状況とキャンセル待ちについてのお知らせです。",
    date: "2026-01-15",
    category: "お知らせ",
    content: `
      <p>いつも当犬舎をご利用いただきありがとうございます。</p>
      <p>2026年度の子犬のお迎えにつきまして、すでに多数のご予約をいただいております。誠にありがとうございます。</p>
      <p>現時点では、今年度の予約はキャンセル待ちとなっております。ご希望の方はお問い合わせフォームよりご連絡ください。キャンセルが発生した場合、順番にご連絡いたします。</p>
      <p>引き続き、少頭数・計画繁殖を基本としたブリーディングに努めてまいります。ご理解のほどよろしくお願いいたします。</p>
    `,
  },
  {
    slug: "samoyed-summer-care",
    title: "サモエドの夏の過ごし方",
    excerpt: "暑さに弱いサモエドの夏のケアと熱中症対策について。",
    date: "2025-06-20",
    category: "飼育のヒント",
    content: `
      <p>サモエドは寒冷地原産の犬種のため、暑さにはあまり強くありません。夏場は特に注意が必要です。</p>
      <h3>室内環境</h3>
      <p>冷房を適切に使用し、室温は25〜26度を目安に保つことをおすすめします。特に湿度の高い日は除湿も効果的です。</p>
      <h3>散歩のタイミング</h3>
      <p>早朝や夕方以降など、気温の低い時間帯を選びましょう。アスファルトは日中の日差しで高温になります。手のひらで地面を触り、暑くないか確認してから散歩する習慣をつけてください。</p>
      <h3>水分補給</h3>
      <p>こまめな水分補給を心がけましょう。外出時は水筒と折りたたみ式のボウルを持ち歩くのがおすすめです。</p>
      <p>愛犬が快適に夏を過ごせるよう、日々の観察を大切になさってください。</p>
    `,
  },
  {
    slug: "puppy-socialization",
    title: "子犬の社会化期について",
    excerpt: "生後3〜12週齢の社会化期に大切にしたいこと。",
    date: "2025-05-10",
    category: "繁殖・子犬",
    content: `
      <p>子犬の社会化期は、性格形成に大きく関わる重要な時期です。</p>
      <p>生後3〜12週齢頃、さまざまな音・匂い・人・環境に触れさせることで、穏やかで適応力の高い成犬へと成長します。</p>
      <h3>当犬舎での取り組み</h3>
      <p>当犬舎では、子犬たちが家族と共に日常生活を過ごす中で、掃除機の音、来客、車の音など、多様な刺激に自然に慣れていける環境を整えています。</p>
      <p>お迎え後も、無理のない範囲で少しずつ新しい経験を積ませてあげることが、長い犬生の土台になります。</p>
    `,
  },
  {
    slug: "2023-litter-update",
    title: "8月末産まれオーナー様決定のお知らせ",
    excerpt: "2023年8月末産まれの子犬たちが全頭オーナー様にお決まりになりました。",
    date: "2023-10-01",
    category: "お知らせ",
    content: `
      <p>2023年8月末に誕生した子犬たちが、無事に全頭オーナー様のお決まりとなりました。</p>
      <p>ご縁をいただいた皆様、誠にありがとうございます。新しいご家族との生活が始まりますことを、心よりお喜び申し上げます。</p>
      <p>これからも当犬舎は、ご家族の一員として幸せに暮らしていただけるよう、お迎え後のサポートにも努めてまいります。</p>
    `,
  },
];

// 新しい順（日付降順）でソート
export const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
