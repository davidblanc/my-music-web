import { Link } from "@remix-run/react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            David Blanc
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/#musica"
              className="text-gray-300 hover:text-white transition"
            >
              Música
            </Link>
            <Link
              to="/#shows"
              className="text-gray-300 hover:text-white transition"
            >
              Shows
            </Link>
            <Link
              to="/#bio"
              className="text-gray-300 hover:text-white transition"
            >
              Bio
            </Link>
            <Link
              to="/#contacto"
              className="text-gray-300 hover:text-white transition"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
