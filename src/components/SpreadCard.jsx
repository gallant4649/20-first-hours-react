import arcana from "../data/arcana.json";

export default function SpreadCard() {
  const rotations = [
    "rotate-0",
    "-rotate-10",
    "-rotate-20",
    "-rotate-30",
    "-rotate-40",
    "-rotate-50",
    "-rotate-60",
    "-rotate-70",
    "-rotate-80",
    "-rotate-90",
  ];

  return (
    <div className="group relative mx-auto hidden max-w-sm md:block w-40 h-40">
      {arcana
        .slice()
        .reverse()
        .map((card) => (
          <img
            key={card.id}
            src={card.img_desc}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-all duration-500 group-hover:${
              rotations[card.id]
            } origin-bottom-left`}
            alt={`${card.name}.png`}
          />
        ))}
    </div>
  );
}
