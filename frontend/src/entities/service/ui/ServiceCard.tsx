import type { Service } from "@/entities";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
    <div className={`${className} w-full h-full`}>
      <article className="relative flex flex-col h-full min-h-[420px] sm:min-h-[460px] md:min-h-[560px] xl:min-h-[700px] rounded-[20px] bg-grey border-[10px] sm:border-[15px] border-white mx-auto">
        <h3 className="!text-[1.25rem] sm:!text-[1.5rem] lg:!text-[1.75rem] xl:!text-[2.25rem] uppercase mt-[24px] sm:mt-[36px] md:mt-[46px] ml-[20px] sm:ml-[26px] lg:ml-[40px] xl:ml-[70px] pr-[70px] sm:pr-[100px] md:pr-[120px] xl:pr-[130px]">
          {service.title}
        </h3>

        <Link
          href={service.link}
          className="absolute -top-[10px] -right-[10px] sm:-top-[15px] sm:-right-[15px] flex items-center justify-center w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] xl:w-[150px] xl:h-[150px]"
        >
          <div className="absolute inset-0 bg-blue border-[8px] sm:border-[10px] md:border-[15px] border-white rounded-[20px]" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 51 51"
            fill="none"
            className="relative z-10 w-[18px] h-[18px] sm:w-[26px] sm:h-[26px] md:w-[36px] md:h-[36px] xl:w-[48px] xl:h-[48px]"
          >
            <path
              d="M42.5147 14.4853L6.00004 51L-2.62268e-07 45L36.5147 8.4853L4.33098 8.48531L4.33098 7.44008e-06L51 5.40011e-06L51 46.669L42.5147 46.669L42.5147 14.4853Z"
              fill="black"
            />
          </svg>
        </Link>

        <div className="flex flex-col gap-[8px] sm:gap-[14px] mt-[24px] sm:mt-[36px] md:mt-[60px] lg:mt-[80px] ml-[20px] sm:ml-[26px] md:ml-[60px] lg:ml-[90px] xl:ml-[70px] pr-[20px] sm:pr-[36px]">
          {service.types.map((type, index) => (
            <li
              key={index}
              className="text-[0.8rem] sm:text-[0.95rem] md:text-[1.05rem] xl:text-[1.125rem] flex gap-[10px] sm:gap-[16px] items-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] md:w-[22px] md:h-[22px] flex-shrink-0 mt-[3px]"
              >
                <path
                  d="M24 11.9533V12.0467C14.39 12.0467 12.0467 14.3933 12.0467 24H11.9533C11.9533 14.39 9.60333 12.0467 0 12.0467V11.9533C9.60333 11.9533 11.9533 9.60333 11.9533 0H12.0467C12.0467 9.60333 14.39 11.9533 24 11.9533Z"
                  fill="black"
                />
              </svg>
              <span className="leading-snug">{type.name}</span>
            </li>
          ))}
        </div>

        <div className="mt-auto self-stretch flex justify-end px-[20px] sm:px-[36px] pb-[20px] sm:pb-[28px] md:pb-[30px]">
          <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] font-bold uppercase text-right">
            от{" "}
            <span className="text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] xl:text-[3rem] uppercase font-bold">
              {service.price}
            </span>{" "}
            руб
          </p>
        </div>
      </article>
    </div>
  );
}