import { Header, Footer, PriceList } from "@/widgets";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Прайс услуг | Rikale",
  description:
    "Стоимость дизайна и веб-разработки.",
};

export default function PricePage() {
  return (
    <> 
    <Header/>
     <main className="px-[20px] md:px-[80px] xl:px-[120px]">
        <h1 className="text-left uppercase !text-[2.25rem] md:!text-[4rem] mt-[122px] mb-[50px]">
          Прайс-лист
        </h1>

        <PriceList />
      </main>
    <Footer/>
    </>
 
  );
}