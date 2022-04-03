import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Páginas
import Landing from "./Landing/Landing";
import App from "./App/App";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// CSS
import "./styles.css";

ReactDOM.render(
  <div className="container">
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  </div>,
  document.getElementById("root")
);
