import React, { useState } from 'react';
import Icon from './Icon';

const moments = [
  { title: 'Para seguir en movimiento', label: 'Deporte y actividad', image: 'atletas', alt: 'Deportistas con BIOSAVIA después de una actividad al aire libre', icon: 'movement', text: 'BIOSAVIA proporciona un alivio rápido para moretones, calambres y tensión muscular en el cuello, la espalda y otras zonas del cuerpo. Relaja los músculos tensos y contraídos antes o después del ejercicio.' },
  { title: 'Para hacer una pausa', label: 'Estrés y tensión', image: 'foto-6', alt: 'BIOSAVIA para los momentos de tensión del día a día', icon: 'sun', text: 'BIOSAVIA, acción relajante inmediata para el estrés. Ayuda a aliviar la fatiga y la tensión general, para que encuentres un momento de bienestar en tu día.' },
  { title: 'Para cerrar bien el día', label: 'Descanso y cuidado', image: 'kit-de-viaje', alt: 'BIOSAVIA en un kit de viaje, junto a una cámara y documentos', icon: 'moon', text: 'Simplemente masajea la zona afectada hasta su completa absorción, o aplícalo en la espalda, los pies y el cuello para disfrutar de un sueño más reparador. Llévalo contigo, también cuando viajas.' },
];

const applications = [
  ['Tensión muscular y ejercicio', 'Relaja los músculos tensos y contraídos antes o después del ejercicio.'],
  ['Dolor de cabeza y migraña', 'Alivia los dolores de cabeza y las migrañas cuando se aplica en el cuero cabelludo.'],
  ['Calambres musculares', 'Alivia los calambres musculares en cualquier parte del cuerpo.'],
  ['Inflamación articular', 'Ayuda a reducir la inflamación articular.'],
  ['Piernas cansadas y pies', 'Proporciona alivio para las varices, las piernas cansadas y los pies.'],
  ['Fatiga y tensión general', 'Ayuda a aliviar la fatiga y la tensión general.'],
  ['Picaduras de mosquitos', 'Alivia las picaduras de mosquitos.'],
];

export default function Applications() {
  const [active, setActive] = useState(0);
  const moment = moments[active];
  return (
    <section id="usos" className="uses-section section-space container">
      <div className="section-heading"><p className="eyebrow">02 / Bienestar a tu manera</p><span className="section-detail">Un gel. Muchos momentos.</span></div>
      <div className="section-intro"><h2>Tu día cambia.<br /><span>Tu bienestar te acompaña.</span></h2><p>Tanto si eres deportista, una persona activa o buscas un cuidado suave para niños o personas mayores, nuestra fórmula está diseñada para todas las edades.</p></div>
      <div className="moments-grid">
        <div className="moment-photo"><img key={moment.image} src={`${process.env.PUBLIC_URL}/media/photos/${moment.image}.webp`} alt={moment.alt} width="963" height="1280" loading="lazy" /><span className="image-caption">BIOSAVIA en la vida real.</span></div>
        <div className="moments-content">
          <div className="moment-tabs" role="tablist" aria-label="Momentos para usar BIOSAVIA">{moments.map((item, index) => <button key={item.label} type="button" role="tab" id={`moment-tab-${index}`} aria-selected={active === index} aria-controls="moment-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => { if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) { event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? 2 : (active + (event.key === 'ArrowRight' ? 1 : 2)) % 3; setActive(next); document.getElementById(`moment-tab-${next}`).focus(); } }}><Icon name={item.icon} size={18} />{item.label}</button>)}</div>
          <div id="moment-panel" className="moment-panel" role="tabpanel" aria-labelledby={`moment-tab-${active}`} tabIndex="0"><span className="large-index">0{active + 1}</span><h3>{moment.title}</h3><p>{moment.text}</p><a href="#gallery" className="text-link">Explora más momentos <Icon name="arrow" size={18} /></a></div>
          <div className="application-note"><span>75 g</span><p>Con cierre hermético. Ideal para el gimnasio, el spa o tu botiquín de primeros auxilios.</p></div>
        </div>
      </div>
      <div className="applications-detail"><div><p className="eyebrow">Aplicaciones versátiles</p><h3>Un pequeño gesto.<br />Muchas formas de aliviar.</h3><p>Aplica y masajea la zona afectada hasta su completa absorción.</p></div><div className="application-list">{applications.map(([title, text]) => <details key={title}><summary>{title}<Icon name="plus" size={20} /></summary><p>{text}</p></details>)}</div></div>
    </section>
  );
}
