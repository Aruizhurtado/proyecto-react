import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";
import "../assets/Estilos/App.css";

const modules = import.meta.glob("../assets/Imagenes/galeria/*.jpg", {
  eager: true,
});

const images: string[] = Object.values(modules).map(
  (mod) => (mod as { default: string }).default
);

function Galeria() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + images.length) % images.length
      );
    }
  };

  return (
    <section id="galeria" className="galeria-section">
      <h2 className="galeria-title">Galería de modelos</h2>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Modelo ${i + 1}`}
              className="galeria-img"
              loading="lazy"
              onClick={() => setSelectedIndex(i)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={() => setSelectedIndex(null)}>
          
          <button className="close-btn" onClick={() => setSelectedIndex(null)}>
            ✕
          </button>

          <button className="prev-btn" onClick={prevImage}>
            ‹
          </button>

          <img
            src={images[selectedIndex]}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button className="next-btn" onClick={nextImage}>
            ›
          </button>
        </div>
      )}
    </section>
  );
}

export default Galeria;
