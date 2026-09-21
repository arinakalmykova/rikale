"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Subtitle = {
  title: string;
  items?: string[];
  text?: string | null;
  colors?: string[];
};

type Card = {
  title: string;
  img: string;
  subtitles: Subtitle[];
};

type Props = {
  cards: Card[];
};

export function ProjectCards({ cards }: Props) {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-[20px] md:gap-[20px] mt-[60px] md:mt-[80px] xl:mt-[100px]">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative shadow-[1px_1px_30px_rgba(0,0,0,0.25)] rounded-[20px] border-[10px] md:border-[15px] border-white bg-grey p-[24px] md:p-[32px] xl:p-[40px] flex flex-col h-[550px] md:h-[650px] xl:h-[700px]"
        >
          {card.img && (
            <div className="absolute bottom-[15px] right-[15px] hidden sm:w-60 sm:h-60 sm:block tablet:hidden xl:w-60 xl:h-60 xl:block pointer-events-none opacity-90">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-contain"
                sizes="250px"
              />
            </div>
          )}

          <div className="flex items-start gap-[12px] md:gap-[16px] mb-[30px] md:mb-[45px] pr-[70px] md:pr-[90px] xl:pr-[110px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-[20px] h-[20px] md:w-[26px] md:h-[26px] xl:w-[33px] xl:h-[33px] flex-shrink-0 mt-[4px]"
            >
              <path
                d="M24 11.9533V12.0467C14.39 12.0467 12.0467 14.3933 12.0467 24H11.9533C11.9533 14.39 9.60333 12.0467 0 12.0467V11.9533C9.60333 11.9533 11.9533 9.60333 11.9533 0H12.0467C12.0467 9.60333 14.39 11.9533 24 11.9533Z"
                fill="#8CAEF5"
              />
            </svg>
            <h3 className="!text-[1.25rem] md:!text-[1.25rem] xl:!text-[2.25rem] uppercase text-blue">
              {card.title}
            </h3>
          </div>

          <div className="flex flex-col gap-[20px] flex-1">
            {card.subtitles.map((sub, subIndex) => (
              <div key={subIndex}>
                <h4 className="!text-[0.875rem] md:!text-[1rem] xl:!text-[1.25rem] uppercase font-bold text-blue mb-[10px]">
                  {sub.title}
                </h4>

                {sub.items && sub.items.length > 0 && (
                  <ul className="flex flex-col gap-[8px] ml-[20px] md:ml-[40px]">
                    {sub.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-[0.9375rem] md:text-[1rem] flex gap-[8px]"
                      >
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sub.text && (
                  <p className="text-[0.9375rem] md:text-[1rem] ml-[20px] md:ml-[40px]">
                    {sub.text}
                  </p>
                )}

                {sub.colors && sub.colors.length > 0 && (
                  <div className="flex flex-wrap gap-[10px] md:gap-[14px] ml-[20px] md:ml-[40px]">
                    {sub.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] xl:w-[86px] xl:h-[86px] rounded-[10px] border border-gray-200"
                        style={{ backgroundColor: `#${color}` }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}