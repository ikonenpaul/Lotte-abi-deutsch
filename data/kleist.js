// Modul 1: Heinrich von Kleist — Der zerbrochne Krug
export const kleist = {
  id: 'kleist',
  title: 'Der zerbrochne Krug',
  author: 'Heinrich von Kleist',
  subtitle: 'Lustspiel · Einakter · 1808 · Analytisches Drama',
  estMinutes: 90,
  sections: [
    {
      id: 'ueberblick',
      title: 'Werksüberblick',
      html: `
        <p>Heinrich von Kleist verfasste <em>Der zerbrochne Krug</em> zwischen 1802 und 1806; die Uraufführung leitete Goethe am 2. März 1808 in Weimar — und sie geriet zum Skandal: Goethe ließ den Einakter in drei Akte zerteilen, was die straffe analytische Bauweise zerstörte. Das Publikum quittierte den Abend mit Pfiffen. Kleist bezeichnete den Vorgang später als „den schwersten Schlag" gegen sein Selbstgefühl als Dramatiker.</p>
        <p>Das Stück ist formal ein <strong>analytisches Drama</strong> in der Tradition von Sophokles' <em>König Ödipus</em>: Die eigentliche Tat — der zerbrochene Krug, das nächtliche Eindringen in Eves Kammer — liegt vor Beginn der Handlung. Was auf der Bühne geschieht, ist die juristische Aufdeckung. Der Richter, der den Fall verhandelt, ist zugleich der Täter; er muss sein eigenes Verbrechen vor seinem Vorgesetzten verbergen, ohne dass der Prozess platzt. Daraus entsteht jene berühmte Doppelbödigkeit: Komik für das Publikum, Verzweiflung für die Figur.</p>
        <p>Inspirationsquelle war ein Kupferstich von Le Veau nach Debucourt, den Kleist bei einem Aufenthalt in der Schweiz sah: ein junger Mann verteidigt sich, eine Frau zeigt einen zerbrochenen Krug vor, ein Richter sitzt erschöpft daneben. Kleist verlegte die Szene in die holländische Provinz und machte aus dem Stoff ein Stück über Justizmissbrauch, Selbsttäuschung und sexuelle Gewalt — verpackt in die Form eines Lustspiels.</p>
        <p>Inhaltlich verbindet Kleist Aufklärung (Vernunftrecht, Justizkritik) mit Vorromantik (Subjektive Wahrheit, das Unbewusste). Der Adam-Mythos im Hintergrund — der Sündenfall — verleiht dem niederländischen Dorfschwank metaphysische Tiefe.</p>
      `
    },
    {
      id: 'inhalt',
      title: 'Inhalt — Auftritt für Auftritt',
      html: `
        <p>Das Stück besteht aus 13 Auftritten in einem einzigen Akt. Ort: die Gerichtsstube in Huisum, einem holländischen Dorf bei Utrecht. Zeit: ein einziger Vormittag.</p>
        <h4>1. Auftritt</h4>
        <p>Adam, der Dorfrichter, sitzt verbunden, mit zerschundenem Gesicht, beim Gerichtsschreiber Licht. Er erfindet eine Stolpergeschichte. Licht meldet, dass Gerichtsrat Walter aus Utrecht zur Revision angereist sei und schon vor der Tür stehe. Adam ist sichtlich panisch.</p>
        <h4>2. Auftritt</h4>
        <p>Walter tritt ein. Er hat in Holla bereits den dortigen Richter wegen Veruntreuung suspendiert — der habe sich erhängt. Adam wird noch nervöser; man hört, dass auch seine Perücke verschwunden ist.</p>
        <h4>3.–6. Auftritt</h4>
        <p>Frau Marthe Rull tritt mit ihrer Tochter Eve, dem Bauern Veit Tümpel und dessen Sohn Ruprecht auf. Marthe klagt: In der Nacht sei jemand in Eves Kammer gewesen und habe beim fluchtartigen Verlassen einen wertvollen Krug zerschlagen — einen Krug, an dem sie die niederländische Geschichte ablesen konnte (Übergabe Karls V. an Philipp II.). Ruprecht beschuldigt Eve der Untreue; Eve schweigt.</p>
        <h4>7. Auftritt</h4>
        <p>Walter mahnt formgerechte Verhandlung an. Adam beginnt das Verhör — sichtlich bemüht, Ruprecht zu belasten und sich selbst zu schützen. Eve weicht aus, weicht aus, weicht aus.</p>
        <h4>8.–9. Auftritt</h4>
        <p>Ruprecht schildert seine Version: Er habe gegen elf Uhr einen Mann aus Eves Kammer fliehen sehen, ihm mit einer Türklinke nachgeschlagen, ihn aber nicht erkannt. Der Mann sei über den Zaun geflohen. Adam versucht den Verdacht auf einen entlaufenen Schuhflicker namens Lebrecht zu lenken.</p>
        <h4>10.–11. Auftritt</h4>
        <p>Frau Brigitte tritt auf. Sie habe Spuren verfolgt: einen Pferdefuß-ähnlichen Abdruck — und am Ende der Spur Adams Perücke gefunden, hängend in einem Spalierdraht beim Weinstock vor Marthes Haus. Adam windet sich, behauptet, der Teufel selbst sei am Werk gewesen.</p>
        <h4>12. Auftritt (Schlüsselszene)</h4>
        <p>Walter durchschaut das Manöver und drängt auf Aufklärung. Eve, von Adam zuvor erpresst (er hatte ihr eingeredet, Ruprecht würde sonst nach Ostindien zwangsverschickt), bricht ihr Schweigen und enthüllt: <strong>Adam selbst war es</strong>, der in der Nacht in ihre Kammer gekommen ist, mit dem Vorwand eines gefälschten Attests, das Ruprecht von der Musterung befreien sollte — und der versucht hat, sich sexuell an ihr zu vergehen. Adam flieht.</p>
        <h4>13. Auftritt</h4>
        <p>Walter ordnet Adams Suspendierung an, beruhigt Eve und Ruprecht. Frau Marthe will trotz allem nach Utrecht reisen, um den Krug ersetzt zu bekommen — die berühmt-bittere Schlusspointe.</p>
      `
    },
    {
      id: 'variant',
      title: 'Variantfassung des 12. Auftritts',
      html: `
        <p>Kleist hat <strong>zwei Fassungen</strong> des entscheidenden 12. Auftritts geschrieben. Die längere, ursprüngliche Fassung — meist „Variant" genannt — wurde aus Gründen der Spielbarkeit gekürzt. Beide Fassungen sind prüfungsrelevant in Niedersachsen.</p>
        <p><strong>Die Kurzfassung</strong> (Bühnenfassung): Eve enthüllt Adams Tat in knappen, fast atemlosen Sätzen. Walter handelt rasch, das Stück endet mit Marthes Krug-Reise nach Utrecht. Die Komik überwiegt; Eves Trauma bleibt im Subtext.</p>
        <p><strong>Der Variant</strong>: Hier erhält Eve eine deutlich längere Rede. Sie schildert ausführlich, wie Adam sie unter Druck gesetzt hatte — mit dem fingierten ostindischen Attest, mit der Drohung, Ruprecht würde im Krieg gegen Engländer und Javaner umkommen. Sie spricht von ihrer Angst, ihrer Verzweiflung, dem Gewissenskonflikt. Walter erläutert daraufhin in einer staatsbürgerlichen Belehrung, dass das Attest ohnehin gefälscht gewesen wäre und Ruprecht nie hätte ausgehoben werden können. Eve reagiert mit einer skeptischen Frage nach dem Vertrauen in den Staat.</p>
        <p><strong>Was unterscheidet die Fassungen interpretatorisch?</strong></p>
        <ul>
          <li><strong>Komik vs. Tragik</strong>: Die Bühnenfassung kippt schneller in den heiteren Schluss; der Variant öffnet einen tragischen Raum für Eve.</li>
          <li><strong>Politische Schärfe</strong>: Im Variant wird die Kritik am Staat (Aushebung, Krieg in den Kolonien) explizit; Eves abschließende Skepsis stellt Walters Vertrauensapell in Frage.</li>
          <li><strong>Eves Subjektivität</strong>: Erst der Variant gibt ihr eine Stimme im juristischen wie psychologischen Sinn. Die Kurzfassung lässt sie weitgehend Objekt der männlichen Verhandlung bleiben.</li>
          <li><strong>Justizkritik</strong>: Beide Fassungen kritisieren Adam, doch der Variant zielt darüber hinaus auf das System: ein Staat, der seine Untertanen zwingt, Vertrauen in eine Justiz zu haben, die selbst korrupt sein kann.</li>
        </ul>
        <p>Für eine Abiturfrage „Welche Fassung ist die ‚bessere'?" gibt es keine richtige Antwort, sondern nur die argumentative Auseinandersetzung. Tipp: nicht in „besser/schlechter" denken, sondern Funktionen vergleichen.</p>
      `
    },
    {
      id: 'aufbau',
      title: 'Aufbau & Form',
      html: `
        <p><strong>Analytisches Drama</strong>: Die schuldhafte Tat liegt vor dem Stück; die Handlung deckt sie nur auf. Kleist treibt diese Form auf die Spitze — der Richter <em>ist</em> der Täter, die Aufdeckung gleich der Selbstentlarvung.</p>
        <p><strong>Einakter</strong> mit 13 Auftritten; klassische Gliederung in Exposition (1.–2.), Steigerung (3.–7.), Höhepunkt/Peripetie (10.–11. mit Brigittes Auftritt), Katastrophe (12., Adams Flucht) und Lösung (13.).</p>
        <p><strong>Drei aristotelische Einheiten</strong> sind streng eingehalten: <em>Ort</em> (Gerichtsstube), <em>Zeit</em> (ein Vormittag), <em>Handlung</em> (der Krug-Prozess). Das wirkt wie eine Hommage an die Klassik, aber Kleist nutzt diese Geschlossenheit, um den Druck auf Adam zu maximieren — der Ort wird zur Falle.</p>
        <p><strong>Vers</strong>: Blankvers (fünfhebiger Jambus, ungereimt) — die Form der Klassik. Die Spannung zwischen erhabener Form und niederländisch-dörflichem Sujet erzeugt einen Großteil der Komik.</p>
        <p><strong>Sprache</strong>: Adam spricht assoziativ, springend, mit komischen Vergleichen (Ziegenbock, Pferdefuß) — er „verplappert" sich permanent. Walter spricht knapp, kontrolliert. Eve schweigt lange — ihr Schweigen ist eigene Sprache. Marthe ist umständlich-rechthaberisch (siehe ihre lange Krug-Beschreibung im 7. Auftritt).</p>
        <p><strong>Gattungsfrage</strong>: Kleist nennt es <em>Lustspiel</em>. Tatsächlich liegt das Komische auf der Hand — eine Verwechslungs- und Entlarvungskomödie. Doch das Vergehen Adams (versuchte Vergewaltigung), Eves stummes Leid und die Justizkritik öffnen eine ernste Dimension. Die Forschung spricht heute meist von einem <em>Lustspiel mit tragischen Untertönen</em> oder einer <em>tragikomischen Konstellation</em>.</p>
      `
    },
    {
      id: 'figuren',
      title: 'Figuren',
      html: `
        <h4>Adam</h4>
        <p>Dorfrichter in Huisum. Sein Name verweist auf den biblischen Sündenfall — er ist der „erste Mensch", der „fällt". Tatsächlich ist er aus dem Bett seiner Begierde gefallen, hat einen Klumpfuß, der an den Pferdefuß des Teufels erinnert, und stolpert durchs Stück mit Wunden und Lügen. Adam ist nicht klug, sondern listig; nicht böse aus Prinzip, sondern feige aus Schwäche. Er belastet Ruprecht ohne Skrupel, bedrängt Eve, manipuliert das Verfahren — und entlarvt sich dabei selbst durch jeden seiner Versuche, die Spur zu verwischen. Komische Figur, aber auch eine Studie über Machtmissbrauch im Kleinen.</p>
        <h4>Walter</h4>
        <p>Gerichtsrat aus Utrecht, Inspektor der Justiz. Aufklärer, vernunftorientiert, zurückhaltend. Er duldet Adams Manöver eine Weile, um den Fall vollständig aufzudecken. Sein Vertrauen in das Verfahren ist groß — manche Lesarten halten ihm im Variant Naivität vor (Eves Skepsis am Ende richtet sich gegen ihn).</p>
        <h4>Licht</h4>
        <p>Gerichtsschreiber, Adams Konkurrent ums Amt. Seine Zwischenbemerkungen entlarven Adam halb spöttisch, halb opportunistisch. Wer „Licht" trägt, bringt Verborgenes ans Tageslicht — der Name spricht.</p>
        <h4>Eve</h4>
        <p>Junge Frau, Marthes Tochter, mit Ruprecht verlobt. Opfer von Adams Übergriff. Ihr Schweigen über weite Strecken ist nicht Einverständnis, sondern Schutz: Adam hat sie erpresst (gefälschtes Attest), und sie fürchtet um Ruprechts Leben. Erst unter Walters Druck spricht sie — in der Bühnenfassung knapp, im Variant ausführlich. Eve wird in feministischen Lesarten als die eigentliche Heldin gelesen: die einzige Figur, die im moralisch klaren Sinn handelt — durch Schweigen wie durch Reden.</p>
        <h4>Frau Marthe Rull</h4>
        <p>Eves Mutter. Ihre seitenlange Krug-Beschreibung (7. Auftritt) ist berühmt: ein historisches Tableau Hollands, übertragen auf ein Stück Geschirr. Sie verkörpert das kleinbürgerliche Beharren auf Eigentum — am Ende reist sie nach Utrecht wegen des Krugs, nicht wegen ihrer Tochter. Komische Figur mit bitterem Beigeschmack.</p>
        <h4>Ruprecht Tümpel</h4>
        <p>Eves Verlobter, Bauernsohn. Hitzkopf, eifersüchtig, aber im Kern aufrichtig. Er hat in der Nacht den Fliehenden geschlagen, glaubt zunächst an Eves Untreue. Am Ende versöhnt mit Eve.</p>
        <h4>Veit Tümpel</h4>
        <p>Ruprechts Vater. Vermittelnde, ältere Stimme; misstraut der Aufgeregtheit aller Beteiligten.</p>
        <h4>Frau Brigitte</h4>
        <p>Nachbarin. Folgt der Spur und liefert mit ihrem Fund (Adams Perücke im Spalier) den entscheidenden Indizienbeweis. Ihre Schilderung — der Mann sei über den Zaun „mit einem Pferdefuß" gesprungen — bringt die Teufels-Anspielung ins Spiel, die Adam selbst dann pseudoplausibel ausmalt.</p>
      `
    },
    {
      id: 'themen',
      title: 'Themen & Motive',
      html: `
        <h4>Gerechtigkeit und ihr Gegenteil</h4>
        <p>Das Stück ist eine Justizsatire. Der Richter ist der Täter, das Verfahren wird zur Selbstaufdeckung. Kleist zeigt, wie nah Recht und Unrecht beieinander liegen, wenn die Institutionen von einzelnen Personen abhängen. Walters Auftauchen als überregionale Kontrolle ist die einzige Rettung — aber auch sie funktioniert nur, weil Eve am Ende spricht.</p>
        <h4>Schuld und Selbsttäuschung</h4>
        <p>Adam belügt nicht nur die anderen, er belügt sich selbst. Seine erfundenen Stolpergeschichten, seine Teufels-Erklärung — er glaubt fast selbst daran. Kleist zeichnet das psychologische Porträt eines Menschen, der unfähig ist, sich seine Tat einzugestehen.</p>
        <h4>Macht und Abhängigkeit</h4>
        <p>Adam nutzt seine Stellung als Richter, seine Männlichkeit, sein Wissen um Eves Schwäche (die Sorge um Ruprecht), um sie zu bedrängen. Eve ist juristisch, sozial und emotional in einer dreifachen Abhängigkeit. Das Stück zeigt, wie Macht im Privaten missbraucht wird, ohne dass es spektakulär wirkt — der Alltag der Gewalt.</p>
        <h4>Der Krug als Symbol</h4>
        <p>Frau Marthes Krug zeigt die Übergabe der spanischen Niederlande durch Karl V. an Philipp II. — also einen Akt der politischen Übertragung von Macht. Der Krug ist zerbrochen wie diese Ordnung; Marthe versucht, ihn restauriert zu bekommen, was unmöglich ist. Symbolisch steht der Krug auch für Eves „Unversehrtheit" (im traditionellen, bedrängenden Sinn) — eine Lesart, die der Text durch das Bildmotiv des „beschädigten Gefäßes" stützt, gegen die er sich aber durch Eves überlebende Würde auch sperrt.</p>
        <h4>Sündenfall-Allegorie</h4>
        <p>Adam, Eve, ein verbotener Apfel-Moment in der Kammer — die Anspielung auf Genesis 3 ist offen. Doch Kleist invertiert: nicht Eve verführt, Adam bedrängt. Die Schuld liegt eindeutig beim biblischen „ersten Mann". Der Apfel-Mythos wird zur Maskerade einer Vergewaltigung. Eve heißt nicht „die Verführerin", sondern „die Lebende" (hebr. <em>chawwa</em>) — die, die überlebt.</p>
        <h4>Wahrheit und Sprache</h4>
        <p>Wie kommt die Wahrheit ans Licht? Nicht durch Adams Worte (die lügen), sondern durch Spuren (Perücke, Wunde, Klumpfuß) und schließlich durch Eves Aussage. Sprache wird hier zur trügerischen Oberfläche; die Wahrheit ist materiell und körperlich.</p>
      `
    },
    {
      id: 'kontext',
      title: 'Historischer & literarischer Kontext',
      html: `
        <p>Kleist (1777–1811) lebt zwischen den Epochen: <strong>Aufklärung</strong> als Erbe, <strong>Klassik</strong> als zeitgenössisches Ideal, <strong>Romantik</strong> in Aufbruch. Sein Werk lässt sich keiner dieser Strömungen vollständig zuordnen — er steht quer.</p>
        <p>Politisch fällt das Stück in die Zeit der napoleonischen Kriege (1806 Niederlage Preußens bei Jena/Auerstedt). Kleist hat das Trauma der Niederlage tief erlebt; seine spätere Schrift <em>Über das Marionettentheater</em> und Stücke wie <em>Die Hermannsschlacht</em> sind Reaktionen darauf. Im <em>Krug</em> ist die politische Dimension subtiler: Justiz, Vertrauen in den Staat, koloniale Aushebung (Variant) — alles Themen einer Gesellschaft, die nach Halt sucht.</p>
        <p>Die <strong>Uraufführung 1808 in Weimar</strong> unter Goethes Regie scheiterte. Goethe verstand das straff gebaute analytische Drama nicht; er zerteilte es in drei Akte und ließ langsam spielen. Die Forschung hat dies vielfach diskutiert — manche sehen darin eine prinzipielle Differenz zwischen Goethes klassischem Maß und Kleists abrupter, „moderner" Schreibweise. Erst spätere Aufführungen (insbesondere im 20. Jahrhundert) brachten das Stück zur Geltung.</p>
        <p><strong>Vorbilder</strong>: Sophokles' <em>König Ödipus</em> (analytisches Drama, Richter ist Täter); Molières Komödien (Typenkomik, Ständekonflikt); Shakespeares <em>Maß für Maß</em> (Justiz-Lust-Konflikt).</p>
        <p><strong>Wirkungsgeschichte</strong>: Heute kanonischer Schullektüre-Text, regelmäßig auf den Bühnen. Berühmte Inszenierungen u. a. von Peter Stein. Die feministische Kleist-Forschung (z. B. Gerhard Neumann, Helga Gallas) hat in den letzten Jahrzehnten Eves Rolle neu beleuchtet.</p>
      `
    },
    {
      id: 'interpretation',
      title: 'Interpretationsansätze',
      html: `
        <h4>1. Komik vs. Tragik — die Gattungsfrage</h4>
        <p>Ist <em>Der zerbrochne Krug</em> ein Lustspiel? Auf der Oberfläche ja: Verwechslungen, Wortwitz, eine selbstentlarvende Hauptfigur, ein versöhnlicher Schluss. Doch Eves Trauma, die Justizkritik und der Variant zeigen tragische Tiefen. Eine moderne Lesart spricht von <em>Tragikomödie</em>: das Lachen wird im Hals stecken bleiben, wenn man bedenkt, was Eve durchgemacht hat. Argumente für jede Position lassen sich am Text belegen.</p>
        <h4>2. Justizkritik — strukturell oder personell?</h4>
        <p>Kritisiert Kleist nur Adam (eine korrupte Einzelfigur) oder das System? Walter steht für die funktionierende Kontrolle „von oben"; das spricht für eine personelle Lesart. Andererseits: Hätte Eve nicht gesprochen, wäre Adam vielleicht durchgekommen — und wie viele Adams sitzen in anderen Dörfern? Im Variant kritisiert Eve Walters Staatsvertrauen explizit. Beide Lesarten sind belegbar.</p>
        <h4>3. Eves Schweigen — feministische Lesart</h4>
        <p>Helga Gallas und andere haben gezeigt: Eves Schweigen ist nicht passiv, sondern Strategie. Sie schützt Ruprecht, dessen Leben (so glaubt sie) auf dem Spiel steht. Sie ist die einzige Figur, die durchgängig moralisch handelt — Adam aus Eigeninteresse, Walter aus Pflicht, Marthe aus Habgier, Ruprecht aus Eifersucht. Eves Sprache ist eine andere: erst Schweigen als Schutz, dann gezieltes Reden als Befreiung. Im Variant tritt diese Lesart deutlicher hervor.</p>
        <h4>4. Sündenfall-Inversion</h4>
        <p>Kleist nutzt den Genesis-Mythos, dreht ihn aber um: Nicht Eve verführt Adam, sondern Adam (alias der Dorfrichter) bedrängt Eve. Der Sündenfall ist hier männlich, nicht weiblich. Diese Inversion lässt sich als feministisch-aufklärerische Korrektur des biblischen Mythos lesen.</p>
        <h4>5. Sprachskepsis und Wahrheit</h4>
        <p>Kleist gilt als früher Sprachskeptiker. Im <em>Krug</em> zeigt er, dass Sprache lügen kann — doch die Wahrheit hat eine eigene Logik (Spuren, Körper, Geständnis). Diese Spannung zwischen Sprachmisstrauen und Wahrheitssuche ist typisch kleistisch (vgl. <em>Michael Kohlhaas</em>, <em>Marquise von O.</em>).</p>
      `
    },
    {
      id: 'zitate',
      title: 'Schlüsselzitate',
      html: `
        <p>Wenige, aber sitzen müssen sie. Kontextlernen empfehlen sich; bloße Zitate ohne Einordnung bringen wenig.</p>
        <ol>
          <li><strong>Adam zu Licht (1. Auftritt)</strong>: „Ich bin im Bett gestolpert." — Erste Lüge, Tonangabe für den ganzen Auftritt.</li>
          <li><strong>Walter (2. Auftritt)</strong>: „Es muss in jedem Dinge Ordnung sein." — Aufklärerisches Credo, das die Verhandlung tragen wird.</li>
          <li><strong>Frau Marthe (7. Auftritt)</strong>: „Den Krug, denkt Ihr nicht, würd' ich ersetzen?" — Die ganze ökonomische Logik in einem Satz; bittere Schluss-Pointe vorbereitet.</li>
          <li><strong>Marthe (Krug-Beschreibung)</strong>: „Hier auf dem Loch, wo jetzo nichts zu sehen, / Stand die Übergab' der Niederlande / Durch Kaiser Karl den fünften an Philipp." — Symbolische Aufladung des zerbrochenen Krugs als zerbrochene Ordnung.</li>
          <li><strong>Eve (Schweigen)</strong>: „Ich kann nichts sagen." — Ihr leitmotivisches Schweigen; Schutzmechanismus, kein Geständnis.</li>
          <li><strong>Adam (10. Auftritt)</strong>: „Der Teufel hier in Huisum spukt." — Verzweifelte Ablenkungslüge.</li>
          <li><strong>Brigitte (11. Auftritt)</strong>: „Da hing die Perücke." — Indizienbeweis; Sprache der Spuren statt der Worte.</li>
          <li><strong>Eve im Variant (12. Auftritt)</strong>: „Wenn Ihr's nicht selbst glaubt, was Ihr lehrt, wie sollen wir's glauben?" — Die staatsbürgerliche Kernfrage; Skepsis gegen Walters Vertrauensapell.</li>
          <li><strong>Walter (13. Auftritt)</strong>: „Geht, geht. Ihr habt das Recht." — Die juristische Klärung — aber kein Trost für Eve.</li>
          <li><strong>Marthe (Schlussreplik)</strong>: „Wo find' ich denn in Utrecht den Gerichtsrat?" — Ihre einzige Sorge bleibt der Krug. Die letzte komische Note ist die bitterste.</li>
        </ol>
      `
    },
    {
      id: 'fragen',
      title: '10 Beispiel-Prüfungsfragen mit Antwortskizzen',
      html: `
        <ol>
          <li><strong>Inwiefern ist <em>Der zerbrochne Krug</em> ein analytisches Drama? Beziehen Sie sich auf konkrete Stellen.</strong>
            <p class="answer">Tat liegt vor Beginn (Adam in Eves Kammer); Bühnenhandlung = Aufdeckung. Sophokles als Vorbild. Doppelung Richter/Täter zugespitzt. Belege: 1. Auftritt (Adams Wunden bereits da), 12. Auftritt (Aufdeckung als Klimax). Funktion: Spannung verlagert sich von „Wer war's?" zu „Wann fliegt er auf?".</p>
          </li>
          <li><strong>Vergleichen Sie Bühnenfassung und Variant des 12. Auftritts. Welche Funktion hat Eves erweiterte Rede im Variant?</strong>
            <p class="answer">Variant gibt Eve Stimme, macht psychologisches Gewicht ihres Traumas explizit. Dazu staatskritische Dimension (Aushebung, Krieg). Schluss-Skepsis gegen Walter. Bühnenfassung kippt schneller in heiteren Schluss. Funktion Variant: tragischer Raum, Politisierung, weibliche Subjektivität.</p>
          </li>
          <li><strong>Analysieren Sie die Figur Adams. Welche Komik-Mechanismen wirken bei ihm?</strong>
            <p class="answer">Selbstentlarvung durch verstrickte Lügen; Wortspiele und Versprecher; körperliche Komik (Wunden, Klumpfuß, Perücke); Verwechslung von Täter und Richter. Aber: keine reine Komik — sein Vergehen ist eine versuchte sexuelle Gewalt. Komik mit Tragik unterfüttert.</p>
          </li>
          <li><strong>Welche Rolle spielt Eve im Stück? Diskutieren Sie eine feministische Lesart.</strong>
            <p class="answer">Opfer Adams, aber moralische Heldin. Schweigen als Schutz (Sorge um Ruprecht), nicht Mitschuld. Aktive Befreiung durch Geständnis. Inversion des Genesis-Mythos: nicht Verführerin, sondern Bedrängte. Variant gibt ihr eigene Stimme. Gallas: Eve als ethisches Zentrum.</p>
          </li>
          <li><strong>Welche Symbolik trägt der Krug?</strong>
            <p class="answer">Politisch: Übergabe der Niederlande Karl V. an Philipp II. — zerbrochene historische Ordnung. Persönlich: Eves Unversehrtheit (im Sinne des Bedrängenden, nicht des Textes selbst). Komisch: lächerliches Streitobjekt, das Marthes Verlust ihrer Tochter überschattet (Schlussreplik).</p>
          </li>
          <li><strong>Wie funktioniert Kleists Justizkritik? Personell oder strukturell?</strong>
            <p class="answer">Personell: Adam als korrupte Einzelfigur, Walter als rettende Kontrolle. Strukturell: ohne Eves Mut wäre Adam durchgekommen; Variant kritisiert Walters Staatsvertrauen. Beide Lesarten belegbar — Argumentation entscheidend, nicht „die richtige" Antwort.</p>
          </li>
          <li><strong>Warum scheiterte die Uraufführung 1808? Was sagt das über Kleists Position zwischen Klassik und Moderne?</strong>
            <p class="answer">Goethe zerteilte Einakter in drei Akte → analytische Bauweise zerstört. Differenz: klassisches Maß vs. Kleists abrupte Sprache und straffer Bau. Kleist als Schwellenfigur — Vorromantik, früher Sprachskeptizismus, „moderne" Psychologie.</p>
          </li>
          <li><strong>Welche Funktion haben Frau Brigittes Spuren-Schilderungen im 11. Auftritt?</strong>
            <p class="answer">Indizienbeweis ohne direkte Zeugenaussage; Sprache der Spuren (Perücke, Klumpfuß-Abdruck) als Gegengewicht zu Adams Lügen. Teufel-Anspielung wird ironisch gebrochen — Adam ist selbst der „Teufel mit Pferdefuß". Vorbereitung der finalen Aufdeckung.</p>
          </li>
          <li><strong>Inwiefern ist die Sündenfall-Allegorie zentral oder nur dekorativ?</strong>
            <p class="answer">Namen Adam/Eve, Bedrängungsszene als invertierter Sündenfall, Schlange/Teufel-Anspielungen — strukturell zentral. Aber Inversion: Schuld liegt beim männlichen Adam. Lesart: aufklärerische Korrektur des biblischen Mythos. Kein bloßes Beiwerk.</p>
          </li>
          <li><strong>Diskutieren Sie die Gattungsfrage: Lustspiel oder Tragikomödie?</strong>
            <p class="answer">Pro Lustspiel: Komik, versöhnlicher Schluss, Selbstentlarvung. Pro Tragikomödie: Eves Trauma, ungelöster Schmerz, Marthes bittere Schlussreplik, Justizkritik. Heutige Forschung tendiert zu „Lustspiel mit tragischen Untertönen". Argumentativ entscheiden, am Text belegen.</p>
          </li>
        </ol>
      `
    }
  ],
  flashcards: [
    { q: 'Was ist ein analytisches Drama?', a: 'Drama, in dem die schuldhafte Tat vor Beginn liegt und im Laufe der Handlung aufgedeckt wird. Vorbild: Sophokles, König Ödipus.' },
    { q: 'Wann wurde Der zerbrochne Krug uraufgeführt?', a: '2. März 1808 in Weimar, unter Goethes Regie. Aufführung scheiterte.' },
    { q: 'Warum scheiterte die Uraufführung?', a: 'Goethe zerteilte den Einakter in drei Akte, zerstörte damit die analytische Bauweise. Publikum reagierte mit Pfiffen.' },
    { q: 'Wer ist Adam?', a: 'Dorfrichter in Huisum. Zugleich der Täter, den er verhandeln muss. Komische Hauptfigur, aber moralisch korrupt.' },
    { q: 'Welche Anspielung trägt der Name „Adam"?', a: 'Auf den biblischen Sündenfall (Genesis 3). Adam = der erste, der „fällt".' },
    { q: 'Wer ist Walter?', a: 'Gerichtsrat aus Utrecht, Inspektor. Aufklärer, vernunftorientiert. Sorgt für die Aufdeckung.' },
    { q: 'Wer ist Eve?', a: 'Junge Frau, mit Ruprecht verlobt, Opfer von Adams Übergriff. Schweigt lange, um Ruprecht zu schützen.' },
    { q: 'Wer ist Frau Marthe Rull?', a: 'Eves Mutter, Klägerin im Krug-Prozess. Verkörpert kleinbürgerliches Beharren auf Eigentum.' },
    { q: 'Wer ist Frau Brigitte?', a: 'Nachbarin. Liefert mit der gefundenen Perücke und der Spur den Indizienbeweis.' },
    { q: 'Was ist die Pointe der Schlussreplik?', a: 'Marthe will nach Utrecht — wegen des Krugs. Ihre Tochter, der eigentliche Skandal, wird in der Sorge um Eigentum überlagert.' },
    { q: 'Worin unterscheidet sich der Variant des 12. Auftritts von der Bühnenfassung?', a: 'Längere Eve-Rede, explizite Staatskritik (Aushebung, Krieg), Eves abschließende Skepsis gegen Walter. Tragischer Raum.' },
    { q: 'Welche dramatischen Einheiten wahrt Kleist?', a: 'Alle drei aristotelischen: Ort (Gerichtsstube), Zeit (ein Vormittag), Handlung (Krug-Prozess).' },
    { q: 'In welchem Vers ist das Stück verfasst?', a: 'Blankvers — fünfhebiger Jambus, ungereimt. Form der Klassik.' },
    { q: 'Welche Symbolik trägt der Krug?', a: 'Politisch: zerbrochene niederländische Ordnung (Karl V. → Philipp II.). Persönlich: Eves Unversehrtheit (in der bedrängenden Lesart). Komisch-bitter: Marthes Streitobjekt.' },
    { q: 'Wie ist die Sündenfall-Allegorie zu verstehen?', a: 'Inversion: Nicht Eve verführt Adam, sondern Adam bedrängt Eve. Die Schuld liegt beim männlichen „ersten Mann".' },
    { q: 'Wer hat in der feministischen Forschung Eves Rolle neu beleuchtet?', a: 'U. a. Helga Gallas und Gerhard Neumann. Eve als ethisches Zentrum, ihr Schweigen als Strategie.' },
    { q: 'Welche literarische Tradition steht hinter dem Stoff?', a: 'Sophokles (analytisches Drama), Molière (Typenkomik), Shakespeare (Maß für Maß). Bildquelle: Le Veau-Kupferstich.' },
    { q: 'Welche Gattungszuordnung ist heute üblich?', a: 'Lustspiel mit tragischen Untertönen / Tragikomödie. Reine Lustspiel-Lesart greift zu kurz.' },
    { q: 'Welche Funktion hat Adams Sprache?', a: 'Selbstentlarvung durch Versprecher, assoziative Sprünge, komische Vergleiche. Sprache als Falle für ihn selbst.' },
    { q: 'Was bedeutet Eves Schweigen?', a: 'Schutz für Ruprecht (Sorge wegen vorgeblicher Ostindien-Aushebung), nicht Mitschuld. Aktive Strategie.' }
  ]
};
