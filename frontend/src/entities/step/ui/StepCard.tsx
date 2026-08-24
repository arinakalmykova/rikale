import type { Step } from "@/entities";

interface StepCardProps {
  step: Step;
  className?: string;
}

export function StepCard({ step, className = "" }: StepCardProps) {
  return (
    <div
      className={`${className} w-auto group border-[15px] border-white bg-grey p-[8px] sm:p-[18px] lg:p-[18px] xl:p-[28px] flex flex-col justify-between hover:bg-blue`}
    >
      <div className="flex items-center gap-[16px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[30px] lg:h-[30px] xl:w-[33px] xl:h-[33px] flex-shrink-0"
        >
          <path
            d="M24 11.9533V12.0467C14.39 12.0467 12.0467 14.3933 12.0467 24H11.9533C11.9533 14.39 9.60333 12.0467 0 12.0467V11.9533C9.60333 11.9533 11.9533 9.60333 11.9533 0H12.0467C12.0467 9.60333 14.39 11.9533 24 11.9533Z"
            fill="black"
          />
        </svg>
        <h3 className="text-[1.25rem] w-[200px] sm:w-[200px] md:w-[200px] lg:w-[250px] xl:w-[350px] min-[1800px]:!text-[2.25rem] uppercase">
          {step.title}
        </h3>
      </div>
      <div className="flex gap-[35px]">
        <div className="self-end -mb-[10px]">
          <span className="text-blue group-hover:text-white text-[2rem] sm:text-[2rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[3rem] uppercase font-bold">
            0{step.id}
          </span>
        </div>
        <div className="flex flex-col mt-auto gap-[2px]">
          {step.description.map((desc, index) => (
            <li
              key={index}
              className="text-[1rem] md:text-[1rem] xl:text-[1rem] 2xl:text-[1.125rem] flex gap-[12px] sm:gap-[20px] align-center"
            >
              {desc}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
