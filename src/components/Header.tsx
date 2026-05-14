import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <h2 className="logo">Panther</h2>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setOpen(false)}>Inicio</Link></li>
        <li><Link to="/Modelos" onClick={() => setOpen(false)}>Modelos</Link></li>
        <li><Link to="/Presupuesto" onClick={() => setOpen(false)}>Presupuesto</Link></li>
        <li><Link to="/Contacto" onClick={() => setOpen(false)}>Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Header;