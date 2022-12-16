import { createRoot } from "react-dom/client";
import App from "./App";
import { ReduxProvider } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
);
