// Gemini REST Client (gemini-2.5-flash, generateContent)
// CORS funktioniert direkt aus dem Browser.

import { getApiKey } from './storage.js';

const ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

export class GeminiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

async function call(contents, systemInstruction, { temperature = 0.7, maxOutputTokens = 2048 } = {}) {
  const key = getApiKey();
  if (!key) throw new GeminiError('Kein API-Key gespeichert. Bitte hinterlege ihn zuerst in den Einstellungen.', 0);

  const body = {
    contents,
    generationConfig: { temperature, maxOutputTokens }
  };
  if (systemInstruction) {
    body.systemInstruction = { parts: [{ text: systemInstruction }] };
  }

  let response;
  try {
    response = await fetch(`${ENDPOINT}?key=${encodeURIComponent(key)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
  } catch (err) {
    throw new GeminiError(`Netzwerkfehler: ${err.message}`, 0);
  }

  if (!response.ok) {
    let detail = '';
    try { detail = JSON.stringify(await response.json()); } catch {}
    throw new GeminiError(`API-Fehler ${response.status}: ${detail || response.statusText}`, response.status);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') || '';
  if (!text) throw new GeminiError('Leere Antwort vom Modell.', 0);
  return text;
}

// Vortrag bewerten
export async function bewerteVortrag({ aufgabe, transkript, modulTitel }) {
  const systemPrompt = `Du bist ein erfahrener Deutsch-Abiturprüfer in Niedersachsen, gA-Niveau, Jahrgang 2026. Du bewertest mündliche Vorträge.

Lotte hat soeben einen Vortrag gehalten zur Aufgabe:
"${aufgabe}"

Themengebiet: ${modulTitel}.

Hier ist das Transkript ihres Vortrags:
"""
${transkript}
"""

Bewerte freundlich aber fachlich präzise nach den drei Niedersachsen-Kriterien:
1. Fachliche Kompetenz (Inhalt, Tiefe, Belege)
2. Methodische Kompetenz (Struktur, Argumentation, Analyse vs. Wiedergabe)
3. Sprachlich-kommunikative Kompetenz (Fachsprache, Klarheit)

Gib am Schluss:
- Notenpunktzahl 0–15 mit kurzer Begründung
- 2 konkrete Verbesserungsvorschläge

Sprich Lotte direkt mit Namen an. Halte dich kurz (max. 350 Wörter). Wenn das Transkript sehr kurz oder offensichtlich abgeschnitten ist, sag das ehrlich und gib trotzdem eine Einschätzung.`;

  const contents = [{
    role: 'user',
    parts: [{ text: 'Bitte bewerte den Vortrag nach den oben definierten Kriterien.' }]
  }];

  return await call(contents, systemPrompt, { temperature: 0.5, maxOutputTokens: 1500 });
}

// Kolloquium — Multi-Turn-Dialog
// history: [{ role: 'user'|'model', text: '...' }, ...]
export async function kolloquiumTurn({ modulTitel, history }) {
  const systemPrompt = `Du bist ein freundlicher, fordernder Abiturprüfer in einem mündlichen Deutsch-Abitur in Niedersachsen, gA-Niveau, Jahrgang 2026. Die Schülerin heißt Lotte.

Themengebiet: ${modulTitel}.

Führe ein Kolloquium von ca. 8–12 Minuten. Stelle Fragen aus dem Themengebiet, hör zu, hak nach, transferiere zu verwandten Themen. Stell pro Turn eine konkrete Frage (max. 2 Sätze). Sei fachlich präzise — du darfst Lotte herausfordern. Sprich sie direkt mit Namen an.

Wenn das Gespräch gerade erst beginnt (history leer), eröffne mit einer ruhigen Einstiegsfrage.

Wenn die history mehrere Turns umfasst (~10 Frage-Antwort-Paare), beginne mit "ABSCHLUSS:" auf einer eigenen Zeile und gib dann eine Bewertung nach den drei Niedersachsen-Kriterien (fachlich, methodisch, sprachlich) plus Notenpunkte 0–15 und 2 Verbesserungsvorschlägen. Halte den Abschluss unter 300 Wörtern.`;

  const contents = history.map(h => ({
    role: h.role,
    parts: [{ text: h.text }]
  }));

  // Wenn die history leer ist, schicke einen leeren User-Trigger
  if (contents.length === 0) {
    contents.push({ role: 'user', parts: [{ text: '[Lotte ist bereit. Beginne das Kolloquium.]' }] });
  }

  return await call(contents, systemPrompt, { temperature: 0.7, maxOutputTokens: 1200 });
}
