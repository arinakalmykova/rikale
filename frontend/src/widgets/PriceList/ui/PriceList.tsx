"use client";

import { motion } from "framer-motion";
import { services, ServiceSection } from "@/entities";

export function PriceList() {
  return (
    <div className="flex flex-col mb-[100px]">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
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
          className="pt-[60px] md:pt-[130px] first:pt-0"
        >
          <ServiceSection service={service} />
        </motion.div>
      ))}
    </div>
  );
}