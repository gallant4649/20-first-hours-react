export default function ArcanaCards({ arcana, onSelect }) {
  return (
    <div id="arcana-cards" className="container">
      <h2 className="text-xl font-bold mb-4 sm:text-2xl sm:mb-5 md:text-3xl">22 Major Arcana</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
        {arcana.map((card) => (
          <a
            key={card.id}
            onClick={() => onSelect(card)}
            href={`#${card.id}`}
            className="group relative block h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 border-2 border-dashed border-black rounded-lg"></span>

            <div className="relative flex h-full transform items-end border-2 border-black bg-white rounded-lg transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              <div className="p-3 sm:p-4 lg:p-6 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0">
                <img src={card.image} alt={card.name} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />

                <h2 className="mt-2 text-lg font-medium sm:text-xl">
                  <span className={`font-serif ${card.name} bg-clip-text text-transparent`}>{card.number}</span>. {card.name}
                </h2>
              </div>

              <div className="absolute p-3 sm:p-4 lg:p-6 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
                <h3 className="text-lg font-medium sm:text-xl">
                  {card.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm md:text-base line-clamp-3">{card.long_desc}</p>

                <p className="mt-4 font-bold text-sm sm:text-base">Read more</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
