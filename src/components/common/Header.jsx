export default function Header() {
  return (
    <div className="container">
      <div className="max-w-full w-full mx-auto p-3 sm:p-4 md:p-6 rounded-b-lg">
        <img
          src="./src/assets/fontbolt.png"
          alt="Logo"
          className="mx-auto h-8 sm:h-10 md:h-12 lg:h-14 w-auto transition-all duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}
