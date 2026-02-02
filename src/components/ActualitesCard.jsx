import { Link } from "react-router-dom";

export default function ActualiteCard({ id, titre, date, sousTitre, image }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-56 overflow-hidden rounded-2xl">
        <img src={image} alt={titre} className="object-cover w-full h-full" />
      </div>

      <div className="-mt-16 bg-white rounded-xl shadow-lg p-6 w-[85%]">
        <span className="inline-block px-3 py-1 mb-3 text-xs text-white rounded-full bg-primary">
          {date}
        </span>

        <h3 className="mb-2 text-sm font-semibold">{titre}</h3>

        <p className="text-sm text-gray-600">{sousTitre}</p>

        <div className="mt-6">
          <Link
            to={`/ActualitesDetails/${id}`}
            className="font-semibold text-primary"
          >
            Lire plus →
          </Link>
        </div>
      </div>
    </div>
  );
}
