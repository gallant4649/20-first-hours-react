import { useState } from "react";
import arcana from "../data/arcana.json";

import Header from "./Header";
import PersonaCards from "./PersonaCards";
import ArcanaCards from "./ArcanaCards";
import Modal from "./Modal";
import Footer from "./Footer";
import PersonaDetailCards from "./PersonaDetailCards";
import ScrollToTop from "./ScrollTop";
import HeroSection from "./HeroSection"

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
