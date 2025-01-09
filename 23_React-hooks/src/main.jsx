import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import BgChanger from "./components/BgChanger";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <BgChanger />
  </StrictMode>
);
