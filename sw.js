/* =====================================================================
   HORARIOS ROTATIVOS - trabajador de segundo plano
   Lo que hace que la pagina se pueda instalar en el telefono y que abra
   aunque no haya internet.

   La regla es "primero la red, y si no hay, lo guardado":
   - Con internet siempre se sirve la version mas nueva, asi que cuando
     subas una actualizacion la coges sin tener que borrar nada.

   OJO con la pagina misma: hay que pedirla saltandose la cache del
   navegador. Por debajo de esto hay OTRA cache, la normal del navegador,
   y GitHub Pages manda index.html con permiso para guardarlo un rato. Sin
   el salto, "primero la red" devolvia igualmente la copia vieja y una
   actualizacion recien subida no llegaba al telefono en horas.
   - Sin internet se sirve la ultima copia guardada y la aplicacion abre
     igual. Los datos viven en el propio telefono, asi que se puede
     trabajar y ya subira a la nube cuando vuelva la senal.

   Lo de Supabase NUNCA se guarda aqui: son datos, no la aplicacion, y
   ademas viven en otra direccion. Solo se toca lo de esta misma carpeta.
   ===================================================================== */
const VERSION = 'horarios-v3';
const BASICOS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icono-192.png',
  './icono-512.png',
  './icono-recortable-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', ev => {
  ev.waitUntil(
    caches.open(VERSION)
      /* 'reload' para que lo que se guarda venga de la red y no de la
         cache del navegador, que si no se guarda la copia vieja. */
      .then(c => Promise.all(BASICOS.map(u =>
        c.add(new Request(u, { cache:'reload' })).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', ev => {
  ev.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', ev => {
  const req = ev.request;
  if(req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch(e){ return; }
  /* solo lo de esta carpeta: la nube va directa y sin guardar nada */
  if(url.origin !== self.location.origin) return;

  /* La pagina y su carpeta se piden siempre a la red de verdad */
  const esLaPagina = req.mode === 'navigate' ||
                     url.pathname.endsWith('/') ||
                     url.pathname.endsWith('/index.html');
  const pedir = esLaPagina
    ? fetch(req.url, { cache:'no-store', credentials:'same-origin' })
    : fetch(req);

  ev.respondWith(
    pedir
      .then(res => {
        if(res && res.status === 200 && res.type === 'basic'){
          const copia = res.clone();
          caches.open(VERSION).then(c => c.put(req, copia)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});

/* Para poder pedirle desde la aplicacion que se actualice ya */
self.addEventListener('message', ev => {
  if(ev.data === 'actualizar') self.skipWaiting();
});
