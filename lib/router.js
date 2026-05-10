// Mini-Hashrouter für die SPA
// Routes:
//   #/                       Startseite
//   #/modul/<id>             Modulseite
//   #/modul/<id>/karteikarten Karteikartenmodus eines Moduls
//   #/probeklausur           Probeklausur-Übersicht
//   #/probeklausur/vortrag   Vortragsmodus
//   #/probeklausur/kolloquium Kolloquium-Modus
//   #/bewertung              Bewertungsraster + Tipps
//   #/glossar                Glossar
//   #/datenschutz            Datenschutz-Hinweis

const routes = [];

export function on(pattern, handler) {
  // pattern: z. B. '#/modul/:id' oder '#/modul/:id/karteikarten'
  const re = new RegExp('^' + pattern.replace(/:[a-z]+/gi, '([^/]+)') + '$');
  routes.push({ pattern, re, handler });
}

export function navigate(path) {
  if (location.hash !== path) {
    location.hash = path;
  } else {
    handle();
  }
}

function handle() {
  const hash = location.hash || '#/';
  for (const route of routes) {
    const match = hash.match(route.re);
    if (match) {
      const params = {};
      const keys = (route.pattern.match(/:[a-z]+/gi) || []).map(k => k.slice(1));
      keys.forEach((key, i) => { params[key] = match[i + 1]; });
      try {
        route.handler(params);
      } catch (err) {
        console.error('Router-Handler-Fehler:', err);
        const main = document.getElementById('app');
        if (main) main.innerHTML = `<section class="page"><h1>Fehler</h1><p>${err.message}</p></section>`;
      }
      window.scrollTo(0, 0);
      return;
    }
  }
  // Fallback
  const main = document.getElementById('app');
  if (main) main.innerHTML = `<section class="page"><h1>Seite nicht gefunden</h1><p>Route ${hash} existiert nicht. <a href="#/">Zur Startseite</a></p></section>`;
}

export function start() {
  window.addEventListener('hashchange', handle);
  handle();
}
