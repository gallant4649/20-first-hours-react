import { useState } from "react";
import compendium from "../data/personaCompendium.json";
import SearchBar from "./SearchBar";

export default function PersonaCards({ onSelect }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = compendium.filter((persona) =>
    persona.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="persona-cards" className="container">
      <h2 className="text-2xl mb-5">Persona</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {searchTerm === "" ? (
          <p className="text-gray-500">Please type to search...</p>
        ) : filtered.length === 0 ? (
          <p className="text-lg">No persona found.</p>
        ) : (
          filtered.map((persona) => (
            <a
              href="#persona-cards"
              key={persona.id}
              onClick={() => onSelect(persona)}
              className="group relative block bg-black"
            >
              <img
                alt={`${persona.name}.png`}
                src={persona.image}
                className="absolute inset-0 h-full max-w-full mx-auto object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className={`text-sm font-medium tracking-widest ${persona.arcana} bg-clip-text text-transparent uppercase`}>
                  {persona.arcana}
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  {persona.name}
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">{persona.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
