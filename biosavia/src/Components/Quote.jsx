import React from 'react';
import Icon from './Icon';

export default function Quote() {
  return <section className="quote-section"><div className="container quote-inner"><div><p className="eyebrow">Relaja el cuerpo. Cambia el día.</p><h2>Quita hasta<br /><em>el mal genio.</em></h2><p>BIOSAVIA, acción relajante inmediata para el estrés.</p><a href="#gallery" className="text-link">Encuentra tu momento de alivio <Icon name="arrow" size={19} /></a></div><div className="quote-art" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit orbit-three" /><span className="orbit-center"><img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="" width="80" height="80" loading="lazy" /></span><span className="orbit-dot" /></div></div></section>;
}
