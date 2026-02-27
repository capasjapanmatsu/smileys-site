import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Triggered only for prerender builds to snapshot fully rendered HTML.
if (import.meta.env.PROD) {
  requestAnimationFrame(() => {
    document.dispatchEvent(new Event("prerender-ready"));
  });
}
  