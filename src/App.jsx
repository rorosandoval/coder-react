import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.jsx'
import ItemListContainer from './ItemListContainer.jsx'
import Footer from './Footer.jsx'


function App() {
const [addCarrito, setAddCarrito] = useState(0);
const saludoInicial = '¡Bienvenido a nuestra tienda!';


 return (
  <>
  <NavBar cantidad={addCarrito} />
  <ItemListContainer saludo={saludoInicial} setAddCarrito={setAddCarrito} addCarrito={addCarrito} />
  <Footer />
  </>

 )

}

export default App
