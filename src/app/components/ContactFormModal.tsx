"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X, ChevronRight } from "lucide-react";

const reducedTransition = { duration: 0.8, delay: 0 };

const CHECKLIST_ITEMS = [
  "住まいは動物を飼える住居ですか？転居や転勤の予定はありませんか?",
  "飼いたい動物は、自分の生活スタイルに合っていますか?",
  "家族全員、動物を飼うことに賛成していますか?",
  "家族に動物アレルギーの人はいませんか?",
  "毎日欠かさず世話に時間と手間をかけられますか?",
  "飼いたい動物は、自分の体力で世話ができますか?",
  "高齢や病気になった動物の介護をして、死ぬまで飼い続けることができますか?",
  "近所に迷惑をかけないように配慮できますか?",
  "エサ代や治療費など、動物の一生にかかる費用を考えてみましたか?",
  "万が一、飼えなくなったときのことを考えていますか?",
];

const DETAIL_ITEMS = [
  {
    q: "毎日欠かさず、時間と手間をかけて世話ができますか？",
    a: "動物の世話に休みの日はありません。お世話やしつけに時間をかけられないと、動物が困った行動を起こして扱いきれなくなってしまうこともあります。",
  },
  {
    q: "ご近所に迷惑をかけないようにしつけができますか？",
    a: "住宅密集地や集合住宅などではさらに配慮が必要です。",
  },
  {
    q: "動物の大きさ、寿命はあなたの体力や年齢に合っていますか？その動物が命を終えるまで愛情を持って面倒を見ることができますか？",
    a: "動物が寿命を迎える頃あなたは何歳になるか考えましょう。犬猫は１５年近い寿命があり、さらに寿命の長い個体もいます。また成長により巨大化する個体もいます。",
  },
  {
    q: "動物の特性や性格はあなたの生活にあっていますか？",
    a: "日中の運動時間が足りないと、動物が夜に活動して人間が眠れないなどの問題が起こることもあります。",
  },
  {
    q: "一生にかかる費用を考えてみましたか？",
    a: "動物を飼うには経費がかかります。狂犬病予防注射、混合ワクチン、フィラリアの予防薬、エサ代など、年間数十万円以上必要です。また、トリミング犬種の場合は、定期的なトリミング代など、個体によりさらに費用がかかります。",
  },
  {
    q: "動物が病気になったとき、動物病院に連れて行くことができますか？",
    a: "病気によっては、毎日の通院が必要になることもあります。また、動物の医療費は、人間に比べて高額である場合がほとんどです。動物病院に行く時間やお金がなければ適切な医療を受けさせることができないかもしれません。",
  },
  {
    q: "旅行に行くとき、代わりに世話をしてくれる人がいますか？",
    a: "家族や友人、ペットホテルなどの預け先を確保しておくと安心です。",
  },
  {
    q: "転居、就職、進学、結婚、出産など、ライフスタイルが変わっても飼い続けることができますか？",
    a: "ライフスタイルの変化は誰にでも訪れるものです。あきらかに飼えなくなるとわかっているのに飼い始めるのはあまりに無責任なことです。今後、動物を飼えない家にどうしても引っ越さないといけなくなるかもしれません。自分は良くても、家族やパートナーの都合で動物を飼えなくなるかもしれません。その時あなたはどうしますか。",
  },
  {
    q: "突然の入院や不慮の事故など、あなたの身に万一のことがあったとき、代わりに飼ってくれる人がいますか？",
    a: "飼い主の年齢などに関わらず、突然、飼えなくなることがあります。飼えない期間が長期になることも多く、家族や知人に代わりに飼ってもらったり、お世話をするための費用を蓄えておいたりすることも必要になってきます。動物を飼い始める前から万が一に備えておきましょう。",
  },
];

