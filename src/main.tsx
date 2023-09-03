import { createRoot } from "react-dom/client";
import { App } from "./App.js";

const container = document.createElement("div");
const root = createRoot(container);

root.render(<App />);
