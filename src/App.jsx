import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Character from "./screens/Character";
import About from "./screens/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Acerca" element={<About />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/:race" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
