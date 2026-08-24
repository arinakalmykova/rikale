"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { services, ServiceCard } from "@/entities";
import { motion } from "framer-motion";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

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
        className="mb-[80px] md:mb-[128px]"
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
        initialSlide={1}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="w-full pb-12 md:pb-0"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
            pagination: true,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
            pagination: true,
          },
          945: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
            pagination: true,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
            pagination: true,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 20,
            pagination: true,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 20,
            pagination: false,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.id} className="h-auto">
            <motion.div
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
            >
              <ServiceCard
                service={service}
                className="rounded-[20px] shadow-[1px_1px_30px_rgba(0,0,0,0.25)]"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
