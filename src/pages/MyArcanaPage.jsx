import { useState } from "react";
import arcana from "../data/arcana.json";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FormArcana from "../components/FormArcana";
import ArcanaCards from "../components/ArcanaCards";
import Modal from "../components/Modal";
import Tilt from "react-parallax-tilt"

export default function MyArcana() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="">
      <Header />

      <FormArcana />

      <ArcanaCards arcana={arcana} onSelect={setSelectedCard} />

      {selectedCard && (
        <Modal
          selectedCard={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}

      <Tilt
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={1000}
      scale={1.05}
      glareEnable={true}
      glareMaxOpacity={0.4}
      className="w-64 h-96 mx-auto"
    >
      <img
        src="./src/assets/arcana/Fool-0.png"
        alt=""
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </Tilt>

      <Footer />
    </div>
  );
}
