import { useState } from "react";
import { faqData } from "../data/faq";
import faq from "../assets/images/faq.png"; // illustration à droite

export default function FAQ() {
  const [activeId, setActiveId] = useState(1);

  return (
<section className="container">
  <div className=" py-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* Image (toujours présente, mais change d'ordre selon la taille) */}
    <div className="flex justify-center order-1 md:order-2">
      <img
        src={faq}
        alt="FAQ illustration"
        className="max-w-md"
      />
    </div>

    {/* FAQ */}
    <div className="space-y-6 order-2 md:order-1">
      {faqData.map((item) => {
        const isOpen = activeId === item.id;

        return (
          <div
            key={item.id}
            className="bg-background rounded-2xl px-6 py-5"
          >
            <button
              onClick={() => setActiveId(isOpen ? null : item.id)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="font-medium text-primary">
                {item.question}
              </span>
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                {isOpen ? "↑" : "↓"}
              </span>
            </button>

            {isOpen && (
              <p className="mt-4 text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>

  </div>
</section>
  );
}
