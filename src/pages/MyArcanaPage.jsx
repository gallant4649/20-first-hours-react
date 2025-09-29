import { useState } from "react";
import arcana from "../data/arcana.json";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FormArcana from "../components/FormArcana";
import ArcanaCards from "../components/ArcanaCards";
import Modal from "../components/ArcanaDetailCards";
import ScrollToTopButton from "../components/ScrollTop";

export default function MyArcana() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="">
      <Header />

      <ScrollToTopButton/>

      <FormArcana />

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
