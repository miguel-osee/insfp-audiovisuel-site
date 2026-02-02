// src/pages/Galerie.jsx
import { useState } from "react";
import HeroSection from "../components/Hero-secondary";
import { galerie } from "../data/galerie";
import galerieBg from "../assets/images/galerie-bg.jpg";

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMention, setSelectedMention] = useState("");

  return (
    <>

      <HeroSection
        title="Galerie"
        subtitle="Moments et activités de l’INSFP Audiovisuel"
        background={galerieBg}
      />

      {/* GALERIE */}
      <section className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galerie.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden shadow-md cursor-pointer group rounded-xl"
              onClick={() => {
                setSelectedImage(item.image);
                setSelectedMention(item.mention);
              }}
            >
              <img
                src={item.image}
                alt={item.mention}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
              />

              {/* MENTION OVERLAY */}
              <div className="absolute inset-0 flex items-end transition opacity-0 bg-black/50 group-hover:opacity-100">
                <p className="p-4 text-sm text-white">
                  {item.mention}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIEW IMAGE */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute text-3xl text-white -top-10 right-6"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt={selectedMention}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />

            <p className="mt-4 text-sm text-center text-white">
              {selectedMention}
            </p>
          </div>
        </div>
      )}

    </>
  );
}
