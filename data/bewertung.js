// Niedersachsen-Bewertungsraster für mündliche Abiturprüfung gA + Vortragstipps
export const bewertung = {
  raster: [
    {
      bereich: 'Fachliche Kompetenz',
      gewicht: '~40%',
      desc: 'Inhaltliche Substanz, Sachkenntnis, Belege am Text, Differenzierung der Aussagen.',
      bandbreiten: [
        { punkte: '13–15', desc: 'Umfassende, präzise und differenzierte Sachkenntnis. Belege sicher zitiert. Forschungsperspektiven oder Kontroversen einbezogen. Eigenständige Akzentsetzung.' },
        { punkte: '10–12', desc: 'Gute Sachkenntnis, durchgehend belegt. Wesentliche Aspekte erfasst, vereinzelte Differenzierungen.' },
        { punkte: '7–9', desc: 'Solide Grundkenntnisse, Belege ungenau oder lückenhaft. Wenige Differenzierungen.' },
        { punkte: '4–6', desc: 'Teilweise Sachkenntnis, häufig nur Wiedergabe ohne Beleg. Wesentliche Aspekte fehlen.' },
        { punkte: '1–3', desc: 'Sachkenntnis stark lückenhaft, Belege weitgehend fehlend.' },
        { punkte: '0', desc: 'Keine fachliche Substanz erkennbar.' }
      ]
    },
    {
      bereich: 'Methodische Kompetenz',
      gewicht: '~30%',
      desc: 'Strukturierung des Vortrags, Argumentation, Differenzierung Analyse vs. Wiedergabe, Eingehen auf Aufgabe.',
      bandbreiten: [
        { punkte: '13–15', desc: 'Klare, eigenständige Struktur. Argumente folgerichtig aufgebaut, gegeneinander gewichtet. Analyse deutlich von Wiedergabe getrennt. Aufgabenstellung präzise getroffen.' },
        { punkte: '10–12', desc: 'Erkennbare Struktur, schlüssige Argumentation. Analyse überwiegt Wiedergabe. Aufgabe erfasst.' },
        { punkte: '7–9', desc: 'Struktur erkennbar, Argumentation teils linear, Analyse und Wiedergabe gemischt.' },
        { punkte: '4–6', desc: 'Strukturarme Aneinanderreihung. Aufgabenstellung nur teilweise getroffen.' },
        { punkte: '1–3', desc: 'Keine erkennbare Struktur, Wiedergabe statt Analyse.' },
        { punkte: '0', desc: 'Aufgabe verfehlt.' }
      ]
    },
    {
      bereich: 'Sprachlich-kommunikative Kompetenz',
      gewicht: '~30%',
      desc: 'Fachsprache, sprachliche Präzision, Klarheit, Souveränität im Gespräch (Kolloquium).',
      bandbreiten: [
        { punkte: '13–15', desc: 'Sicherer, differenzierter Gebrauch der Fachsprache. Sprachlich präzise und nuanciert. Im Kolloquium souveräne, dialogische Reaktion auf Nachfragen.' },
        { punkte: '10–12', desc: 'Fachsprache überwiegend sicher. Sprachlich klar, vereinzelte Unschärfen. Reagiert angemessen auf Nachfragen.' },
        { punkte: '7–9', desc: 'Fachsprache teilweise unsicher. Sprache verständlich, aber nicht präzise. Reagiert mit Verzögerung.' },
        { punkte: '4–6', desc: 'Fachsprache lückenhaft. Sprachlich umständlich oder ungenau.' },
        { punkte: '1–3', desc: 'Fachsprache kaum vorhanden. Sprachlich unverständlich oder fehlerhaft.' },
        { punkte: '0', desc: 'Keine sprachliche Verständigung möglich.' }
      ]
    }
  ],
  notenpunkte: [
    { punkte: 15, note: 'sehr gut +', prozent: '95–100%' },
    { punkte: 14, note: 'sehr gut', prozent: '90–94%' },
    { punkte: 13, note: 'sehr gut –', prozent: '85–89%' },
    { punkte: 12, note: 'gut +', prozent: '80–84%' },
    { punkte: 11, note: 'gut', prozent: '75–79%' },
    { punkte: 10, note: 'gut –', prozent: '70–74%' },
    { punkte: 9, note: 'befriedigend +', prozent: '65–69%' },
    { punkte: 8, note: 'befriedigend', prozent: '60–64%' },
    { punkte: 7, note: 'befriedigend –', prozent: '55–59%' },
    { punkte: 6, note: 'ausreichend +', prozent: '50–54%' },
    { punkte: 5, note: 'ausreichend', prozent: '45–49%' },
    { punkte: 4, note: 'ausreichend –', prozent: '40–44%' },
    { punkte: 3, note: 'mangelhaft +', prozent: '34–39%' },
    { punkte: 2, note: 'mangelhaft', prozent: '27–33%' },
    { punkte: 1, note: 'mangelhaft –', prozent: '20–26%' },
    { punkte: 0, note: 'ungenügend', prozent: '0–19%' }
  ],
  tipps: [
    {
      titel: 'Drei Hauptpunkte am Anfang nennen',
      text: 'Klassiker. Eröffne deinen Vortrag nicht mit „Also ich mache jetzt mal…", sondern mit einer kurzen Strukturansage: „Ich gehe in drei Schritten vor: Erstens…, zweitens…, drittens…". Das gibt dem Prüfer Orientierung und dir innere Sicherheit.'
    },
    {
      titel: 'Belege am Text — immer mit Stelle',
      text: 'Behauptungen ohne Belege sind im Abitur tödlich. „Adam ist eine komische Figur" — okay, aber: „Im 1. Auftritt versucht er, mit einer Stolpergeschichte vom Tatort abzulenken — das ist die erste Selbstentlarvung." Konkrete Stelle, konkretes Phänomen. Wenn du keine Seitenzahl mehr weißt: Auftritt/Kapitel reicht.'
    },
    {
      titel: 'Analyse statt Wiedergabe',
      text: 'Nicht: „Doris zieht nach Berlin und trifft viele Männer." Sondern: „Der Wechsel von der mittleren Stadt nach Berlin markiert eine Verschiebung von provinzieller Sexualökonomie zu großstädtischer Anonymität — Doris wird vom Objekt eines Chefs zum Subjekt einer eigenen, prekären Strategie." Analyse heißt: Phänomen + Funktion + Bedeutung.'
    },
    {
      titel: 'Fachsprache, aber nicht aufgesetzt',
      text: 'Fachbegriffe (analytisches Drama, Frame, Sprechakt) verwenden — aber nur, wenn du sie wirklich beherrschst. Lieber „Adam belastet Ruprecht, um sich selbst zu schützen" als „Adam projiziert seine Schuld in einer transferenz-pathologischen Verschiebung". Klarheit schlägt Schaumschlag.'
    },
    {
      titel: 'Ruhe und Pausen',
      text: 'Sprich langsamer als du denkst. Eine kurze Pause vor einem wichtigen Punkt wirkt souverän, nicht unsicher. Wenn du den Faden verlierst: kurz schweigen, kurz neu strukturieren, weiter. Niemand erwartet einen druckreifen Monolog.'
    },
    {
      titel: 'Kontroversen und Forschungsmeinungen einbeziehen',
      text: 'Wenn du erwähnst, dass eine Frage in der Forschung umstritten ist (Lustspiel vs. Tragikomödie, Neue Frau Lesart, Sapir-Whorf stark vs. schwach), zeigst du metareflexive Kompetenz. Nicht jede Aussage zu einer Position machen — Differenzierung ist eine eigene Leistung.'
    },
    {
      titel: 'Auf Nachfragen reagieren — nicht ausweichen',
      text: 'Im Kolloquium kommen Nachfragen. Wenn du etwas nicht weißt: ehrlich sagen, aber Anschluss suchen („Den Forschungsstand zu X kenne ich nicht im Detail, aber strukturell würde ich vermuten…"). Ausweichen wirkt schlechter als ein ehrliches „weiß ich nicht".'
    },
    {
      titel: 'Vergleich und Transfer',
      text: 'Im Abitur stark gewertet: Bezüge zwischen Modulen herstellen. Doris\' Stadtbeschreibungen für den blinden Brenner kann man mit Lakoffs Frame-Theorie analysieren. Adams Lügen sind perlokutionär (auf Walter zielend) misslungen. Solche Querverbindungen zeigen Tiefe.'
    },
    {
      titel: 'Eigenständige Position klar formulieren',
      text: 'Wenn die Frage es zulässt: trau dich, eine eigene Position zu vertreten. Aber: argumentieren, nicht nur behaupten. „Ich tendiere zur Tragikomödie-Lesart, weil…" — und dann zwei Belege.'
    },
    {
      titel: 'Schluss — kein Ausplätschern',
      text: 'Beende den Vortrag mit einer kurzen Zusammenfassung oder einer pointierten Schlussfrage. Nicht: „Ja, das war es eigentlich auch schon." Sondern: „Festzuhalten ist also: A, B, C. Eine offene Frage bleibt: D."'
    }
  ]
};
