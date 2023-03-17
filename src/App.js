import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/realisations" element={<Realisations />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
