# Anleitung: Umbau der Werkstatt-Seite
## Was wir tun und warum

**Das Ziel:** Die langen Forschungsberichte verschwinden von der öffentlichen Seite
und landen in Ihrem internen Ordner. Stattdessen erscheinen auf der Webseite nur
kurze, datierte Logbuch-Einträge — 5–10 Sätze, kein Durcheinander, kein Druck.

---

## Schritt 1: Zwei alte Posts verschieben (aus der Öffentlichkeit entfernen)

Diese zwei Dateien liegen derzeit in `_posts/` — also öffentlich sichtbar.
Sie werden in `_intern/` verschoben.

**Finder öffnen → in den Projektordner navigieren**

Datei 1 verschieben:
```
VON:  _posts/2026-02-25-doernthal-freiberg.md
NACH: _intern/2026-02-25-doernthal-freiberg.md
```

Datei 2 verschieben:
```
VON:  _posts/2026-02-28-saigerhuette-gruenthal-krise.md
NACH: _intern/2026-02-28-saigerhuette-gruenthal-krise.md
```

So geht es: Datei anklicken → Befehlstaste + X (Ausschneiden) →
in `_intern/` wechseln → Befehlstaste + V (Einfügen).

✅ Fertig: Diese Posts erscheinen nicht mehr auf der Webseite.
Sie sind aber nicht weg — sie liegen sicher in `_intern/`.

---

## Schritt 2: Zwei neue Kurz-Posts hinzufügen

Sie haben von mir zwei fertige Dateien bekommen:
```
DATEI-1_2026-02-28-logbuch-pueltz.md
DATEI-2_2026-02-28-logbuch-biltz.md
```

Diese Dateien kopieren Sie in den Ordner `_posts/`.

Dateinamen dabei umbenennen — die Vorsilbe „DATEI-1_" entfernen:
```
DATEI-1_2026-02-28-logbuch-pueltz.md  →  2026-02-28-logbuch-pueltz.md
DATEI-2_2026-02-28-logbuch-biltz.md   →  2026-02-28-logbuch-biltz.md
```

So geht umbenennen: Datei einmal langsam doppelklicken (nicht schnell!) →
Name wird blau markiert → neuen Namen eintippen → Enter.

✅ Fertig: Die zwei Kurzeinträge erscheinen jetzt auf der Webseite
mit dem Tag „Logbuch".

---

## Schritt 3: Werkstatt-Seite aktualisieren (neuer Logbuch-Button)

Sie haben von mir eine fertige Datei bekommen:
```
DATEI-3_werkstatt.md
```

Diese Datei ersetzt die bestehende `werkstatt.md` im Hauptordner.

So geht es:
1. Die alte `werkstatt.md` im Hauptordner des Projekts löschen
   (oder umbenennen in `werkstatt_ALT.md` — sicherer)
2. `DATEI-3_werkstatt.md` in den Hauptordner kopieren
3. Umbenennen in `werkstatt.md`

✅ Fertig: Auf der Werkstatt-Seite erscheint jetzt ein neuer
Button „Logbuch" in der Filterleiste.

---

## Schritt 4: Prüfen ob alles stimmt

Im Terminal eingeben:
```
bundle exec jekyll serve
```

Dann im Browser öffnen: http://localhost:4000/werkstatt/

Was Sie sehen sollten:
- Die Filterleiste hat jetzt einen neuen Button: „Logbuch"
- Wenn Sie auf „Logbuch" klicken, erscheinen die zwei neuen Kurzeinträge
- Die langen Dörnthal- und Grünthal-Posts sind weg
- Alle anderen Posts (Eberstaller, DNA, usw.) sind unverändert

---

## Was Sie künftig tun, wenn es neue Forschungsergebnisse gibt

**Das Lange** (Quellenanalyse, Transkriptionen, offene Fragen):
→ Als `.md`-Datei in `_intern/` speichern. Ich helfe Ihnen dabei.
→ Diese Datei kommt nie in `_posts/`.

**Das Kurze** (Was haben wir herausgefunden? Was ist noch offen?):
→ Als Logbuch-Post in `_posts/`, Tag: `[Logbuch]`
→ 5–10 Sätze, fertig.

**Das Ausgearbeitete** (wenn ein Kapitel wirklich abgeschlossen ist):
→ Als normaler Post in `_posts/`, Tag: `[Neue Funde]` oder `[Ergänzungen]`
→ Das ist die Ausnahme, nicht die Regel.

---

## Zusammenfassung: Was wohin

| Ordner | Inhalt | Sichtbar auf Webseite? |
|--------|--------|----------------------|
| `_posts/` | Kurzeinträge (Logbuch), fertige Beiträge | JA |
| `_intern/` | Forschungsprotokolle, Analysen, Entwürfe | NEIN |
| `_drafts/` | Halbfertige Posts | NEIN |

---

*Erstellt Februar 2026. Bei Fragen einfach fragen.*
