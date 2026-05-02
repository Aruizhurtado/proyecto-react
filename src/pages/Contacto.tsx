import Mapa from "../components/mapa";
const contactoImg = new URL("../assets/Imagenes/iconos/locate_gps_navigation_pin_point_location_icon-icons.com_59906.svg", import.meta.url).href;

function Contacto() {
  return (
    <div>
       <section className="modelos">
      <h1>Visítanos</h1>
      </section>
      <div className="datos">
            <img src={contactoImg} />
            <p>C. del Azafrán, 24, Oficina 3B, Moncloa - Aravaca, 28023 Madrid</p>
            <p>info@diannasanchez.com</p>
            <p>629 019 412</p>
        </div>
      <Mapa />
    </div>
  );
}

export default Contacto;