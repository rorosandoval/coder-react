function CartWidget({ cantidad }) {
  return (
    <div className="cart">
      <i className="bi bi-cart"></i>{" "}
      <span className="cartCantidad">{cantidad}</span>
    </div>
  );
}

export default CartWidget;
