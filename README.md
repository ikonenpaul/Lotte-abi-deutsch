# Lotte · Deutsch-Abi 2026

Eine private, statische Lernsite für die mündliche Abiturprüfung Deutsch in Niedersachsen 2026 (gA-Niveau). Vier Pflichtmodule, eine interaktive Probeklausur mit KI-Prüfer.

## Inhalt

- **Modul 1**: Heinrich von Kleist — *Der zerbrochne Krug* (inkl. Variantfassung des 12. Auftritts)
- **Modul 2**: Irmgard Keun — *Das kunstseidene Mädchen*
- **Modul 3**: Sprache in politisch-gesellschaftlichen Verwendungszusammenhängen (Sprechakte, LTI, Newspeak, Framing, Sapir-Whorf)
- **Modul 4**: Sprachgebrauch reflektieren — Tendenzen der Gegenwartssprache (Wandel, Anglizismen, Jugendsprache, Mediensprache, Gendern, Kommunikationsmodelle)

Pro Modul: ~2000 Wörter Werksanalyse, 10 Prüfungsfragen mit Antwortskizzen, 15–20 Karteikarten.

Zusätzlich: mündliche Probeklausur (Vortrag- und Kolloquium-Modus mit Gemini), Niedersachsen-Bewertungsraster, Glossar (~30 Fachbegriffe).

## Tech

Vanilla HTML/CSS/JS — kein Build-Step. Single-Page-App mit Hashrouting. Spracherkennung via Web Speech API. KI-Prüfer via Gemini REST (`gemini-2.5-flash`).

```
lotte-abi-deutsch/
  index.html
  styles.css
  app.js
  data/        Inhalts-Module
  lib/         router, storage, speech, gemini
```

## Lokal starten

Da die Site ES-Modules nutzt, brauchst du einen lokalen HTTP-Server (file:// reicht nicht):

```bash
cd lotte-abi-deutsch
python3 -m http.server 8000
# oder: npx serve .
```

Dann im Browser: <http://localhost:8000>.

Empfohlener Browser für die Probeklausur: **Chrome** oder **Edge** (Web Speech API). Safari teilweise; Firefox kann nicht zuhören (nur Text-Eingabe als Fallback).

## Auf GitHub Pages deployen

```bash
cd lotte-abi-deutsch
git init
git add .
git commit -m "Initial commit: Lotte Deutsch-Abi"
git branch -M main
git remote add origin https://github.com/ikonenpaul/lotte-abi-deutsch.git
git push -u origin main
```

Dann auf GitHub:

1. Repo öffnen → **Settings** → **Pages**
2. Unter **Build and deployment** → **Source**: `Deploy from a branch`
3. Branch wählen: `main`, Folder: `/ (root)`, dann **Save**
4. Nach 1–2 Minuten ist die Site unter `https://ikonenpaul.github.io/lotte-abi-deutsch/` erreichbar.

## Gemini API-Key

Für die Probeklausur (Vortrag-/Kolloquium-Modus) braucht Lotte einen kostenlosen Google-AI-Studio-Key.

1. <https://aistudio.google.com/app/apikey> öffnen, mit Google-Konto einloggen
2. „Create API key" → Projekt wählen
3. Schlüssel kopieren (beginnt mit `AIza…`)
4. Beim ersten Klick auf eine Probeklausur-Funktion fragt die Site nach dem Key — einmal eingeben, fertig

**Sicherheitshinweis**: Im AI Studio den Key auf die GH-Pages-Domain (HTTP-Referrer) einschränken, damit niemand anderes mit dem Schlüssel Anfragen stellen kann.

Der Key bleibt im `localStorage` des Browsers — verlässt das Gerät nicht.

## Was Lotte als allererstes machen sollte

1. Site im Browser öffnen
2. Die vier Module in Ruhe durchklicken — jede gelesene Sektion lässt sich abhaken (der Fortschritt wird im Browser gespeichert)
3. Karteikarten pro Modul üben
4. Wenn der Stoff sitzt: API-Key holen und mit dem Vortrag-Modus eine zufällige Aufgabe ziehen — der KI-Prüfer gibt anschließend Notenpunkte und Verbesserungsvorschläge
5. Wenn das gut geht: Kolloquium-Modus für freies Q&A

## Datenschutz

Alles bleibt lokal im Browser (`localStorage`). Bei der Probeklausur gehen Aufgabe + Transkript an die Gemini-API (mit deinem eigenen Key); sonst nichts. Keine Cookies, kein Tracking.

## Lizenz

MIT — siehe `LICENSE`.

---

*Für Lotte. Du schaffst das.*
