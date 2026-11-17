import { cleanup, render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { afterEach, beforeAll, describe, expect, it } from "vitest";

import AppLayout from "~/routes/_app";
import Index from "~/routes/_app._index";

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

afterEach(cleanup);

function renderHome() {
  const Stub = createRoutesStub([
    {
      path: "/",
      Component: AppLayout,
      children: [{ index: true, Component: Index }],
    },
  ]);
  return render(<Stub initialEntries={["/"]} />);
}

describe("home", () => {
  it("renders the hero and every section", async () => {
    renderHome();

    expect(
      await screen.findByRole("heading", { level: 1, name: "David Blanc" })
    ).toBeTruthy();
    expect(screen.getByRole("button", { name: "Escuchar Ahora" })).toBeTruthy();
    for (const section of [
      "Música",
      "Próximos Shows",
      "Biografía",
      "Contacto",
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name: section })
      ).toBeTruthy();
    }
  });

  it("points the contact link to David's email", async () => {
    renderHome();

    const link = await screen.findByRole("link", {
      name: "davidblanc@gmail.com",
    });
    expect(link.getAttribute("href")).toBe("mailto:davidblanc@gmail.com");
  });
});
