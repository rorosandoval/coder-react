import { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ setAddCarrito, addCarrito }) {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setItem(data);
        },
        [id]
      )
      .catch((error) => console.error("Error", error));
  }, [id]);

  if (!item) {
    return <div className="container">Cargando producto...</div>;
  }

  return (
    <div className="container">
      <ItemDetail
        item={item}
        setAddCarrito={setAddCarrito}
        addCarrito={addCarrito}
      />
    </div>
  );
}

export default ItemDetailContainer;
