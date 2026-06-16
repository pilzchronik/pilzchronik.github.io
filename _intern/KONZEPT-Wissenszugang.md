# Konzept: Zugang zum Gesamtwissen der Pilz-Chronik

**Stand:** 2026-06-16
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
4. **Q&A-Schreibweise:** häufige Fragen als Klartext-Überschriften, Beziehungen
   ausformulieren (für gute Phrasen-Treffer).
5. **FAQ-Seite** als „Antwort"-Schicht ergänzen.
6. **Register** (Personen, Orte) als Einstiegshilfe, verlinkt in den Speicher.
7. **Kuratierte Schauseite** unberührt sauber lassen.
8. *(Optional, später)* **Bot** als Zierde: serverloses Zwischenstück + Claude-API +
   Widget, mit würdevollem Ausfall und Chatling-Fallback.

## 12. Offene Entscheidungen (später zu klären)

- Wissensspeicher für Google sichtbar (Schalter 2) — ja oder nein?
- Bekommt die **dna-matches**-Seite überhaupt einen Speicher/Bot? (Sensibler Bereich —
  wenn, dann streng codifiziert.)
- Modellwahl für einen etwaigen Bot: **Sonnet** (Empfehlung) oder **Haiku** (sparsamer)?
- Soll der Bot den Autor überdauern? Wenn ja: Person + Guthaben festlegen.

---

### Kernsatz zum Zurückgreifen

> Das Bleibende ist die **statische, durchsuchbare Wissens-Seite auf GitHub**: vorne die
> kuratierte Ausstellung, dahinter das vollständige, über die Suche auffindbare Archiv
> (`_unlisted` + Pagefind). Phrasensuche funktioniert; echtes Frage-Verstehen ist das
> vergängliche Bot-Extra. Einmal die Wissensbasis sauber aufbereiten — sie bedient
> Speicher, Chatling und (optional) Bot zugleich.
