import { Link } from "react-router-dom";
import arcana from "../data/arcana.json";

export default function HeroSection() {
  const rotations = [
    "group-hover:rotate-20",
    "group-hover:rotate-10",
    "group-hover:rotate-0",
    "group-hover:-rotate-10",
    "group-hover:-rotate-20",
    "group-hover:-rotate-30",
    "group-hover:-rotate-40",
    "group-hover:-rotate-50",
    "group-hover:-rotate-60",
    "group-hover:-rotate-70",
    "group-hover:-rotate-80",
    "group-hover:-rotate-90",
  ];
  return (
    <div className="container lg:grid lg:place-content-center">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:gap-8 md:py-24 lg:px-8 lg:py-32 lg:gap-12">
        <div className="max-w-prose text-left md:max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Understand user flow and
            <strong className="bg-linear-30/oklch from-slate-500 via-stone-400 to-gray-200 bg-clip-text text-transparent block sm:inline">
              {" "}
              increase{" "}
            </strong>
            conversions
          </h1>

          <p className="mt-4 text-base text-gray-700 sm:text-lg sm:leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            nisi. Natus, provident accusamus impedit minima harum corporis
            iusto.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row">
            <Link
              to="/arcana"
              className="inline-block w-full rounded border border-black bg-black px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-black sm:w-auto"
            >
              <div className="flex justify-between items-center">
                My Arcana
                <svg
                  class="size-5 shadow-sm rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>

            <Link
              to="/persona"
              className="inline-block w-full rounded border border-gray-200 px-6 py-3 font-medium text-gray-500 shadow-sm transition-colors hover:bg-slate-200 hover:text-slate-900 sm:w-auto"
            >
              <div className="flex justify-between items-center">
                My Persona
                <svg
                  class="size-5 shadow-sm rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-8 hidden max-w-md md:mt-0 md:block lg:max-w-lg group hover:rotate-10 transition-all duration-500">
          <div className="relative w-40 h-40 lg:w-72 lg:h-72 mx-auto aspect-square group-hover:translate-x-30 transition-all delay-400 duration-500">
            {arcana
              .slice()
              .reverse()
              .map((card) => (
                <img
                  key={card.id}
                  src={card.img_desc}
                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-300 ${rotations[card.id]} origin-bottom-left delay-500`}
                  alt={card.name || `Arcana card: ${card.id}`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
