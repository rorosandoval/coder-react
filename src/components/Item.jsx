import { Link } from "react-router";

function Item({ producto }) {
  return (
    <div className="cardProducto">
      <img src={producto.thumbnail} alt={producto.title} />
      <h3>{producto.title}</h3>
      <h4>{producto.brand}</h4>
      <p className="precio">${producto.price}</p>
      <Link className="btn-detalle" to={`/products/${producto.id}`}>
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;
