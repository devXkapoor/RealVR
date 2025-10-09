import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import HomePage from "./pages/Home-Page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
