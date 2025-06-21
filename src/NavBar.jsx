import CartWidget from './CartWidget.jsx'
import logo from './assets/img/logo.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar ({cantidad}) {
    return (
    <>
    <header className="container-fluid navbar navbar-expand-lg bg-navGreen">
        <a href="#"><img className='logo' src={logo} alt="logo" /></a>
        <nav className="navBar container">
            <ul className="navBar lista navbar-nav me-auto mb-2 mb-lg-0">
                <li><a href="#">Productos</a></li>
                <li><a href="#">Quienes somos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            < CartWidget cantidad={cantidad} />
            
        </nav>
    </header>
    </>
)

}

export default NavBar;