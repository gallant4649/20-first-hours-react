export default function Modal({ selectedCard, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="flex items-start justify-between">
          <h2
            id="modalTitle"
            className="text-xl font-bold text-gray-900 sm:text-2xl"
          >
            <span
              className={`font-serif ${selectedCard.name} bg-clip-text text-transparent`}
            >
              {selectedCard.number}
            </span>
            . {selectedCard.name}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4">
          <div
            className={`w-32 h-auto mx-auto mb-4 hover:shadow-xl hover:shadow-accent hover:scale-120 transition-all`}
          >
            <img src={selectedCard.img_desc} alt={selectedCard.name} />
          </div>
          <p className="text-pretty text-gray-700">
            <span>
              <span className="font-bold text-lg">Description:</span>{" "}
              {selectedCard.long_desc}
            </span>
            <br />
            <br />
            <span>
              <span className="font-bold text-lg">Unique Facts:</span>{" "}
              {selectedCard.fact}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
