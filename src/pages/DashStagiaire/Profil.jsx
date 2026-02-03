import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  BookOpen,
  Hash,
  ShieldCheck,
  Bell,
  X,
  MessageSquare,
  UserCircle
} from "lucide-react";

export default function Profil() {
  const [showNotif, setShowNotif] = useState(true);

  const stagiaire = {
    nom: "Gbadou",
    prenom: "Miguel",
    matricule: "INSFP-2025-001",
    email: "miguel.gbadou@insfp.dz",
    telephone: "07 79 10 43 86",
    formation: "Audiovisuel",
    semestre: 3,
    statut: "Stagiaire en formation"
  };

  return (
    <div className="space-y-10">

      {/* ===== En-tête ===== */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-secondary">
          Dossier stagiaire
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Consultation des informations personnelles et pédagogiques
        </p>
      </div>

      {/* ===== Notification après titre ===== */}
      {showNotif && (
        <div className="relative flex items-start gap-4 p-5 bg-white rounded-md shadow-sm">

          {/* Icône */}
          <div className="p-3 text-white rounded-md bg-primary">
            <Bell size={18} />
          </div>

          {/* Texte */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-secondary">
              Information administrative
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Les informations affichées dans ce dossier sont consultables
              uniquement. Toute modification doit être effectuée auprès
              de l’administration.
            </p>
          </div>

          {/* Actions (contact + fermer) */}
          <div className="absolute flex items-center gap-2 top-3 right-3">
            <button
              className="flex items-center gap-1 text-xs font-medium transition  text-primary hover:underline"
              title="Contacter l’administration"
            >
              <MessageSquare size={14} />
              Contact
            </button>

            <button
              onClick={() => setShowNotif(false)}
              className="text-gray-400 transition hover:text-secondary"
              aria-label="Fermer la notification"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ===== Bloc identité ===== */}
      <section className="p-6 bg-white border border-gray-200 rounded-lg">

        <div className="flex items-center gap-6 pb-6 border-b border-gray-200">

          {/* Icône / photo profil */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full text-primary bg-background">
            <UserCircle size={48} />
          </div>

          {/* Identité */}
          <div>
            <p className="text-lg font-semibold text-secondary">
              {stagiaire.prenom} {stagiaire.nom}
            </p>
            <p className="text-sm text-gray-600">
              {stagiaire.statut}
            </p>
          </div>
        </div>

        {/* ===== Informations structurées ===== */}
        <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">

          {/* Administratif */}
          <div className="space-y-4">
            <p className="text-xs font-semibold text-gray-500 uppercase">
              Informations administratives
            </p>

            <InfoRow icon={Hash} label="Matricule" value={stagiaire.matricule} />
            <InfoRow
              icon={BookOpen}
              label="Formation"
              value={`${stagiaire.formation} — Semestre ${stagiaire.semestre}`}
            />
          </div>

          {/* Coordonnées */}
          <div className="space-y-4">
            <p className="text-xs font-semibold text-gray-500 uppercase">
              Coordonnées
            </p>

            <InfoRow icon={Mail} label="Adresse électronique" value={stagiaire.email} />
            <InfoRow icon={Phone} label="Téléphone" value={stagiaire.telephone} />
          </div>

        </div>
      </section>

      {/* ===== Mention administrative ===== */}
      <section className="flex items-start gap-4 p-6 bg-white rounded-lg">
        <ShieldCheck size={20} className="mt-1 text-primary" />
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase">
            Mention administrative
          </p>
          <p className="mt-1 text-sm text-secondary">
            Ce dossier est fourni à titre informatif.  
            Les données sont issues du système de gestion de l’institut.
          </p>
        </div>
      </section>

    </div>
  );
}

/* ===== Ligne d’information ===== */
function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <Icon size={18} className="mt-1 text-primary" />
      <div>
        <p className="text-xs text-gray-500 uppercase">
          {label}
        </p>
        <p className="font-medium text-secondary">
          {value}
        </p>
      </div>
    </div>
  );
}
