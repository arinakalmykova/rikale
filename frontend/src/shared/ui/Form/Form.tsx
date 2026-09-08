"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, SuccessMessage } from "@/shared/";
import { Input } from "@/shared/";
import { useContactForm } from "@/features";

interface FormProps {
  onClose?: () => void;
}

export function Form({onClose}:FormProps) {
  const { submit, isSubmitting, isSuccess, error } = useContactForm();
    if (isSuccess) {
    return <SuccessMessage onClose={onClose} />;
  }
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
        }
      }}
    >
      <motion.div
        className="relative w-full max-w-[1400px] max-h-[860px] bg-white rounded-[35px] p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row items-stretch lg:items-start justify-between gap-[5px] lg:gap-[20px] xl:gap-[30px] mx-auto shadow-2xl"
        initial={{ opacity: 0, y: -50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >

        <button
          className="absolute top-8 right-8 text-black hover:text-blue transition-colors text-2xl z-10"
          aria-label="Закрыть"
          onClick={onClose}
        >
          ✕
        </button>
        <motion.div
          className=" xl:w-[85%] order-2 lg:order-1 flex mt-auto translate-y-[48px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/popup-image.png"
            width={820}
            height={780}
            alt="Картинка формы"
            className="w-full h-auto hidden xl:block self-end bottom-0 max-w-[500px] xl:max-w-[600px] mx-auto lg:mx-0"
          />
        </motion.div>

        {/* Форма */}
        <motion.div
          className="w-full xl:w-[80%] order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <form className="flex flex-col w-full" onSubmit={submit}>
            <motion.h1
              className="uppercase text-left mb-[25px] md:mb-[35px] lg:mb-[45px] !text-[2.5rem] lg:!text-[3rem] xl:!text-[4rem] font-light  leading-15 xl:leading-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              Я готова обсудить
              <br />с вами проект
            </motion.h1>

            <motion.h2
              className="uppercase text-left font-bold mb-[30px] md:mb-[40px] lg:mb-[50px] !text-[1.5rem] md:!text-[1.5rem] lg:!text-[1.75rem] xl:!text-[2.25rem] text-blue"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              Оставить заявку
            </motion.h2>

            <motion.div
              className="flex flex-col gap-[30px] md:gap-[40px] lg:gap-[45px] items-center lg:items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              {/* Имя */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
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
                className="w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
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
                className="w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9, ease: "easeOut" }}
              >
              <textarea
                  name="message"
                  placeholder="Расскажите немного о вашем проекте"
                  rows={4}
                  className="w-full resize-none border-b border-black bg-transparent pb-[12px] outline-none placeholder:text-black/50"
                />
              </motion.div>

              <motion.div
                className="w-full flex justify-center lg:justify-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1, ease: "easeOut" }}
              >
                <Button className="w-full lg:w-auto">
                  {isSubmitting ? "Отправка..." : "Оставить заявку"}
                </Button>
              </motion.div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center font-medium"
                >
                  {error}
                </motion.div>
              )}
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}