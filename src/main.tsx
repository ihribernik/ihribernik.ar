import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app/App";
import "./styles/index.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
