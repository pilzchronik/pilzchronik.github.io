# Konzept: Zugang zum Gesamtwissen der Pilz-Chronik

**Stand:** 2026-06-16 (rev. 2 — Zweitmeinung Gemini eingearbeitet)
**Zweck:** Dauerhafte Entscheidungs- und Planungsgrundlage dafür, wie das gesamte
Forschungswissen langfristig gesammelt, durchsuchbar und zugänglich gemacht wird —
mit besonderem Augenmerk auf Kostenfreiheit, Einfachheit und Fortbestand auch ohne
laufende Betreuung.
**Hinweis:** Liegt in `_intern/` und wird **nicht** veröffentlicht (nur interne Notiz).

---

## 1. Ausgangslage

- Die Webseite (Bonusseite) liegt auf **GitHub Pages**: kostenlos, und sie bleibt
  bestehen, auch wenn der Autor ausfällt. Das ist eine bewusste Grundsatzentscheidung.
- Es gibt eine zweite Seite (`dna-matches`).
- Auf der Bonusseite läuft bereits ein **Chatling-Chatbot** (Gratisversion, Modell
  GPT-4-mini, Inhaltsgrenze 500.000 Zeichen). Bleibt als **Backup** vorgesehen.
- Das gesamte Forschungswissen wird derzeit in einem separaten **Claude-Cowork-Projekt**
  gebündelt (Nabe-und-Speiche-Architektur, fünf Stränge, Drei-Körbe-Modell für
  Widersprüche, Datenschutz-Brandmauer mit M-001-Codes).
- Der Autor wird 78; verbleibende aktive Betreuungszeit ist überschaubar. **Fortbestand
  ohne Betreuung ist daher das wichtigste Entwurfskriterium.**

## 2. Das Ziel (präzise)

> Nicht alles soll direkt auf den sichtbaren Seiten dargestellt sein. Das
> **Gesamtwissen** soll an einem Ort **gesammelt** und **durchsuchbar** sein —
> auch mit ganzen Textphrasen — ohne dass es die kuratierte Schauseite überfrachtet.

## 3. Leitentscheidung: zwei Schichten mit verschiedener Haltbarkeit

| Schicht | Was | Haltbarkeit | Kosten |
|---|---|---|---|
| **Dauerhaft** | statische Seite auf GitHub + die Inhalte selbst (lesbare Seiten + durchsuchbares Archiv) | überlebt den Autor, läuft ohne Betreuung | 0 € |
| **Vergänglich** | jeder Bot (Claude oder Chatling) — bequeme Zierde obendrauf | stirbt unbetreut binnen Monaten | laufend / Fremddienst |

**Konsequenz:** Energie fließt in die **dauerhafte Schicht**. Der Bot ist optional.

## 4. Architektur: eine Seite, zwei Gesichter

1. **Schauseite (kuratiert):** schön aufbereitet, nur das Ausgewählte, im Menü.
2. **Wissensspeicher (vollständig):** das *gesamte* Wissen als viele Einzelseiten,
   **nicht im Menü**, aber **über die Suche auffindbar**.

Beides liegt im selben GitHub-Repository / derselben Seite. Die vorhandene
**Pagefind-Suche** (`/suche/`) durchsucht beide Gesichter gemeinsam.

## 5. Der technische Kern: drei unabhängige Schalter pro Seite

Jede Seite kann diese drei Eigenschaften einzeln gesetzt bekommen:

| Schalter | Schauseite | Wissensspeicher |
|---|---|---|
| **(1) Im Menü / Navigation gelistet?** | ja | **nein** |
| **(2) Von Google indexiert?** (`robots: noindex`) | ja | nach Wunsch (kann nein) |
| **(3) Von der eigenen Pagefind-Suche gefunden?** | ja | **JA** ← der entscheidende Punkt |

**Vorhandener Mechanismus:** Die Jekyll-Sammlung **`_unlisted/`** macht bereits genau
(1) = nein (nicht in Menü, Werkstatt-Listing, RSS, Vor/Zurück-Navigation).

