import { useState } from "react";
import Header from "../components/common/Header";
import PersonaCards from "../components/persona/PersonaCards";
import ArcanaCards from "../components/arcana/ArcanaCards";
import Modal from "../components/arcana/ArcanaDetailCards";
import Footer from "../components/common/Footer";
import PersonaDetailCards from "../components/persona/PersonaDetailCards";
import ScrollToTop from "../components/common/ScrollTop";
import HeroSection from "../components/common/HeroSection";
import { useArcanaData } from "../hooks/useArcanaData";
import { usePersonaData } from "../hooks/usePersonaData";

export default function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedPersona, setSelectedPersona] = useState(null);

  const { arcana } = useArcanaData();
  const { personas } = usePersonaData();

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
        <PersonaCards personas={personas} onSelect={setSelectedPersona} />
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
