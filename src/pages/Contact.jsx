import { FaEnvelope, FaPhoneAlt, FaClock, FaPaperPlane } from "react-icons/fa";
import HeroSection from "../components/Hero-secondary";
import contactBg from "../assets/images/contact-bg.jpg";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux ajouter la logique d'envoi (API, email service, etc.)
    toast.success("✅ Votre message a été envoyé avec succès !");
  };

  return (
    <>
      <HeroSection
        title="Contact"
        subtitle="Contactez l’INSFP Audiovisuel"
        background={contactBg}
      />

      <section className="container my-16 bg-background">
        <div className="grid items-stretch grid-cols-1 gap-12 md:grid-cols-2">
          
          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full overflow-hidden border border-secondary rounded-2xl"
          >
            <iframe
              title="INSFP Map"
              src="https://www.google.com/maps/embed?pb=!4v1769451606244!6m8!1m7!1sCAoSHENJQUJJaERGNGlyNVJNaWZuU2RhTWdhcHVRU0c.!2m2!1d36.73106224048661!2d2.952321519025761!3f200.63757!4f0!5f0.7820865974627469"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </motion.div>

          

          {/* FORMULAIRE */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between max-w-xl gap-6 p-8 mx-auto bg-white border shadow- rounded-2xl border-primary/100">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
              <div className="flex flex-col">
                <label htmlFor="nom" className="text-sm font-medium ">Nom</label>
                <input
                  id="nom"
                  type="text"
                  placeholder="Votre nom"
                  required
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="prenom" className="text-sm font-medium ">Prénoms</label>
                <input
                  id="prenom"
                  type="text"
                  placeholder="Vos prénoms"
                  required
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium ">Email</label>
              <input
                id="email"
                type="email"
                placeholder="exemple@email.com"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <small className="text-xs">Nous ne partagerons jamais votre email.</small>
            </div>

            <div className="flex flex-col">
              <label htmlFor="tel" className="text-sm font-medium">Téléphone (optionnel)</label>
              <input
                id="tel"
                type="tel"
                placeholder="Votre numéro"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Votre message..."
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 py-3 font-semibold text-white transition rounded-full bg-primary hover:bg-primary/90 hover:scale-105"
            >
              <FaPaperPlane /> Envoyer
            </button>
          </motion.form>
        </div>

        {/* INFOS CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
            
            {/* EMAIL */}
            <div className="flex flex-col items-center gap-3 p-6 transition bg-white shadow-sm rounded-xl hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <FaEnvelope className="text-xl text-primary" />
              </div>
              <p className="text-sm ">Email</p>
              <p className="font-normal text-primary">insfp.of@gmail.com</p>
            </div>

            {/* TÉLÉPHONE */}
            <div className="flex flex-col items-center gap-3 p-6 transition bg-white shadow-sm rounded-xl hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <FaPhoneAlt className="text-xl text-primary" />
              </div>
              <p className="text-sm ">Téléphone</p>
              <p className="font-normal text-primary">020 31 45 70</p>
            </div>

            {/* HORAIRES */}
            <div className="flex flex-col items-center gap-3 p-6 transition bg-white shadow-sm rounded-xl hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <FaClock className="text-xl text-primary" />
              </div>
              <p className="text-sm ">Horaires</p>
              <p className="font-normal text-center text-primary">
                Dimanche – Jeudi 08h00 – 16h00
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Toast container */}
      <Toaster position="bottom-right" />
    </>
  );
}