import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BgChanger from "./components/BgChanger";
import ApiData from "./components/Api-Data.jsx";
import Counter from "./components/Counter.jsx";
import WidthAdjuster from "./components/WidthAdjuster.jsx";

export const CustomContext = createContext();

const name = "Bigyan";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomContext.Provider value={name}>
      <App />
    </CustomContext.Provider>
  </StrictMode>
);
