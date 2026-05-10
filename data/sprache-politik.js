// Modul 3: Sprache in politisch-gesellschaftlichen Verwendungszusammenhängen
export const sprachePolitik = {
  id: 'sprache-politik',
  title: 'Sprache & Politik',
  author: 'Sprachwissenschaftliches Modul',
  subtitle: 'Sprechakte · Manipulation · Framing · Rhetorik',
  estMinutes: 80,
  sections: [
    {
      id: 'ueberblick',
      title: 'Worum geht es?',
      html: `
        <p>Sprache ist nicht neutral. Politische Reden, Werbung, Zeitungskommentare, Talkshow-Beiträge — alles Sprache, die wirken will. Sie informiert nicht nur, sie überzeugt, mobilisiert, dämpft, lenkt ab, schließt aus. Dieses Modul liefert das theoretische Werkzeug, mit dem du politische und gesellschaftliche Sprachverwendungen <em>analysieren</em> kannst — und dabei mehr siehst als die Oberfläche.</p>
        <p>Vier theoretische Bausteine sind kanonisch im niedersächsischen Abitur:</p>
        <ol>
          <li><strong>Sprechakttheorie</strong> (Austin/Searle): Was tut Sprache, wenn sie spricht?</li>
          <li><strong>Sprachkritik totalitärer Systeme</strong> (Klemperer LTI, Orwell Newspeak): Wie verändert Politik Sprache, und was passiert dann mit dem Denken?</li>
          <li><strong>Framing & politische Rhetorik</strong> (Lakoff, Wehling, Klassische Rhetorik): Wie steuern Wörter Wahrnehmung?</li>
          <li><strong>Sapir-Whorf-Hypothese</strong>: Bestimmt Sprache das Denken — und wenn ja, wie stark?</li>
        </ol>
        <p>Hinzu kommt das praktische Analyse-Werkzeug: ein Schema, mit dem du jeden politischen Text systematisch durcharbeiten kannst.</p>
      `
    },
    {
      id: 'sprechakte',
      title: 'Sprechakttheorie (Austin / Searle)',
      html: `
        <p>John L. Austin (<em>How to Do Things with Words</em>, 1962) und John R. Searle (<em>Speech Acts</em>, 1969) entwickelten die These, dass Sätze nicht nur Wahrheiten beschreiben, sondern <strong>Handlungen vollziehen</strong>. Wer sagt „Ich verspreche es", beschreibt kein Versprechen, sondern macht eines.</p>
        <h4>Drei Ebenen jedes Sprechakts</h4>
        <ul>
          <li><strong>Lokutionärer Akt</strong>: das, was wörtlich gesagt wird. Der Schall + der Satzinhalt. Beispiel: „Es zieht."</li>
          <li><strong>Illokutionärer Akt</strong>: das, was mit dem Sagen <em>getan</em> wird. Beispiel: „Es zieht." als Aufforderung, das Fenster zu schließen.</li>
          <li><strong>Perlokutionärer Akt</strong>: die Wirkung beim Hörer. Beispiel: der Hörer geht hin und schließt das Fenster — oder ärgert sich, oder ignoriert es.</li>
        </ul>
        <h4>Searles Klassifikation der Illokutionen</h4>
        <ul>
          <li><strong>Repräsentativa / Assertiva</strong>: Behauptungen, Beschreibungen. „Berlin liegt an der Spree."</li>
          <li><strong>Direktiva</strong>: Aufforderungen, Bitten, Befehle. „Schließen Sie das Fenster!"</li>
          <li><strong>Kommissiva</strong>: Selbstverpflichtungen, Versprechen. „Ich werde kommen."</li>
          <li><strong>Expressiva</strong>: Gefühlsäußerungen, Glückwünsche, Entschuldigungen. „Es tut mir leid."</li>
          <li><strong>Deklarativa</strong>: Akte, die durch das Sprechen Wirklichkeit schaffen — wenn der Sprecher die institutionelle Macht hat. „Hiermit eröffne ich die Sitzung." „Ich nehme dich zum Mann." „Ich erkläre den Krieg." Politisch hochrelevant: nur wer Macht hat, kann Deklarativa sprechen.</li>
        </ul>
        <h4>Indirekte Sprechakte</h4>
        <p>Ein häufiger Fall in politischer Rede: Was wörtlich gesagt wird, ist nicht das, was illokutionär gemeint ist. „Können Sie mir das Salz reichen?" ist wörtlich eine Frage nach Fähigkeiten, illokutionär eine Bitte. Politisch: „Wir sollten darüber nachdenken, ob…" — wörtlich Anregung, oft illokutionär Forderung. Die Analyse indirekter Sprechakte ist zentral für jede politische Sprachkritik.</p>
        <h4>Glücksbedingungen</h4>
        <p>Searle: Damit ein Sprechakt „glücken" kann, müssen bestimmte Bedingungen erfüllt sein. Ein Versprechen glückt nur, wenn der Sprecher es einhalten kann und will, der Hörer es als Versprechen versteht usw. Politisch: viele Versprechen sind „unglücklich", weil die Glücksbedingungen fehlen — und Wahlversprechen werden so analytisch greifbar.</p>
      `
    },
    {
      id: 'klemperer',
      title: 'Klemperer — LTI (Lingua Tertii Imperii)',
      html: `
        <p>Victor Klemperer (1881–1960) war Romanist in Dresden, Jude, von 1933 bis 1945 unter ständiger Lebensgefahr. Während der NS-Diktatur führte er Tagebuch und sammelte Beispiele für die Sprache des „Dritten Reiches". 1947 veröffentlichte er sein Buch <em>LTI — Notizbuch eines Philologen</em>. Es ist eine der wichtigsten Studien zur politischen Sprachverwendung im 20. Jahrhundert.</p>
        <h4>Klemperers Kernthese</h4>
        <p>„Worte können sein wie winzige Arsendosen: sie werden unbemerkt verschluckt, sie scheinen keine Wirkung zu tun, und nach einiger Zeit ist die Giftwirkung doch da." (Klemperer, LTI, Kap. „Die Sprache vergiftet")</p>
        <p>Seine These: Die NS-Sprache <strong>infiltriert das Denken</strong> auch derjenigen, die sie nicht teilen. Auch Klemperer selbst, als Verfolgter, ertappt sich beim Gebrauch von NS-Vokabular — was zeigt, wie tief die Durchdringung reicht.</p>
        <h4>Beispiele aus der LTI</h4>
        <ul>
          <li><strong>Superlative und Steigerungen</strong>: alles ist „einzigartig", „weltgeschichtlich", „gigantisch". Inflation des Großen.</li>
          <li><strong>„Volk" als Allzweckwort</strong>: „Volksgemeinschaft", „Volksgenosse", „völkisch", „Volksempfänger". Konstruktion eines homogenen Kollektivs.</li>
          <li><strong>Verwischung Mensch/Maschine</strong>: „organisieren", „ausschalten", „einsetzen" — vom Militär in den Alltag übertragen.</li>
          <li><strong>Pseudoreligiöse Begriffe</strong>: „Glaube", „heilig", „ewig", „Vorsehung". Übertragung sakralen Vokabulars auf Politik.</li>
          <li><strong>Ent- und Be-</strong>: „entjudet", „entmachtet", „bewährt", „bewähren". Vorsilben, die handlungsstark wirken.</li>
          <li><strong>Euphemismen für Verbrechen</strong>: „Endlösung", „Sonderbehandlung", „Umsiedlung". Sprachliche Verharmlosung des Massenmords.</li>
        </ul>
        <h4>Methodisch</h4>
        <p>Klemperer arbeitet philologisch: er sammelt, ordnet, analysiert. Sein Buch ist nicht polemisch, sondern wissenschaftlich-protokollarisch. Daraus seine bleibende Stärke: er liefert kein Pamphlet, sondern ein Lexikon der vergifteten Sprache.</p>
        <h4>Aktualität</h4>
        <p>Klemperer ist heute relevanter denn je — überall dort, wo Sprache zur Konstruktion von „Wir" gegen „die Anderen" eingesetzt wird, wo Euphemismen Gewalt verhüllen, wo Superlative Inflation des Pathos betreiben. Die Methodik der LTI ist auf jede politische Sprache anwendbar (auch auf demokratische Rede).</p>
      `
    },
    {
      id: 'orwell',
      title: 'Orwell — Politics and the English Language / Newspeak',
      html: `
        <p>George Orwell (1903–1950) verfasste 1946 den Essay <em>Politics and the English Language</em> und 1948 den Roman <em>Nineteen Eighty-Four</em> mit dem Anhang über „Newspeak". Beides Klassiker der Sprachkritik politischer Verwendung.</p>
        <h4>Politics and the English Language (1946) — die Hauptthesen</h4>
        <p>Orwell beschreibt den Verfall der politischen Sprache als Symptom für den Verfall des politischen Denkens. Konkrete Symptome:</p>
        <ul>
          <li><strong>Tote Metaphern</strong>: „Achillesferse", „Brennpunkt" — Bilder, die niemand mehr sieht.</li>
          <li><strong>Operatorenhülsen</strong>: „aufgrund der Tatsache, dass" statt „weil"; aufgeblähte Phrasen statt klarer Worte.</li>
          <li><strong>Prätentiöse Wortwahl</strong>: lateinisch-griechische Schwere statt einfacher angelsächsischer Wörter; Pseudo-Wissenschaftlichkeit.</li>
          <li><strong>Bedeutungslose Wörter</strong>: „demokratisch", „freiheitlich", „Frieden" — Begriffe, die je nach Sprecher alles oder nichts bedeuten.</li>
        </ul>
        <p>Berühmtes Resümee Orwells: <em>„Political language ... is designed to make lies sound truthful and murder respectable, and to give an appearance of solidity to pure wind."</em> (Politische Sprache soll Lügen wie Wahrheiten klingen lassen und Mord respektabel machen — und purem Wind den Anschein von Substanz geben.)</p>
        <h4>Sechs Schreibregeln Orwells</h4>
        <ol>
          <li>Nutze nie eine Metapher, die du oft im Druck siehst.</li>
          <li>Nutze nie ein langes Wort, wo ein kurzes reicht.</li>
          <li>Streiche jedes Wort, das du streichen kannst.</li>
          <li>Nutze nie das Passiv, wo das Aktiv möglich ist.</li>
          <li>Nutze keinen Fremdausdruck, wenn ein deutscher (oder englischer) Alltagsausdruck es tut.</li>
          <li>Brich jede dieser Regeln, bevor du etwas schlicht Barbarisches schreibst.</li>
        </ol>
        <p>Die letzte Regel ist wichtig: Orwell ist kein dogmatischer Sprachpurist, sondern Kritiker des Phrasengebrauchs.</p>
        <h4>Newspeak (Nineteen Eighty-Four)</h4>
        <p>Im Anhang zu <em>1984</em> entwirft Orwell eine totalitäre Kunstsprache. Prinzipien:</p>
        <ul>
          <li><strong>Reduktion des Vokabulars</strong>: Weniger Wörter = weniger Begriffe = weniger Denkmöglichkeiten. „Ungut" ersetzt „schlecht", „böse", „falsch", „gemein"…</li>
          <li><strong>Vereinfachung der Grammatik</strong>: Alle Verben enden auf „-ed", alle Pluralformen mit „-s". Vereinheitlichung als Kontrolle.</li>
          <li><strong>Zentrale Begriffe</strong>: „doublethink" (zwei widersprüchliche Gedanken gleichzeitig glauben), „crimethink" (Gedankenverbrechen), „bellyfeel" (intuitive Zustimmung ohne Reflexion).</li>
          <li><strong>Slogans</strong>: „War is Peace. Freedom is Slavery. Ignorance is Strength." — Paradoxe Identifikationen, die Denkblockaden installieren.</li>
        </ul>
        <p>Orwells Newspeak ist die literarisch zugespitzte Form von Klemperers LTI: was im NS-Deutschland real geschehen ist, wird im Roman zur konsequenten Dystopie. Beide Autoren teilen die Sorge: Wer die Sprache kontrolliert, kontrolliert das Denken.</p>
      `
    },
    {
      id: 'framing',
      title: 'Framing, Dog-Whistles, Nominalisierung',
      html: `
        <h4>Framing (George Lakoff, Elisabeth Wehling)</h4>
        <p>George Lakoff (Linguist, Berkeley) und Elisabeth Wehling (deutsche Forscherin, später umstritten wegen Honorarverhältnissen mit ARD) haben das Konzept des „Frames" für die politische Sprachanalyse populär gemacht.</p>
        <p><strong>Frame</strong>: ein gedankliches Deutungsmuster, das ein Wort automatisch aktiviert. Wer „Steuerlast" sagt, aktiviert den Frame: Steuern sind eine Belastung, etwas, was man abwerfen sollte. Wer „Steuerbeitrag" sagt, aktiviert: Steuern sind ein Beitrag zur Gemeinschaft. Beide Ausdrücke beschreiben dieselbe Sache — aber sie öffnen unterschiedliche Bewertungsräume.</p>
        <p>Lakoffs Pointe: Auch wer einen Frame bekämpft, indem er ihn negiert, verstärkt ihn. „Ich bin kein Verbrecher" (Nixon) aktiviert den Verbrecher-Frame und verstärkt die Assoziation, statt sie zu löschen. Politische Kommunikation muss daher <strong>eigene Frames</strong> setzen, nicht die der Gegner negieren.</p>
        <p>Beispiele politischer Frames:</p>
        <ul>
          <li><strong>Migration</strong>: „Flüchtlingsstrom" / „Migrationswelle" (Naturkatastrophen-Frame, Bedrohung) vs. „Schutzsuchende" (humanitärer Frame, Verantwortung).</li>
          <li><strong>Kriege</strong>: „Spezialoperation" vs. „Angriffskrieg" — semantische Schlachten um die Realitätsbeschreibung.</li>
          <li><strong>Klima</strong>: „Klimawandel" (neutral, fast organisch) vs. „Klimakrise" / „Klimakatastrophe" (alarmierend, handlungsfordernd).</li>
        </ul>
        <h4>Dog-Whistles</h4>
        <p>Ein „Dog-Whistle" („Hundepfeife") ist eine Botschaft, die für die Mehrheit harmlos klingt, aber für eine bestimmte Subgruppe ein klares Signal aussendet. Politische Beispiele:</p>
        <ul>
          <li>„Wir müssen unsere Kultur schützen" — für die Mehrheit ein neutraler Satz, für rechte Milieus ein Signal gegen Migration und Vielfalt.</li>
          <li>„Globalisten" — scheinbar wirtschaftspolitischer Begriff, im rechtsextremen Milieu antisemitischer Code.</li>
        </ul>
        <p>Dog-Whistles sind besonders relevant, weil sie <strong>plausible Deniability</strong> ermöglichen: Der Sprecher kann jederzeit sagen, er habe das nicht so gemeint — die Adressaten haben es aber sehr wohl verstanden.</p>
        <h4>Nominalisierung</h4>
        <p>Die Verwandlung von Verben oder Adjektiven in Substantive hat politische Effekte:</p>
        <ul>
          <li><strong>Akteurs-Tilgung</strong>: „Es kam zu Ausschreitungen" statt „Polizisten griffen Demonstranten an". Wer hat gehandelt? Steht nicht mehr da.</li>
          <li><strong>Verdinglichung</strong>: „die Sicherheitslage" statt „die Frage, wie sicher Menschen sich fühlen" — Prozesse werden zu Dingen, die scheinbar objektiv existieren.</li>
          <li><strong>Pseudo-Sachlichkeit</strong>: nominalisierte Sprache wirkt „neutral", verbirgt aber oft Wertungen und Akteure.</li>
        </ul>
      `
    },
    {
      id: 'rhetorik',
      title: 'Klassische Rhetorik & Manipulationstechniken',
      html: `
        <p>Die antike Rhetorik (Aristoteles, Cicero, Quintilian) bietet eine systematische Beschreibung sprachlicher Wirkungsmittel. Im Abitur sind besonders folgende relevant:</p>
        <h4>Wirkungsmittel</h4>
        <ul>
          <li><strong>Anapher</strong>: Wiederholung am Satzanfang. „Wir kämpfen für Freiheit. Wir kämpfen für Würde. Wir kämpfen für unsere Zukunft." Schafft Rhythmus, prägt sich ein.</li>
          <li><strong>Epipher</strong>: Wiederholung am Satzende. „Wir lieben dieses Land. Wir verteidigen dieses Land. Wir bauen dieses Land." Selteneres, aber kraftvolles Mittel.</li>
          <li><strong>Trikolon</strong>: Dreierfigur. „Veni, vidi, vici." „Liberté, égalité, fraternité." „Yes we can." Dreiergruppen wirken vollständig.</li>
          <li><strong>Klimax</strong>: Steigerung. „Erst leben, dann philosophieren, dann sterben."</li>
          <li><strong>Antithese</strong>: Gegensatz. „Nicht für die Schule, sondern für das Leben lernen wir."</li>
          <li><strong>Rhetorische Frage</strong>: Frage ohne Antworterwartung, die die Antwort suggeriert. „Wollen wir das wirklich zulassen?"</li>
          <li><strong>Hyperbel</strong>: Übertreibung. „Tausendfach gesagt." Schafft Dringlichkeit oder Komik.</li>
          <li><strong>Litotes</strong>: Untertreibung durch Verneinung des Gegenteils. „Nicht uneben." Häufig ironisch.</li>
          <li><strong>Metapher</strong>: Bildlicher Ausdruck. „Brennende Fragen", „politische Erdrutsche". Aktiviert Assoziationsfelder (siehe Lakoffs Frames).</li>
          <li><strong>Personifikation</strong>: Abstrakta werden zu handelnden Subjekten. „Die Wirtschaft straft."</li>
        </ul>
        <h4>Manipulationstechniken</h4>
        <ul>
          <li><strong>Euphemismus</strong>: beschönigende Ersetzung. „Kollateralschaden" statt „getötete Zivilisten". „Restrukturierung" statt „Massenentlassung".</li>
          <li><strong>Dysphemismus</strong>: abwertende Ersetzung. „Asyltourismus", „Sozialschmarotzer". Negativaufladung durch Wortwahl.</li>
          <li><strong>Suggestivfrage</strong>: Frage, die die Antwort vorgibt. „Sind Sie auch der Meinung, dass…?" Schafft sozialen Druck zur Zustimmung.</li>
          <li><strong>Strohmann (Strawman)</strong>: Position des Gegners verzerren, dann widerlegen. „Sie wollen also alle Grenzen abschaffen?" — wenn der Gegner nur eine kontrollierte Aufnahmepolitik fordert.</li>
          <li><strong>Whataboutism</strong>: Auf Kritik mit Gegenkritik antworten, um vom Thema abzulenken. „Was ist mit den Menschenrechten in Land X?"</li>
          <li><strong>Falsche Dichotomie</strong>: Komplexe Situation auf zwei Optionen reduzieren. „Wir oder das Chaos."</li>
          <li><strong>Ad hominem</strong>: Angriff auf die Person statt auf das Argument. „Was wissen denn Sie schon davon?"</li>
          <li><strong>Argumentum ad populum</strong>: Berufung auf die Masse. „Die Mehrheit ist unserer Meinung." Suggeriert Wahrheit aus Häufigkeit.</li>
          <li><strong>Slippery Slope</strong>: Dammbruch-Argument. „Wenn wir das zulassen, dann demnächst auch…"</li>
        </ul>
      `
    },
    {
      id: 'sapir-whorf',
      title: 'Sapir-Whorf-Hypothese',
      html: `
        <p>Edward Sapir (1884–1939) und Benjamin Lee Whorf (1897–1941), amerikanische Sprachwissenschaftler, formulierten die These vom <strong>linguistischen Relativitätsprinzip</strong>: Die Struktur einer Sprache beeinflusst die Wahrnehmung und das Denken ihrer Sprecher.</p>
        <h4>Starke vs. schwache Version</h4>
        <ul>
          <li><strong>Starke Version (linguistischer Determinismus)</strong>: Sprache <em>bestimmt</em> das Denken. Was eine Sprache nicht ausdrücken kann, kann der Sprecher nicht denken. — Diese Version gilt heute als widerlegt; sie wird kaum noch ernsthaft vertreten.</li>
          <li><strong>Schwache Version (linguistische Relativität)</strong>: Sprache <em>beeinflusst</em> das Denken — sie macht bestimmte Unterscheidungen leichter, andere schwerer. Diese Version ist empirisch gut gestützt.</li>
        </ul>
        <h4>Klassische Beispiele (kritisch zu betrachten!)</h4>
        <ul>
          <li><strong>Hopi-Sprache und Zeit</strong>: Whorf behauptete, die Hopi hätten kein lineares Zeitkonzept, weil ihre Verben keine Tempora wie europäische Sprachen markieren. — Spätere Forschung (Ekkehart Malotki, 1983) hat das widerlegt; die Hopi haben sehr wohl Zeitkonzepte.</li>
          <li><strong>Eskimo-Wörter für Schnee</strong>: Inuit-Sprachen sollen Dutzende von Schneewörtern haben. — Mythos: tatsächlich nicht mehr als andere Sprachen, wenn man Komposita ehrlich zählt.</li>
          <li><strong>Russisch und Blau</strong>: Russisch unterscheidet zwei Blautöne (синий / голубой) lexikalisch. Empirische Studien zeigen: russische Sprecher unterscheiden diese Töne minimal schneller als englische — schwacher Beleg für Relativität.</li>
          <li><strong>Genus und Personifikation</strong>: Spanische Sprecher beschreiben „die Brücke" (puente, maskulin) tendenziell mit „starken" Adjektiven, deutsche Sprecher (die Brücke, feminin) mit „eleganten". Genus färbt offenbar die Assoziation. Studie u. a. Lera Boroditsky.</li>
        </ul>
        <h4>Politische Relevanz</h4>
        <p>Wenn Sprache Wahrnehmung beeinflusst, dann hat politische Sprachwahl tatsächlich Wirkung — nicht weil sie das Denken determiniert, sondern weil sie Aufmerksamkeitsschwellen verschiebt. Frame-Theorie (Lakoff) ist eine moderne Anwendung der schwachen Sapir-Whorf-These.</p>
        <h4>Kritische Würdigung</h4>
        <p>Vorsicht mit der starken Version: Sie würde bedeuten, dass Übersetzung unmöglich wäre — was empirisch falsch ist. Menschen können sehr wohl Konzepte fassen, für die ihre Sprache kein Wort hat (z. B. Schadenfreude im Englischen — gelernt als Lehnwort). Sprache ist Werkzeug des Denkens, nicht Käfig.</p>
      `
    },
    {
      id: 'analyseschema',
      title: 'Analyseschema für politische Texte',
      html: `
        <p>So gehst du systematisch an einen politischen Text (Rede, Kommentar, Werbung, Talkshow-Ausschnitt) heran:</p>
        <h4>1. Einordnung</h4>
        <ul>
          <li>Wer spricht? (Person, Funktion, Partei, Medium)</li>
          <li>Wann und wo? (Anlass, Adressat)</li>
          <li>Welche Textsorte? (Rede, Pressemitteilung, Tweet, Werbung)</li>
          <li>Welches kommunikative Ziel? (informieren, überzeugen, mobilisieren, attackieren)</li>
        </ul>
        <h4>2. Inhaltliche Analyse</h4>
        <ul>
          <li>Was ist die Kernaussage?</li>
          <li>Welche Argumente werden vorgebracht? (logos)</li>
          <li>Welche Werte werden aufgerufen? (ethos)</li>
          <li>Welche Emotionen werden angesprochen? (pathos)</li>
        </ul>
        <h4>3. Sprachlich-rhetorische Analyse</h4>
        <ul>
          <li><strong>Wortwahl</strong>: Welche Frames werden gesetzt? Welche Schlüsselwörter? Welche Euphemismen oder Dysphemismen? Welche Personalpronomen (Wir/Sie)?</li>
          <li><strong>Satzbau</strong>: kurze parolenhafte Sätze oder lange argumentierende Perioden? Hypotaxe oder Parataxe? Aktiv oder Passiv (Akteurs-Verschleierung)?</li>
          <li><strong>Rhetorische Figuren</strong>: Anapher, Trikolon, Antithese, rhetorische Frage, Metapher etc. Funktion jeder Figur benennen.</li>
          <li><strong>Sprechakte</strong>: Welche illokutionären Akte überwiegen? Direktiva (Aufrufe)? Repräsentativa (Behauptungen)? Kommissiva (Versprechen)? Indirekte Sprechakte?</li>
        </ul>
        <h4>4. Kontext und Wirkung</h4>
        <ul>
          <li>Wie passt der Text in den politischen Diskurs?</li>
          <li>Wer wird ein- und wer ausgeschlossen?</li>
          <li>Welche Wirkung ist intendiert, welche tatsächlich beim Adressaten zu erwarten?</li>
          <li>Welche Manipulationstechniken erkennbar?</li>
        </ul>
        <h4>5. Bewertung</h4>
        <ul>
          <li>Begründete Stellungnahme: Ist der Text rhetorisch gelungen, manipulativ, sachlich?</li>
          <li>Vergleich mit anderen Texten (synchron oder diachron) wenn möglich.</li>
          <li>Eigene Position klar formulieren, dabei kritische Distanz halten.</li>
        </ul>
      `
    },
    {
      id: 'beispieltexte',
      title: 'Musteranalyse: Brandt 1969',
      html: `
        <h4>Textauszug</h4>
        <blockquote>„Wir wollen mehr Demokratie wagen. Wir werden unsere Arbeitsweise öffnen und dem kritischen Bedürfnis nach Information Genüge tun." — Willy Brandt, Regierungserklärung, 28. Oktober 1969</blockquote>
        <h4>Analyse</h4>
        <p><strong>Einordnung</strong>: Antrittsrede des ersten sozialdemokratischen Bundeskanzlers nach 20 Jahren CDU-Regierung. Hochsymbolischer Anlass: Politikwechsel, Generationenwechsel, Aufbruchsstimmung der späten 60er.</p>
        <p><strong>Kernaussage</strong>: Demokratisierung der Politik, Transparenz, Bürgernähe.</p>
        <p><strong>Wortwahl und Frames</strong>: „Mehr Demokratie wagen" — Frame: Demokratie ist riskant, Wagnis. Damit zwei Botschaften: a) Demokratie braucht Mut, b) der bisherige Zustand war demokratisch unzureichend (implizite Kritik an der Vorgängerregierung). „Wagen" ist eine Verbwahl mit Bewegungspotenzial — gegen den Stillstand der Adenauer/Erhard/Kiesinger-Ära.</p>
        <p><strong>Pronomen</strong>: „Wir" — kollektives Ich der Regierung; gleichzeitig Inklusion der Bürger (im Geiste der Aussage).</p>
        <p><strong>Sprechakt</strong>: Kommissivum (Versprechen, Selbstverpflichtung). Brandt verspricht, mehr Transparenz herzustellen — bindet sich politisch.</p>
        <p><strong>Rhetorische Figuren</strong>: Parallelismus zwischen erstem und zweitem Satz („Wir wollen / Wir werden"). Antithese implizit: Status Quo vs. neue Praxis.</p>
        <p><strong>Wirkung</strong>: Der Satz „Mehr Demokratie wagen" wurde zur geflügelten Parole und prägt das politische Selbstverständnis der sozialliberalen Koalition. Beispiel für eine illokutionär gelungene politische Sprachhandlung — sie schafft Identifikation, signalisiert Aufbruch, definiert Programm.</p>
      `
    },
    {
      id: 'beispieltexte2',
      title: 'Musteranalyse: Werbeslogan',
      html: `
        <h4>Textauszug</h4>
        <blockquote>„Geiz ist geil." — Werbekampagne der Elektronikkette Saturn, 2002–2010</blockquote>
        <h4>Analyse</h4>
        <p><strong>Einordnung</strong>: Werbeslogan, mediale Großkampagne, Konsumkontext. Kommunikatives Ziel: Markentreue, Verkaufssteigerung über Identifikation.</p>
        <p><strong>Provokation der Wertumkehrung</strong>: „Geiz" gilt traditionell als Untugend (eine der sieben Todsünden). „Geil" ist umgangssprachlich „sehr gut", ursprünglich sexuell konnotiert. Die Verbindung beider Wörter erzeugt einen kalkulierten Tabubruch.</p>
        <p><strong>Sprechakt</strong>: Repräsentativum mit performativer Kraft — die Behauptung „Geiz ist geil" soll zur Norm werden. Indirekt ein Direktivum: Sei geizig (kauf bei uns).</p>
        <p><strong>Rhetorische Figur</strong>: Stabreim (Geiz – geil), prägnante Kürze, Präsens absolut. Slogan-Optimum.</p>
        <p><strong>Frame</strong>: Konsum-Frame umgepolt. Statt „Sparsamkeit ist eine Tugend" oder „gute Qualität hat ihren Preis" wird „Sparsamkeit als Lifestyle-Coolness" gerahmt. Geiz wird positiv konnotiert.</p>
        <p><strong>Gesellschaftliche Resonanz</strong>: Der Spruch wurde Teil der Alltagssprache, wurde aber auch kritisiert — u. a. weil er eine Verachtung von Lohnarbeit und Wertschöpfung normalisierte. Beispiel dafür, wie Werbesprache in den allgemeinen Diskurs eingreift.</p>
        <p><strong>Wirkung</strong>: Wirtschaftlich erfolgreich, kulturell prägend, ethisch umstritten. Klassischer Fall politisch-gesellschaftlicher Sprachverwendung im weiteren Sinn (denn auch Werbung ist gesellschaftliche Sprache).</p>
      `
    },
    {
      id: 'fragen',
      title: '10 Beispiel-Prüfungsfragen mit Antwortskizzen',
      html: `
        <ol>
          <li><strong>Erläutern Sie die drei Ebenen eines Sprechakts nach Austin/Searle anhand eines selbstgewählten Beispiels.</strong>
            <p class="answer">Lokutionär (das Gesagte: „Es zieht"), illokutionär (die Handlung: Aufforderung zum Schließen), perlokutionär (die Wirkung: der Hörer schließt das Fenster). Beispiel präzise durchspielen, indirekten Sprechakt thematisieren.</p>
          </li>
          <li><strong>Was sind Klemperers Hauptthesen in der LTI? Geben Sie konkrete Beispiele.</strong>
            <p class="answer">Sprache als „Arsendosen" — Vergiftung des Denkens durch Worte. Methodik: philologische Sammlung. Beispiele: Superlative, „Volk"-Komposita, Pseudo-Religiöses, Euphemismen für Verbrechen („Endlösung"). Aktualität: Methodik auf jede politische Sprache übertragbar.</p>
          </li>
          <li><strong>Beschreiben Sie Orwells Konzept der Newspeak.</strong>
            <p class="answer">Totalitäre Kunstsprache aus 1984. Reduktion des Vokabulars (weniger Wörter = weniger Denkbarkeit), grammatische Vereinheitlichung, Schlüsselbegriffe (doublethink, crimethink, bellyfeel), paradoxe Slogans. Literarische Zuspitzung von Klemperers LTI-Beobachtungen.</p>
          </li>
          <li><strong>Was versteht Lakoff unter einem „Frame"? Geben Sie ein politisches Beispiel.</strong>
            <p class="answer">Frame = gedankliches Deutungsmuster, das ein Wort automatisch aktiviert. Beispiel: „Steuerlast" (Belastung) vs. „Steuerbeitrag" (Gemeinschaftssache). Pointe: Wer einen Frame negiert, verstärkt ihn. Gegenstrategie: eigene Frames setzen.</p>
          </li>
          <li><strong>Was ist die Sapir-Whorf-Hypothese? Welche Version ist heute haltbar?</strong>
            <p class="answer">Linguistisches Relativitätsprinzip: Sprache beeinflusst Denken. Starke Version (Determinismus) gilt als widerlegt. Schwache Version (Relativität) empirisch gestützt: Sprache verschiebt Aufmerksamkeitsschwellen, erleichtert/erschwert bestimmte Unterscheidungen. Beispiele: Russisch und Blautöne, Genus und Personifikation. Mythen (Eskimo-Wörter, Hopi-Zeit) kritisch zu sehen.</p>
          </li>
          <li><strong>Erläutern Sie sechs Manipulationstechniken in der politischen Sprache.</strong>
            <p class="answer">Euphemismus, Dysphemismus, Suggestivfrage, Strohmann, Whataboutism, Slippery Slope, falsche Dichotomie, ad hominem, ad populum. Sechs auswählen, jeweils Definition + politisches Beispiel.</p>
          </li>
          <li><strong>Welche Funktion hat eine Anapher in einer politischen Rede? Beispiel.</strong>
            <p class="answer">Wiederholung am Satzanfang. Funktionen: Rhythmus, Einprägsamkeit, Steigerung, kollektive Mobilisierung. Beispiel: Obamas „Yes we can" Reden, oder Brandt „Wir wollen / Wir werden". Wirkung: kanalisiert Emotionen, schafft Refraineffekt.</p>
          </li>
          <li><strong>Was ist ein Dog-Whistle? Warum ist er politisch besonders problematisch?</strong>
            <p class="answer">Botschaft, die für die Mehrheit harmlos klingt, für eine Subgruppe ein klares Signal sendet. Beispiele: „unsere Kultur schützen", „Globalisten". Problematisch wegen plausible deniability: Sprecher kann jederzeit abstreiten, die Adressaten haben aber verstanden. Demokratisch-diskursiv: schwer zu widerlegen, weil die intendierte Bedeutung formal nicht gesagt wurde.</p>
          </li>
          <li><strong>Analysieren Sie den Slogan „Geiz ist geil" mit den Werkzeugen dieses Moduls.</strong>
            <p class="answer">Stabreim, Provokation/Wertumkehrung (Tabubruch), Frame-Polung (Geiz positiv), Sprechakt: indirektes Direktivum (Sei geizig — kauf bei uns), Slogan-Optimum (Kürze, Präsens, prägnant). Wirkung: Sprachprägung, ethische Kritik, kulturelle Einbürgerung des Werbevokabulars.</p>
          </li>
          <li><strong>Vergleichen Sie Klemperer und Orwell. Was haben beide gemeinsam, worin unterscheiden sie sich?</strong>
            <p class="answer">Gemeinsam: Sorge um die Manipulation des Denkens durch Sprache; Sprachkontrolle = Gedankenkontrolle; politische Verantwortung des Sprechens. Unterschiede: Klemperer = empirisch-philologisch (gelebte NS-Diktatur, Sammlung), Orwell = essayistisch-fiktional (Politics-Essay 1946 + Dystopie 1984). Klemperer beobachtet konkret, Orwell extrapoliert. Beide fundieren bis heute jede Sprachkritik politischer Verwendung.</p>
          </li>
        </ol>
      `
    }
  ],
  flashcards: [
    { q: 'Was ist ein lokutionärer Akt?', a: 'Der wörtliche Inhalt einer Äußerung — was tatsächlich gesagt wird (Schall + Satzbedeutung).' },
    { q: 'Was ist ein illokutionärer Akt?', a: 'Was mit der Äußerung getan wird (z. B. Versprechen, Befehl, Behauptung). Die kommunikative Handlung.' },
    { q: 'Was ist ein perlokutionärer Akt?', a: 'Die Wirkung der Äußerung beim Hörer (z. B. Hörer schließt Fenster, fühlt sich beleidigt, wählt anders).' },
    { q: 'Nenne Searles fünf Klassen von Illokutionen.', a: 'Repräsentativa (Behauptungen), Direktiva (Aufforderungen), Kommissiva (Versprechen), Expressiva (Gefühle), Deklarativa (Wirklichkeit-schaffende Akte).' },
    { q: 'Wer hat die LTI verfasst?', a: 'Victor Klemperer — Romanist, Jude, Tagebuch während der NS-Zeit. Buch erschien 1947.' },
    { q: 'Was ist Klemperers Arsendosen-Bild?', a: '„Worte können sein wie winzige Arsendosen" — Sprache vergiftet das Denken unbemerkt, auch bei denen, die sie nicht teilen.' },
    { q: 'Drei sprachliche Merkmale der LTI?', a: 'Inflation der Superlative, „Volk"-Komposita (Volksgenosse, völkisch), Euphemismen für Verbrechen (Endlösung, Sonderbehandlung).' },
    { q: 'Was sagt Orwells Essay „Politics and the English Language" 1946?', a: 'Verfall der politischen Sprache spiegelt Verfall des Denkens. Tote Metaphern, prätentiöse Wörter, Phrasen, bedeutungslose Begriffe — alles dient der Verschleierung.' },
    { q: 'Was ist Newspeak?', a: 'Totalitäre Kunstsprache aus Orwells „1984". Reduziert das Vokabular, vereinheitlicht die Grammatik. Ziel: Reduktion der Denkmöglichkeiten.' },
    { q: 'Was ist „doublethink"?', a: 'Newspeak-Begriff: zwei sich widersprechende Gedanken gleichzeitig glauben, ohne den Widerspruch wahrzunehmen.' },
    { q: 'Was ist ein Frame nach Lakoff?', a: 'Gedankliches Deutungsmuster, das ein Wort automatisch aktiviert. „Steuerlast" aktiviert Belastungs-Frame, „Steuerbeitrag" Gemeinschafts-Frame.' },
    { q: 'Warum ist Negieren eines Frames problematisch?', a: 'Es verstärkt den Frame. „Ich bin kein Verbrecher" aktiviert den Verbrecher-Frame. Gegenstrategie: eigene Frames setzen.' },
    { q: 'Was ist ein Dog-Whistle?', a: 'Botschaft, die für die Mehrheit harmlos klingt, für eine Subgruppe ein klares Signal sendet. Plausible deniability für den Sprecher.' },
    { q: 'Was ist ein Euphemismus? Beispiel.', a: 'Beschönigende Ersetzung. „Kollateralschaden" statt „getötete Zivilisten", „Restrukturierung" statt „Massenentlassung".' },
    { q: 'Was ist ein Strohmann-Argument?', a: 'Position des Gegners verzerren, dann widerlegen. Klassische Manipulationstechnik — angreifbar, weil Verzerrung nachweisbar.' },
    { q: 'Was ist die Sapir-Whorf-Hypothese?', a: 'Linguistisches Relativitätsprinzip: Sprache beeinflusst Denken. Starke Version (Determinismus) widerlegt, schwache Version (Relativität) empirisch gestützt.' },
    { q: 'Welche bekannten Beispiele sind Mythen?', a: 'Eskimo-Wörter für Schnee (überschätzt), Hopi-Zeit (Whorf widerlegt durch Malotki). Vorsicht mit populären Beispielen.' },
    { q: 'Drei rhetorische Figuren mit Beispiel?', a: 'Anapher („Wir kämpfen für…"), Trikolon („Veni, vidi, vici"), Antithese („Nicht für die Schule, sondern für das Leben…").' },
    { q: 'Was ist eine Nominalisierung politisch problematisch?', a: 'Akteurs-Tilgung („Es kam zu Ausschreitungen" — wer hat angefangen?), Verdinglichung von Prozessen, Pseudo-Sachlichkeit.' },
    { q: 'Was ist ein Deklarativum nach Searle?', a: 'Sprechakt, der durch das Sagen Wirklichkeit schafft — wenn der Sprecher institutionelle Macht hat. „Hiermit eröffne ich…", „Ich erkläre den Krieg." Politisch hochrelevant.' }
  ]
};
