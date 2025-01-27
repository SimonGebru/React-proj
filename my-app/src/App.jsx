import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <h1>Hello Mr</h1>
        <p>Hur har din dag varit?</p>
      </main>
      <Footer />
    </>
  );
}

export default App;
