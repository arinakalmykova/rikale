"use client";
import { motion } from "framer-motion";
import { Button } from "@/shared";
import Image from "next/image";

const skills = [
    { name: "Adobe Photoshop", procent: 90 },
    { name: "Adobe Illustrator", procent: 75 },
    { name: "Figma", procent: 90 },
    { name: "Blender", procent: 50 }
];

export function AboutMe() {
    return (
        <motion.section 
            className="w-full flex flex-col lg:flex-row gap-[60px] lg:gap-[150px] items-center mt-[80px] lg:mt-[180px] px-4 lg:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div 
                className="flex flex-col w-full lg:w-[60%] order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <motion.h4 
                    className="pl-[16px] border-l-1 !text-[1rem] md:!text-[1.125rem] mr-30 md:self-end md:mr-30"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                    Освоила<br/> топовый софт:
                </motion.h4>
                <div className="flex flex-col -space-y-5 md:-space-y-5">
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={skill.name}  
                            className="relative flex items-center justify-between py-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                        > 
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[45px] lg:h-[55px] bg-grey border border-grey-dark rounded-[20px] w-full -z-10"></div>
                            <div className="text-black text-[1.2rem] sm:text-[2rem] lg:text-[2.5rem] font-bold uppercase z-10 ml-4 lg:ml-10">
                                {skill.name}
                            </div>
                            <div className="text-blue text-[3rem] sm:text-[6rem] lg:text-[8rem] font-bold z-10 leading-none mr-4 lg:mr-10">
                                {skill.procent}%
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div 
                className="flex flex-col w-full lg:w-[40%] order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <div className="flex flex items-center lg:items-start relative">
                    <motion.div 
                        className="relative mb-8 flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    >
                        <Image
                            src="/about_image.png"
                            width={405}
                            height={405}
                            alt="Изображение обо мне"
                            className="relative z-10 md:bottom-5 md:-left-15 lg:-left-35 w-[200px] h-[200px] md:w-[300px] lg:w-[350px] h-auto"
                        />
                        <motion.div 
                            className="absolute bottom-0 -right-15 w-[180px] h-[220px] md:w-60 md:h-70 lg:w-80 lg:h-90 z-1 bg-grey border border-grey-dark rounded-[20px]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        />
                    </motion.div> 
                    <motion.h1 
                        className="uppercase mb-[40px] justify-self-end absolute z-30 bottom-0 right-0 !text-[2.25rem] md:!text-[4rem]"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                    >
                        Обо мне
                    </motion.h1>
                </div>
                <div className="flex flex-col gap-[64px]">
                    <div>
                        <motion.h2 
                            className="!text-[1.5rem] md:!text-[2.25rem] text-blue text-[8rem] font-bold uppercase mb-[40px]"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        >
                            Привет! Меня зовут Арина
                        </motion.h2>
                        <motion.p 
                            className="text-[1rem] md:text-[1.125rem]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                        >
                            Я специализируюсь на создании стильных, уникальных и функциональных сайтов, презентаций, инфографики, которые помогут вашему бизнесу привлечь клиентов и передать вашу уникальность. Если вы ищете дизайнера, который поможет сделать ваш проект успешным, не стесняйтесь связаться со мной. Давайте вместе создадим что-то замечательное!
                        </motion.p>
                    </div>
                    <div className="flex flex-col gap-[38px]">
                        <motion.div 
                            className="flex gap-[100px]"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="31" viewBox="0 0 42 31" fill="none" className="hidden md:block">
                                <path d="M24.5298 31V18.2711C24.5298 8.4475 31.059 1.78939 40.25 0L41.9913 3.7045C37.7353 5.28378 35 9.96994 35 13.7778H42V31H24.5298ZM0 31V18.2711C0 8.4475 6.559 1.78939 15.75 0L17.493 3.7045C13.2353 5.28378 10.5 9.96994 10.5 13.7778H17.4702V31H0Z" fill="#8CAEF5"/>
                            </svg>
                            <Button className="">Обсудить проект</Button>
                        </motion.div>
                        <motion.span 
                            className="text-[1.125rem]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                        >
                            Хороший дизайн — это не только красиво, но и удобно.
                        </motion.span>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}