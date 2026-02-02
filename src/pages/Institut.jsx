import HeroSection from "../components/Hero-secondary";
import institutBg from "../assets/images/institut-bg.jpg";
import shape from "../assets/images/about.png";
import { motion } from "framer-motion";
import Missions from "../components/Missions.jsx";
import ImageMarque from "../components/ImageMarque";
import galerie1 from "../assets/images/galerie-1.jpg";
import galerie2 from "../assets/images/galerie-2.jpg";
import galerie3 from "../assets/images/galerie-3.jpg";
import galerie4 from "../assets/images/galerie-4.jpg";
import React from 'react';
import { AcademicCapIcon, ComputerDesktopIcon, CameraIcon, LightBulbIcon } from '@heroicons/react/24/outline';







export default function Institut() {
  return (
    <>
    <section className="bg-background">
      {/* HERO */}
      <HeroSection
        title="L’Institut"
        subtitle="Présentation de l’INSFP Audiovisuel d’Ouled Fayet"
        background={institutBg}
      />

      <section className="container mt-10 ">
      <div className="flex flex-col items-center justify-between md:flex-row">

        {/* Image animée */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-3/4 md:w-[28rem]"
        >
          <img
            src={shape}
            alt="INSFP Audiovisuel"
            className="object-cover w-full h-auto"
          />
        </motion.div>
        

        {/* Contenu texte */}
    <div className="mt-10 max-w-prose md:mt-0 md:mr-10">
      <p className="leading-relaxed">
        L’Institut National Spécialisé de Formation Professionnelle (INSFP) –
        Centre Audiovisuel d’Ouled Fayet est un établissement public algérien
        placé sous la tutelle du Ministère de la Formation et de l’Enseignement
        Professionnels. Il a pour vocation de former des techniciens spécialisés
        dans les métiers de l’audiovisuel, du multimédia et du développement
        numérique, en réponse aux besoins du marché du travail et aux exigences
        du secteur médiatique national.
        <br /><br />
        L’INSFP Audiovisuel propose des formations pratiques et théoriques qui
        permettent aux stagiaires d’acquérir des compétences professionnelles
        certifiées dans plusieurs spécialisations techniques, favorisant ainsi
        l’insertion dans des secteurs tels que la production audiovisuelle, la
        télévision, la radio, les médias numériques et la communication.
      </p>
    </div>
          </div>
          </section>

        <Missions/>

    


      


      <section className="container mt-10">
  <div className="flex flex-col-reverse items-center justify-between md:flex-row">
    
    {/* Contenu texte à gauche */}
    <div className="mt-10 max-w-prose md:mt-0 md:mr-10">
          <p className="leading-relaxed">
            L’INSFP Audiovisuel Echahid Ahmed Mehdi Ouled Fayet s’inscrit dans la
            politique nationale de développement de la formation professionnelle
            mise en place en Algérie à la fin du XXᵉ siècle, visant à répondre aux
            besoins croissants en compétences techniques spécialisées.
            <br /><br />
            Implanté à Ouled Fayet (Alger), l’institut a commencé ses activités au
            début des années 1990, en tant que centre de formation dédié aux métiers
            de l’audiovisuel. Au fil des années, il a élargi son offre de formation
            et modernisé ses programmes afin de s’adapter aux évolutions
            technologiques du secteur des médias et de la communication.
            <br /><br />
            Cette dynamique de développement s’est renforcée avec l’amélioration
            progressive des infrastructures et, notamment, par l’inauguration d’un
            studio audiovisuel moderne en 2022, permettant aux stagiaires de
            bénéficier d’un environnement de formation pratique conforme aux
            standards professionnels actuels.
          </p>

    </div>

    {/* Image animée à droite */}
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-3/4 md:w-[28rem]"
    >
      <img
        src={shape}
        alt="INSFP Audiovisuel"
        className="object-cover w-full h-auto"
      />
    </motion.div>
  </div>
</section>
      

      <section className="py-20 ">
  <div className="container mx-auto">

{/* Section centrée sur la page */}
<div className="flex justify-center">
  <div className="max-w-4xl mb-16 text-center">
    <h2 className="mb-6 text-3xl font-bold md:text-4xl text-primary">
      Équipements et infrastructures
    </h2>
    <p className="text-lg leading-relaxed text-gray-700">
      L’INSFP Audiovisuel Echahid Ahmed Mehdi Ouled Fayet met à disposition
      un environnement pédagogique moderne, favorisant l’apprentissage
      pratique et l’acquisition de compétences professionnelles.
    </p>
  </div>
</div>

    {/* Cartes */}
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

      {/* Carte */}
      <div className="flex gap-4 p-8 border bg-primary/5 rounded-2xl border-primary/100">
        <AcademicCapIcon className="flex-shrink-0 w-10 h-10 text-primary" />
        <div>
          <h3 className="mb-3 text-xl font-semibold">
            Espaces de formation
          </h3>
          <ul className="space-y-1 text-gray-700 list-disc list-inside">
            <li>Salles de cours théoriques</li>
            <li>Espaces pratiques spécialisés</li>
            <li>Studio audiovisuel pédagogique</li>
          </ul>
        </div>
      </div>

      {/* Carte */}
      <div className="flex gap-4 p-8 border bg-primary/5 rounded-2xl border-primary/100">
        <ComputerDesktopIcon className="flex-shrink-0 w-10 h-10 text-primary" />
        <div>
          <h3 className="mb-3 text-xl font-semibold">
            Infrastructures techniques
          </h3>
          <ul className="space-y-1 text-gray-700 list-disc list-inside">
            <li>Laboratoires informatiques équipés</li>
            <li>Ateliers techniques</li>
            <li>Zones de maintenance du matériel</li>
          </ul>
        </div>
      </div>

      {/* Carte */}
      <div className="flex gap-4 p-8 border bg-primary/5 rounded-2xl border-primary/100">
        <CameraIcon className="flex-shrink-0 w-10 h-10 text-primary" />
        <div>
          <h3 className="mb-3 text-xl font-semibold">
            Équipements disponibles
          </h3>
          <ul className="space-y-1 text-gray-700 list-disc list-inside">
            <li>Caméras vidéo et appareils photo</li>
            <li>Systèmes de prise de son et éclairage</li>
            <li>Postes informatiques avec logiciels spécialisés</li>
          </ul>
        </div>
      </div>

      {/* Carte objectif */}
      <div className="flex gap-4 p-8 border bg-primary/5 rounded-2xl border-primary/100">
        <LightBulbIcon className="flex-shrink-0 w-10 h-10 text-primary" />
        <div>
  <h3 className="mb-3 text-xl font-semibold ">
    Objectif pédagogique
  </h3>
  <ul className="space-y-1 list-disc list-inside">
    <li>Assurer une formation pratique et moderne.</li>
    <li>Respecter les standards du secteur audiovisuel.</li>
    <li>Répondre aux exigences du marché du travail.</li>
  </ul>
        </div>
      </div>

    </div>
  </div>
</section>


        <ImageMarque
        images={[galerie1, galerie2, galerie3, galerie4]}
      />
      
  
</section>

      
  
      
    </>
  
  );
}
