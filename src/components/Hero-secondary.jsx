export default function Heroseco({ title, subtitle, background }) {
  return (
    <section
      className="
        relative
        h-[40vh]
        pt-16          /* ✅ espace sous la navbar */
        flex items-center justify-center
        text-white
      "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-secondary/60"></div>

      {/* Contenu */}
      <div className="relative z-10 px-6 text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 text-xl text-gray-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
