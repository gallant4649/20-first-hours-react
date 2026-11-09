import { useState } from "react";
import arcanaData from "../../data/arcana.json";
import Tilt from "react-parallax-tilt";

export default function FormArcana() {
  const [birthday, setBirthday] = useState("");
  const [arcanaId, setArcanaId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateArcana(birthday);
    setArcanaId(result);
  };

  const arcanaInfo = arcanaData.find((a) => a.id === arcanaId);

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Find Your Arcana</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          className="w-full rounded border px-3 py-2"
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Reveal My Arcana
        </button>
      </form>

      {arcanaInfo && (
        <div className="mt-6 p-4 border rounded shadow-lg bg-slate-50">
          <div className="pb-5">
            <h3
              className="text-xl font-semibold pb-5"
            >
              <span className={`${arcanaInfo.name} bg-clip-text text-transparent font-serif`}>{arcanaInfo.number}.</span>{" "}
              {arcanaInfo.name}
            </h3>

            {/* Personality */}
            <p className="italic text-gray-400 text-lg border-l-4 border-gray-700 pl-4">
              {arcanaInfo.personality}
            </p>
          </div>

          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            glareEnable={true}
            glareMaxOpacity={0.4}
          >
            <img
              src={arcanaInfo.img_desc}
              className="w-48 rounded-lg shadow-xl mx-auto"
            />
          </Tilt>
          <p className="pt-5 text-slate-400 text-center text-sm">
            "Kartu {arcanaInfo.name} melambangkan {arcanaInfo.short_desc}"
          </p>
          <div className="pt-6 space-y-6">
            {/* Story */}
            <div className="bg-black text-white rounded-2xl shadow-lg p-6 transition hover:scale-[1.01] hover:shadow-xl">
              <h3 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-4">
                Story
              </h3>
              <ul className="space-y-3 text-gray-200">
                <li>
                  <span className="font-semibold text-white">Meaning:</span>{" "}
                  {arcanaInfo.story.meaning}
                </li>
                <li>
                  <span className="font-semibold text-white">Myth:</span>{" "}
                  {arcanaInfo.story.myth}
                </li>
                <li>
                  <span className="font-semibold text-white">Symbolism:</span>{" "}
                  {arcanaInfo.story.symbolism}
                </li>
              </ul>
            </div>

            {/* Compatibility */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 transition hover:scale-[1.01] hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
                Compatibility
              </h3>
              <ul className="space-y-3 text-gray-700">
                {arcanaInfo.compatibility.map((comp, idx) => (
                  <li key={idx} className="flex flex-col">
                    <span className="font-semibold text-black">
                      {comp.arcana}
                    </span>
                    <span className="text-sm text-gray-500">{comp.reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function calculateArcana(birthday) {
  if (!birthday) return null;
  const digits = birthday.replaceAll("-", "").split("").map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);

  // Reduksi sampai 0–21
  while (sum > 21) {
    sum = sum
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }

  return sum;
}
