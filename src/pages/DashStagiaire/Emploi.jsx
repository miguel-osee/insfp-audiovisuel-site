import { Calendar, Clock } from "lucide-react";

export default function EmploiDuTemps() {
  const emploiDuTemps = [
    {
      jour: "Dimanche",
      seances: [
        { heure: "08:30 - 10:00", module: "Prise de vue", salle: "Salle 1" },
        { heure: "10:15 - 11:45", module: "Son audiovisuel", salle: "Salle 2" }
      ]
    },
    {
      jour: "Lundi",
      seances: [
        { heure: "08:30 - 10:00", module: "Montage vidéo", salle: "Salle 3" }
      ]
    },
    {
      jour: "Mardi",
      seances: [
        { heure: "10:00 - 12:00", module: "Scénarisation", salle: "Salle 1" }
      ]
    }
  ];

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-secondary">
          Emploi du temps
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Emploi du temps officiel du semestre en cours
        </p>
      </div>

      {/* Planning */}
      <div className="space-y-6">
        {emploiDuTemps.map((journee, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl"
          >
            {/* Jour */}
            <div className="flex items-center gap-3 mb-4">
              <Calendar size={18} className="text-primary" />
              <h2 className="text-lg font-semibold text-secondary">
                {journee.jour}
              </h2>
            </div>

            {/* Séances */}
            <div className="space-y-3">
              {journee.seances.map((seance, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg bg-background"
                >
                  <div>
                    <p className="font-medium text-secondary">
                      {seance.module}
                    </p>
                    <p className="text-sm text-gray-600">
                      Salle : {seance.salle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={14} />
                    {seance.heure}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
