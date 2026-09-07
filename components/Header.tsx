import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
        <div>
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:text-slate-300"
          >
            My Portfolio
          </Link>
        </div>

        <nav aria-label="Main navigation">
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className="font-medium hover:text-slate-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-medium hover:text-slate-300"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}