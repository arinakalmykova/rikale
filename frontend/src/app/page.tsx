import { Header, Hero, AboutMe } from "@/widgets";

export default function Home() {
  return (
    <main className=" px-[20px] md:px-[120px]">
      <Header/>
      <Hero/>
      <AboutMe/>
    </main>
  );
}
