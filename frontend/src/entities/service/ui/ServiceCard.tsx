import type { Service } from "@/entities";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
      <div className={`${className} w-auto`}>
      <article
        className="relative flex h-[400px] sm:h-[444px] md:h-[580px] lg:h-[660px] xl:h-[740px] flex-col rounded-[20px] bg-grey border-[15px] border-white mx-auto"
      >
        <div>
          <h3 className="!text-[1.5rem] md:!text-[1.5rem] lg:!text-[1.4rem] w-[150px] sm:w-[150px] md:w-[150px] lg:w-[150px] xl:w-[300px] xl:!text-[2.5rem] uppercase mt-[30px] sm:mt-[46px] ml-[20px] sm:ml-[36px] md:mt-[46px] md:ml-[20px] lg:ml-[40px] xl:ml-[70px]">
            {service.title}
          </h3>
        </div>
        <Link href={service.link} className="absolute -top-[15px] -right-[15px] flex items-center justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px]">
          <div className="absolute inset-0 bg-blue border-[10px] sm:border-[15px] border-white rounded-[20px]"></div>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none" className="relative z-10 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[51px] lg:h-[51px]">
            <path d="M42.5147 14.4853L6.00004 51L-2.62268e-07 45L36.5147 8.4853L4.33098 8.48531L4.33098 7.44008e-06L51 5.40011e-06L51 46.669L42.5147 46.669L42.5147 14.4853Z" fill="black"/>
          </svg>
        </Link>
       
        <div className="flex flex-col gap-[10px] sm:gap-[16px] md:mt-[80px] md:ml-[100px] lg:mt-[100px] lg:ml-[142px] mt-[30px] sm:mt-[50px] ml-[30px] sm:ml-[70px]">
          {service.types.map((type, index) => (
            <li
              key={index}
              className="text-[0.8rem] sm:text-[1rem] md:text-[1.125rem] flex gap-[12px] sm:gap-[20px] align-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="w-[14px] h-[14px] sm:w-[24px] sm:h-[24px] flex-shrink-0"
              >
                <path
                  d="M24 11.9533V12.0467C14.39 12.0467 12.0467 14.3933 12.0467 24H11.9533C11.9533 14.39 9.60333 12.0467 0 12.0467V11.9533C9.60333 11.9533 11.9533 9.60333 11.9533 0H12.0467C12.0467 9.60333 14.39 11.9533 24 11.9533Z"
                  fill="black"
                />
              </svg>
              {type}
            </li>
          ))}
        </div>

        <div className="mt-auto self-end md:mb-[30px] mb-[20px] sm:b-0 sm:mb-0 mr-[20px] sm:mr-[40px]">
          <p className="text-[1rem] sm:text-base md:text-[1.25rem] font-bold uppercase">
            от <span className="text-[2.25rem] sm:text-[1.5rem] md:text-[3rem] uppercase font-bold">{service.price}</span> руб
          </p>
        </div>
      </article>
    </div>
  );
}