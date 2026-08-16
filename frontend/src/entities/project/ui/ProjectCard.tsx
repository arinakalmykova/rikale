import type { Project } from "@/entities";
import Link from "next/link";
import { Button } from "@/shared";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  className?: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export function ProjectCard({ project, className = "", onPrev, onNext }: ProjectCardProps) {
  return (
    <div className={`${className} w-full py-[40px] md:py-[60px] border-y flex flex-col xl:flex-row gap-[30px] md:gap-[60px] xl:gap-[115px] min-h-[400px] md:min-h-[500px]`}>
      <div className="w-full xl:w-[45%] flex flex-col order-2 xl:order-1">
        <h3 className="!text-[1.5rem] xl:!text-[2.25rem] uppercase mb-[20px] md:mb-[28px]">
          {project.title}
        </h3>
        <div className="text-[1rem] md:text-[1.125rem]">{project.description}</div>
        
        <div className="mt-[40px] md:mt-[80px] xl:mt-[130px] ml-0 md:ml-[80px] xl:ml-[150px]">
          <div className="uppercase font-bold  text-[1rem] md:text-[1.125rem] mb-[15px] md:mb-[25px]">
            Этапы:
          </div>
          <div className="flex flex-col gap-[6px] md:gap-[8px]">
            {project.steps.map((step, index) => (
              <li key={index} className="text-[0.875rem] md:text-[1rem] uppercase">
                {step}
              </li>
            ))}
          </div>
        </div>
        
        <div className="flex gap-[20px] md:gap-[50px] mt-auto pt-[30px] md:pt-[40px]">
          <Button className="" reverse={true} onClick={onPrev}>Назад</Button>
          <Button className="" onClick={onNext}>Вперед</Button>
        </div>
      </div>

      <div className="w-full xl:w-[55%] order-1 xl:order-2">
        <div className=" relative flex items-center justify-center w-full rounded-[20px] border-[10px] md:border-[15px] border-white overflow-hidden">
          <Image
            src={project.image}
            width={1114}
            height={734}
            alt={`Фото портфолио: ${project.title}`}
            className="w-full h-auto object-cover object-center image-cool-tones rounded-[20px]"
            priority
          /> 
         <div className="absolute -bottom-[10px] -right-[10px] sm:-bottom-[10px] md:-bottom-[15px] md:-right-[15px] z-10">
          <Link
            href={project.link}
            className="flex items-center justify-center w-[70px] h-[70px] md:w-[100px] md:h-[100px] xl:w-[130px] xl:h-[130px] 2xl:w-[160px] 2xl:h-[160px] relative"
          >
            <div className="absolute inset-0 bg-blue border-[8px] sm:border-[10px] md:border-[15px] border-white  rounded-[20px]"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
              className="relative z-10 w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[40px] xl:h-[40px] 2xl:w-[51px] 2xl:h-[51px]"
            >
              <path
                d="M42.5147 14.4853L6.00004 51L-2.62268e-07 45L36.5147 8.4853L4.33098 8.48531L4.33098 7.44008e-06L51 5.40011e-06L51 46.669L42.5147 46.669L42.5147 14.4853Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}