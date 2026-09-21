"use client";
import { motion, } from "framer-motion";

interface SuccessMessageProps {
  onClose?: () => void;
}

export function SuccessMessage({ onClose }: SuccessMessageProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) {
          onClose();
        }
      }}
    >
      <motion.div
        className="relative max-w-[480px] w-full bg-white rounded-[35px] p-10 md:p-12 shadow-2xl text-center"
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-black hover:text-blue transition-colors text-2xl z-10"
          aria-label="Закрыть"
        >
          ✕
        </button>

        <motion.h2
          className="text-2xl md:text-3xl font-bold uppercase text-black mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Спасибо!
        </motion.h2>

        <motion.p
          className="text-gray-600 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Я получила вашу заявку и свяжусь с вами<br />
          <span className="font-bold text-blue">в ближайшее время</span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}