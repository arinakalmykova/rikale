"use client";
import { Header, Footer } from "@/widgets";
import { services, ServiceSection } from "@/entities";
import { motion } from "framer-motion";

export default function PricePage() {
  return (
    <> 
    <Header/>
    <main className="px-[20px] md:px-[80px] xl:px-[120px]">
      <h1 className="text-left uppercase !text-[2.25rem] md:!text-[4rem] mt-[122px] mb-[50px]">
        Прайс-лист
      </h1>
      <div className="flex flex-col gap-[10px] md:gap-[130px]">
 {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              key={index}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
            >
              <ServiceSection
                service={service}
              />
            </motion.div>
        ))}
      </div>
       
    </main>
    <Footer/>
    </>
 
  );
}