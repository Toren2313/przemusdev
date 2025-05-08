import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { ThemeProvider } from "@material-tailwind/react";
//TODO: OGOLNIE TEN KOMENTARZ DO CALEJ APKI - NAUCZYC SIE ROBIC RESPONSIVE WEBSITE (NIENAWIDZE FRONTEND)
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
