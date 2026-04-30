import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./styles.css";
import { routeTree } from "./routeTree.gen";

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
    <RouterProvider router={router} />
  </StrictMode>
);
