import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const fallbackRoute = new URLSearchParams(window.location.search).get(
  "__ghpages_route",
);

if (fallbackRoute?.startsWith("/") && !fallbackRoute.startsWith("//")) {
  window.history.replaceState(null, "", fallbackRoute);
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
