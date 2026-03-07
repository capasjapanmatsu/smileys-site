"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** PCで下からふわっと表示（y方向のオフセットを大きく） */
  fromBottomOnDesktop?: boolean;
  /** PCかどうか（768px以上） */
  isDesktop?: boolean;
}

export function FadeInSection({
  children,
  className = "",
  delay = 0,
  fromBottomOnDesktop = false,
  isDesktop = false,
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px -80px 0px" });
  const prefersReducedMotion = useReducedMotion();

  const useFromBottom = fromBottomOnDesktop && isDesktop;
  const yOffset = useFromBottom ? 80 : 40;
  const blurAmount = useFromBottom ? "8px" : "4px";

  return (
    <motion.div
      ref={ref}
      initial={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 0, y: yOffset, filter: `blur(${blurAmount})` }
      }
      animate={
        prefersReducedMotion || isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: yOffset, filter: `blur(${blurAmount})` }
      }
      transition={{
        duration: useFromBottom ? 1 : 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
