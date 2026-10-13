"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { services, ServiceCard } from "@/entities";
import { motion } from "framer-motion";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Button } from "@/shared/";

export function Services() {
  return (
    <motion.section
      id="services"
      className="w-full mt-[80px] lg:mt-[180px] px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="mb-[40px] sm:mb-[80px] md:mb-[128px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <h1 className="!text-[2.25rem] md:!text-[4rem] uppercase text-center">
          Услуги
        </h1>
      </motion.div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        className="w-full pb-12 md:pb-0 !overflow-visible"
        breakpoints={{
          0:   { slidesPerView: 1, spaceBetween: 16, centeredSlides: false },
          340:   { slidesPerView: 1.2, spaceBetween: 16, centeredSlides: false },
          400:   { slidesPerView: 1.5, spaceBetween: 16, centeredSlides: false },
          580: { slidesPerView: 1.8, spaceBetween: 20, centeredSlides: false },
          640: { slidesPerView: 1.8, spaceBetween: 20, centeredSlides: false },
          1024:{ slidesPerView: 2, spaceBetween: 24, centeredSlides: false },
          1280:{ slidesPerView: 2, spaceBetween: 24, centeredSlides: false },
          1380:{ slidesPerView: 2.3, spaceBetween: 24, centeredSlides: false },
          1920:{ slidesPerView: 3, spaceBetween: 30, centeredSlides: false },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.id} className="!h-auto flex">
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <ServiceCard
                service={service}
                className="rounded-[20px] shadow-[1px_1px_30px_rgba(0,0,0,0.25)]"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-end mt-[40px]">
        <Button className="text-blue" href="/price">
          Мой прайс
        </Button>
      </div>
    </motion.section>
  );
}