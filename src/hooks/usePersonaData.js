import { useState, useEffect } from "react";
import personaData from "../data/personaCompendium.json";

export function usePersonaData() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    setPersonas(personaData);
  }, []);

  // Example function to add new persona data
  function addPersona(newPersona) {
    setPersonas((prev) => [...prev, newPersona]);
  }

  return { personas, addPersona };
}
