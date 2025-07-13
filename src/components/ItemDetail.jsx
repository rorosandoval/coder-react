import { useState } from "react";

function ItemDetail({ item, setAddCarrito, addCarrito }) {
  const [cantidad, setCantidad] = useState(0);

  const agregarProducto = () => {
    setCantidad(cantidad + 1);
    setAddCarrito(addCarrito + 1);
  };

  const quitarProducto = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
      setAddCarrito(addCarrito > 0 ? addCarrito - 1 : 0);
    }
  };

  if (!item) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div className="contenedor-ItemDetail">
      <div>
        <img src={item.thumbnail} alt={item.title} />
      </div>
      <div className="contenedor-detail">
        <h4>{item.brand}</h4>
        <h2>{item.title}</h2>
        <p className="precio">${item.price}</p>
        <p>{item.description}</p>
        <p>{item.warrantyInformation}</p>
        <p>Disponibilidad: {item.availabilityStatus}</p>
        <p>Calificación: {item.rating} / 5</p>
        <div className="contenedorBotones">
          <span>Agregaste: {cantidad}</span>
          <button onClick={agregarProducto}>+</button>

          <button onClick={quitarProducto}>-</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
