function Header() {
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <div className="flex items-center gap-2 text-lg font-semibold lg:gap-4">
        <a
          href="/home"
          className="flex items-center gap-2 text-lg font-semibold lg:gap-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M10 2h4" />
            <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
            <path d="M7 14h.01" />
            <path d="M17 14h.01" />
            <rect width="18" height="8" x="3" y="10" rx="2" />
            <path d="M5 18v2" />
            <path d="M19 18v2" />
          </svg>
          <span className="sr-only">Dispatch</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
