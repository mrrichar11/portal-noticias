import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-red-700 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        
        <div>
          <Link to="/">
            <h1 className="text-4xl font-black tracking-tight cursor-pointer hover:opacity-90 transition">
              LITORAL NOTICIAS
            </h1>
          </Link>

          <p className="text-sm opacity-90 mt-1">
            Información política, social y regional del Litoral argentino
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-semibold text-lg">
          <Link
            to="/"
            className="hover:text-zinc-200 transition"
          >
            Inicio
          </Link>

          <a
            href="#"
            className="hover:text-zinc-200 transition"
          >
            Política
          </a>

          <a
            href="#"
            className="hover:text-zinc-200 transition"
          >
            Deportes
          </a>

          <a
            href="#"
            className="hover:text-zinc-200 transition"
          >
            Variedades
          </a>
        </nav>
      </div>
    </header>
  );
}