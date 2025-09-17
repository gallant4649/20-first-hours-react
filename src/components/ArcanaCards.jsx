export default function ArcanaCards({ arcana, onSelect }) {
  return (
    <div id="arcana-cards" className="container">
      <h2 className="text-2xl mb-5">22 Major Arcana</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-4 xl:gap-8">
        {arcana.map((card) => (
          <a
            key={card.id}
            onClick={() => onSelect(card)}
            href={`#${card.id}`}
            className="group relative block h-64 sm:h-80 lg:h-96"
          >
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <img src={card.image} alt={card.name} width={80} />

                <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                  {card.number}. {card.name}
                </h2>
              </div>

              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                  {card.name}
                </h3>

                <p className="mt-4 text-sm sm:text-base">{card.long_desc}</p>

                <p className="mt-8 font-bold">Read more</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
