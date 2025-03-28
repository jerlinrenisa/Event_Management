import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use React 18 import
import App from "./App";
import { EventProvider } from "./components/EventProvider";

// ✅ Use React 18's createRoot instead of ReactDOM.render()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EventProvider>
    <App />
  </EventProvider>
);
