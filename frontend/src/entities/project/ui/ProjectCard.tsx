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

export function ProjectCard({
  project,
  className = "",
  onPrev,
  onNext,
}: ProjectCardProps) {
  return (
    <div
     className={`${className} w-full py-[40px] md:py-[60px] border-y flex flex-col 2xl:flex-row gap-[30px] md:gap-[60px] xl:gap-[60px] 2xl:gap-[115px]`}
    >
      <div className="w-full 2xl:w-[45%] flex flex-col order-2 2xl:order-1">
        <h3 className="!text-[1.5rem] xl:!text-[2.25rem] uppercase mb-[20px] md:mb-[28px]">
          {project.title}
        </h3>
        <div className="text-[1rem] md:text-[1.125rem]">
          {project.description}
        </div>

        <div className="mt-[40px] md:mt-[80px] xl:mt-[130px] ml-0 md:ml-[80px] xl:ml-[150px]">
          <div className="uppercase font-bold text-[1rem] md:text-[1.125rem] mb-[15px] md:mb-[25px]">
            Этапы:
          </div>
          <div className="flex flex-col gap-[6px] md:gap-[8px]">
            {project.steps.map((step, index) => (
              <li
                key={index}
                className="text-[0.875rem] md:text-[1rem] uppercase"
              >
                {step}
              </li>
            ))}
          </div>
        </div>

        <div className="flex gap-[20px] md:gap-[50px] mt-auto pt-[30px] md:pt-[40px]">
          <Button className="" reverse={true} onClick={onPrev}>
            Назад
          </Button>
          <Button className="" onClick={onNext}>
            Вперед
          </Button>
        </div>
      </div>

     <div className="w-full 2xl:w-[85%] order-1 2xl:order-2 flex justify-center min-w-0 self-center">
  <div className="relative w-fit h-fit max-w-full border-[10px] md:border-[15px] border-white rounded-[20px]">
          <Image
            src={project.images[0]}
            alt={`Фото портфолио: ${project.title}`}
            width={1200}
            height={800}
            sizes="(max-width: 640px) 95vw, (max-width: 1280px) 85vw, 55vw"
           className="block w-auto h-auto max-w-full max-h-[340px] sm:max-h-[400px] md:max-h-[410px] lg:max-h-[490px] xl:max-h-[530px] 2xl:max-h-[590px] object-contain rounded-[10px] image-cool-tones"
            priority
          />

          <Link
            href={project.link}
            aria-label={`Посмотреть проект: ${project.title}`}
            className="absolute bottom-0 right-0 z-10 flex items-center justify-center
        w-[70px] h-[70px] sm:w-[80px] sm:h-[80px]
        md:w-[85px] md:h-[85px] xl:w-[110px] xl:h-[110px]
        2xl:w-[135px] 2xl:h-[135px]
        bg-blue border-t-[6px] border-l-[6px] border-white
        sm:border-t-[8px] sm:border-l-[8px]
        md:border-t-[12px] md:border-l-[12px]
        rounded-tl-[16px] rounded-br-[10px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 51 51"
              fill="none"
              className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] xl:w-[36px] xl:h-[36px] 2xl:w-[44px] 2xl:h-[44px]"
            >
              <path
                d="M42.5147 14.4853L6.00004 51L0 45L36.5147 8.4853L4.33098 8.48531L4.33098 0L51 0L51 46.669L42.5147 46.669L42.5147 14.4853Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
