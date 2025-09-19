import arcanaData from "../data/arcana.json";
import { elementIcons } from "./ElementIcons";

export default function PersonaDetailCards({ selectedPersona, onClose }) {
  if (!selectedPersona) return null;

  const arcana = arcanaData.find(
    (a) =>
      a.name.replace(/^The\s+/i, "").toLowerCase() ===
      selectedPersona.arcana.toLowerCase()
  );

  return (
    <div className="relative overflow-hidden container">
      {/* Header */}
      <PersonaHeader persona={selectedPersona} arcana={arcana} onClose={onClose} />

      {/* Affinities */}
      <PersonaAffinities persona={selectedPersona} />

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 flex flex-col gap-6">
          {/* Left side kosong dulu */}
        </div>
        <div className="relative p-5 items-center justify-center">
          <img
            src={selectedPersona.image}
            alt={selectedPersona.name}
            className="object-contain mx-auto max-h-[400px]"
          />
          <div className="mt-5">
            <PersonaStats persona={selectedPersona} />
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center justify-between mb-4 lg:justify-center lg:gap-4">
        <PreviousButton />
        <p className="text-4xl font-extrabold">...</p>
        <NextButton />
      </div>
    </div>
  );
}

function PersonaHeader({ persona, arcana, onClose }) {
  return (
    <div className="flex items-center transition-all relative">
      <div className="-rotate-13 ml-5 mt-4 hover:scale-120 hover:shadow-xl hover:shadow-accent transition-all">
        {arcana && (
          <img
            src={arcana.img_desc}
            alt={arcana.name}
            className="w-15 object-contain"
          />
        )}
      </div>
      <div className="items-center justify-between px-6 py-4 border-b border-white/20 flex-1">
        <h2 className="text-2xl font-bold uppercase tracking-widest">
          {persona.name}
        </h2>
        <span className="text-sm opacity-70">Arcana: {persona.arcana}</span>
        <div className="flex">
          <p className="text-sm uppercase opacity-70">Lv</p>
          <p className="text-3xl font-bold italic shadow-lg">{persona.level}</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700"
      >
        X
      </button>
    </div>
  );
}

function PersonaAffinities({ persona }) {
  return (
    <div className="mb-5 mt-10 px-2 lg:px-6 transition-all">
      <div className="grid grid-cols-9 gap-2 text-sm lg:gap-3 lg:text-lg">
        {Object.entries(elementIcons).map(([el, Icon]) => {
          let type = "";
          if (persona.weak?.includes(el)) type = "Weak";
          else if (persona.resists?.includes(el)) type = "Resist";
          else if (persona.reflects?.includes(el)) type = "Reflect";
          else if (persona.absorbs?.includes(el)) type = "Absorb";
          else if (persona.nullifies?.includes(el)) type = "Null";

          return (
            <div
              key={el}
              className="flex flex-col items-center justify-center p-2 border border-white/20 rounded bg-white/5 w-10 h-20 lg:w-25 lg:h-24"
            >
              {Icon && <Icon className="w-6 h-6 mb-1" />}
              <span className="text-xs">{el}</span>
              <span
                className={`text-[10px] mt-1 ${
                  type === "Weak"
                    ? "text-red-400"
                    : type === "Resist"
                    ? "text-green-400"
                    : type === "Null"
                    ? "text-gray-400"
                    : type === "Reflect"
                    ? "text-blue-400"
                    : type === "Absorb"
                    ? "text-yellow-400"
                    : ""
                }`}
              >
                {type || "-"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PersonaStats({ persona }) {
  return (
    <>
      {renderStatBar("St", persona.strength)}
      {renderStatBar("Ma", persona.magic)}
      {renderStatBar("En", persona.endurance)}
      {renderStatBar("Ag", persona.agility)}
      {renderStatBar("Lu", persona.luck)}
    </>
  );
}

function renderStatBar(label, value) {
  const maxStat = 99;
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2">
        <div className="flex justify-between text-xl font-bold mb-1">
          <span>{label}</span>
        </div>
        <div className="w-full h-4 bg-slate-300 shadow-lg shadow-blue-200 overflow-hidden">
          <div
            className={`h-full bg-blue-500 transition-all ${
              value === maxStat ? "animate-pulse shadow-[0_0_15px_#3b82f6]" : ""
            }`}
            style={{ width: `${(value / maxStat) * 100}%` }}
          ></div>
        </div>
        <div className="text-2xl italic font-bold">
          <span>{value === maxStat ? "MAX" : value}</span>
        </div>
      </div>
    </div>
  );
}

function PreviousButton() {
  return (
    <a
      className="inline-block rounded-full border border-pink-500 bg-pink-500 p-3 text-white hover:bg-transparent hover:text-pink-500 focus:ring-3 focus:outline-hidden"
      href="#"
    >
      <span className="sr-only"> Download </span>

      <svg
        className="size-5 shadow-sm rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </a>
  );
}

function NextButton() {
    return (
        <a
      className="inline-block rounded-full border border-pink-500 bg-pink-500 p-3 text-white hover:bg-transparent hover:text-pink-500 focus:ring-3 focus:outline-hidden"
      href="#"
    >
      <span className="sr-only"> Download </span>

      <svg
        className="size-5 shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </a>
    )
}