**Die einzige Änderung für den Speicher:** Aktuell sind die `_unlisted`-Seiten per
`data-pagefind-ignore` (im Layout) **von der Suche ausgeschlossen** (Schalter 3 = nein).
Für den Wissensspeicher muss Schalter 3 = **ja** sein: nicht gelistet, aber durchsuchbar.

## 6. Suche & Abfrage mit Textphrasen

- **Geht:** Mehrwort-Eingaben (`Taufpate Großvater Slawonien`) und exakte Wortfolgen
  in Anführungszeichen (`"Alois Vjekoslav"`). Pagefind matcht und sortiert nach Wörtern.
- **Geht nicht (ohne KI):** Bedeutung *verstehen*, Synonyme, Umschreibungen,
  Schlussfolgern. Pagefind sucht **Wörter, nicht Sinn**.
- **Der dauerhafte Trick, um nah an „Frage→Antwort" zu kommen:** Inhalte so schreiben,
  dass die wahrscheinlichen Such-Wörter darin vorkommen — insbesondere:
  - häufige Fragen als **Klartext-Überschriften** („Wer war der Taufpate von …?")
    mit der Antwort darunter,
  - Beziehungen/Begriffe **ausformuliert**, nicht nur in Tabellen oder Grafiken
    (Grafiken sind nicht durchsuchbar).
- **Zwischenstufe (nicht empfohlen):** echte Bedeutungs-Suche rein im Browser
  (Embeddings/transformers.js, vorberechneter Index im Repo) ist ohne Server/Kosten
  möglich, aber deutlich komplexer, schwerer, wartungsanfälliger — widerspricht dem
  Einfachheits-/Haltbarkeitsziel. Nur als Option vermerkt.

## 7. Datenschutz-Brandmauer (nicht verhandelbar)

„Nicht gelistet" und „noindex" heißt **nicht** „nicht öffentlich" — wer den Link hat
oder die Suche nutzt, sieht den Inhalt. Daher gilt für den **gesamten** öffentlich
erreichbaren Bestand (Schauseite **und** Wissensspeicher) die Brandmauer absolut:

- keine Klarnamen, keine Kit-Nummern lebender Personen — nur Rolle + Verhältnis + cM
  unter stabilem Code (M-001 …);
- die Code→Klarname-Tabelle bleibt im DNA-Spoke und verlässt ihn nie;
- Altlasten (u. a. `E_DNA_Cluster_Analyse`) müssen vor jeder Veröffentlichung bereinigt sein;
- `99_Rohimport` kommt nie auf die Seite.

**Verschärfung (öffentliches Repo):** Da die Seite im GitHub-Free-Tarif liegt, ist das
**gesamte Repository öffentlich** — der komplette Quelltext inkl. `_unlisted/` ist direkt
auf github.com einsehbar und herunterladbar. Zwei Konsequenzen:

- Ein **privates Repo würde nicht schützen** — die gebaute Seite (HTML + Pagefind-Index)
  ist ohnehin öffentlich; privat verstecken würde nur den Quelltext, nicht den Inhalt.
- **Die git-Historie ist dauerhaft.** Ein einmal committeter Klarname bleibt auch nach
  dem Löschen in der Versionsgeschichte abrufbar; Entfernen erfordert ein Umschreiben
  der Historie. → **Die Brandmauer muss vor dem Commit greifen, nicht erst vor der Anzeige.**
  Die M-001-Codierung ist damit die **einzige** Verteidigungslinie.

## 8. Der Bot als optionales Extra (nur falls/solange betreut)

- Ein **Claude-betriebener** Bot auf der Seite braucht **zwingend die Anthropic-API**
  (eigenes Entwicklerkonto, nutzungsbasierte Abrechnung). Das Claude-Abo des Autors
  speist **keinen** öffentlichen Webseiten-Bot.
- **Kosten** bei „hauptsächlich der Autor selbst": Größenordnung wenige € / Monat
  (mit **Claude Sonnet**), eher Cent-/1–2-€-Bereich mit **Claude Haiku** — nur für
  tatsächlich gestellte Fragen, **hartes Ausgabenlimit** im Konto einstellbar, keine
  Grundgebühr.
- **Technik:** GitHub Pages ist statisch und kann den API-Schlüssel nicht sicher halten →
  kleines **serverloses Zwischenstück** (z. B. Cloudflare/Netlify, Gratistarif) + ein
  Chat-Widget. Wird bei Bedarf eingerichtet.
- **Haltbarkeit unbetreut: bescheiden** (Monate). Schnellster Killer: abgelaufene
  Zahlung. Weitere Punkte: Modell-Ablauf (alle 1–2 Jahre eine Zeile aktualisieren),
  Schlüssel/Zwischenstück. **Würdevoller Ausfall ist Pflicht:** fällt der Bot aus,
  blendet sich das Widget aus oder fällt auf Chatling zurück — **nie eine kaputte Box.**
- **Chatling** bleibt als zäher Notnagel: keine Bezahlung, die ablaufen kann.
- **Falls der Bot den Autor überdauern soll:** der einzige ehrliche Weg ist eine
  beauftragte Person für die winzige Pflege + etwas Guthaben.

## 9. Verhältnis zum Cowork-Wissensbasis-Projekt

**Einmal sammeln — alles bedienen.** Derselbe bereinigte, verdichtete Export aus dem
Cowork-Projekt wird:

- zum **durchsuchbaren Wissensspeicher** (dauerhaft, kostenlos, überlebt den Autor),
- zum Futter für **Chatling** (Backup),
- und *falls je gewünscht* zum Futter für einen **Claude-Bot** (Zierde).

Export-Anforderungen: verdichtete Schicht (Master-Synthesen, Standkarten, Synthesen,
FAQ) — **nicht** die Rohimporte; selbsterklärende Einzelstücke; Drei-Körbe-Status im
Text; Widersprüche explizit; reiner Text/Markdown; datierter, reproduzierbarer
Schnappschuss. (Siehe auch das Übergabe-Dokument im Cowork-Projekt.)

## 10. Was bereits vorhanden ist (Bestandsaufnahme Repo)

- ✅ **Pagefind-Suche** voll eingerichtet: Build-Workflow `.github/workflows/pages.yml`
  baut Jekyll und erzeugt den Suchindex; Suchseite `suche.md` (`/suche/`) mit
  Phrasen-Eingabe und `?q=`-Vorbelegung.
- ✅ **`_unlisted/`-Sammlung** (`output: true`): rendert Seiten, die per Permalink
  erreichbar, aber nicht gelistet sind — derzeit jedoch **von der Suche ausgeschlossen**
  (`data-pagefind-ignore`).
- ✅ Struktur-Bausteine: `zeitleiste`, `orte`, `stammbaum`, `nachweise`, Werkstatt-Beiträge.
- ✅ **Chatling** eingebunden (`_includes/footer.html`).
- ⚠️ `suchdaten/wissensbasis.md` (~408.000 Zeichen) ist derzeit **Bot-Futter**
  (versteckt, `noindex`, vom Build ausgeschlossen) — **kein** lesbarer/durchsuchbarer
  Teil der Seite. Nahe an der Chatling-Grenze von 500.000 Zeichen.

## 11. Umsetzungsschritte (Reihenfolge)

**Voraussetzung:** Cowork-Phase 2 (Master-Synthesen) steht und ist datenschutz-bereinigt.

1. **Export** aus dem Cowork-Projekt: verdichtetes Gesamtwissen, M-001-codiert.
2. **Wissensspeicher anlegen:** Export als **viele `_unlisted`-Einzelseiten** rendern
   (idealerweise eine Seite je Person / Synthese / Dokument — viele kleine Seiten
   suchen sich besser als ein Riesenblock).
3. **Schalter 3 umlegen:** `_unlisted`-Seiten in die **Pagefind-Suche aufnehmen**
   (das `data-pagefind-ignore` für diese Seiten entfernen), Menü-Ausschluss bleibt.
   **Wichtig (Sitemap-Falle):** `jekyll-sitemap` ist aktiv und nimmt standardmäßig alle
   Seiten mit `output: true` auf. Für die `_unlisted`-Sammlung daher in `_config.yml`
   einen **`defaults`-Block** setzen, der automatisch `sitemap: false` **und** `noindex`
   (Schalter 2) für jede Speicher-Seite erzwingt — nicht pro Datei, sondern zentral, damit
   bei der Massen-Erzeugung keine Seite durchrutscht.
4. **Q&A-Schreibweise:** häufige Fragen als Klartext-Überschriften, Beziehungen
   ausformulieren (für gute Phrasen-Treffer).
5. **FAQ-Seite** als „Antwort"-Schicht ergänzen.
6. **Register** (Personen, Orte) als Einstiegshilfe, verlinkt in den Speicher.
7. **Kuratierte Schauseite** unberührt sauber lassen.
8. *(Optional, später)* **Bot** als Zierde: serverloses Zwischenstück + Claude-API +
   Widget, mit würdevollem Ausfall und Chatling-Fallback.

## 12. Offene Entscheidungen (später zu klären)

- ~~Wissensspeicher für Google sichtbar (Schalter 2)?~~ **Entschieden: Nein (noindex).**
  Begründung: sonst Keyword-Kannibalisierung (Archiv-Treffer drücken die kuratierte
  Schauseite im Ranking) und schlechte Nutzererfahrung (Google-Besucher landen auf
  kontextlosen, codierten Einzelseiten ohne Navigation).
- Bekommt die **dna-matches**-Seite überhaupt einen Speicher/Bot? (Sensibler Bereich —
  wenn, dann streng codifiziert.)
- Modellwahl für einen etwaigen Bot: **aktuelles Sonnet** (Empfehlung — bei verschachtelter
  Stammbaum-Logik deutlich zuverlässiger) statt **Haiku** (sparsamer, aber halluziniert
  bei komplexer Genealogie eher). Konkretes Modell erst bei Umsetzung festlegen (nicht
  vorab pinnen — Modelle laufen aus).
- Soll der Bot den Autor überdauern? Wenn ja: Person + Guthaben festlegen.

## 13. Export-Format & Aufteilung in Einzelseiten

**Format des Cowork-Exports:** ein **strukturierter Markdown-Datensatz pro Wissens-Einheit**
(eine Einheit = eine Person / eine Synthese / ein Dokument), jeweils mit Jekyll-tauglichem
Front-Matter und einer **stabilen `id`**. Vorlage je Datensatz:

```
---
id: person-alois-johann-pilz      # stabil, niemals ändern (Permalink-Basis)
titel: "Alois Johann Pilz (Großvater)"
strang: Pilz                       # Pilz | Bechinie | Eberstaller | Kofler-Cofler | DNA
typ: Person                        # Person | Synthese | Dokument | Ort
status: Korb-1                     # Korb-1 | Korb-2 | Korb-3
stand_vom: 2026-06-16
---
## Wer war Alois Johann Pilz?           ← Frage als Klartext-Überschrift (Phrasen-Treffer)
<ausformulierter Fließtext: Daten, Beziehungen, Befund, bei Korb 2 beide Stände nebeneinander>
```

**Aufteilung — zwei Wege, Empfehlung B:**

- **B (empfohlen, maximal haltbar): vorab aufgeteilte, „dumme" Dateien.** Der Export besteht
  aus *vielen einzelnen* `_unlisted/<id>.md`-Dateien (das Cowork-Projekt gibt sie direkt
  einzeln aus, oder ein **kleines Aufteil-Skript** schneidet eine konkatenierte Export-Datei
  an den `^---`-Front-Matter-Grenzen und schreibt je Datensatz eine Datei). Die Aufteilung
  passiert **einmalig zur Export-Zeit**, nicht bei jedem Build. Vorteil: keine Spezial-Logik
  im Build, reine Markdown-Dateien → so lange lauffähig, wie Jekyll Markdown rendert.
  Passt auch zur `github-pages`-Gem (keine Custom-Plugins nötig).

- **A (eleganter, aber etwas fragiler): datengetrieben.** Ein einziges `_data/wissensbasis.yml`
  als Quelle + ein Jekyll-**Generator-Plugin**, das je Datensatz eine Seite erzeugt. Single
  Source of Truth, aber: Generatoren sind Custom-Code (kleine Langzeit-Fragilität, und die
  reine `github-pages`-Hosting-Pipeline erlaubt keine Custom-Plugins — funktioniert nur über
  den eigenen Actions-Build). Für das Haltbarkeitsziel daher **nachrangig**.

**Verbindliche Regeln (für beide Wege):**

- **Permalink aus der stabilen `id`** ableiten (z. B. `permalink: /w/<id>/`), damit
  Re-Exporte und externe Links **nicht brechen**.
- **Idempotent/reproduzierbar:** Re-Export erzeugt denselben Satz neu; gleiche `id` →
  gleicher Permalink. Geänderte Einheiten überschreiben, gelöschte entfernen.
- **`sitemap: false` + `noindex` zentral** über `_config.yml`-`defaults` der `_unlisted`-
  Sammlung (siehe Schritt 11.3), nicht je Datei.
- **Datenschutz-Gate vor dem Commit** (M-001), siehe §7.

## 14. Plattform-Frage: WordPress, eigene Domain, Internet-Archive

**Geprüfte Alternative:** volle **WordPress-Seite auf pilzchronik.at** statt GitHub, dann
ins Internet-Archive archivieren. **Ergebnis: nicht empfohlen** — widerspricht dem
obersten Ziel (Fortbestand ohne Betreuung).

- **WordPress ist das Gegenteil von wartungsarm.** Es braucht bezahltes Hosting (Rechnung
  läuft aus → Seite tot), eine Datenbank, und **ständige Sicherheitsupdates** (Core, Themes,
  Plugins). Unbetreut verrottet es nicht nur — es **wird aktiv gehackt/verspammt/defaced**.
  Eine statische Seite hat keinen Server-Code und **kann nicht gehackt werden**; sie bleibt
  einfach stehen. (Die derzeitige unbetreute Seite auf pilzchronik.at ist genau dieses Problem.)

- **Domain pilzchronik.at:** Auslaufen lassen ist konsistent mit dem Ziel (eine Domain ist
  eine ewige Jahreszahlung). Entscheidung über die **dauerhafte Adresse**:
  - **A (empfohlen):** `pilzchronik.github.io/...` — kostenlos, läuft nie aus, null Pflege.
  - **B:** nur die Domain behalten und kostenlos auf die GitHub-Seite zeigen lassen (eigene
    Domain ist bei GitHub Pages gratis) — schönere Adresse, holt aber die Jahreszahlung +
    Verlängerer + Squatter-Risiko bei Auslaufen zurück.
  - Hinweis: Künftig nur die **dauerhafte** Adresse drucken/teilen; was auf pilzchronik.at
    zeigt, führt nach dem Auslaufen irgendwann ins Leere oder zu Fremden.

- **Internet-Archive (Wayback Machine): gute Ergänzung, kein Ersatz.** Friert **sichtbare,
  verlinkte** Seiten ein → wertvolle Sicherungskopie der **Schauseite**. Aber: **keine
  funktionierende Pagefind-Suche** im Schnappschuss, und die **nicht verlinkten
  `_unlisted`-Speicherseiten werden nicht erfasst** (Crawler findet sie nicht). Also kein
  durchsuchbares Archiv und kein Ersatz für die lebende GitHub-Seite — nur ein Notnagel
  „falls GitHub mal verschwindet".

- **Falls der Reiz von WordPress das bequeme Bearbeiten ist:** Zwitterweg (in WordPress
  schreiben → statisch exportieren → auf GitHub hosten) existiert, holt aber die
  WordPress-Abhängigkeit zurück → nicht empfohlen. Bearbeitungs-Komfort lieber anders lösen
  (Hilfe beim Einpflegen, GitHub-Web-Editor).

**Entscheidung:** bei der statischen GitHub-Lösung bleiben; pilzchronik.at auslaufen lassen;
github.io als dauerhafte Adresse; Internet-Archive als zusätzliche Sicherung der Schauseite.

---

### Kernsatz zum Zurückgreifen

> Das Bleibende ist die **statische, durchsuchbare Wissens-Seite auf GitHub**: vorne die
> kuratierte Ausstellung, dahinter das vollständige, über die Suche auffindbare Archiv
> (`_unlisted` + Pagefind). Phrasensuche funktioniert; echtes Frage-Verstehen ist das
> vergängliche Bot-Extra. Einmal die Wissensbasis sauber aufbereiten — sie bedient
> Speicher, Chatling und (optional) Bot zugleich.
