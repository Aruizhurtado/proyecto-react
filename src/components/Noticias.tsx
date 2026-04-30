import noticiasData from "../assets/data/noticias.json";

type Noticia = {
  id: number;
  titulo: string;
  descripcion: string;
  autor: string;
  fecha: string;
  categoria: string;
  imagen: string;
};

const noticias: Noticia[] = noticiasData;

function Noticias() {
  return (
    <section className="contenedor-noticias">
      <h2>Últimas Noticias</h2>

      <div className="contenedor1">
        {noticias.map((noticia) => (
            
          <div className="noticia" key={noticia.id}>
            <img src={noticia.imagen} alt={noticia.titulo} />
            <h3>{noticia.titulo}</h3>
            <p>{noticia.descripcion}</p>

           <div className="info">
                <span className="autor">{noticia.autor}</span>
                <span className="fecha">{noticia.fecha}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Noticias;