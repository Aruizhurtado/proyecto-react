const facebookIcon = new URL("../assets/Imagenes/iconos/facebook.svg", import.meta.url).href;
const instagramIcon = new URL("../assets/Imagenes/iconos/instagram.svg", import.meta.url).href;

function Footer() {
  return (
    <div>
      <footer>
        <div className="pie">
            <div className="iconos">
                <h3>Siguenos!!</h3>
                <a href="https://www.facebook.com/?locale=es_ES"><img src={facebookIcon} alt="facebook" /></a>
                <a href="https://www.instagram.com/"><img src={instagramIcon} alt="instagram" /></a>
            </div>
            <div className="direccion">
                <h3>Direccion:</h3>
                <p>C. del Azafrán, 24, Oficina 3B, Moncloa - Aravaca, 28023 Madrid</p>
            </div>
        </div>
        <div className="avisoLegal">
            <a href="#">Aviso Legal</a>
        </div>

        <p>&copy; 2023 Panther. Todos los derechos reservados.</p>
    </footer>

    </div>
  )
}

export default Footer