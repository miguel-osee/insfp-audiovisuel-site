import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "./Buttons.jsx";

export default function InscriptionMini() {
  return (
    <section className="py-12 bg-primary/5 mt-14">
      <div className="container max-w-2xl px-6 text-center">
        
        <h2 className="mb-4 text-2xl font-bold text-primary">
          Inscription en ligne
        </h2>

        <p className="mb-6 ">
          L’inscription aux formations de l’INSFP Audiovisuel se fait
          exclusivement via la plateforme nationale du Ministère de la
          Formation et de l’Enseignement Professionnels.
        </p>

        <Button>
          <a
            href="https://takwin.dz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            S’inscrire
            <FaExternalLinkAlt />
          </a>
        </Button>

      </div>
    </section>
  );
}