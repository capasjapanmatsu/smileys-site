import { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Heart, Phone, Mail, ChevronRight, CalendarDays, Eye, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useSeo } from '../hooks/useSeo';

const ChecklistModal = lazy(() =>
  import('./ChecklistModal').then((m) => ({ default: m.ChecklistModal }))
);
const ContactFormModal = lazy(() =>
  import('./ContactFormModal').then((m) => ({ default: m.ContactFormModal }))
);

export function SamoyedBreederSite() {
  useSeo({
    title: "熊本のサモエド専門犬舎 | Smiley's",
    description:
      "熊本で少頭数・小規模にサモエドをブリーディング。血統・健康・気質を重視し、見学予約や繁殖予定、お迎えまでの流れを掲載しています。",
    canonicalPath: "/",
    ogImage: "/hero.webp",
  });

  const [activeSection, setActiveSection] = useState('home');
  const [checklistModalOpen, setChecklistModalOpen] = useState(false);
  const [contactFormModalOpen, setContactFormModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'news', label: 'News' },
    { id: 'about', label: 'Philosophy' },
    { id: 'puppies', label: 'Puppies' },
    { id: 'parents', label: '血統' },
    { id: 'gallery', label: 'ギャラリー' },
    { id: 'contact', label: 'Contact' }
  ];

  const galleryImages = Array.from(
    { length: 29 },
    (_, i) => `/gallery/gallery-${String(i + 1).padStart(2, '0')}.webp`
  );

  const welcomeSteps = [
    {
      number: '01',
      title: 'お問い合わせ',
      description: 'お電話またはメールフォームからお気軽にお問い合わせください',
      icon: <Phone className="w-8 h-8 text-amber-700" />,
    },
    {
      number: '02',
      title: '見学予約',
      description: '見学日時をご予約いただきます。事前予約制となっております',
      icon: <CalendarDays className="w-8 h-8 text-amber-700" />,
    },
    {
      number: '03',
      title: 'ご見学',
      description: '実際に子犬とふれあい、健康状態や性格をご確認いただけます',
      icon: <Eye className="w-8 h-8 text-amber-700" />,
    },
    {
      number: '04',
      title: 'お申し込み',
      description: 'お気に入りの子が見つかりましたら、お申し込み手続きをいたします',
      icon: <FileText className="w-8 h-8 text-amber-700" />,
    },
    {
      number: '05',
      title: 'お引き渡し',
      description: '健康診断書と必要書類をお渡しし、お迎えいただきます',
      icon: <Heart className="w-8 h-8 text-amber-700" />,
    },
  ];

  const faqs = [
    {
      q: "どれくらい大きくなりますか？",
      a: "個体差はありますが、男の子で30kg程度、女の子で25kg程度になります。",
    },
    {
      q: "匂いは気になりますか？",
      a: "月に1、2回程度のシャンプーでほとんど気になりません。",
    },
    {
      q: "トリミングは必要ですか？",
      a: "毛が伸び続ける犬種ではないので基本不要ですが、足元・足の裏などは定期的なカットが必要です。",
    },
    {
      q: "抜け毛やメンテナンスはどのような感じですか？",
      a: "日々ブラッシングは必要です。換毛期（年に2度程度）には一気に毛が生え変わるため、集中的なケアが必要です。",
    },
    {
      q: "運動量はどれくらい必要ですか？",
      a: "毎日朝夕1時間程度のお散歩が理想です。",
    },
    {
      q: "お留守番はできますか？",
      a: "犬種の特徴としてお留守番は苦手です。常にワンちゃんのそばに人がいる環境がおすすめです。",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, duration = 1500) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = window.innerWidth < 768 ? 84 : 100;
    const targetY = element.getBoundingClientRect().top + window.scrollY - headerOffset;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const puppies = [
    { id: 1, gender: "♀女の子", image: "/puppy-01.webp" },
    { id: 2, gender: "♂男の子", image: "/puppy-02.webp" },
    { id: 3, gender: "♀女の子", image: "/puppy-03.webp" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif" }}>
      {/* Side Navigation */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center gap-3"
            >
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id 
                  ? 'bg-gray-900 w-12' 
                  : 'bg-gray-300 group-hover:bg-gray-500'
              }`} />
              <span className={`text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                activeSection === section.id 
                  ? 'opacity-100 translate-x-0 text-gray-900' 
                  : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-gray-500'
              }`}>
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Top Bar */}
      <motion.div 
        className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-40 border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/samoyed-icon.webp"
              alt="サモエドアイコン"
              className="h-10 md:h-12 w-auto object-contain"
              width={40}
              height={40}
            />
            <motion.img 
              src="/logo.webp" 
              alt="Smiley's Kennel - サモエド専門犬舎" 
              className="h-10 md:h-12 w-auto object-contain ml-2"
              width={264}
              height={80}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/samoyed" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
              サモエドについて
            </Link>
            <Link to="/bloodline" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
              血統
            </Link>
            <Link to="/breeding-policy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
              繁殖理念
            </Link>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 min-h-[44px] bg-gray-900 text-white text-base tracking-wider hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ opacity, scale }}
        >
          <ImageWithFallback
            src="/hero.webp"
            alt="サモエドの親犬と2頭の子犬が緑の芝生の上で仲良く眠っている様子 - 熊本サモエド専門犬舎 Smiley's"
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white" />
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 
              className="text-5xl sm:text-6xl md:text-9xl font-light mb-6 text-gray-900 tracking-tight leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Smiley's
            </h1>
            <p className="text-base sm:text-lg md:text-2xl font-light tracking-widest text-gray-700 mb-12">
              サモエド専門犬舎 | 熊本・九州
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('puppies')}
              className="group inline-flex items-center gap-3 text-base tracking-widest border-b-2 border-gray-900 py-2 hover:gap-5 transition-all duration-300 min-h-[44px]"
              whileHover={{ scale: 1.05 }}
            >
              オーナー様募集案内
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-400 to-transparent" />
        </motion.div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                transition={{ duration: 0.8 }}
                className="h-px bg-gray-900 mb-6"
              />
              <h2 className="text-2xl font-light mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                最新お知らせ
              </h2>
              <ul className="space-y-4 text-gray-700 font-light">
                <li className="flex gap-4">
                  <span className="text-gray-500 shrink-0">2026年</span>
                  <span>今年度の予約はキャンセル待ちとなります。</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gray-500 shrink-0">2023年</span>
                  <span>8月末産まれオーナー様全頭決まりました。</span>
                </li>
              </ul>
              <motion.button
                onClick={() => scrollToSection('puppies')}
                className="inline-flex items-center gap-2 mt-8 text-base tracking-widest border-b border-gray-900 py-2 hover:border-gray-500 transition-colors bg-transparent cursor-pointer text-left min-h-[44px]"
                whileHover={{ x: 4 }}
              >
                オーナー様募集案内
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 60 }}
                    transition={{ duration: 0.8 }}
                    className="h-px bg-gray-900 mb-6"
                  />
                  <h2 
                    className="text-5xl md:text-6xl font-light mb-6 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    当犬舎について
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light">
                  <p>
                    熊本にて、少頭数・小規模でサモエドのブリーディングを行っております。
                  </p>
                  <p>
                    私たちにとって繁殖は仕事ではなく、情熱です。
                    一つひとつの繁殖は、長い時間をかけた考察と計画の成果であり、その唯一の目的は利益ではなく、犬種の改良に貢献することです。
                  </p>
                  <p>
                    ドッグショーへの参加や海外血統の導入、理想の血統犬を探すための時間・距離・費用は、決して惜しみません。
                  </p>
                  <p>
                    当犬舎の犬たちは家族の一員です。
                    日常生活やスポーツ、休日、そしてソファーまで共にする存在です。
                    そのため、愛情を十分に注げるよう少数でのブリーディングを行っており、常に子犬がいるわけではありません。
                    また当犬舎から出た子犬達はペットショップに並ぶようなことはありません。
                  </p>
                  <p>
                    子犬はご予約で埋まることがほとんどですので、事前のご予約をお願いいたします。
                    HP上ではその年のご予約のみ承っております。
                  </p>
                  <p>
                    なお、お問い合わせをいただいても、常に無条件でお譲りできるわけではないことを予めご了承頂きますようお願い致します。
                  </p>

                  <div className="pt-12 space-y-4 border-t border-gray-200 mt-12">
                    <AnimatedSection delay={0.1}>
                      <Link
                        to="/samoyed"
                        className="block text-xl font-light text-gray-900 hover:text-gray-600 transition-colors border-b border-transparent hover:border-gray-900 pb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        サモエドってどんな犬？（サモエドについて）
                      </Link>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                      <Link
                        to="/bloodline"
                        className="block text-xl font-light text-gray-900 hover:text-gray-600 transition-colors border-b border-transparent hover:border-gray-900 pb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        血統について
                      </Link>
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                      <Link
                        to="/breeding-policy"
                        className="block text-xl font-light text-gray-900 hover:text-gray-600 transition-colors border-b border-transparent hover:border-gray-900 pb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        繁殖理念
                      </Link>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden"
                >
                  <ImageWithFallback
                    src="/about-kennel.webp"
                    alt="紅葉の中で座るサモエド"
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                    width={1200}
                    height={1600}
                  />
                </motion.div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-gray-900 -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Puppies Section */}
      <section id="puppies" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <AnimatedSection>
            <div className="text-center mb-20">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                transition={{ duration: 0.8 }}
                className="h-px bg-gray-900 mb-6 mx-auto"
              />
              <h2 
                className="text-5xl md:text-6xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                子犬紹介
              </h2>
              <p className="text-lg text-gray-600 font-light tracking-wide">
                現在は２０２７年度出産予定のご予約を受け付けております。
              </p>
              <Link
                to="/breeding-schedule"
                className="inline-flex items-center gap-2 mt-4 text-base tracking-widest border-b border-gray-900 py-2 hover:border-gray-500 transition-colors min-h-[44px]"
              >
                繁殖予定
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-12">
              {puppies.map((puppy, index) => (
                <AnimatedSection key={puppy.id} delay={index * 0.2}>
                  <motion.div
                    className="group cursor-pointer"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ImageWithFallback
                          src={puppy.image}
                          alt={`サモエドの子犬（${puppy.gender}）- 2027年度出産予定`}
                          className="w-full h-96 object-cover"
                          loading="lazy"
                          width={1200}
                          height={900}
                        />
                      </motion.div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-xl font-light text-gray-900">
                        {puppy.gender}
                      </div>

                      <div className="pt-4">
                        <button 
                          onClick={() => setContactFormModalOpen(true)}
                          className="text-base tracking-widest border-b border-gray-900 py-2 hover:border-gray-500 transition-colors inline-flex items-center gap-2 group min-h-[44px]"
                        >
                          お問い合わせ
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            <div className="absolute inset-0 bg-gray-900/45 backdrop-blur-[1px] flex items-center justify-center pointer-events-none">
              <p className="text-white text-xl md:text-3xl tracking-wide font-light text-center px-6">
                現在募集中の子犬はいません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parents Section */}
      <section id="parents" className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <AnimatedSection>
            <div className="text-center mb-20">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                transition={{ duration: 0.8 }}
                className="h-px bg-gray-900 mb-6 mx-auto"
              />
              <h2 
                className="text-5xl md:text-6xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                犬舎のBOYS & GIRLS
              </h2>
              <p className="text-lg text-gray-600 font-light tracking-wide">
                優れた血統と健康な親犬たち
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {[
              {
                name: "サム",
                role: "BOYS",
                title: "ロシアチャンピオン",
                description:
                  "ロシア – BELIY VOLK（ベリーヴォルク）犬舎から来た男の子。この犬舎は世界的ショーで多数のチャンピオンを輩出し、骨格の美しさ、落ち着いた性格、豊富な被毛を特徴としおっとりとした優しい性格が特徴。 曾祖父に名犬「BELIY VOLK DIVIDE ET IMPERA（デイビットインペラ）」を持つ直系血統。",
                image: "/parent-sam.webp"
              },
              {
                name: "クビトカ",
                role: "GIRLS",
                title: "ウクライナ モルドバ他多数のジュニアチャンピオン",
                description:
                  "ウクライナ有名犬舎DAENERYS / DESANT（デザナリー）犬舎より来た優良血統の女の子です。さらに43カ国でタイトルを獲得し、世界で最も有名なサモエドの一頭である「BELIY VOLK YAROMIR VELIKIY（ヤロミヤベルギー）」の血統も受け継ぎ、骨格と歩様を正しく伝えています。",
                image: "/parent-kubitka.webp"
              }
            ].map((dog, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="group">
                  <div className="relative overflow-hidden mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={dog.image}
                        alt={`種犬 ${dog.name} - ${dog.role}（${dog.title}）`}
                        className="w-full h-[500px] object-cover"
                        loading="lazy"
                        width={1200}
                        height={1500}
                      />
                    </motion.div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-base md:text-sm tracking-widest text-gray-500">{dog.role}</div>
                    <h3 
                      className="text-4xl font-light"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {dog.name}
                    </h3>
                    <div className="text-base md:text-sm text-gray-600 font-light">{dog.title}</div>
                    {"description" in dog && dog.description ? (
                      <p className="text-base md:text-sm text-gray-700 font-light leading-relaxed pt-2">{dog.description}</p>
                    ) : null}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="pt-8 pb-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <AnimatedSection>
            <div className="text-center mb-14">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                transition={{ duration: 0.8 }}
                className="h-px bg-gray-900 mb-6 mx-auto"
              />
              <h2
                className="text-4xl md:text-5xl font-light italic tracking-wide mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Gallery
              </h2>
              <p className="text-base text-gray-600 font-light tracking-wider">
                巣立った子犬達
              </p>
            </div>
          </AnimatedSection>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 180, ease: 'linear', repeat: Infinity }}
            >
              {[...galleryImages, ...galleryImages].map((src, index) => (
                <div key={`${src}-${index}`} className="w-72 md:w-80 shrink-0">
                  <img
                    src={src}
                    alt={`巣立ったサモエドの子犬ギャラリー ${index + 1}`}
                    className="w-full h-72 md:h-80 object-cover rounded-sm"
                    loading="lazy"
                    width={320}
                    height={320}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 飼う前に考えてほしい事 */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-light mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                飼う前に考えてほしい10の事
              </h2>
              <p className="text-gray-300 font-light leading-relaxed text-center mb-8">
                サモエドをお迎えする前に、以下の点をご確認ください。
              </p>
              <ul className="space-y-3 text-gray-300 font-light text-base">
                <li>※アパート、マンションの方はお断りする場合があります。</li>
                <li>※大きくなる犬種です。それなりの広さやイタズラ等、吠える事もします。お金もかかります。</li>
                <li>※これらを踏まえ迎えたその日から終生愛情を持って家族として迎えてくれる方のお問い合わせお待ちしております。</li>
                <li>※大型犬ですので年齢制限を設けています。</li>
              </ul>
              <motion.button
                onClick={() => setChecklistModalOpen(true)}
                className="inline-flex items-center gap-2 mt-8 text-base tracking-widest border-b border-white py-2 hover:border-gray-400 transition-colors text-white cursor-pointer bg-transparent min-h-[44px]"
                whileHover={{ x: 4 }}
              >
                詳細をご確認ください
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 飼う前に考えてほしい10の事 ポップアップ */}
      <Suspense fallback={null}>
        <ChecklistModal
          isOpen={checklistModalOpen}
          onClose={() => setChecklistModalOpen(false)}
        />
      </Suspense>

      {/* お問い合わせフォーム（10項目チェック→確認した→フォーム） */}
      <Suspense fallback={null}>
        <ContactFormModal
          isOpen={contactFormModalOpen}
          onClose={() => setContactFormModalOpen(false)}
        />
      </Suspense>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 gap-20">
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 60 }}
                    transition={{ duration: 0.8 }}
                    className="h-px bg-gray-900 mb-6"
                  />
                  <h2 
                    className="text-5xl md:text-6xl font-light mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    お問い合わせ
                  </h2>
                  <p className="text-lg text-gray-600 font-light leading-relaxed">
                    子犬の見学やお問い合わせは、土日祝13:00～17:00に承っております。
                    当店はペットショップではありませんので見学は事前のご予約が必要です。土日祝のみ見学可能となります。
                  </p>
                </div>

                <div className="space-y-6 pt-8">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-gray-900 mt-1 shrink-0" />
                    <div>
                      <div className="text-base md:text-sm tracking-widest text-gray-500 mb-1">住所</div>
                      <div className="text-lg font-light text-gray-900">
                        熊本県熊本市北区龍田2丁目14-16
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-gray-900 mt-1 shrink-0" />
                    <div>
                      <div className="text-base md:text-sm tracking-widest text-gray-500 mb-1">営業時間</div>
                      <div className="text-xl font-light">土日祝 13:00～17:00</div>
                      <div className="text-base md:text-sm text-gray-500 font-light mt-1">※事前予約制</div>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={() => setContactFormModalOpen(true)}
                  className="inline-flex items-center gap-2 mt-8 text-base tracking-widest border-b border-gray-900 py-2 hover:border-gray-500 transition-colors bg-transparent cursor-pointer text-left min-h-[44px]"
                  whileHover={{ x: 4 }}
                >
                  お問い合わせフォーム
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-8 p-8 md:p-12 bg-gray-50 border border-gray-100">
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  見学・お問い合わせは本サイトよりお願いいたします。
                  土日祝13:00～17:00、事前予約制となります。
                </p>
                <motion.button
                  onClick={() => setContactFormModalOpen(true)}
                  className="inline-flex items-center justify-center w-full py-4 min-h-[48px] bg-gray-900 text-white text-base tracking-widest hover:bg-gray-800 transition-colors gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  お問い合わせフォーム
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 60 }}
                  transition={{ duration: 0.8 }}
                  className="h-px bg-gray-900 mb-6 mx-auto"
                />
                <h2
                  className="text-4xl md:text-5xl font-light"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  FAQ
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((item, index) => (
                  <AnimatedSection key={item.q} delay={index * 0.05}>
                    <div className="bg-white border border-gray-200 p-6 md:p-7">
                      <h3 className="text-lg md:text-xl text-gray-900 mb-3 font-medium">{item.q}</h3>
                      <p className="text-gray-700 font-light leading-relaxed">{item.a}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Welcome Flow Section */}
      <section className="py-24 bg-[#f7f6f2] border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2
                className="text-4xl md:text-5xl font-light mb-4 text-gray-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                お迎えまでの流れ
              </h2>
              <p className="text-lg text-gray-600 font-light">
                安心してお迎えいただくための5つのステップ
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {welcomeSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.08}>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#f3e9c9] flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-light text-amber-700 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-light text-gray-900 mb-3 leading-tight">{step.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-base md:text-sm">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-8">
            <div className="space-y-2 text-base md:text-sm text-gray-300 font-light">
              <p><strong className="text-white">事業所名</strong> Smiley's</p>
              <p><strong className="text-white">犬舎名</strong> SAMMY.SMILE JP'S</p>
              <p><strong className="text-white">住所</strong> 熊本県熊本市北区龍田2丁目14-16</p>
              <p><strong className="text-white">動物取扱業登録番号</strong> 第一種動物取扱業熊市販第R7-12号</p>
              <p><strong className="text-white">動物取扱責任者</strong> 松本 亜理沙</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4 border-t border-gray-700">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5" />
                <span className="text-lg font-light tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Smiley's
                </span>
              </div>
              <div className="text-base md:text-sm text-gray-400 font-light">
                <p>copyright © Smiley's All Rights Reserved.</p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/jkc-logo.webp"
                  alt="ジャパンケネルクラブ"
                  className="h-10 md:h-12 w-auto object-contain"
                  width={280}
                  height={72}
                  loading="lazy"
                />
                <img
                  src="/fci-logo.webp"
                  alt="FCI"
                  className="h-10 md:h-12 w-auto object-contain"
                  width={72}
                  height={72}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Animated Section Component with Intersection Observer
function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
