import { Header, Footer } from "@/widgets";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectByLink } from "@/entities";
import type { Project } from "@/entities";
import { ProjectSlider, ProjectCards } from "@/widgets";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const link = `/portfolio/${slug}`;
  const project = await getProjectByLink(link);

  if (!project) {
    notFound();
  }

  const cards = [
    {
      title: "Брифинг с клиентом",
      img: "/card1.png",
      subtitles: [
        { title: "Основная цель", items: project.goals },
        { title: "Задачи", items: project.tasks },
      ],
    },
    {
      title: "Анализ аудитории",
      img: "/card2.png",
      subtitles: [{ title: "Целевая аудитория", items: project.audienceText }],
    },
    {
      title: "Прототипирование",
      img: "/card3.png",
      subtitles: [{ title: "Что сделано", items: project.prototypeText }],
    },
    {
      title: "Дизайн макета",
      img: "/card4.png",
      subtitles: [
        { title: "Результат", text: project.resultText },
        { title: "Основные цвета", colors: project.colors },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="px-[20px] md:px-[60px] xl:px-[100px] 2xl:px-[120px]">
        <section className="pt-[60px] md:pt-[80px] xl:pt-[100px] pb-[80px] md:pb-[100px] xl:pb-[120px]">
          <h1 className="text-center uppercase !text-[3rem] md:!text-[4rem] mb-[30px] md:mb-[80px] xl:mb-[100px]">
            Портфолио
          </h1>

          <div className="w-full py-[40px] md:py-[60px] border-t flex flex-col xl:flex-row gap-[30px] md:gap-[60px] xl:gap-[80px] 2xl:gap-[115px]">
            <div className="w-full xl:w-[45%] flex flex-col order-2 xl:order-1">
              <h3 className="!text-[1.5rem] md:!text-[1.875rem] xl:!text-[2.25rem] text-blue uppercase mb-[20px] md:mb-[28px]">
                {project.title}
              </h3>
              <div className="text-[1rem] md:text-[1.125rem]">
                {project.description}
              </div>

              <div className="mt-[40px] md:mt-[60px] xl:mt-[100px] ml-0 md:ml-[40px] xl:ml-[100px]">
                <div className="uppercase font-bold text-blue text-[1rem] md:text-[1.125rem] mb-[15px] md:mb-[25px]">
                  Этапы:
                </div>
                <ul className="flex flex-col gap-[6px] md:gap-[8px]">
                  {project.steps.map((step, index) => (
                    <li
                      key={index}
                      className="text-[0.875rem] md:text-[1rem] uppercase"
                    >
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full xl:w-[45%] order-1 xl:order-2">
              <ProjectSlider images={project.images} title={project.title} />
            </div>
          </div>

          <ProjectCards cards={cards} />
        </section>
      </main>
      <Footer />
    </>
  );
}