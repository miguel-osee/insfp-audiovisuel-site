import { useEffect, useState, useRef } from "react";
// Exemple d'icônes Heroicons (tu peux installer @heroicons/react)
import { UserGroupIcon, AcademicCapIcon, BriefcaseIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function Stats() {
  const statsData = [
    { label: "Stagiaires formés", value: 1200, icon: UserGroupIcon },
    { label: "Formations disponibles", value: 25, icon: AcademicCapIcon },
    { label: "Professeurs qualifiés", value: 40, icon: BriefcaseIcon },
    { label: "Années d’expérience", value: 15, icon: ClockIcon },
  ];

  const [animatedValues, setAnimatedValues] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    let timers = [];

    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      timers = statsData.map((stat, index) => {
        let current = 0;
        const increment = stat.value / steps;

        return setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timers[index]);
          }
          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = Math.floor(current);
            return newValues;
          });
        }, interval);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      timers.forEach((t) => clearInterval(t));
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary py-16 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center transform transition duration-700 hover:scale-105"
            >
              {/* Icône */}
              <Icon className="h-12 w-12 text-white mb-4 animate-bounce" />

              {/* Valeur animée */}
              <span className="text-4xl font-bold text-white animate-fadeIn">
                {animatedValues[index]}
              </span>

              {/* Label */}
              <p className="mt-2 text-white">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}