import { Link } from "react-router-dom"

function Header() {
  return (

    <nav>
        <h2 className="logo">Panther</h2>
        <ul>

            <li> <Link to={"/"}> Inicio </Link> </li>
            <li> <Link to={"/Modelos"}> Modelos </Link> </li>
            <li> <Link to={"/Presupuesto"}> Presupuesto </Link> </li>
            <li> <Link to={"/Contacto"}> Contacto </Link> </li>
     

        </ul>

    </nav>
    
  )
}

export default Header