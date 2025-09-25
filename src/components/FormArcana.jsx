import { useState } from "react";
import arcanaData from "../data/arcana.json";
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
        <div className="mt-6 p-4 border rounded bg-slate-50">
          <h3 className="text-xl font-semibold pb-5">{arcanaInfo.name}</h3>
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
          <p className="text-gray-700 pt-5">
            {" "}
            <span className="text-lg font-bold">Description:</span>{" "}
            {arcanaInfo.long_desc}
          </p>
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
