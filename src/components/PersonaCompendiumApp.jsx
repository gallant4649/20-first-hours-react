import { useState } from "react";
import compendium from "../data/personaCompendium.json"
import arcana from "../data/arcana.json";

import Header from "./Header"
import SearchBar from "./SearchBar";
import PersonaCards from "./PersonaCards";
import ArcanaCards from "./ArcanaCards";
import Modal from "./Modal";
import Footer from "./Footer";
import PersonaDetailCards from "./PersonaDetailCards";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedPersona, setSelectedPersona] = useState(null);

  const filtered = compendium.filter((persona) =>
    persona.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {selectedPersona ? (
        <PersonaDetailCards selectedPersona={selectedPersona} onClose={() => setSelectedPersona(null)} />
      ) : (
        <PersonaCards searchTerm={searchTerm} filtered={filtered} onSelect={setSelectedPersona} />
      )}

      <ArcanaCards arcana={arcana} onSelect={setSelectedCard} />

      {selectedCard && (
        <Modal selectedCard={selectedCard} onClose={() => setSelectedCard(null)} />
      )}

      <Footer />
    </div>
  );
}
