import type { Service } from "@/entities";
import Image from "next/image";
interface ServiceSectionProps {
  service: Service;
  className?: string;
}

export function ServiceSection({
  service,
  className = "",
}: ServiceSectionProps) {
  const isLeft = service.position === "left";

  const mediaBlock = (
    <div className="flex h-full min-h-[500px] flex-col">
      <div className="relative flex-1 overflow-hidden rounded-[20px]">
        <Image
          src={`/${service.image}`}
          alt={service.title}
          className="object-cover"
          width={760}
          height={760}
        />
      </div>
    </div>
  );

  const servicesBlock = (
    <div className="flex h-full min-h-[500px] flex-col justify-center -mt-[100px]">
      <div className="w-full">
        <h2 className="mb-[55px] !text-[2rem] uppercase md:!text-[2.25rem] text-blue font-bold">
        {service.title}
      </h2>
        {service.types.map((type) => (
          <div
            key={type.name}
            className="flex items-center justify-between gap-6 border-b border-black py-5 md:py-6"
          >
            <div className="flex items-center gap-3 md:gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-[14px] w-[14px] shrink-0 sm:h-[18px] sm:w-[18px] md:h-[24px] md:w-[24px]"
              >
                <path
                  d="M24 11.9533V12.0467C14.39 12.0467 12.0467 14.3933 12.0467 24H11.9533C11.9533 14.39 9.60333 12.0467 0 12.0467V11.9533C9.60333 11.9533 11.9533 9.60333 11.9533 0H12.0467C12.0467 9.60333 14.39 11.9533 24 11.9533Z"
                  fill="black"
                />
              </svg>

              <span className="text-[1rem] sm:text-[1.125rem] md:text-[1.5rem]">
                {type.name}
              </span>
            </div>

            <span className="shrink-0 whitespace-nowrap text-[1rem] sm:text-[1.125rem] md:text-[1.5rem]">
              от {type.price} ₽
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
  <section className={`${className} w-full`}>
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
      <div
        className={isLeft ? "order-1" : "order-2 lg:order-1"}
      >
        {isLeft ? servicesBlock : mediaBlock}
      </div>

      <div
        className={isLeft ? "order-2" : "order-1 lg:order-2"}
      >
        {isLeft ? mediaBlock : servicesBlock}
      </div>
    </div>
  </section>
);
}