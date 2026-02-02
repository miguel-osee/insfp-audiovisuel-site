import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import HeroSection from "../components/Hero-secondary";
import ActualitesData from "../data/actualitesData";

export default function ActualiteDetail() {
  const { id } = useParams();
  const actualite = ActualitesData.find(
    (item) => item.id === parseInt(id)
  );

  if (!actualite) {
    return (
      <div className="py-20 text-center text-gray-600">
        Actualité introuvable
      </div>
    );
  }

  return (
    <>
      <HeroSection
        title="Actualité"
        subtitle={actualite.titre}
      />

      <section className="max-w-5xl px-6 py-16 mx-auto">
        
        {/* Date */}
        <div className="flex items-center gap-2 mb-4 text-gray-500">
          <FaCalendarAlt />
          <span>{actualite.date}</span>
        </div>

        {/* Sous-titre */}
        <h2 className="mb-6 text-xl text-gray-700">
          {actualite.sousTitre}
        </h2>

        {/* Image */}
        <img
          src={actualite.image}
          alt={actualite.titre}
          className="w-full h-[350px] object-cover rounded-xl mb-10"
        />

        {/* Contenu structuré */}
        <div className="space-y-10">
          {actualite.contenu.map((section, index) => (
            <div key={index}>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                {section.titre}
              </h3>

              <div className="space-y-3 leading-relaxed text-gray-700">
                {section.paragraphe.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Retour */}
        <div className="mt-14">
          <Link
            to="/actualites"
            className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
          >
            <FaArrowLeft />
            Retour aux actualités
          </Link>
        </div>

      </section>
    </>
  );
}
