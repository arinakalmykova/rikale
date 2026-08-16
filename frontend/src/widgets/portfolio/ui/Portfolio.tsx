"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ProjectCard } from "@/entities";
import { motion } from "framer-motion";
import "swiper/css/pagination";
import { useProjects } from "@/features";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

export function Portfolio() {
  const { projects, error, loading } = useProjects();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <motion.section
      id="portfolio"
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
          Портфолио
        </h1>
      </motion.div>

      {loading ? (
        // Скелетон для карточек
        <div className="grid grid-cols-1 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="w-full h-[400px] md:h-[500px] bg-grey rounded-[20px] border-[15px] border-white"></div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div>Ошибка: {error}</div>
      ) : (
        <Swiper
          slidesPerView={1}
          className="w-full pb-12 md:pb-0 !overflow-hidden"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 30 },
            768: { slidesPerView: 1, spaceBetween: 30 },
            1024: { slidesPerView: 1, spaceBetween: 30 },
            1280: { slidesPerView: 1, spaceBetween: 30 },
            1920: { slidesPerView: 1, spaceBetween: 30 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id} className="h-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <ProjectCard
                  project={project}
                  onPrev={() => swiperRef.current?.slidePrev()}
                  onNext={() => swiperRef.current?.slideNext()}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </motion.section>
  );
}