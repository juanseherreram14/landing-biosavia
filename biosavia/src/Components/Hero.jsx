import React from 'react';
import Icon from './Icon';

export default function Hero() {
  return (
    <section id="inicio" className="hero container">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Naturalmente, BIOSAVIA</p>
        <h1>Menos tensión.<br /><span>Más vida.</span></h1>
        <p className="hero-description">Un gel natural de uso medicinal que alivia los músculos contraídos de cualquier parte del cuerpo por su poder antiinflamatorio.</p>
        <div className="hero-actions">
          <a href="#about" className="button">Descubre BIOSAVIA <Icon name="arrow" size={19} /></a>
          <a href="#gallery" className="text-link"><span className="play-outline"><Icon name="play" size={15} /></span> Míralo en acción</a>
        </div>
        <div className="hero-note"><span className="ecuador-flag" aria-hidden="true" /><span>Orgullosamente ecuatoriano.<br /><strong>Bienestar que llevas contigo.</strong></span></div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo"><img src={`${process.env.PUBLIC_URL}/media/hero-biosavia.webp`} alt="Gel BIOSAVIA de 75 g con naranja y menta, orgullosamente ecuatoriano" width="1080" height="1060" fetchPriority="high" /></div>
        <div className="product-tag"><span>Tu dosis de bienestar</span><strong>75 <small>g</small></strong><span>Gel natural · Uso tópico</span></div>
        <span className="hero-vertical">MENTA + NARANJA + ÁRNICA + GINSENG</span>
      </div>
      <div className="hero-bottom"><span>El poder de la naturaleza, en un masaje.</span><a href="#about" aria-label="Conoce la fórmula de BIOSAVIA">Conoce su fórmula <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
