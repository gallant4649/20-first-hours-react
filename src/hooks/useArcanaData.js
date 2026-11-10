import { useState, useEffect } from "react";
import arcanaData from "../data/arcana.json";

export function useArcanaData() {
  const [arcana, setArcana] = useState([]);

  useEffect(() => {
    setArcana(arcanaData);
  }, []);

  // Example function to add new arcana data
  function addArcana(newArcana) {
    setArcana((prev) => [...prev, newArcana]);
  }

  return { arcana, addArcana };
}
