import { useParams } from "react-router-dom";
import { formations } from "../data/formations";
import InscriptionMini from "../components/InscriptionMini.jsx";

export default function FormationDetails() {
  const { slug } = useParams();

  const formation = formations.find((f) => f.slug === slug);

  if (!formation) {
    return (
      <p className="py-20 text-center">
        Formation introuvable
      </p>
    );
  }

  return (
    <>

<section className="container py-16 mt-24">
  <div className="grid gap-12 md:grid-cols-2">
    
    {/* Image : sticky uniquement en grand écran */}
    <div className="self-start md:sticky md:top-24">
      <img
        src={formation.image}
        alt={formation.titre}
        className="object-cover w-full shadow-md rounded-xl"
      />
    </div>

    {/* Contenu */}
    <div>
      <h1 className="text-3xl font-bold text-primary">
        {formation.titre}
      </h1>

      <p className="mt-6 leading-relaxed text-gray-700">
        {formation.contenu}
      </p>

      <p className="mt-4 font-semibold">
        Durée : {formation.duree}
      </p>

      <h3 className="mt-6 text-lg font-semibold">
        Débouchés professionnels
      </h3>

      <ul className="mt-2 text-gray-700 list-disc list-inside">
        {formation.debouches.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
  </section>
  <InscriptionMini/>
</>
  );
  
}
          
