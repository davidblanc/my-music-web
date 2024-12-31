import type { MetaFunction } from "@remix-run/node";

import dbHeroBg from "~/assets/db-hero-bg.webp";
import circulosCover from "~/assets/circulos-tapa.jpg";
import cadaMañanaCover from "~/assets/cada-manana-cover.jpeg";
import sinMiedoCover from "~/assets/sin-miedo-cover.jpeg";

import SpotifyPlayer from "~/components/SpotifyPlayer";
import { useState } from "react";
export const meta: MetaFunction = () => {
  return [
    { title: "David Blanc | Web oficial" },
    {
      name: "description",
      content: "Sitio web del cantautor argentino David Blanc",
    },
  ];
};

export default function Index() {
  const [playerOpen, setPlayerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${dbHeroBg})` }}
        ></div>{" "}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl font-bold mb-4">David Blanc</h1>
          <p className="text-xl text-gray-300 mb-8">
            Cantautor | Compositor | Artista
          </p>
          <button
            onClick={() => setPlayerOpen(true)}
            className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Escuchar Ahora
          </button>
        </div>
      </header>

      {/* Música Section */}
      <section className="py-20 px-4" id="musica">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Música</h2>
          <SpotifyPlayer
            width={400}
            height={400}
            playerOpen={playerOpen}
            setPlayerOpen={setPlayerOpen}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestReleases.map((release) => (
              <div
                key={release.title}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <img
                  src={release.cover}
                  alt={release.title}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {release.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{release.year}</p>
                  <a
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400"
                  >
                    Escuchar en Spotify
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Próximos Shows */}
      <section className="py-20 px-4 bg-gray-900" id="shows">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Próximos Shows
          </h2>
          <div className="space-y-6">
            {upcomingShows.map((show) => (
              <div
                key={show.date}
                className="flex flex-col md:flex-row items-center justify-between bg-gray-800 p-6 rounded-lg"
              >
                <div>
                  <p className="text-xl font-bold">{show.date}</p>
                  <h3 className="text-2xl font-semibold mb-2">{show.venue}</h3>
                  <p className="text-gray-400">{show.location}</p>
                </div>
                <button className="mt-4 md:mt-0 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
                  Comprar Tickets
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Bio Section */}
      <section className="py-20 px-4" id="bio">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Biografía</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-gray-300 justify-center">
              Nací en una pequeña ciudad de Mendoza, Argentina, y crecí en un
              barrio laberíntico rodeado de eucaliptos y moras híbridas. Mi
              infancia estuvo marcada por los juegos en la vereda, las
              bicicletas y los árboles, un entorno que cultivó mi imaginación y
              amor por la música.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 justify-center">
              Mi juventud trajo consigo la curiosidad musical. Aprendí canciones
              folclóricas de mi padre y entrené mi voz imitando a artistas que
              me fascinaban. Así nació mi deseo de componer. Más adelante, me
              uní como vocalista a la banda de rock progresivo Vanguardia, con
              la que grabé un álbum. Fue un paso crucial que me inspiró a dar
              vida a mis propias canciones y presentarlas en conciertos íntimos.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 justify-center">
              La música me llevó a nuevos desafíos: acepté un papel protagónico
              en una ópera rock, una experiencia transformadora que despertó un
              amor por las artes escénicas. Inspirado por estas vivencias, reuní
              composiciones de mi infancia y juventud en Círculos, mi primer
              disco, lanzado en mayo de 2011. Para mí, este álbum simboliza la
              búsqueda de perfección, la conexión a través de la música y el
              constante inicio de nuevos ciclos.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 justify-center">
              Desde entonces, mi viaje musical me ha llevado a ser finalista en
              concursos, protagonizar obras de teatro musical, y compartir mis
              canciones en diversas provincias y países. Cada paso me ha
              permitido descubrir nuevas influencias y personas valiosas que
              enriquecen mi arte.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 justify-center">
              Hoy sigo buscando. Mi música es un reflejo de ese camino, y estoy
              emocionado de compartirlo contigo.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section className="py-20 px-4 bg-gray-900" id="contacto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Contacto</h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                {link.platform}
              </a>
            ))}
          </div>
          <p className="mt-8 text-gray-400">
            Contacto para shows y colaboraciones: <br />
            <a
              href="mailto:contacto@tudominio.com"
              className="text-white hover:text-gray-300"
            >
              davidblanc@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} David Blanc. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}

const latestReleases = [
  {
    title: "Círculos",
    year: "2012",
    cover: circulosCover,
    spotifyUrl:
      "https://open.spotify.com/intl-es/artist/5sI6sGj1EdyOtdfMemGNE1",
  },
  {
    title: "Cada Mañana",
    year: "2019",
    cover: cadaMañanaCover,
    spotifyUrl:
      "https://open.spotify.com/intl-es/track/23BOgJI7bVX4vOJSCoaGW3?si=28a5119477094a73",
  },
  {
    title: "Sin Miedo",
    year: "2018",
    cover: sinMiedoCover,
    spotifyUrl:
      "https://open.spotify.com/intl-es/track/5ydEqyHCa2yFL29i3TqZ9k?si=c53a22524c5d4288",
  },
];

const upcomingShows = [
  {
    date: "21 Mayo 2025",
    venue: "",
    location: "Mendoza, Argentina",
  },
];

const socialLinks = [
  { platform: "Instagram", url: "https://www.instagram.com/davidblancmusica/" },
  {
    platform: "Spotify",
    url: "https://open.spotify.com/intl-es/artist/5sI6sGj1EdyOtdfMemGNE1?si=Xj-tEkymTomTTpRRS5v4bg",
  },
  { platform: "YouTube", url: "https://www.youtube.com/davidblancvideos" },
  { platform: "Facebook", url: "https://www.facebook.com/BLANCDAVID/" },
];
