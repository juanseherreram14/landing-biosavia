import React from 'react';
import Icon from './Icon';

export default function AboutUs() {
  return (
    <section id="about" className="about-section section-space">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">01 / Acerca de BIOSAVIA</p><span className="section-detail">Naturaleza que se siente.</span></div>
        <div className="about-grid">
          <div><h2>Una fórmula natural.<br /><span>Mucho que sentir.</span></h2><div className="formula-mark"><Icon name="leaf" size={32} /><p>Aceites esenciales puros<br /><strong>de menta y naranja.</strong></p></div></div>
          <div className="about-copy"><p className="lead">BIOSAVIA es un gel natural de venta libre de alta calidad, orgullosamente ecuatoriano, formulado para aliviar eficazmente el dolor, proporcionar beneficios antiinflamatorios y reducir el estrés.</p><p>Su sofisticada fórmula combina árnica, ginseng y aceites esenciales puros de naranja y menta, ofreciendo una experiencia relajante y terapéutica.</p><p>Los aceites esenciales de menta y de naranja de BIOSAVIA relajan cualquier parte contraída del cuerpo por dolor muscular, articular o por estrés.</p></div>
        </div>
        <div className="ingredients" aria-label="Ingredientes de BIOSAVIA">
          <div><span className="ingredient-number">01</span><h3>Menta</h3><span>Aceite esencial puro</span><Icon name="leaf" size={30} /></div>
          <div><span className="ingredient-number">02</span><h3>Naranja</h3><span>Aceite esencial puro</span><Icon name="sun" size={30} /></div>
          <div><span className="ingredient-number">03</span><h3>Árnica</h3><span>Parte de nuestra fórmula</span><span className="botanical-symbol" aria-hidden="true">✳</span></div>
          <div><span className="ingredient-number">04</span><h3>Ginseng</h3><span>Parte de nuestra fórmula</span><Icon name="leaf" size={30} /></div>
        </div>
        <p className="formula-line">BIOSAVIA. Único en el mundo con aceites esenciales.</p>
      </div>
    </section>
  );
}
