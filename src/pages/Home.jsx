import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import FormationsPreview from "../components/Formation-preview.jsx";
import Footer from "../components/Footer.jsx";
import Stats from "../components/Stat.jsx";
import NewsPreview from"../components/ActualitesPreview.jsx"
import Faq from"../components/faq.jsx";
import InscriptionMini from "../components/InscriptionMini.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FormationsPreview />
      <InscriptionMini/>
      <NewsPreview/>
      <Stats/>
      <Faq/>
  
      
      
    </>
  );
}
