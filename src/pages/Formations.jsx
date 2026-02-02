import HeroSection from "../components/Hero-secondary";
import FormationBg from "../assets/images/galerie-bg.jpg";
import { formations } from "../data/formations";
import FormationCard from "../components/FormationCard";

export default function Formations() {
  return (

    <>
      {/* HERO */}
      <HeroSection
        title="L’Institut"
        subtitle="Présentation de l’INSFP Audiovisuel d’Ouled Fayet"
        background={FormationBg}
      />

    
    <section className="container py-16">
      <h1 className="mb-12 text-3xl font-bold text-center">
        Nos formations
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {formations.map((formation) => (
          <FormationCard
            key={formation.id}
            slug={formation.slug}
            titre={formation.titre}
            description={formation.description}
            image={formation.image}
          />
        ))}
      </div>
    </section>
    
    
    </>
  );
}
