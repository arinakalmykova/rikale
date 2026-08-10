import { Header, Hero, AboutMe, Services } from "@/widgets";

export default function Home() {
  return (
    <main className=" px-[20px] md:px-[80px] xl:px-[120px]">
      <Header/>
      <Hero/>
      <AboutMe/>
      <Services/>
    </main>
  );
}
