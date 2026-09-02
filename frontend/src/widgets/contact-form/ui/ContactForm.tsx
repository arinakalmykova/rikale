"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/shared/";
import { Input } from "@/shared/";
import { useContactForm } from "@/features";

export function ContactForm() {
    const {
    submit,
    isSubmitting,
    isSuccess,
    error,
  } = useContactForm();

 
  return (
    <motion.section
      id="contact-form"
      className="w-full mt-[80px] lg:mt-[180px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[40px] lg:gap-[100px] xl:gap-[200px] mx-auto">
        <motion.div
          className="w-full lg:w-[45%] xl:w-[50%] order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/contact-form.png"
            width={820}
            height={780}
            alt="Картинка формы"
            className="hidden lg:block w-full h-auto max-w-[400px] lg:max-w-[500px] xl:max-w-[820px] mx-auto lg:mx-0"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-[45%] xl:w-[40%] order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <form className="flex flex-col w-full"  onSubmit={submit}>
            <motion.h1
              className="uppercase text-center lg:text-right mb-[40px] md:mb-[60px] lg:mb-[100px] !text-[2.5rem] lg:!text-[2.5rem] xl:!text-[4rem] font-light"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              Я готова обсудить<br />с вами проект
            </motion.h1>

            <motion.h2
              className="uppercase text-center lg:text-right font-bold mb-[30px] md:mb-[40px] lg:mb-[50px] !text-[1.25rem] md:!text-[1.5rem] lg:!text-[1.75rem] xl:!text-[2rem]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              Расскажите о вашей задаче
            </motion.h2>

            <motion.div
              className="flex flex-col gap-[30px] md:gap-[40px] lg:gap-[45px] items-center lg:items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              {/* Имя */}
              <motion.div
                className="w-full max-w-[400px] lg:max-w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.7,
                  ease: "easeOut",
                }}
              >
                <Input
                  name="name"
                  placeholder="Ваше имя"
                  type="text"
                  required
                  className="w-full"
                />
              </motion.div>

              {/* Контакт */}
              <motion.div
                className="w-full max-w-[400px] lg:max-w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.8,
                  ease: "easeOut",
                }}
              >
                <Input
                  name="contact"
                  placeholder="Как с вами связаться?"
                  type="text"
                  required
                  className="w-full"
                />
              </motion.div>

              {/* Описание проекта */}
              <motion.div
                className="w-full max-w-[400px] lg:max-w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.9,
                  ease: "easeOut",
                }}
              >
                <textarea
                  name="message"
                  placeholder="Расскажите немного о вашем проекте"
                  rows={4}
                  className="w-full resize-none border-b border-black bg-transparent pb-[12px] outline-none placeholder:text-black/50"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 1,
                  ease: "easeOut",
                }}
              >
                <Button>
                  Обсудить проект
                </Button>
                     </motion.div>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}