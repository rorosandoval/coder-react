import "./App.css";
import mouseImg from './assets/img/mouse.webp';

function ItemListContainer({saludo, setAddCarrito, addCarrito}) {
  
  const agregarProducto = () => {
    setAddCarrito(addCarrito + 1);
  };
  const quitarProducto = () => {
    if (addCarrito > 0) {
      setAddCarrito(addCarrito - 1);
    }
  };

  return (
    <>
      <section className="container">
        <div className="titulo">
          <h2>{saludo}</h2>
        </div>
        <div className="contenedorCards">
          <div className="cardProducto">
            <img src={mouseImg} alt="Mouse" />
            <h4>Logitech</h4>
            <h3>Mouse Ergonómico</h3>
            <p className="precio">$80.000</p>
            <p>Agregaste: <strong> {addCarrito} </strong>unidades</p>
            <div className="contenedorBotones">
              <button onClick={agregarProducto}>+</button>
              <button onClick={quitarProducto}>-</button>
            </div>
          </div>
          </div>
      </section>
    </>
  );
}

export default ItemListContainer;
