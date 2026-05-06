import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { I18nextProvider } from "react-i18next";
import "./styles.css";
import { routeTree } from "./routeTree.gen";
import i18n from "./i18n/i18n";

// Honor Vite's base for client routing on GitHub Pages.
const basepath = import.meta.env.BASE_URL.replace(/\/$/, "");

const router = createRouter({
  routeTree,
  basepath: basepath || "/",
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </StrictMode>,
);
