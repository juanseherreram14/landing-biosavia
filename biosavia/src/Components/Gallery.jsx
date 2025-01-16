import React from "react";
import "../Styles/Gallery.css";

// Importar imágenes localmente
import fotoGaleria1 from "../Images/fotoGaleria1.jpeg";
import fotoGaleria2 from "../Images/fotoGaleria2.jpeg";
import fotoGaleria3 from "../Images/fotoGaleria3.jpeg";
import fotoGaleria4 from "../Images/fotoGaleria4.jpeg";
import fotoGaleria5 from "../Images/fotoGaleria5.jpeg";
import fotoGaleria6 from "../Images/fotoGaleria6.jpeg";
import fotoGaleria7 from "../Images/fotoGaleria7.jpeg";
import fotoGaleria8 from "../Images/fotoGaleria8.jpeg";
import fotoGaleria9 from "../Images/fotoGaleria9.jpeg";

const Gallery = () => {
  const images = [
    fotoGaleria1,
    fotoGaleria2,
    fotoGaleria3,
    fotoGaleria4,
    fotoGaleria5,
    fotoGaleria6,
    fotoGaleria7,
    fotoGaleria8,
    fotoGaleria9,
  ];

  return (
    <section className="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
