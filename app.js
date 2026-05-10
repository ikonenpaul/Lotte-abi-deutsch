// app.js — SPA-Hauptdatei
// Lädt Module, registriert Routen, rendert Seiten in #app.

import { kleist } from './data/kleist.js';
import { keun } from './data/keun.js';
import { sprachePolitik } from './data/sprache-politik.js';
import { sprachwandel } from './data/sprachwandel.js';
import { bewertung } from './data/bewertung.js';
import { glossar } from './data/glossar.js';
import { pruefungsfragen, getRandomAufgabe, modulTitel } from './data/pruefungsfragen.js';
import { getFlashcardsByModul, getAllFlashcards } from './data/karteikarten.js';

import * as router from './lib/router.js';
import * as storage from './lib/storage.js';
import * as speech from './lib/speech.js';
import * as gemini from './lib/gemini.js';

const MODULE = { kleist, keun, 'sprache-politik': sprachePolitik, sprachwandel };
const app = () => document.getElementById('app');

// ----- Helpers -----
function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function escape(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function setActiveNav() {
  document.querySelectorAll('.site-nav a').forEach(a => {
    const route = a.dataset.route;
    const hash = location.hash || '#/';
    if (route === '/' && hash === '#/') a.classList.add('is-active');
    else if (route !== '/' && hash.startsWith('#' + route)) a.classList.add('is-active');
    else a.classList.remove('is-active');
  });
}

function fmtTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

// ----- Modal -----
function openModal(html) {
  const root = document.getElementById('modal-root');
  root.innerHTML = `<div class="modal-overlay"><div class="modal" role="dialog" aria-modal="true">${html}</div></div>`;
  return root.querySelector('.modal');
}

function closeModal() {
  const root = document.getElementById('modal-root');
  root.innerHTML = '';
}

function ensureApiKey() {
  return new Promise((resolve, reject) => {
    if (storage.getApiKey()) return resolve(storage.getApiKey());
    const modal = openModal(`
      <h3>Gemini API-Key hinterlegen</h3>
      <p>Für die mündliche Probeklausur brauchst du einen kostenlosen Google-AI-Studio-Key. Der Key bleibt nur in deinem Browser gespeichert; weder Paul noch sonst jemand sieht ihn.</p>
      <ol>
        <li>Öffne <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">aistudio.google.com</a> und logge dich mit deinem Google-Konto ein.</li>
        <li>Klick auf "Create API key" → wähle ein Projekt aus oder erstelle eines.</li>
        <li>Kopiere den Schlüssel (beginnt mit "AIza…") und füge ihn unten ein.</li>
        <li><strong>Sicherheit:</strong> Falls du die Site später ins Web stellst — schränke den Key in AI Studio auf deine GitHub-Pages-Domain ein (HTTP referrer).</li>
      </ol>
      <div class="field">
        <label for="apikey-input">Dein API-Key</label>
        <input id="apikey-input" type="password" placeholder="AIza..." autocomplete="off">
      </div>
      <div class="modal-actions">
        <button class="btn btn--secondary" id="apikey-cancel" type="button">Abbrechen</button>
        <button class="btn" id="apikey-save" type="button">Speichern</button>
      </div>
    `);
    modal.querySelector('#apikey-cancel').onclick = () => { closeModal(); reject(new Error('Abgebrochen')); };
    modal.querySelector('#apikey-save').onclick = () => {
      const v = modal.querySelector('#apikey-input').value.trim();
      if (!v) {
        modal.querySelector('#apikey-input').focus();
        return;
      }
      storage.setApiKey(v);
      closeModal();
      resolve(v);
    };
    modal.querySelector('#apikey-input').focus();
  });
}

// ===========================================================
// ROUTES
// ===========================================================

// ---------- Startseite ----------
router.on('#/', () => {
  const moduleList = Object.values(MODULE);
  const cards = moduleList.map((m, idx) => {
    const total = m.sections.length;
    const done = Math.round(storage.getModulProgress(m.id, total) * total);
    const pct = total > 0 ? (done / total) * 100 : 0;
    return `
      <a class="modul-row" href="#/modul/${m.id}">
        <div class="modul-num">0${idx + 1}</div>
        <div class="modul-body">
          <h3 class="modul-title">${escape(m.title)}</h3>
          <p class="modul-author">${escape(m.author)}</p>
          <p class="modul-subtitle">${escape(m.subtitle)}</p>
        </div>
        <div class="modul-meta">
          <span>${m.estMinutes} min</span>
          <div class="modul-progress-track" aria-label="Fortschritt"><div class="modul-progress-fill" style="width:${pct}%"></div></div>
          <span>${done}/${total}</span>
        </div>
      </a>
    `;
  }).join('');

  app().innerHTML = `
    <section class="hero">
      <span class="hero-meta"><span class="hero-meta-dot"></span>Mündliches Abitur · Niedersachsen 2026 · gA</span>
      <h1 class="hero-greeting">Hallo Lotte. Lass uns dein Deutsch-Abi knacken.</h1>
      <p class="hero-subtitle">Vier Pflichtmodule, dazu eine mündliche Probeklausur, in der dich ein KI-Prüfer abfragt. Klick dich durch — dein Fortschritt bleibt in deinem Browser gespeichert.</p>
    </section>

    <section class="modul-list" aria-labelledby="modul-list-title">
      <h2 id="modul-list-title" class="modul-list-title">Module</h2>
      ${cards}
    </section>

    <section class="cta-band">
      <div class="cta-card">
        <div class="cta-card-text">
          <h2>Bereit für die Probeklausur?</h2>
          <p>Wähle einen Modus — Vortrag oder Kolloquium — und üb mit einer KI als Prüfer.</p>
        </div>
        <a class="btn btn--lg" href="#/probeklausur">Probeklausur starten</a>
      </div>
    </section>
  `;
  setActiveNav();
});

// ---------- Modulseite ----------
router.on('#/modul/:id', (params) => {
  const m = MODULE[params.id];
  if (!m) {
    app().innerHTML = `<section class="page"><h1>Modul nicht gefunden</h1><p><a href="#/">Zur Startseite</a></p></section>`;
    return;
  }

  const toc = m.sections.map(s => `<a href="#sec-${s.id}">${escape(s.title)}</a>`).join('');
  const sections = m.sections.map(s => {
    const isRead = storage.isSectionRead(m.id, s.id);
    return `
      <article class="modul-section" id="sec-${s.id}">
        <div class="section-marker">Abschnitt · ${escape(s.title)} ${isRead ? '<span class="tag-read">gelesen</span>' : ''}</div>
        <h2>${escape(s.title)}</h2>
        <div class="section-content">${s.html}</div>
        <div class="section-actions">
          <button class="btn btn--ghost" data-mark-read="${s.id}">${isRead ? 'Gelesen ✓' : 'Als gelesen markieren'}</button>
        </div>
      </article>
    `;
  }).join('');

  app().innerHTML = `
    <section class="page">
      <header class="page-header">
        <p class="page-eyebrow">${escape(m.subtitle)}</p>
        <h1>${escape(m.title)}</h1>
        <p class="lead">${escape(m.author)} · ca. ${m.estMinutes} Minuten Lesezeit</p>
        <nav class="modul-toc" aria-label="Inhaltsübersicht">${toc}</nav>
        <div class="section-actions">
          <a class="btn" href="#/modul/${m.id}/karteikarten">Karteikarten üben</a>
          <a class="btn btn--secondary" href="#/probeklausur">Probeklausur</a>
        </div>
      </header>

      ${sections}
    </section>
  `;

  // Mark-read buttons
  app().querySelectorAll('[data-mark-read]').forEach(btn => {
    btn.onclick = () => {
      storage.markSectionRead(m.id, btn.dataset.markRead);
      btn.textContent = 'Gelesen ✓';
      // Update marker
      const article = btn.closest('.modul-section');
      const marker = article?.querySelector('.section-marker');
      if (marker && !marker.querySelector('.tag-read')) {
        marker.insertAdjacentHTML('beforeend', ' <span class="tag-read">gelesen</span>');
      }
    };
  });

  setActiveNav();
});

// ---------- Karteikarten ----------
router.on('#/modul/:id/karteikarten', (params) => {
  const m = MODULE[params.id];
  if (!m) return router.navigate('#/');
  const cards = getFlashcardsByModul(params.id);

  let idx = 0;
  let revealed = false;

  function render() {
    const card = cards[idx];
    app().innerHTML = `
      <section class="page">
        <header class="page-header">
          <p class="page-eyebrow"><a href="#/modul/${m.id}" style="color:inherit;text-decoration:none;">← ${escape(m.title)}</a></p>
          <h1>Karteikarten</h1>
          <p class="lead">Klick die Karte, um die Antwort zu sehen. Nutze die Pfeile zum Wechseln.</p>
        </header>

        <div class="karteikarte" id="card">
          <div class="karteikarte-tag">Frage ${idx + 1} von ${cards.length}</div>
          <div class="karteikarte-q">${escape(card.q)}</div>
          ${revealed ? `<div class="karteikarte-a">${escape(card.a)}</div>` : `<div style="color:var(--color-text-subtle);font-size:0.9rem;margin-top:8px;">Klick zum Aufdecken</div>`}
        </div>

        <div class="karteikarte-controls">
          <button class="btn btn--secondary" id="prev" ${idx === 0 ? 'disabled' : ''}>← Zurück</button>
          <span class="karteikarte-progress">${idx + 1} / ${cards.length}</span>
          <button class="btn" id="next" ${idx === cards.length - 1 ? 'disabled' : ''}>Weiter →</button>
        </div>

        <div class="section-actions" style="margin-top:32px;">
          <button class="btn btn--ghost" id="shuffle">Mischen</button>
          <a class="btn btn--ghost" href="#/modul/${m.id}">Zurück zum Modul</a>
        </div>
      </section>
    `;

    document.getElementById('card').onclick = () => { revealed = !revealed; render(); };
    document.getElementById('prev').onclick = () => { if (idx > 0) { idx--; revealed = false; render(); } };
    document.getElementById('next').onclick = () => { if (idx < cards.length - 1) { idx++; revealed = false; render(); } };
    document.getElementById('shuffle').onclick = () => {
      cards.sort(() => Math.random() - 0.5);
      idx = 0; revealed = false; render();
    };
  }

  if (cards.length === 0) {
    app().innerHTML = `<section class="page"><h1>Keine Karteikarten</h1><p><a href="#/modul/${m.id}">Zurück</a></p></section>`;
    return;
  }
  render();
  setActiveNav();
});

// ---------- Probeklausur Übersicht ----------
router.on('#/probeklausur', () => {
  app().innerHTML = `
    <section class="page">
      <header class="page-header">
        <p class="page-eyebrow">Mündliche Probeklausur</p>
        <h1>Trainier so, wie du in der Prüfung geprüft wirst</h1>
        <p class="lead">Zwei Modi. Beide nutzen Gemini als KI-Prüfer und die Spracherkennung deines Browsers.</p>
      </header>

      <div class="modus-grid">
        <a class="modus-card" href="#/probeklausur/vortrag">
          <h3>Vortrag</h3>
          <p>Zufällige Aufgabe → 5 Minuten Vorbereitungszeit → freier Vortrag → Bewertung mit Notenpunkten.</p>
        </a>
        <a class="modus-card" href="#/probeklausur/kolloquium">
          <h3>Kolloquium</h3>
          <p>Wechselseitiger Dialog mit dem KI-Prüfer. Ca. 10 Minuten, dann Abschlussbewertung.</p>
        </a>
      </div>

      <hr>

      <div class="status-msg status-msg--info">
        <strong>Browser-Empfehlung:</strong> Chrome oder Edge. Safari funktioniert teilweise; Firefox kann sprechen, aber nicht zuhören. ${speech.isSpeechRecognitionSupported() ? '' : '<br><strong>Hinweis:</strong> Dein Browser unterstützt die Spracherkennung gerade nicht — du kannst stattdessen ins Textfeld tippen.'}
      </div>

      <h3>API-Key</h3>
      <p>Status: ${storage.getApiKey() ? '<span class="tag-read">hinterlegt</span>' : '<em>noch nicht hinterlegt</em>'}.</p>
      <div class="section-actions">
        <button class="btn btn--secondary" id="set-key">${storage.getApiKey() ? 'Key ändern' : 'Key hinterlegen'}</button>
        ${storage.getApiKey() ? '<button class="btn btn--danger" id="clear-key">Key löschen</button>' : ''}
      </div>
    </section>
  `;

  document.getElementById('set-key').onclick = async () => {
    storage.clearApiKey();
    try { await ensureApiKey(); router.navigate('#/probeklausur'); } catch {}
  };
  const clearBtn = document.getElementById('clear-key');
  if (clearBtn) clearBtn.onclick = () => { storage.clearApiKey(); router.navigate('#/probeklausur'); };

  setActiveNav();
});

// ---------- Vortrag-Modus ----------
router.on('#/probeklausur/vortrag', () => {
  const state = {
    phase: 'setup', // setup | prep | speak | done
    modul: 'kleist',
    schwierigkeit: 'mittel',
    aufgabe: null,
    timer: 0,
    interval: null,
    recognizer: null,
    transkript: '',
    interim: '',
    feedback: null,
    loading: false
  };

  function clearInterval2() {
    if (state.interval) { clearInterval(state.interval); state.interval = null; }
  }

  function render() {
    const a = app();
    const modulOptions = Object.entries(modulTitel).map(([id, t]) =>
      `<option value="${id}" ${state.modul === id ? 'selected' : ''}>${escape(t)}</option>`).join('');
    const stufenOptions = ['leicht', 'mittel', 'schwer'].map(s =>
      `<option value="${s}" ${state.schwierigkeit === s ? 'selected' : ''}>${s.charAt(0).toUpperCase() + s.slice(1)}</option>`).join('');

    let stage = '';
    if (state.phase === 'setup') {
      stage = `
        <div class="stage">
          <h2 style="margin-top:0">Aufgabe wählen</h2>
          <div class="fielddetails">
            <div class="field">
              <label for="modul-sel">Modul</label>
              <select id="modul-sel">${modulOptions}</select>
            </div>
            <div class="field">
              <label for="stufe-sel">Schwierigkeit</label>
              <select id="stufe-sel">${stufenOptions}</select>
            </div>
          </div>
          <div class="section-actions">
            <button class="btn btn--lg" id="start">Aufgabe ziehen</button>
          </div>
        </div>
      `;
    } else if (state.phase === 'prep') {
      stage = `
        <div class="stage">
          <div class="stage-header">
            <div>
              <p class="page-eyebrow">Vorbereitung</p>
              <h2 style="margin:0">${escape(modulTitel[state.modul])} · ${state.schwierigkeit}</h2>
            </div>
            <div class="timer ${state.timer < 30 ? 'timer--warn' : ''}">${fmtTime(state.timer)}</div>
          </div>
          <p class="stage-aufgabe">${escape(state.aufgabe)}</p>
          <div class="status-msg status-msg--info">Du hast 5 Minuten Vorbereitungszeit. Notiere dir 3 Hauptpunkte. Wenn du bereit bist, klick auf "Vortrag starten".</div>
          <div class="section-actions">
            <button class="btn btn--lg" id="speak">Vortrag starten</button>
            <button class="btn btn--secondary" id="cancel">Abbrechen</button>
          </div>
        </div>
      `;
    } else if (state.phase === 'speak') {
      const supported = speech.isSpeechRecognitionSupported();
      stage = `
        <div class="stage">
          <div class="stage-header">
            <div>
              <p class="page-eyebrow">Vortrag läuft</p>
              <h2 style="margin:0">${escape(modulTitel[state.modul])}</h2>
            </div>
            <div class="recording-indicator"><span class="recording-dot"></span>Aufnahme · ${fmtTime(state.timer)}</div>
          </div>
          <p class="stage-aufgabe">${escape(state.aufgabe)}</p>
          ${supported ? `
            <div class="transkript">${escape(state.transkript)}<span class="transkript-interim">${escape(state.interim)}</span></div>
          ` : `
            <div class="status-msg status-msg--warn">Spracherkennung nicht verfügbar. Bitte tipp deinen Vortrag (oder Notizen) ins Feld.</div>
            <div class="field"><textarea id="manual-transcript" placeholder="Hier kannst du deinen Vortrag mitschreiben…">${escape(state.transkript)}</textarea></div>
          `}
          <div class="section-actions">
            <button class="btn btn--lg" id="finish">Vortrag beenden & bewerten lassen</button>
            <button class="btn btn--secondary" id="cancel">Abbrechen</button>
          </div>
        </div>
      `;
    } else if (state.phase === 'done') {
      stage = `
        <div class="stage">
          <div class="stage-header">
            <p class="page-eyebrow">Bewertung</p>
            <a class="btn btn--secondary" href="#/probeklausur/vortrag">Neu starten</a>
          </div>
          <p class="stage-aufgabe">${escape(state.aufgabe)}</p>
          <h3 style="margin-top:24px;">Dein Transkript</h3>
          <div class="transkript">${escape(state.transkript) || '(leer)'}</div>
          <h3>Feedback vom KI-Prüfer</h3>
          ${state.loading
            ? `<div><div class="skeleton" style="width:80%"></div><div class="skeleton" style="width:95%"></div><div class="skeleton" style="width:70%"></div></div>`
            : `<div class="feedback">${escape(state.feedback || 'Keine Bewertung erhalten.')}</div>`
          }
          ${!state.loading && state.feedback ? `
            <div class="section-actions">
              <button class="btn btn--ghost" id="speak-feedback">Vorlesen lassen</button>
            </div>` : ''}
        </div>
      `;
    }

    a.innerHTML = `
      <section class="page">
        <header class="page-header">
          <p class="page-eyebrow"><a href="#/probeklausur" style="color:inherit;text-decoration:none">← Probeklausur</a></p>
          <h1>Vortrag</h1>
        </header>
        ${stage}
      </section>
    `;
    bindEvents();
  }

  function bindEvents() {
    if (state.phase === 'setup') {
      document.getElementById('modul-sel').onchange = (e) => { state.modul = e.target.value; };
      document.getElementById('stufe-sel').onchange = (e) => { state.schwierigkeit = e.target.value; };
      document.getElementById('start').onclick = async () => {
        try { await ensureApiKey(); } catch { return; }
        state.aufgabe = getRandomAufgabe(state.modul, state.schwierigkeit);
        if (!state.aufgabe) return alert('Keine Aufgabe in diesem Pool.');
        state.phase = 'prep';
        state.timer = 5 * 60;
        clearInterval2();
        state.interval = setInterval(() => {
          state.timer--;
          if (state.timer <= 0) {
            clearInterval2();
            startSpeaking();
          } else {
            render();
          }
        }, 1000);
        render();
      };
    } else if (state.phase === 'prep') {
      document.getElementById('speak').onclick = startSpeaking;
      document.getElementById('cancel').onclick = abort;
    } else if (state.phase === 'speak') {
      document.getElementById('finish').onclick = finishSpeaking;
      document.getElementById('cancel').onclick = abort;
      const ta = document.getElementById('manual-transcript');
      if (ta) ta.oninput = (e) => { state.transkript = e.target.value; };
    } else if (state.phase === 'done') {
      const sb = document.getElementById('speak-feedback');
      if (sb) sb.onclick = () => speech.speak(state.feedback);
    }
  }

  function startSpeaking() {
    clearInterval2();
    state.phase = 'speak';
    state.timer = 0;
    state.transkript = '';
    state.interim = '';

    if (speech.isSpeechRecognitionSupported()) {
      try {
        state.recognizer = new speech.Recognizer({
          onResult: ({ transcript, interim }) => {
            state.transkript = transcript;
            state.interim = interim;
            // Update transcript in DOM ohne Vollrender (smoother)
            const transEl = document.querySelector('.transkript');
            if (transEl) transEl.innerHTML = escape(state.transkript) + `<span class="transkript-interim">${escape(state.interim)}</span>`;
          },
          onError: (err) => {
            console.warn('Speech error:', err);
          },
          onEnd: (final) => {
            state.transkript = final;
          }
        });
        state.recognizer.start();
      } catch (e) {
        console.warn(e);
      }
    }

    state.interval = setInterval(() => {
      state.timer++;
      const tEl = document.querySelector('.recording-indicator');
      if (tEl) tEl.innerHTML = `<span class="recording-dot"></span>Aufnahme · ${fmtTime(state.timer)}`;
    }, 1000);
    render();
  }

  async function finishSpeaking() {
    clearInterval2();
    if (state.recognizer) {
      try { state.recognizer.stop(); } catch {}
    }
    // Manual textarea?
    const ta = document.getElementById('manual-transcript');
    if (ta) state.transkript = ta.value;

    state.phase = 'done';
    state.loading = true;
    render();

    try {
      state.feedback = await gemini.bewerteVortrag({
        aufgabe: state.aufgabe,
        transkript: state.transkript || '(kein Transkript)',
        modulTitel: modulTitel[state.modul]
      });
      storage.saveAttempt({
        modul: state.modul,
        schwierigkeit: state.schwierigkeit,
        aufgabe: state.aufgabe,
        transkript: state.transkript,
        feedback: state.feedback,
        modus: 'vortrag'
      });
    } catch (err) {
      state.feedback = `Fehler: ${err.message}`;
    } finally {
      state.loading = false;
      render();
    }
  }

  function abort() {
    clearInterval2();
    if (state.recognizer) { try { state.recognizer.stop(); } catch {} }
    speech.stopSpeaking();
    state.phase = 'setup';
    state.transkript = '';
    state.interim = '';
    state.feedback = null;
    render();
  }

  // Cleanup beim Routenwechsel
  window.addEventListener('hashchange', () => {
    clearInterval2();
    if (state.recognizer) { try { state.recognizer.stop(); } catch {} }
    speech.stopSpeaking();
  }, { once: true });

  render();
  setActiveNav();
});

// ---------- Kolloquium ----------
router.on('#/probeklausur/kolloquium', () => {
  const state = {
    modul: 'kleist',
    started: false,
    history: [], // { role, text }
    finished: false,
    listening: false,
    recognizer: null,
    interim: '',
    loading: false,
    error: null
  };

  function render() {
    const modulOptions = Object.entries(modulTitel).map(([id, t]) =>
      `<option value="${id}" ${state.modul === id ? 'selected' : ''}>${escape(t)}</option>`).join('');

    let stage = '';
    if (!state.started) {
      stage = `
        <div class="stage">
          <h2 style="margin-top:0">Kolloquium starten</h2>
          <p>Du wählst ein Themengebiet. Der KI-Prüfer eröffnet das Gespräch und führt dich durch ca. 10 Minuten Dialog. Du kannst sprechen oder tippen.</p>
          <div class="field">
            <label for="modul-sel">Themengebiet</label>
            <select id="modul-sel">${modulOptions}</select>
          </div>
          <div class="section-actions">
            <button class="btn btn--lg" id="start">Gespräch beginnen</button>
          </div>
        </div>
      `;
    } else {
      const chatHtml = state.history.map(m => `
        <div class="chat-msg chat-msg--${m.role === 'model' ? 'model' : 'user'}">
          <div class="chat-msg-author">${m.role === 'model' ? 'Prüfer' : 'Lotte'}</div>
          <div>${escape(m.text)}</div>
        </div>
      `).join('');

      stage = `
        <div class="stage">
          <div class="stage-header">
            <div>
              <p class="page-eyebrow">${state.finished ? 'Abschluss' : 'Im Gespräch'}</p>
              <h2 style="margin:0">${escape(modulTitel[state.modul])}</h2>
            </div>
            ${!state.finished ? `<button class="btn btn--secondary" id="endgespraech">Gespräch beenden</button>` : ''}
          </div>
          <div class="chat" id="chat">${chatHtml}${state.loading ? `
            <div class="chat-msg chat-msg--model"><div class="chat-msg-author">Prüfer</div><div><div class="skeleton" style="width:80%"></div><div class="skeleton" style="width:60%"></div></div></div>
          ` : ''}</div>

          ${state.error ? `<div class="status-msg status-msg--err">${escape(state.error)}</div>` : ''}

          ${!state.finished ? `
            <div class="field" style="margin-top:16px">
              <label for="user-input">Deine Antwort</label>
              ${speech.isSpeechRecognitionSupported() ? `
                <textarea id="user-input" placeholder="Sprich oder tippe…">${escape(state.interim ? '[Aufnahme läuft …]' : '')}</textarea>
                <div class="section-actions" style="margin-top:8px">
                  <button class="btn ${state.listening ? 'btn--danger' : ''}" id="mic">${state.listening ? 'Stopp' : 'Mikro starten'}</button>
                  <button class="btn btn--secondary" id="send" ${state.loading ? 'disabled' : ''}>Senden</button>
                </div>
              ` : `
                <textarea id="user-input" placeholder="Tipp deine Antwort…"></textarea>
                <div class="section-actions" style="margin-top:8px">
                  <button class="btn btn--secondary" id="send" ${state.loading ? 'disabled' : ''}>Senden</button>
                </div>
              `}
            </div>
          ` : ''}
        </div>
      `;
    }

    app().innerHTML = `
      <section class="page">
        <header class="page-header">
          <p class="page-eyebrow"><a href="#/probeklausur" style="color:inherit;text-decoration:none">← Probeklausur</a></p>
          <h1>Kolloquium</h1>
        </header>
        ${stage}
      </section>
    `;
    bindEvents();
    // Auto-scroll chat
    const chat = document.getElementById('chat');
    if (chat) chat.scrollTop = chat.scrollHeight;
  }

  function bindEvents() {
    if (!state.started) {
      document.getElementById('modul-sel').onchange = (e) => { state.modul = e.target.value; };
      document.getElementById('start').onclick = async () => {
        try { await ensureApiKey(); } catch { return; }
        state.started = true;
        await advanceTurn();
      };
      return;
    }
    const sendBtn = document.getElementById('send');
    if (sendBtn) sendBtn.onclick = sendUserMessage;
    const mic = document.getElementById('mic');
    if (mic) mic.onclick = toggleMic;
    const end = document.getElementById('endgespraech');
    if (end) end.onclick = endGespraech;
  }

  async function advanceTurn() {
    state.loading = true;
    state.error = null;
    render();
    try {
      const reply = await gemini.kolloquiumTurn({
        modulTitel: modulTitel[state.modul],
        history: state.history
      });
      state.history.push({ role: 'model', text: reply });
      // Vorlesen
      speech.speak(reply.split('\n').slice(0, 3).join(' ').slice(0, 350));
      // Abschluss-Erkennung
      if (reply.startsWith('ABSCHLUSS:') || reply.includes('ABSCHLUSS:')) {
        state.finished = true;
        storage.saveAttempt({
          modul: state.modul,
          history: state.history,
          modus: 'kolloquium',
          feedback: reply
        });
      }
    } catch (err) {
      state.error = `Fehler: ${err.message}`;
    } finally {
      state.loading = false;
      render();
    }
  }

  async function sendUserMessage() {
    const ta = document.getElementById('user-input');
    const text = (ta?.value || '').trim();
    if (!text) return;
    if (state.recognizer) { try { state.recognizer.stop(); } catch {} state.recognizer = null; state.listening = false; }
    state.history.push({ role: 'user', text });
    ta.value = '';
    await advanceTurn();
  }

  function toggleMic() {
    if (state.listening) {
      try { state.recognizer?.stop(); } catch {}
      state.recognizer = null;
      state.listening = false;
      render();
      return;
    }
    try {
      state.recognizer = new speech.Recognizer({
        onResult: ({ transcript, interim }) => {
          const ta = document.getElementById('user-input');
          if (ta) {
            ta.value = transcript + interim;
          }
        },
        onError: (e) => { console.warn(e); },
        onEnd: () => { state.listening = false; render(); }
      });
      state.recognizer.start();
      state.listening = true;
      render();
    } catch (e) {
      state.error = e.message;
      render();
    }
  }

  async function endGespraech() {
    if (!confirm('Gespräch beenden und Bewertung anfordern?')) return;
    state.history.push({ role: 'user', text: '[Lotte möchte das Gespräch jetzt beenden. Bitte gib eine Abschlussbewertung mit Notenpunkten und Verbesserungsvorschlägen.]' });
    await advanceTurn();
    state.finished = true;
    render();
  }

  window.addEventListener('hashchange', () => {
    if (state.recognizer) { try { state.recognizer.stop(); } catch {} }
    speech.stopSpeaking();
  }, { once: true });

  render();
  setActiveNav();
});

// ---------- Bewertung ----------
router.on('#/bewertung', () => {
  const rasterHtml = bewertung.raster.map(b => {
    const bands = b.bandbreiten.map(bd => `
      <div class="raster-band">
        <div class="raster-band-points">${escape(bd.punkte)}</div>
        <div>${escape(bd.desc)}</div>
      </div>
    `).join('');
    return `
      <section class="raster-bereich">
        <div class="raster-bereich-head">
          <h3>${escape(b.bereich)}</h3>
          <span class="raster-gewicht">Gewicht ${escape(b.gewicht)}</span>
        </div>
        <p>${escape(b.desc)}</p>
        ${bands}
      </section>
    `;
  }).join('');

  const tippsHtml = bewertung.tipps.map(t => `
    <li><h4>${escape(t.titel)}</h4><p>${escape(t.text)}</p></li>
  `).join('');

  app().innerHTML = `
    <section class="page">
      <header class="page-header">
        <p class="page-eyebrow">Niedersachsen · gA · 2026</p>
        <h1>Bewertung & Tipps</h1>
        <p class="lead">Bewertungsraster für die mündliche Prüfung — und was du machen kannst, um in den oberen Bereich zu kommen.</p>
      </header>

      <h2>Bewertungsraster</h2>
      ${rasterHtml}

      <hr>

      <h2>Vortragstipps</h2>
      <ol class="tipps-list">${tippsHtml}</ol>
    </section>
  `;
  setActiveNav();
});

// ---------- Glossar ----------
router.on('#/glossar', () => {
  function render(filter = '') {
    const f = filter.toLowerCase().trim();
    const items = glossar
      .filter(g => !f || g.begriff.toLowerCase().includes(f) || g.def.toLowerCase().includes(f))
      .map(g => `
        <li class="glossar-item">
          <p class="glossar-begriff">${escape(g.begriff)}</p>
          <p class="glossar-def">${escape(g.def)}</p>
        </li>
      `).join('');

    app().innerHTML = `
      <section class="page">
        <header class="page-header">
          <p class="page-eyebrow">Fachbegriffe</p>
          <h1>Glossar</h1>
          <p class="lead">${glossar.length} Begriffe aus Drama, Erzähltheorie, Sprachwissenschaft. Such oder scroll.</p>
          <input class="glossar-search" type="search" placeholder="Suchen …" id="search" value="${escape(filter)}" autocomplete="off">
        </header>
        <ul class="glossar-list">${items || '<li class="empty-state">Keine Treffer.</li>'}</ul>
      </section>
    `;
    const s = document.getElementById('search');
    s.oninput = (e) => render(e.target.value);
    if (filter) {
      s.focus();
      const v = s.value;
      s.setSelectionRange(v.length, v.length);
    }
  }
  render();
  setActiveNav();
});

// ---------- Datenschutz ----------
router.on('#/datenschutz', () => {
  app().innerHTML = `
    <section class="page">
      <header class="page-header">
        <p class="page-eyebrow">Datenschutz</p>
        <h1>Was passiert mit deinen Daten?</h1>
      </header>

      <h3>Lokal im Browser</h3>
      <p>Diese Site speichert deinen Fortschritt (welche Abschnitte du gelesen hast, deine Probeklausur-Versuche) im <code>localStorage</code> deines Browsers. Diese Daten verlassen dein Gerät nicht — niemand außer dir kann sie sehen.</p>

      <h3>API-Key</h3>
      <p>Wenn du die Probeklausur nutzt, wird dein Gemini-API-Key ebenfalls im <code>localStorage</code> gespeichert. Das ist eine Komfort-Entscheidung — schränke deinen Key in <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">AI Studio</a> auf deine GitHub-Pages-Domain ein, damit er nicht missbraucht werden kann, falls jemand Zugriff auf deinen Browser hätte.</p>

      <h3>Was wird übertragen?</h3>
      <p>Bei der Probeklausur sendet die Site die Aufgabe und dein Transkript an Googles Gemini-API (unter Verwendung deines Keys). Google verarbeitet diese Daten gemäß seinen <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Datenschutzbestimmungen</a>. Es findet keine Übertragung an andere Drittanbieter statt.</p>

      <h3>Spracherkennung</h3>
      <p>Die Web Speech API deines Browsers wird verwendet. In Chrome läuft die Spracherkennung über Googles Server; in anderen Browsern kann es lokal laufen. Achte auf die Hinweise deines Browsers.</p>

      <h3>Keine Cookies, kein Tracking</h3>
      <p>Diese Site setzt keine Tracking-Cookies und sendet keine Daten an Analyse-Anbieter.</p>

      <div class="section-actions">
        <button class="btn btn--danger" id="wipe">Alle gespeicherten Daten löschen</button>
      </div>
    </section>
  `;
  document.getElementById('wipe').onclick = () => {
    if (confirm('Alle Daten (Fortschritt + API-Key) löschen?')) {
      storage.clearAllProgress();
      storage.clearApiKey();
      alert('Daten gelöscht.');
      router.navigate('#/');
    }
  };
  setActiveNav();
});

// Start
router.start();
