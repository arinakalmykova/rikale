"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type Props = {
  images: string[];
  title: string;
};

export function ProjectSlider({ images, title }: Props) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [current, setCurrent] = useState(0);

  if (!images?.length) return null;

  return (
    <div className="relative w-full rounded-[20px] border-[10px] md:border-[15px] border-white">
      <div className="relative w-full bg-gray-50 rounded-[10px] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={400}
          slidesPerView={1}
          spaceBetween={0}
          autoHeight={true}
          onSwiper={setSwiper}
          onSlideChange={(s) => setCurrent(s.realIndex)}
          className="w-full project-slider"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                src={img}
                alt={`${title} — фото ${i + 1}`}
                width={1200}
                height={900}
                quality={95}
                className="w-full h-auto object-contain"
                sizes="(max-width: 1280px) 100vw, 55vw"
                priority={i === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>


        {images.length > 1 && (
          <>
            <button
              onClick={() => swiper?.slidePrev()}
              aria-label="Предыдущее фото"
              className="absolute left-[10px] md:left-[16px] top-1/2 -translate-y-1/2 z-10 w-[36px] h-[36px] md:w-[44px] md:h-[44px] rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#8CAEF5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              aria-label="Следующее фото"
              className="absolute right-[10px] md:right-[16px] top-1/2 -translate-y-1/2 z-10 w-[36px] h-[36px] md:w-[44px] md:h-[44px] rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#8CAEF5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-[6px] md:gap-[8px] mt-[16px] md:mt-[20px] px-[10px]">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => swiper?.slideTo(i)}
              aria-label={`Фото ${i + 1}`}
              className="relative flex-1 h-[3px] md:h-[4px] bg-gray-200 rounded-full overflow-hidden transition-all hover:h-[6px]"
            >
              <div
                className={`absolute inset-y-0 left-0 bg-blue rounded-full transition-all duration-300 ${
                  i <= current ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}