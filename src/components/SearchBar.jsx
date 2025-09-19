export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="container space-y-6">
      <label htmlFor="Search">

        <div className="relative">
          <input
            type="text"
            id="Search"
            placeholder="Search Persona..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-0.5 w-full rounded border-gray-300 pe-10 shadow-sm sm:text-sm"
          />

          <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              aria-label="Clear"
              className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
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
