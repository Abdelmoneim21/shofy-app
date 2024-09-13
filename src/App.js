import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./components/Rout";
import React from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Header />
        <Rout />
      </BrowserRouter>
    </div>
  );
}

export default App;
