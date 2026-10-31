import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Handle GitHub Pages 404 redirect for SPA routing
const path = window.location.search.replace(/^\?p=/, '').replace(/&q=.*/, '').replace(/~and~/g, '&');
if (path) {
  window.history.replaceState(null, null, '/' + path);
}

createRoot(document.getElementById("root")).render(<App />);
