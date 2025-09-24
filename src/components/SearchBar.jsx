export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="container space-y-4 sm:space-y-6">
      <label htmlFor="Search" className="block text-sm font-medium text-gray-700 sm:text-base">
        Search Persona
        <div className="relative mt-1 sm:mt-2">
          <input
            type="text"
            id="Search"
            placeholder="Search Persona..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300 pe-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 sm:py-3 px-3 sm:px-4"
          />

          <span className="absolute inset-y-0 right-2 grid w-8 sm:w-10 place-content-center">
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              aria-label="Clear"
              className="rounded-full p-1 text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 sm:size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </span>
        </div>
      </label>
    </div>
  );
}
