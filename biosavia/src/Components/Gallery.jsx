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
import fotoGaleria10 from "../Images/FotoGaleria10.jpeg";
import fotoGaleria11 from "../Images/FotoGaleria11.jpeg";
import fotoGaleria12 from "../Images/FotoGaleria12.jpeg";
import fotoGaleria13 from "../Images/FotoGaleria13.jpeg";
import fotoGaleria14 from "../Images/FotoGaleria14.jpeg";
import fotoGaleria15 from "../Images/FotoGaleria15.jpeg";
import fotoGaleria16 from "../Images/FotoGaleria16.jpeg";
import fotoGaleria17 from "../Images/FotoGaleria17.jpeg";


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
    fotoGaleria10,
    fotoGaleria11,
    fotoGaleria12,
    fotoGaleria13,
    fotoGaleria14,
    fotoGaleria17,
    fotoGaleria15,
    fotoGaleria16
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
