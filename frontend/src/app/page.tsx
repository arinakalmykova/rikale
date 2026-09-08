import { Header, Hero, AboutMe, Services, Portfolio, Steps, ContactForm, Footer } from "@/widgets";

export default function Home() {
  return ( 
     <> 
     <Header/>
    <main className="px-[20px] md:px-[80px] xl:px-[120px]">
      <Hero/>
      <AboutMe/>
      <Services/>
      <Portfolio/>
      <Steps/>
      <ContactForm/>
    </main> 
    <Footer/>
     </>
  
  );
}
