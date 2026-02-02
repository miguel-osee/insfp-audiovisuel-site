import HeroSection from "../components/Hero-secondary";
import ActualitesData from "../data/actualitesData";
import ActualiteCard from "../components/ActualitesCard";
import actuBg from "../assets/images/News-bg.jpg";

export default function ActualitesPage() {
  return (
    <>
      <HeroSection
        title="Actualités"
        subtitle="Suivez les dernières nouvelles de l’INSFP Audiovisuel"
        background={actuBg}
      />

      <section className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {ActualitesData.map((actu) => (
            <ActualiteCard
              key={actu.id}
              id={actu.id}              // ✅ AJOUT IMPORTANT
              titre={actu.titre}
              description={actu.description}
              image={actu.image}
              date={actu.date}
            />
          ))}
        </div>
      </section>
    </>
  );
}
