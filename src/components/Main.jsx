import { Routes, Route } from "react-router";
import About from "./About";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import PageNotFound from "./PageNotFound";

function Main({ addCarrito, setAddCarrito }) {
  const saludoInicial = "¡Bienvenido a nuestra tienda!";

  return (
    <main className="main">
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer saludoInicial={saludoInicial} />}
        ></Route>
        <Route
          path="/products/category/:category"
          element={<ItemListContainer />}
        ></Route>

        <Route
          path="/products/:id"
          element={
            <ItemDetailContainer
              setAddCarrito={setAddCarrito}
              addCarrito={addCarrito}
            />
          }
        ></Route>
        <Route path="/quienessomos" element={<About />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}

export default Main;
