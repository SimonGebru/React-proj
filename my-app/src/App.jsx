import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import ToggleMessage from "./Toggle";
import Counter from "./Counter";

function App() {
 

  return (
    <>
    
      <Header />
      <main>
        <h1>Hej, Simon!</h1>
        <input type="text" placeholder="   Berätta om din dag" />
      </main>
      <Counter />
      <Footer />
      <ToggleMessage />
    </>
  );
}

export default App;
