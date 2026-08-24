"use client";
import { steps, StepCard } from "@/entities";
import { motion } from "framer-motion";

export function Steps() {
  return (
    <motion.section
      id="steps"
      className="w-full mt-[80px] lg:mt-[180px] px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="mb-[80px] md:mb-[128px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <h1 className="!text-[2.25rem] md:!text-[4rem] uppercase text-center">
          Этапы работ
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id || index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
              transition: { duration: 0.2 },
            }}
            className="h-full"
          >
            <StepCard
              step={step}
              className="rounded-[20px] shadow-[1px_1px_30px_rgba(0,0,0,0.25)] h-[328px]"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}