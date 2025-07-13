import { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router";
import ItemList from "./ItemList";

function ItemListContainer({ saludoInicial }) {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    let URL;
    if (category) {
      URL = `https://dummyjson.com/products/category/${category}`;
    } else {
      URL = "https://dummyjson.com/products/";
    }
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.products);
      })
      .catch((error) => console.error("Error", error));
  }, [category]);

  return (
    <div className="container">
      <h1>{category ? `${category}` : saludoInicial}</h1>
      <p>Mostrando {productos.length} productos</p>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
