import {Button} from "@/shared/";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <div className="w-full flex flex-col items-center md:items-stretch mt-[60px] md:mt-[75px]">
            <div className="flex items-end">
                <div className="flex justify-center align-center">
                    <Image 
                    src="/photo.png"
                    width={290}
                    height={342}
                    alt="Фото дизайнера"
                    className="relative z-10 md:w-[235px] md:h-[276px]"
                    />
                    <div className="w-[350px] h-[315px] z-1 bg-grey border border-grey-dark absolute rounded-[20px] md:w-[284px] md:h-[255px]"></div>
               </div>
                <div className="w-[240px] h-[69px] pl-[18px] border-l-1 ml-[63px] hidden xl:block">
                    <h3 className="uppercase">
                        Дизайн,<br/>который говорит на языке ваших клиентов
                    </h3>
                </div>
            </div>
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
                <Image 
                    src="/hero-image.png"
                    width={800}
                    height={760}
                    alt="Изображение с главного экрана"
                    className="relative z-1 left-1/2 md:-translate-x-20 -top-80 hidden md:block"
                />
                <Image 
                    src="/n.svg"
                    width={258}
                    height={256}
                    alt="n"
                    className="absolute z-10 right-0 -translate-x-30 top-60 hidden 2xl:block"
                />
            </div>
            <div className="flex flex-col-reverse md:gap-[2rem] gap-[20px] mt-[15%] md:left-0 md:-mt-[60%] lg:-mt-[22rem] xl:-mt-[18rem] lg:flex-row">
                <Button>Обсудить проект</Button>
                <div>
                     <div className="text-base md:text-lg">Разрабатываю эффективные дизайн-решения<br/> для бизнеса с фокусом на результат и рост ваших продаж</div>
                </div>
            </div>
        </div>
    );
}