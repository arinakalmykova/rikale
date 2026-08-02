"use client";
import { Button } from "@/shared/";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="w-full flex flex-col items-center md:items-stretch mt-[60px] md:mt-[75px]">
      <motion.div
        className="flex items-end"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        <div className="flex justify-center align-center">
            <Image
              src="/photo.png"
              width={290}
              height={342}
              alt="Фото дизайнера"
              className="relative z-10 md:w-[235px] md:h-[276px]"
            />
          <div
            className="w-[350px] h-[315px] z-1 bg-grey border border-grey-dark absolute rounded-[20px] md:w-[284px] md:h-[255px]"/>
        </div>
        <motion.div
          className="w-[240px] h-[69px] pl-[18px] border-l-1 ml-[63px] hidden xl:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <motion.h3
            className="uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Дизайн,
            <br />
            который говорит на языке ваших клиентов
          </motion.h3>
        </motion.div>
      </motion.div>

      <div className="flex">
        <Image
          src="/Design.png"
          width={1095}
          height={412}
          alt="Desig"
          className="absolute z-5 left-0 mt-[64px] ml-[40px] hidden 2xl:block"
        />
        <Image
          src="/Design.svg"
          width={344}
          height={144}
          alt="Design"
          className="absolute z-10 block sm:w-[100%] sm:px-[120px] md:-mt-[2%] lg:mt-20 2xl:hidden -mt-15 left-1/2 -translate-x-1/2"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative z-1 left-1/2 md:-translate-x-20 -top-80 hidden md:block"
        >
          <Image
            src="/hero-image.png"
            width={800}
            height={760}
            alt="Изображение с главного экрана"
          />
        </motion.div>
      </div>
      <Image
        src="/n.svg"
        width={258}
        height={256}
        alt="n"
        className="absolute z-10 right-0 -translate-x-30 top-60 hidden 2xl:block"
      />
      <motion.div
        className="flex flex-col-reverse md:gap-[2rem] gap-[20px] mt-[15%] md:left-0 md:-mt-[60%] lg:-mt-[22rem] xl:-mt-[18rem] lg:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
        >
          <Button>Обсудить проект</Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="text-base md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          >
            Разрабатываю эффективные дизайн-решения
            <br /> для бизнеса с фокусом на результат и рост ваших продаж
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
