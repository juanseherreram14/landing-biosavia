import React, { useEffect, useRef, useState } from 'react';
import media from '../data/media.json';
import Icon from './Icon';

const asset = path => `${process.env.PUBLIC_URL}/media/${path}`;
const duration = seconds => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
const filters = [['all', 'Todo'], ['video', 'Videos'], ['photo', 'Fotos']];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [visible, setVisible] = useState(6);
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const filtered = media.filter(item => filter === 'all' || item.type === filter);
  const selectedIndex = selected ? filtered.findIndex(item => item.id === selected.id) : -1;

  useEffect(() => {
    if (!selected) return undefined;
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);

  const close = () => {
    setSelected(null);
    triggerRef.current?.focus();
  };

  return (
    <section id="gallery" className="gallery-section section-space container">
      <div className="section-heading"><p className="eyebrow">03 / En tu día a día</p><span className="section-detail">Historias, movimiento y bienestar.</span></div>
      <div className="gallery-intro">
        <div><h2>La vida se mueve.<br />BIOSAVIA va contigo.</h2><p>Descubre nuestros videos, formas de usar el gel y momentos de bienestar. Elige uno y míralo de cerca.</p></div>
        <div className="gallery-filters" role="group" aria-label="Filtrar galería">{filters.map(([value, label]) => <button type="button" key={value} aria-pressed={filter === value} onClick={() => { setFilter(value); setVisible(6); }}>{label}<span>{value === 'all' ? media.length : media.filter(item => item.type === value).length}</span></button>)}</div>
      </div>
      <div className="gallery-grid" aria-label="Fotos y videos de BIOSAVIA">{filtered.slice(0, visible).map(item => (
        <article className="media-card" key={item.id}>
          <button type="button" className="media-trigger" aria-label={`${item.type === 'video' ? 'Reproducir video' : 'Ampliar foto'}: ${item.title}`} onClick={event => { triggerRef.current = event.currentTarget; setSelected(item); }}>
            <span className="media-thumb"><img src={asset(item.poster || item.src)} alt={item.title} width="480" height="480" loading="lazy" /><span className="media-type">{item.type === 'video' ? 'VIDEO' : 'FOTO'}</span>{item.type === 'video' && <><span className="media-play"><Icon name="play" size={23} /></span><span className="media-duration">{duration(item.duration)}</span></>}</span>
            <span className="media-caption"><strong>{item.title}</strong><Icon name="arrow" size={18} /></span>
          </button>
        </article>
      ))}</div>
      <div className="gallery-bottom"><p role="status" aria-live="polite">Mostrando {Math.min(visible, filtered.length)} de {filtered.length} momentos</p>{visible < filtered.length && <button type="button" className="button button-outline" onClick={() => setVisible(count => count + 6)}>Ver más momentos <Icon name="plus" size={18} /></button>}</div>
      {selected && <dialog ref={dialogRef} className="media-dialog" aria-labelledby="media-title" onClose={close} onCancel={event => { event.preventDefault(); dialogRef.current.close(); }} onClick={event => { if (event.target === event.currentTarget) dialogRef.current.close(); }}>
        <div className="dialog-header"><h3 id="media-title">{selected.title}</h3><button type="button" className="dialog-close" aria-label="Cerrar visor" onClick={() => dialogRef.current.close()}><Icon name="close" size={20} /></button></div>
        <div className="dialog-media">{selected.type === 'video' ? <video key={selected.id} src={asset(selected.src)} poster={asset(selected.poster)} controls autoPlay playsInline preload="metadata" aria-label={selected.title}>Tu navegador no puede reproducir este video. <a href={asset(selected.src)}>Abrir el video</a></video> : <img src={asset(selected.src)} alt={selected.title} />}</div>
        <div className="dialog-footer"><button type="button" disabled={selectedIndex <= 0} onClick={() => setSelected(filtered[selectedIndex - 1])}><span aria-hidden="true">←</span> Anterior</button><span>{selectedIndex + 1} / {filtered.length}</span><button type="button" disabled={selectedIndex >= filtered.length - 1} onClick={() => setSelected(filtered[selectedIndex + 1])}>Siguiente <Icon name="arrow" size={16} /></button></div>
      </dialog>}
    </section>
  );
}
