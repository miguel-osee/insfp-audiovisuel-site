import { useState } from "react";
import {
  User,
  BookOpen,
  TrendingUp,
  Bell,
  Calendar,
  Eye,
  X
} from "lucide-react";

export default function Dashboard() {
  const stagiaire = {
    nom: "Gbadou",
    prenom: "Miguel",
    formation: "Audiovisuel",
    semestreActuel: 3,
    progressionGlobale: 48,
    progressionSemestre: 60
  };

  // 📅 Date du jour
  const today = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  // 🔔 Notifications (institutionnelles)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      titre: "Information administrative",
      message:
        "L’emploi du temps du semestre 3 a été mis à jour par l’administration."
    },
    {
      id: 2,
      titre: "Information administrative",
      message:
        "Le calendrier officiel des examens est désormais disponible."
    }
  ]);

  const closeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="space-y-8">

      {/* ===== Header ===== */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold sm:text-2xl text-secondary">
            Tableau de bord
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Bonjour {stagiaire.prenom} {stagiaire.nom}, bienvenue dans votre espace stagiaire
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-600 sm:text-sm">
          <Calendar size={14} className="text-primary" />
          <span className="capitalize">{today}</span>
        </div>
      </div>

      {/* ===== Notifications (VOIR + CROIX style PROFIL) ===== */}
      {notifications.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="relative flex items-start gap-4 p-5 bg-white rounded-md shadow-sm"
            >
              {/* Icône */}
              <div className="p-3 text-white rounded-md bg-primary shrink-0">
                <Bell size={18} />
              </div>

              {/* Texte */}
              <div className="flex-1">
                <p className="text-sm font-semibold text-secondary">
                  {notif.titre}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  {notif.message}
                </p>
              </div>

              {/* Actions (VOIR + FERMER) */}
              <div className="absolute flex items-center gap-3 top-3 right-3">
                <button
                  className="flex items-center gap-1 text-xs font-medium transition  text-primary hover:underline"
                  title="Voir"
                >
                  <Eye size={14} />
                  Voir
                </button>

                <button
                  onClick={() => closeNotification(notif.id)}
                  className="text-gray-400 transition hover:text-secondary"
                  aria-label="Fermer la notification"
                  title="Fermer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ===== Contenu principal ===== */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* Colonne gauche */}
        <div className="space-y-6">

          {/* Profil */}
          <div className="p-4 bg-white border border-gray-100 shadow-sm sm:p-6 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 text-white rounded-md bg-primary shrink-0">
                <User size={18} />
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">
                  Profil
                </p>
                <p className="font-semibold text-secondary">
                  {stagiaire.prenom} {stagiaire.nom}
                </p>
                <p className="text-sm text-gray-600">
                  {stagiaire.formation}
                </p>
              </div>
            </div>
          </div>

          {/* Progression globale */}
          <div className="p-4 bg-white border border-gray-100 shadow-sm sm:p-6 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 text-white rounded-md bg-primary shrink-0">
                <TrendingUp size={18} />
              </div>

              <div className="w-full">
                <p className="text-xs text-gray-500 uppercase">
                  Progression globale
                </p>

                <div className="mt-3">
                  <div className="w-full h-2 rounded-full bg-background">
                    <div
                      className="h-2 rounded-full bg-primary"
                      style={{ width: `${stagiaire.progressionGlobale}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-600">
                    {stagiaire.progressionGlobale}% de la formation complétée
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Semestre en cours */}
          <div className="p-4 bg-white border border-gray-100 shadow-sm sm:p-6 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 text-white rounded-md bg-primary shrink-0">
                <BookOpen size={18} />
              </div>

              <div className="w-full">
                <p className="text-xs text-gray-500 uppercase">
                  Semestre en cours
                </p>

                <div className="mt-3">
                  <div className="w-full h-2 rounded-full bg-background">
                    <div
                      className="h-2 rounded-full bg-primary"
                      style={{ width: `${stagiaire.progressionSemestre}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-600">
                    Semestre {stagiaire.semestreActuel} — {stagiaire.progressionSemestre}% d’avancement
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Colonne droite */}
        <div className="p-4 bg-white border border-gray-100 shadow-sm sm:p-6 rounded-xl">
          <p className="text-xs text-gray-500 uppercase">
            Informations générales
          </p>
          <p className="mt-2 text-sm leading-relaxed text-secondary">
            Consultez régulièrement cet espace afin de rester informé des
            communications administratives, des documents officiels et des
            calendriers de formation.
          </p>
        </div>
      </div>

    </div>
  );
}
