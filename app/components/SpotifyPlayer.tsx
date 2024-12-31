import { useEffect, useState } from "react";
import { useMobile } from "~/hooks/isMobile";

export default function SpotifyPlayer(props: {
  width?: number;
  height?: number;
  spotifyUrl?: string;
  playerOpen: boolean;
  setPlayerOpen: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { width, height, spotifyUrl, playerOpen, setPlayerOpen } = props;
  const isMobile = useMobile();

  useEffect(() => {
    setPlayerOpen(open);
  }, [open, setPlayerOpen]);

  return open || playerOpen ? (
    <div
      style={{ width: isMobile ? "100%" : width, height: height }}
      className="fixed bottom-0 left-0 w-full max-w-3xl mx-auto p-4 z-50"
    >
      <button
        onClick={() => {
          setPlayerOpen(false);
          setOpen(false);
        }}
        className="absolute -top-6 left-0 p-2 text-white hover:text-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 0 24 24"
          width="40px"
          fill="#e8eaed"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
      </button>
      {loading && (
        <div className="flex justify-center items-center h-full">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
      )}
      <iframe
        title="Spotify Player"
        id="spotify-iframe"
        src={
          spotifyUrl ||
          "https://open.spotify.com/embed/artist/5sI6sGj1EdyOtdfMemGNE1"
        }
        width="100%"
        height="100%"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className={`rounded-lg`}
        onLoad={() => {
          console.log("loaded");
          setLoading(false);
        }}
      />
    </div>
  ) : (
    <div className="fixed bottom-0 left-0 mb-4 ml-4 bg-gray-800 p-0 rounded-lg shadow-lg z-50">
      <button
        onClick={() => {
          setLoading(true);
          setOpen(true);
        }}
        className="p-2 text-white hover:text-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z" />
        </svg>
      </button>
    </div>
  );
}
