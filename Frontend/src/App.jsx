import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LinkSaver from "./components/LinkSaver";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <LinkSaver />
        <Footer />
      </div>
    </>
  );
}

export default App;
