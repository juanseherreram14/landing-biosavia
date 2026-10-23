# BIOSAVIA

Landing de BIOSAVIA en español, desarrollada con React. Conserva el logo, la tipografía Roboto y el color de marca `#282667`.

## Desarrollo

Requiere Node.js 18 o superior y npm. Desde esta carpeta:

```bash
npm ci
npm start
```

La vista previa se abre en `http://localhost:3000`.

## Validación y publicación

```bash
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

El directorio `build/` contiene la web estática lista para el hosting existente. Las rutas de los recursos respetan `PUBLIC_URL` si se despliega bajo un subdirectorio.

## Contenido

El contenido editorial está distribuido en `src/Components/`: presentación, fórmula, aplicaciones, galería y contacto. El texto se actualizó con el documento de BIOSAVIA proporcionado en octubre de 2026: origen ecuatoriano, presentación de 75 g, árnica, ginseng y aceites esenciales de menta y naranja.

`src/data/media.json` registra las 22 fotos y los 17 videos suministrados, sus títulos y sus nombres originales. Los recursos están incluidos en `public/media/`:

- `photos/`: fotos optimizadas en WebP.
- `videos/`: videos MP4 con H.264 y audio AAC cuando el original contiene audio, optimizados para reproducción web.
- `posters/`: miniaturas WebP extraídas de cada video.
- `hero-biosavia.webp`: recorte de la foto 8 para la portada.
- `logo.webp`: logo original optimizado.

La galería permite filtrar, cargar más contenido y abrir fotos o videos en un visor. Los videos se descargan al abrir el visor; la página inicial usa sus miniaturas. El visor admite Escape, controles nativos y navegación entre recursos. El menú móvil, las pestañas de usos y los acordeones funcionan con teclado y respetan la preferencia de movimiento reducido.

Los enlaces de WhatsApp e Instagram conservan los destinos del repositorio original. No se añadió un formulario sin servicio de envío.
