import { FileText, Download, Calendar } from "lucide-react";

export default function Documents() {
  const documents = [
    {
      id: 1,
      titre: "Règlement intérieur",
      type: "Document administratif",
      date: "10 janvier 2026",
      fichier: "#"
    },
    {
      id: 2,
      titre: "Emploi du temps – Semestre 3",
      type: "Emploi du temps",
      date: "22 janvier 2026",
      fichier: "#"
    },
    {
      id: 3,
      titre: "Calendrier des examens",
      type: "Examen",
      date: "30 janvier 2026",
      fichier: "#"
    }
  ];

  return (
    <div className="space-y-8">

      {/* ===== Header ===== */}
      <div>
        <h1 className="text-2xl font-bold text-secondary">
          Documents
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Documents administratifs et pédagogiques mis à disposition
        </p>
      </div>

      {/* ===== Liste des documents ===== */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        {documents.map((doc) => (
          <div
            key={doc.id}
            className="p-5 bg-white border border-gray-100 shadow-sm rounded-xl"
          >
            {/* Titre */}
            <div className="flex items-start gap-4">
              <div className="p-3 text-white rounded-md bg-primary shrink-0">
                <FileText size={18} />
              </div>

              <div className="flex-1">
                <p className="font-semibold text-secondary">
                  {doc.titre}
                </p>
                <p className="text-sm text-gray-600">
                  {doc.type}
                </p>
              </div>
            </div>

            {/* Infos */}
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
              <Calendar size={14} />
              {doc.date}
            </div>

            {/* Action texte + icône */}
            <div className="flex justify-end mt-4">
              <a
                href={doc.fichier}
                className="inline-flex items-center gap-2 text-sm font-medium transition  text-primary hover:underline"
              >
                <Download size={16} />
                Télécharger
              </a>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
