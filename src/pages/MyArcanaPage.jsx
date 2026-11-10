import { useState } from "react";
import arcana from "../data/arcana.json";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import FormArcana from "../components/arcana/FormArcana";
import ArcanaCards from "../components/arcana/ArcanaCards";
import Modal from "../components/arcana/ArcanaDetailCards";
import ScrollToTopButton from "../components/common/ScrollTop";

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
