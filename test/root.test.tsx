import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { createRoutesStub } from "react-router";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";

import { Layout, links } from "~/root";
import SpotifyPlayer from "~/components/SpotifyPlayer";

beforeAll(() => {
  // jsdom doesn't implement matchMedia, which useMobile() calls in an effect.
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("root", () => {
  it("declares the document language as Spanish", () => {
    const Stub = createRoutesStub([
      { path: "/", Component: () => <Layout>contenido</Layout> },
    ]);
    const html = renderToStaticMarkup(<Stub initialEntries={["/"]} />);
    expect(html).toContain('<html lang="es">');
  });

  it("doesn't link the old /build/tailwind.css (it 404s)", () => {
    const hrefs = links().map((link) => ("href" in link ? link.href : null));
    expect(hrefs).not.toContain("/build/tailwind.css");
  });
});

describe("SpotifyPlayer", () => {
  it("doesn't log to the console when the player loads", () => {
    const log = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<SpotifyPlayer playerOpen setPlayerOpen={() => {}} />);

    fireEvent.load(screen.getByTitle("Spotify Player"));

    expect(log).not.toHaveBeenCalled();
  });
});
