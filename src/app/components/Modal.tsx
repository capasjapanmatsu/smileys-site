"use client";

import React, { useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import { X } from "lucide-react";

const reducedTransition = { duration: 0.01, delay: 0 };

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  /** 子要素に stagger アニメーションを適用する場合は true */
  staggerChildren?: boolean;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  staggerChildren = false,
}: ModalProps) {
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

  const overlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const contentVariants = reduced
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, scale: 0.85, y: 10 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 10 },
      };

  const transition = reduced ? reducedTransition : { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
        >
          {/* 背景オーバーレイ: 暗い + blur(6px) */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            onClick={onClose}
          />

          {/* モーダル本体 */}
          <motion.div
            className="relative z-10 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-2xl"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 閉じるボタン */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100/90 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="閉じる"
            >
              <X className="h-5 w-5" />
            </button>

            {title && (
              <div className="flex-shrink-0 border-b border-gray-100 px-6 py-6">
                <h2
                  id="modal-title"
                  className="pr-10 text-xl font-light"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h2>
              </div>
            )}

            {/* スクロール可能なコンテンツ（max-height: 80vh） */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-6">
              {staggerChildren ? (
                <StaggerContent reduced={reduced}>{children}</StaggerContent>
              ) : (
                children
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/** 段落・li ごとに stagger 表示（0.06秒間隔、opacity + y） */
function StaggerContent({
  children,
  reduced,
}: {
  children: React.ReactNode;
  reduced: boolean;
}) {
  const itemVariants = reduced
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 12 },
        animate: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.35,
            delay: i * 0.06,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        }),
      };

  const items = React.Children.toArray(children);

  return (
    <div className="space-y-4 text-gray-700 text-base md:text-sm leading-relaxed">
      {items.map((child, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={itemVariants}
          initial="initial"
          animate="animate"
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
