import CartWidget from "./CartWidget.jsx";
import logo from "../assets/img/logo.png";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router";

function NavBar({ cantidad }) {
  return (
    <header className="container-fluid bg-navGreen">
      <NavLink to="/">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      <nav className="py-3 ">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/products/category/smartphones">Smartphones</NavLink>
        <NavLink to="/products/category/laptops">Computadores</NavLink>
        <NavLink to="/quienessomos">Quiénes Somos</NavLink>
      </nav>
      <CartWidget cantidad={cantidad} />
    </header>
  );
}

export default NavBar;