// メール送信: .env に VITE_FORMSPREE_ENDPOINT を設定（Formspree または FormSubmit）
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [step, setStep] = useState<"checklist" | "form">("checklist");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const prefersReducedMotion = useReducedMotion();
  const reduced = prefersReducedMotion === true;

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  useEffect(() => {
    if (!isOpen) {
      setStep("checklist");
      setSubmitStatus("idle");
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!FORM_ENDPOINT) {
      setSubmitStatus("error");
      return;
    }
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const contentVariants = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, scale: 0.85, y: 10 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.85, y: 10 },
      };

  const itemVariants = reduced
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 16 },
        animate: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.2,
            delay: 0.3 + i * 0.12,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        }),
      };

  const transition = reduced
    ? reducedTransition
    : { type: "tween" as const, duration: 3, ease: [0.22, 0.61, 0.36, 1] as const };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="contact-form-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
          role="dialog"
          aria-modal="true"
          initial={false}
          exit={{ opacity: 0 }}
          transition={transition}
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-2xl"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100/90 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="閉じる"
            >
              <X className="h-5 w-5" />
            </button>

            {step === "checklist" ? (
              <>
                <div className="flex-shrink-0 border-b border-gray-100 px-6 py-6">
                  <h2
                    className="pr-10 text-xl font-light text-center"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    飼う前の確認事項
                  </h2>
                  <p className="mt-2 text-center text-base md:text-sm text-gray-500">
                    再度家族と確認・共通認識をしてください
                  </p>
                </div>

                <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-6">
                  <div className="space-y-6 text-gray-700 text-base md:text-sm leading-relaxed">
                    <motion.h3
                      className="font-medium text-gray-900"
                      custom={0}
                      variants={itemVariants}
                      initial="initial"
                      animate="animate"
                    >
                      ■人も動物も安心して暮らすために　飼う前に考えてほしい10のこと
                    </motion.h3>

                    <motion.p
                      custom={1}
                      variants={itemVariants}
                      initial="initial"
                      animate="animate"
                    >
                      ペットを迎え、正しく飼い、そして見送る。飼い主の心構え次第で、ペットの生涯は大きく変わります。
                      <br />
                      飼い始めたその日から、動物の命はあなたにゆだねられます。
                      <br />
                      再度以下の10の項目をチェックしてください。
                    </motion.p>

                    <ol className="space-y-3 list-decimal list-inside">
                      {CHECKLIST_ITEMS.map((text, i) => (
                        <motion.li
                          key={i}
                          custom={2 + i}
                          variants={itemVariants}
                          initial="initial"
                          animate="animate"
                        >
                          {text}
                        </motion.li>
                      ))}
                    </ol>

                    <div className="space-y-4 border-t border-gray-200 pt-6">
                      {DETAIL_ITEMS.map((item, i) => (
                        <motion.p
                          key={i}
                          custom={12 + i}
                          variants={itemVariants}
                          initial="initial"
                          animate="animate"
                        >
                          <strong>{item.q}</strong>
                          <br />
                          →{item.a}
                        </motion.p>
                      ))}
                    </div>

                    <motion.div
                      className="pt-8"
                      custom={21}
                      variants={itemVariants}
                      initial="initial"
                      animate="animate"
                    >
                      <motion.button
                        onClick={() => setStep("form")}
                        className="w-full py-4 min-h-[48px] bg-gray-900 text-white text-base tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        確認した
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key="form-step"
                  className="flex flex-col flex-1 min-h-0"
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={reduced ? reducedTransition : { type: "tween" as const, duration: 3, ease: [0.22, 0.61, 0.36, 1] as const }}
                >
                  <div className="flex-shrink-0 border-b border-gray-100 px-6 py-6">
                    <h2
                      className="pr-10 text-xl font-light text-center"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      お問い合わせフォーム
                    </h2>
                  </div>

                  <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-6">
                  {submitStatus === "success" ? (
                    <div className="py-12 text-center">
                      <p className="text-lg text-gray-700 font-light">
                        お問い合わせありがとうございます。
                        <br />
                        内容を確認のうえ、ご連絡いたします。
                      </p>
                      <motion.button
                        onClick={onClose}
                        className="mt-8 px-8 py-3 min-h-[44px] bg-gray-900 text-white text-base tracking-wider hover:bg-gray-800 transition-colors"
                      >
                        閉じる
                      </motion.button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input type="hidden" name="_subject" value="【Smiley's】お問い合わせ" />
                      <input type="hidden" name="_captcha" value="false" />

                      <div>
                        <label htmlFor="name" className="block text-base md:text-sm tracking-widest text-gray-500 mb-2">
                          お名前 <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full px-0 py-4 bg-transparent border-b border-gray-300 focus:border-gray-900 outline-none transition-colors font-light text-lg"
                          placeholder="山田 太郎"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-base md:text-sm tracking-widest text-gray-500 mb-2">
                          メールアドレス <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full px-0 py-4 bg-transparent border-b border-gray-300 focus:border-gray-900 outline-none transition-colors font-light text-lg"
                          placeholder="example@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-base md:text-sm tracking-widest text-gray-500 mb-2">
                          電話番号
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="w-full px-0 py-4 bg-transparent border-b border-gray-300 focus:border-gray-900 outline-none transition-colors font-light text-lg"
                          placeholder="090-1234-5678"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-base md:text-sm tracking-widest text-gray-500 mb-2">
                          お問い合わせ内容 <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          className="w-full px-0 py-4 bg-transparent border-b border-gray-300 focus:border-gray-900 outline-none transition-colors resize-none font-light text-lg"
                          placeholder="ご質問やご要望をご記入ください"
                        />
                      </div>

                      {submitStatus === "error" && (
                        <p className="text-base md:text-sm text-red-600">
                          送信に失敗しました。しばらく経ってから再度お試しください。
                        </p>
                      )}

                      <motion.button
                        type="submit"
                        disabled={submitStatus === "sending"}
                        className="w-full py-4 min-h-[48px] bg-gray-900 text-white text-base tracking-widest hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        whileHover={submitStatus !== "sending" ? { scale: 1.01 } : {}}
                        whileTap={submitStatus !== "sending" ? { scale: 0.99 } : {}}
                      >
                        {submitStatus === "sending" ? "送信中..." : "送信する"}
                      </motion.button>
                    </form>
                  )}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
