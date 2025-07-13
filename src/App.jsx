import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";

function App() {
  const [addCarrito, setAddCarrito] = useState(0);

  return (
    <>
      <NavBar cantidad={addCarrito} />
      <Main addCarrito={addCarrito} setAddCarrito={setAddCarrito} />
      <Footer />
    </>
  );
}

export default App;
