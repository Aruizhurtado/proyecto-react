import Galeria from "../components/Galeria";
import Noticias from "../components/Noticias"

const acercaImg = new URL("../assets/Imagenes/cliente-feliz-en-concesionario-de-automoviles-con-vendedor.jpg", import.meta.url).href;

function Inicio() {
  return (
    <div>
      <section>
            <div className="hero">
                <h1>Comodidad a tu alcance</h1>

            </div>
        </section>

        <section className="acercade">
            <img src={acercaImg} alt="Coche deportivo clásico estacionado" />
            <div className="texto-acercade">
                <h2>Acerca de Nosotros</h2>
                <p>En Panther, ofrecemos una amplia variedad de coches de alta calidad para todos los gustos. Desde vehículos familiares hasta deportivos de lujo, tenemos algo para cada ocasión. Nuestra empresa cuenta con más de 20 años de experiencia en el sector automotriz, brindando asesoramiento personalizado y un servicio de excelencia a cada cliente. Trabajamos con las marcas más prestigiosas del mercado y garantizamos la máxima seguridad, confort y tecnología en cada uno de nuestros modelos. En Panther, nos apasiona la innovación y la satisfacción de quienes confían en nosotros, por eso acompañamos a nuestros clientes en todo el proceso de compra y postventa, asegurando una experiencia única y exclusiva.</p>
            </div>
        </section>


        <section>
            <Galeria/>
        </section>

        <section>
            <div className="Servicios">
                <h2>Servicio postventa</h2>
                <p className="txt-servicio">En Panther, nuestro compromiso no termina con la entrega de tu vehículo. Ofrecemos un completo servicio postventa que incluye mantenimiento preventivo, reparaciones, revisiones técnicas y asesoramiento personalizado. Además, contamos con una amplia gama de accesorios originales para que personalices tu coche según tus necesidades y gustos. Nuestro equipo de profesionales está siempre disponible para garantizar el óptimo funcionamiento y la máxima satisfacción con tu vehículo.</p>
        
            </div>
            
            
        </section>

        <section className="contenedor-noticias">
            <Noticias/>  
            
        </section>


    </div>
  )
}

export default Inicio