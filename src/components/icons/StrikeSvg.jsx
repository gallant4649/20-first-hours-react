export default function Strike() {
  return (
    <svg
      className="w-10 lg:w-15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title-strike"
    >
      <title id="title-strike">Strike</title>
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M6 6l2 2" />
      <path d="M16 16l2 2" />
      <path d="M16 8l2-2" />
      <path d="M6 18l2-2" />
      <polygon points="12,9 14,12 12,15 10,12" />
    </svg>
  );
}
