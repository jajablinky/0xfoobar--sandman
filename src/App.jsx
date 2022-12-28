import { useState } from "react";
import { Router } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="full--container">
      <Nav />
      <main>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </div>
  );
}

export default App;
