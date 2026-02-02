import { CheckCircle, Clock, Lock } from "lucide-react";

export default function Semestres() {
  const semestres = [
    { numero: 1, statut: "validé", progression: 100 },
    { numero: 2, statut: "validé", progression: 100 },
    { numero: 3, statut: "en cours", progression: 60 },
    { numero: 4, statut: "à venir", progression: 0 },
    { numero: 5, statut: "à venir", progression: 0 }
  ];

  const getStatus = (statut) => {
    switch (statut) {
      case "validé":
        return {
          label: "Validé",
          icon: <CheckCircle size={18} />,
          color: "text-green-600"
        };
      case "en cours":
        return {
          label: "En cours",
          icon: <Clock size={18} />,
          color: "text-primary"
        };
      default:
        return {
          label: "À venir",
          icon: <Lock size={18} />,
          color: "text-gray-400"
        };
    }
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-secondary">
          Suivi des semestres
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Visualisation de l’avancement pédagogique de la formation
        </p>
      </div>

      {/* Liste des semestres */}
      <div className="space-y-5">
        {semestres.map((semestre) => {
          const status = getStatus(semestre.statut);

          return (
            <div
              key={semestre.numero}
              className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl"
            >
              <div className="flex items-center justify-between">

                {/* Infos semestre */}
                <div>
                  <h2 className="text-lg font-semibold text-secondary">
                    Semestre {semestre.numero}
                  </h2>

                  <div className={`flex items-center gap-2 mt-1 text-sm ${status.color}`}>
                    {status.icon}
                    {status.label}
                  </div>
                </div>

                {/* Pourcentage */}
                <p className="text-sm text-gray-600">
                  {semestre.progression} %
                </p>
              </div>

              {/* Barre de progression */}
              <div className="mt-4">
                <div className="w-full h-2 rounded-full bg-background">
                  <div
                    className="h-2 transition-all rounded-full bg-primary"
                    style={{ width: `${semestre.progression}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
