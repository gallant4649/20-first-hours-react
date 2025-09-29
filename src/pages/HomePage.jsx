import { useState } from "react";
import arcana from "../data/arcana.json";

import Header from "../components/Header";
import PersonaCards from "../components/PersonaCards";
import ArcanaCards from "../components/ArcanaCards";
import Modal from "../components/ArcanaDetailCards";
import Footer from "../components/Footer";
import PersonaDetailCards from "../components/PersonaDetailCards";
import ScrollToTop from "../components/ScrollTop";
import HeroSection from "../components/HeroSection";

export default function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedPersona, setSelectedPersona] = useState(null);

  return (
    <div>
      <Header />

      <HeroSection />

      <ScrollToTop />

      {selectedPersona ? (
        <PersonaDetailCards
          selectedPersona={selectedPersona}
          onClose={() => setSelectedPersona(null)}
        />
      ) : (
        <PersonaCards onSelect={setSelectedPersona} />
      )}

      <ArcanaCards arcana={arcana} onSelect={setSelectedCard} />

      {selectedCard && (
        <Modal
          selectedCard={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}

      <Footer />
    </div>
  );
}
