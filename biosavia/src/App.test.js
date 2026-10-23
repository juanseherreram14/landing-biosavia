import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import media from './data/media.json';

let container;
let root;
const click = async element => { await act(async () => element.dispatchEvent(new MouseEvent('click', { bubbles: true }))); };

beforeEach(async () => {
  container = document.createElement('div');
  document.body.append(container);
  root = createRoot(container);
  await act(async () => root.render(<App />));
});
afterEach(async () => {
  await act(async () => root.unmount());
  container.remove();
});

test('presents the Ecuadorian 75 g formula and working section anchors', () => {
  expect(container.querySelector('h1').textContent).toBe('Menos tensión.Más vida.');
  expect(container.textContent).toContain('orgullosamente ecuatoriano');
  expect(container.textContent).toContain('75 g');
  expect(container.textContent).not.toMatch(/made in the USA|capsaicin|117.5/);
  const ids = [...container.querySelectorAll('[id]')].map(element => element.id);
  expect(new Set(ids).size).toBe(ids.length);
  for (const anchor of container.querySelectorAll('a[href^="#"]')) {
    expect(document.getElementById(anchor.hash.slice(1))).not.toBeNull();
  }
});

test('makes all 22 photos and 17 videos reachable through filters and pagination', async () => {
  expect(media.filter(item => item.type === 'photo')).toHaveLength(22);
  expect(media.filter(item => item.type === 'video')).toHaveLength(17);
  for (const [label, count] of [['Fotos', 22], ['Videos', 17], ['Todo', 39]]) {
    const filter = [...container.querySelectorAll('.gallery-filters button')].find(button => button.textContent.startsWith(label));
    await click(filter);
    expect(container.querySelectorAll('.media-card')).toHaveLength(6);
    while (container.querySelector('.gallery-bottom button')) await click(container.querySelector('.gallery-bottom button'));
    expect(container.querySelectorAll('.media-card')).toHaveLength(count);
  }
});

test('opens a single requested video, navigates media, and releases the player on close', async () => {
  expect(container.querySelector('video')).toBeNull();
  const trigger = container.querySelector('[aria-label^="Reproducir video"]');
  await click(trigger);
  expect(container.querySelector('dialog').hasAttribute('open')).toBe(true);
  expect(container.querySelector('video').getAttribute('src')).toContain('video-05.mp4');
  expect(document.body.style.overflow).toBe('hidden');
  const next = [...container.querySelectorAll('.dialog-footer button')].find(button => button.textContent.startsWith('Siguiente'));
  await click(next);
  expect(container.querySelector('video')).toBeNull();
  expect(container.querySelector('.dialog-media img').getAttribute('src')).toContain('atletas.webp');
  await click(container.querySelector('.dialog-close'));
  expect(container.querySelector('dialog')).toBeNull();
  expect(document.body.style.overflow).toBe('');
  expect(document.activeElement).toBe(trigger);
});

test('supports keyboard navigation between everyday uses', async () => {
  const tabs = [...container.querySelectorAll('[role="tab"]')];
  tabs[0].focus();
  await act(async () => tabs[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })));
  expect(tabs[1].getAttribute('aria-selected')).toBe('true');
  expect(document.activeElement).toBe(tabs[1]);
  expect(container.querySelector('[role="tabpanel"]').textContent).toContain('Para hacer una pausa');
});
