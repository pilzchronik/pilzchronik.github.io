---
layout: cover
title: "DNA-Analyse: Unsere Herkunft vor den Kirchenbüchern"
permalink: /dna-analyse/
description: "DNA-Analyse der Familie Pilz: Y-DNA-Haplogruppe J-FT159612 und mtDNA H41a9 – Migrationsrouten von Afrika über den Balkan bis ins Erzgebirge."
---

<section class="bwm-page bwm-dna" aria-label="DNA-Analyse">

<div class="bwm-page-head" markdown="0">
  <p class="bwm-page-eyebrow">03 DNA-Analyse</p>
  <h1 class="bwm-page-title">DNA-Analyse</h1>
  <hr class="bwm-page-line">
  <p class="bwm-page-lead">
    Die klassische Ahnenforschung endet meist im 16. oder 17. Jahrhundert.
    Mittels moderner DNA-Analyse konnten wir jedoch zwei Linien bis weit
    in die Vorzeit zurückverfolgen.
  </p>
</div>

<div class="bwm-post-body bwm-dna-body" markdown="1">

## Väterliche Linie (Y-DNA)

Diese Linie vererbt sich vom Vater auf den Sohn. Sie definiert den Stammbaum der Familie Pilz im biologischen Sinne.

<div class="fact-box">
  <span class="fact-title">Haplogruppe: J-FT159612</span>
  Herkunft: Balkan / Mitteleuropa (Zweig von J2, ursprünglich Naher Osten)<br>
  Alter: ca. 1. Jahrtausend v. Chr.
</div>

Die übergeordnete Haplogruppe J entstand vor ca. 40.000 Jahren im Nahen Osten. Der Zweig J2 bildete sich während der letzten Eiszeit in Anatolien heraus und breitete sich anschließend über den Balkan nach Mitteleuropa aus. Unser spezifischer Unterzweig J-FT159612 ist selten und entstand vermutlich im 1. Jahrtausend v. Chr.

### Stand der Auswertung (Juni 2026)

Eine zweite Auswertung bei YFull (Probe YF66621, eingeordnet als Region Pilsen) hat die väterliche Endposition bestätigt: J-FT159612 ist bei FamilyTreeDNA positiv getestet, nicht bloß vermutet. YFull führt denselben Zweig unter dem Namen J-Y183338 und löst eine Ebene weniger fein auf; FamilyTreeDNA setzt einen Schritt tiefer an. Es sind also nicht zwei Ergebnisse, sondern zwei Auflösungen derselben Linie. Der übergeordnete Knoten verweist bei FamilyTreeDNA auf Tschechien, Polen und England — ein Befund, der die böhmische Verwurzelung der Vaterlinie stützt.

Der nächste verwandte Y-Match (YFull-Kennung YF099964, entferntester Vorfahr József Csuzdi, um 1760, Ungarn) teilt mit uns den letzten gemeinsamen Vater erst vor rund 1.950 Jahren — vor jeder Urkundengenealogie. Eine konkrete Stammbaumbrücke ergibt sich daraus nicht. Warum zwei seriöse Labore dieselbe Linie unterschiedlich tief einordnen, ist eigens beschrieben in [Warum FamilyTreeDNA und YFull mich unterschiedlich einordnen]({{ '/y-dna-ftdna-yfull/' | relative_url }}).

## Mütterliche Linie (mtDNA)

Diese Linie folgt der reinen Mutterfolge (Mutter der Mutter der Mutter…).

<div class="fact-box" style="border-left-color: #c66a1e;">
  <span class="fact-title" style="color: #c66a1e;">Haplogruppe: H41a9</span>
  Herkunft: Alpen / Balkan / Osteuropa<br>
  Besonderheit: Sehr selten — entstanden ca. 450 n. Chr.
</div>

H41a9 ist eine sehr seltene Unterlinie mit östlicher Herkunft. Der spezifische Zweig entstand ca. 450 n. Chr. im Alpen-Balkan-Raum. Die frühesten getesteten Nachkommen stammen aus Österreich und Kroatien.

## Migrationsrouten beider Linien

<p>Diese Karte zeigt die Wanderung beider Vorfahrenlinien auf einer gemeinsamen Zeitachse — von den Ursprüngen in Afrika bis nach Mitteleuropa. <strong style="color:#1a5f9e;">&#9632; Blau</strong> = väterliche Linie (Y-DNA, 24 Stationen), <strong style="color:#c66a1e;">&#9632; Orange</strong> = mütterliche Linie (mtDNA, 15 Stationen). Beide Wege führen über den Balkan nach Mitteleuropa.</p>

<div id="dna-controls">
  <button id="btn-play" onclick="startAnimation()">&#9654; Abspielen</button>
  <button id="btn-reset" onclick="resetAnimation()">&#8634; Zurücksetzen</button>
  <span id="epoch-label"></span>
</div>

<div id="dual-panel">
  <div id="panel-pat" class="line-panel">
    <div class="line-label">&#9794; Väterliche Linie (Y-DNA)</div>
    <div class="panel-group" id="pat-group">—</div>
    <div class="panel-year" id="pat-year"></div>
    <div class="panel-info" id="pat-info"></div>
  </div>
  <div id="panel-mat" class="line-panel mat">
    <div class="line-label">&#9792; Mütterliche Linie (mtDNA)</div>
    <div class="panel-group" id="mat-group">—</div>
    <div class="panel-year" id="mat-year"></div>
    <div class="panel-info" id="mat-info"></div>
  </div>
</div>

<div id="dna-map"></div>
<p style="margin-top: 0.6rem; font-size: 0.82rem; color: #888;">Haplogruppen-Bezeichnungen nach FamilyTreeDNA. Zeitangaben sind wissenschaftliche Schätzwerte. Die blauen Flächen markieren die maximale Eisausdehnung während der letzten Eiszeit (ca. 20.000 v. Chr.) — Nordeuropa und Alpen.</p>

<div id="epoch-progress">
  <div id="epoch-bar"></div>
</div>

<details class="dna-details">
  <summary>Was bedeuten die Haplogruppen-Namen?</summary>
  <div class="dna-details-body">
    <p>Haplogruppen bezeichnen Äste im Stammbaum der Menschheit. Jeder Name steht für eine bestimmte <strong>Mutation</strong> (eine dauerhafte Veränderung im Erbgut), die sich einmal ereignet hat und seitdem an alle Nachkommen weitergegeben wird.</p>
    <p style="margin-top: 12px;"><strong>Väterliche Linie (Y-DNA):</strong></p>
    <table class="haplo-table">
      <tr><td class="haplo-name pat">J</td><td>Hauptgruppe – entstand vor ca. 40.000 Jahren im Nahen Osten.</td></tr>
      <tr><td class="haplo-name pat">J2</td><td>Untergruppe – bildete sich in Anatolien während der Eiszeit.</td></tr>
      <tr><td class="haplo-name pat">J-M102</td><td>Buchstaben-Zahlen-Kombination nach dem Bindestrich benennt die Mutation.</td></tr>
      <tr><td class="haplo-name pat">J-FT159612</td><td>Unsere Endposition – ein sehr seltener, eng eingegrenzter Zweig.</td></tr>
    </table>
    <p style="margin-top: 12px;"><strong>Mütterliche Linie (mtDNA):</strong></p>
    <table class="haplo-table">
      <tr><td class="haplo-name mat">L</td><td>Die ältesten Linien, alle in Afrika entstanden.</td></tr>
      <tr><td class="haplo-name mat">N</td><td>Erste Linie außerhalb Afrikas.</td></tr>
      <tr><td class="haplo-name mat">R → R0 → HV → H</td><td>Vom Nahen Osten nach Europa. H ist heute die häufigste mütterliche Linie (ca. 40 %).</td></tr>
      <tr><td class="haplo-name mat">H41a9</td><td>Unsere Endposition – sehr selten, entstanden ca. 450 n. Chr. im Alpen-Balkan-Raum.</td></tr>
    </table>
    <p style="margin-top: 8px; font-size: 0.88em; color: #888;">Je länger der Name, desto jünger und seltener die Mutation.</p>
  </div>
</details>

<h3 style="margin-top: 2rem; margin-bottom: 0.5rem;">Stationen der Wanderung — synchronisierte Zeitachse</h3>
<p style="font-size: 0.88em; color: #888; margin-bottom: 12px;">28 Epochen über 300.000 Jahre. Die aktive Epoche wird bei der Animation hervorgehoben.</p>
<div class="epoch-table-wrap">
  <table id="epoch-table">
    <thead>
      <tr>
        <th style="width:4%;">#</th>
        <th style="width:18%;">Zeit</th>
        <th style="width:39%;">&#9794; Väterlich (Y-DNA)</th>
        <th style="width:39%;">&#9792; Mütterlich (mtDNA)</th>
      </tr>
    </thead>
    <tbody id="epoch-tbody"></tbody>
  </table>
</div>

## Autosomale DNA (Family Finder)

<div class="fact-box">
  <span class="fact-title">Schwerpunkt: Mitteleuropa</span>
  Deutliche Anteile einer mitteleuropäischen Bevölkerungsgruppe<br>
  (Böhmen – Deutschland – Österreich)
</div>

Der stärkste autosomale Treffer bei FamilyTreeDNA ist die Wiener Familie Zeisl — eine jüdische Familie mit Wurzeln im selben böhmischen Raum wie Theresia (Kekulé 69), die 1768 in Amschelberg konvertierte. Die systematische Auswertung dieses Fundes ist auf einer eigenen Seite dokumentiert:

→ [DNA-Matches Pilz–Zeisl](https://pilzchronik.github.io/dna-matches/) — Triangulation, Stammbäume, Herkunftsorte und offene Fragen.

## Zusammenfassung

Diese drei Ergebnisse ergeben ein stimmiges Bild: alte Linien aus dem Nahen Osten und der Bronzezeit gelangen über den Balkan nach Mitteleuropa und sind in historischer Zeit in den mitteleuropäischen Populationen wiederzufinden — genau dort, wo die schriftlichen Quellen die Familie Pilz verorten.

*Die genetischen Ergebnisse sind eine Ergänzung zur Chronik. Jede genealogische Aussage bleibt durch die schriftlichen Quellen der Bände 1 und 2 abzusichern. FamilyTreeDNA, Kit 330595.*

</div>
</section>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
// ============================================================
// FARBEN: Blau (väterlich) vs. Orange (mütterlich) — gut
// unterscheidbar, auch für ältere Augen.
// ============================================================
var PAT = '#1a5f9e', MAT = '#c66a1e', END = '#cc2222';

// ============================================================
// DATEN: Vereinigte Zeitachse — 28 Epochen, beide Linien
// Jede Epoche hat ein Kamera-Ziel (phase), damit die Karte
// sich nur selten und sanft bewegt.
//   phase 1 = Afrika          → [8, 28],  zoom 3
//   phase 2 = Arabien/Iran    → [28, 50], zoom 4
//   phase 3 = Naher Osten     → [35, 40], zoom 4
//   phase 4 = Eiszeit-Europa  → [50, 15], zoom 4  (weit genug für Eisschilde!)
//   phase 5 = Mitteleuropa    → [48, 13], zoom 5
// ============================================================
var cameraPhases = {
  1: { lat:8,  lng:28, zoom:3 },
  2: { lat:28, lng:50, zoom:4 },
  3: { lat:35, lng:40, zoom:4 },
  4: { lat:50, lng:15, zoom:4 },
  5: { lat:48, lng:13, zoom:5 }
};

var epochs = [
  { year:"ca. 300.000 v. Chr.", num:-300000, phase:1,
    pat:{group:"Y-Adam",lat:5.0,lng:12.0,info:"Gemeinsamer Urahn aller Männer. Zentralafrika."},
    mat:{group:"mt-Eve",lat:-6.0,lng:35.0,info:"Gemeinsame Urmutter aller Menschen. Ostafrika."} },
  { year:"ca. 200.000 v. Chr.", num:-200000, phase:1,
    pat:{group:"A0-T",lat:6.5,lng:14.0,info:"Frühe Aufspaltung in Westafrika/Kamerun."},
    mat:{group:"L1'7",lat:-3.0,lng:35.5,info:"Frühe Aufspaltung in Ostafrika."} },
  { year:"ca. 160.000 v. Chr.", num:-160000, phase:1,
    pat:{group:"A1b",lat:10.0,lng:25.0,info:"Wanderung ostwärts nach Zentralafrika."},
    mat:{group:"L2'7",lat:1.0,lng:36.0,info:"Weitere Differenzierung in Ostafrika."} },
  { year:"ca. 130.000 v. Chr.", num:-130000, phase:1,
    pat:{group:"BT",lat:12.0,lng:34.0,info:"Ostafrika/Sudan – Vorfahren fast aller Nicht-Afrikaner."},
    mat:{group:"L2'3'4'6",lat:5.0,lng:36.0,info:"Ostafrika – Übergang Nordostafrika."} },
  { year:"ca. 100.000 v. Chr.", num:-100000, phase:1,
    pat:null,
    mat:{group:"L3'4'6",lat:9.0,lng:38.0,info:"Nordostafrika/Äthiopien."} },
  { year:"ca. 85.000 v. Chr.", num:-85000, phase:1,
    pat:null,
    mat:{group:"L3'4",lat:11.5,lng:42.0,info:"Horn von Afrika – Vorbereitung des Auszugs."} },
  { year:"ca. 80.000 v. Chr.", num:-80000, phase:1,
    pat:{group:"CT",lat:10.0,lng:38.0,info:"Äthiopien – Ausgangspunkt der Wanderung aus Afrika."},
    mat:null },
  { year:"ca. 70.000 v. Chr.", num:-70000, phase:1,
    pat:{group:"CF",lat:11.5,lng:43.0,info:"Horn von Afrika – letzter Halt vor dem Auszug."},
    mat:{group:"L3",lat:13.0,lng:43.5,info:"Nordostafrika – Ausgangspunkt des Auszugs aus Afrika."} },
  { year:"ca. 60.000 v. Chr.", num:-60000, phase:2,
    pat:{group:"F",lat:22.0,lng:58.0,info:"Arabische Halbinsel – erster Halt nach dem Auszug."},
    mat:{group:"N",lat:22.0,lng:56.0,info:"Arabische Halbinsel – erster Halt nach dem Auszug."} },
  { year:"ca. 55.000 v. Chr.", num:-55000, phase:2,
    pat:{group:"GHIJK",lat:27.0,lng:55.0,info:"Persischer Golf – Aufspaltung der Linien."},
    mat:{group:"R",lat:28.0,lng:56.0,info:"Persischer Golf/Iran – Wanderung nordwärts."} },
  { year:"ca. 50.000 v. Chr.", num:-50000, phase:2,
    pat:{group:"HIJK",lat:28.5,lng:56.0,info:"Iran/Zagros-Vorgebirge."},
    mat:null },
  { year:"ca. 45.000 v. Chr.", num:-45000, phase:3,
    pat:{group:"IJ",lat:32.0,lng:50.0,info:"Iran – Vorfahre der J- und I-Linien."},
    mat:{group:"R0",lat:33.0,lng:44.0,info:"Levante/Irak – Vorläufer europäischer Linien."} },
  { year:"ca. 40.000 v. Chr.", num:-40000, phase:3,
    pat:{group:"J",lat:35.0,lng:43.0,info:"Naher Osten – Beginn der J-Haplogruppe."},
    mat:null },
  { year:"ca. 35.000 v. Chr.", num:-35000, phase:3,
    pat:null,
    mat:{group:"HV",lat:37.5,lng:37.0,info:"Anatolien – Verzweigung in H- und V-Linien."} },
  { year:"ca. 25.000 v. Chr.", num:-25000, phase:4, ice:true,
    pat:{group:"J2",lat:37.5,lng:38.0,info:"Anatolien – Rückzug ins Eiszeit-Refugium."},
    mat:{group:"H",lat:38.0,lng:32.0,info:"Westanatolien – H entsteht. Eiszeit beginnt."} },
  { year:"ca. 20.000 v. Chr.", num:-20000, phase:4, ice:true,
    pat:{group:"J-M102",lat:38.5,lng:35.0,info:"Anatolien – Letztes Glaziales Maximum."},
    mat:{group:"H (Refugium)",lat:41.5,lng:22.0,info:"Balkan – Eiszeit-Refugium in Südosteuropa."} },
  { year:"ca. 15.000 v. Chr.", num:-15000, phase:4, ice:true,
    pat:{group:"J-Z1827",lat:39.0,lng:33.0,info:"Westanatolien – der Eisrückzug beginnt."},
    mat:null },
  { year:"ca. 10.000 v. Chr.", num:-10000, phase:4,
    pat:{group:"J-L283",lat:39.5,lng:22.0,info:"Griechenland – Vorstoß nach Westen."},
    mat:{group:"H (Expansion)",lat:44.0,lng:20.0,info:"Postglaziale Expansion über Europa."} },
  { year:"ca. 8.000 v. Chr.", num:-8000, phase:5,
    pat:{group:"J-Z600",lat:43.0,lng:17.0,info:"Westbalkan/Adriaküste."},
    mat:null },
  { year:"ca. 6.000 v. Chr.", num:-6000, phase:5,
    pat:{group:"J-Z2509",lat:44.5,lng:13.0,info:"Norditalien/Adriaraum."},
    mat:null },
  { year:"ca. 5.000 v. Chr.", num:-5000, phase:5,
    pat:{group:"J-Z622",lat:45.5,lng:8.0,info:"Norditalien/Südfrankreich."},
    mat:null },
  { year:"ca. 3.000 v. Chr.", num:-3000, phase:5,
    pat:{group:"J-Z1296",lat:47.0,lng:10.5,info:"Alpenraum."},
    mat:null },
  { year:"ca. 1.500 v. Chr.", num:-1500, phase:5,
    pat:{group:"J-Z8418",lat:48.0,lng:13.0,info:"Mitteleuropa/Bayern."},
    mat:null },
  { year:"ca. 1.000 v. Chr.", num:-1000, phase:5,
    pat:{group:"J-Z8421",lat:48.5,lng:13.5,info:"Böhmen/Erzgebirge-Vorland."},
    mat:null },
  { year:"ca. 500 v. Chr.", num:-500, phase:5,
    pat:{group:"J-Z615",lat:49.5,lng:13.5,info:"Böhmen."},
    mat:null },
  { year:"ca. 200 v. Chr.", num:-200, phase:5,
    pat:{group:"J-Z585",lat:50.2,lng:13.5,info:"Nordböhmen/Erzgebirge."},
    mat:null },
  { year:"ca. 1.000 n. Chr.", num:1000, phase:5,
    pat:null,
    mat:{group:"H41a9",lat:46.5,lng:14.8,info:"<strong>Österreich/Kroatien</strong> – mütterlicher Ursprung in der Pilz-Chronik.", highlight:true} },
  { year:"1590 n. Chr.", num:1590, phase:5,
    pat:{group:"J-FT159612",lat:50.65,lng:13.3,info:"<strong>Erzgebirge</strong> – ältester nachweisbarer Pilz-Vorfahre der väterlichen Linie.", highlight:true},
    mat:null }
];

// Eisschild Nordeuropa
var iceNorth = [
  [72,-25],[76,0],[73,15],[70,25],[66,30],[61,30],
  [57,25],[54,20],[52,15],[51,10],[50,5],[50,0],
  [51,-5],[53,-10],[56,-15],[59,-20],[63,-25],[68,-25],[72,-25]
];
// Eisschild Alpen
var iceAlps = [
  [47.5,5.5],[47.8,7.0],[48.0,8.5],[48.0,10.0],[47.8,11.5],
  [47.5,13.0],[47.2,14.5],[46.8,15.5],[46.3,15.0],[46.0,14.0],
  [45.7,12.5],[45.5,11.0],[45.5,9.5],[45.6,8.0],[45.9,6.5],
  [46.5,5.5],[47.5,5.5]
];

// ============================================================
// KARTE & ANIMATION
// ============================================================
var dnaMap, routeGroup, iceLayerNorth, iceLayerAlps;
var patMarkers = [], matMarkers = [];
var lastPat = null, lastMat = null;
var currentStep = 0, isAnimating = false, animTimer;
var currentPhase = 0; // welche Kameraposition gerade aktiv ist

function initDnaMap() {
  dnaMap = L.map('dna-map', { zoomControl: true }).setView([8, 28], 3);
  L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap-Mitwirkende', maxZoom: 10
  }).addTo(dnaMap);
  routeGroup = L.layerGroup().addTo(dnaMap);

  var iceStyle = { color:'#4488bb', fillColor:'#a0c8e8', fillOpacity:0.45, weight:2, dashArray:'6 4' };
  iceLayerNorth = L.polygon(iceNorth, iceStyle);
  iceLayerAlps  = L.polygon(iceAlps, iceStyle);
}

function addDot(lat, lng, color, size, info, group, year) {
  var icon = L.divIcon({
    className: '',
    html: '<div style="background:'+color+';width:'+size+'px;height:'+size+'px;border-radius:50%;border:2px solid white;box-shadow:0 0 6px rgba(0,0,0,0.5);"></div>',
    iconSize: [size, size], iconAnchor: [size/2, size/2]
  });
  var m = L.marker([lat, lng], {icon: icon}).addTo(routeGroup)
    .bindPopup('<strong style="color:'+color+'">'+group+'</strong><br><em>'+year+'</em><br><span style="font-size:0.9em">'+info+'</span>');
  return m;
}

// ----------------------------------------------------------
// KAMERA: Bewegt sich NUR wenn sich die Phase ändert.
// Innerhalb einer Phase bleibt die Karte völlig ruhig.
// ----------------------------------------------------------
function moveCamera(phase) {
  if (phase === currentPhase) return; // Kein Wechsel → keine Bewegung
  currentPhase = phase;
  var cam = cameraPhases[phase];
  if (!cam) return;
  dnaMap.flyTo([cam.lat, cam.lng], cam.zoom, { duration: 1.8, easeLinearity: 0.25 });
}

// ----------------------------------------------------------
// PANEL: Zeigt IMMER den letzten Stand beider Linien.
// Volle Sichtbarkeit, kein Ausgrauen, kein Opacity-Wechsel.
// ----------------------------------------------------------
function updatePanels(ep) {
  var pg = document.getElementById('pat-group');
  var py = document.getElementById('pat-year');
  var pi = document.getElementById('pat-info');
  var mg = document.getElementById('mat-group');
  var my_ = document.getElementById('mat-year');
  var mi = document.getElementById('mat-info');
  var pp = document.getElementById('panel-pat');
  var mp = document.getElementById('panel-mat');

  // Väterlich: immer letzten Stand zeigen, volle Sichtbarkeit
  var patData = ep.pat || lastPat;
  if (patData) {
    var pc = patData.highlight ? END : PAT;
    pp.style.opacity = '1';
    pp.style.borderLeftColor = pc;
    pg.textContent = patData.group;
    pg.style.color = pc;
    py.textContent = patData.lastYear || ep.year;
    pi.innerHTML = patData.info;
  }

  // Mütterlich: immer letzten Stand zeigen, volle Sichtbarkeit
  var matData = ep.mat || lastMat;
  if (matData) {
    var mc = matData.highlight ? END : MAT;
    mp.style.opacity = '1';
    mp.style.borderLeftColor = mc;
    mg.textContent = matData.group;
    mg.style.color = mc;
    my_.textContent = matData.lastYear || ep.year;
    mi.innerHTML = matData.info;
  }

  document.getElementById('epoch-label').textContent =
    'Epoche ' + (currentStep + 1) + ' / ' + epochs.length + '  —  ' + ep.year;

  var pct = ((currentStep + 1) / epochs.length) * 100;
  document.getElementById('epoch-bar').style.width = pct + '%';
}

function animateStep(i) {
  if (i >= epochs.length) {
    isAnimating = false;
    document.getElementById('epoch-label').textContent = '\u2713 Beide Routen vollständig';
    document.getElementById('epoch-bar').style.width = '100%';
    return;
  }
  var ep = epochs[i];
  currentStep = i;

  // --- Kamera: nur bei Phasenwechsel bewegen ---
  moveCamera(ep.phase);

  // --- Eisschild ein/aus ---
  if (ep.ice) {
    if (!dnaMap.hasLayer(iceLayerNorth)) iceLayerNorth.addTo(dnaMap);
    if (!dnaMap.hasLayer(iceLayerAlps))  iceLayerAlps.addTo(dnaMap);
  } else {
    if (dnaMap.hasLayer(iceLayerNorth)) dnaMap.removeLayer(iceLayerNorth);
    if (dnaMap.hasLayer(iceLayerAlps))  dnaMap.removeLayer(iceLayerAlps);
  }

  // --- Väterliche Linie (blau, durchgezogen) ---
  if (ep.pat) {
    var pc = ep.pat.highlight ? END : PAT;
    if (lastPat) {
      L.polyline([[lastPat.lat, lastPat.lng],[ep.pat.lat, ep.pat.lng]], {
        color: PAT, weight: 3, opacity: 0.9
      }).addTo(routeGroup);
    }
    var sz = ep.pat.highlight ? 14 : 9;
    var m = addDot(ep.pat.lat, ep.pat.lng, pc, sz, ep.pat.info, ep.pat.group, ep.year);
    patMarkers.push(m);
    if (ep.pat.highlight) setTimeout(function(){ m.openPopup(); }, 800);
    ep.pat.lastYear = ep.year; // Jahreszahl merken für Panel
    lastPat = ep.pat;
  }

  // --- Mütterliche Linie (orange, gestrichelt) ---
  if (ep.mat) {
    var mc = ep.mat.highlight ? END : MAT;
    if (lastMat) {
      L.polyline([[lastMat.lat, lastMat.lng],[ep.mat.lat, ep.mat.lng]], {
        color: MAT, weight: 3, opacity: 0.9, dashArray: '8 5'
      }).addTo(routeGroup);
    }
    var sz2 = ep.mat.highlight ? 14 : 9;
    var m2 = addDot(ep.mat.lat, ep.mat.lng, mc, sz2, ep.mat.info, ep.mat.group, ep.year);
    matMarkers.push(m2);
    if (ep.mat.highlight) setTimeout(function(){ m2.openPopup(); }, 800);
    ep.mat.lastYear = ep.year; // Jahreszahl merken für Panel
    lastMat = ep.mat;
  }

  updatePanels(ep);
  highlightEpochRow(i);

  // --- Timing: ruhig, mit Pause bei Phasenwechsel und Endpunkten ---
  var isEnd = (ep.pat && ep.pat.highlight) || (ep.mat && ep.mat.highlight);
  var nextPhaseChanges = (i + 1 < epochs.length) && (epochs[i + 1].phase !== ep.phase);
  var delay = 1800; // Normalschritt: 1.8 Sekunden
  if (isEnd) delay = 3500;               // Endpunkt: 3.5 Sekunden
  else if (nextPhaseChanges) delay = 2800; // Vor Phasenwechsel: 2.8s (Kamera fliegt)
  else if (ep.ice) delay = 2200;          // Eiszeit-Epochen: etwas länger

  animTimer = setTimeout(function() { animateStep(i + 1); }, delay);
}

function startAnimation() {
  if (isAnimating) return;
  isAnimating = true;
  document.getElementById('btn-play').disabled = true;
  document.getElementById('dual-panel').style.display = 'flex';
  currentPhase = 0; // Reset damit erste Phase-Bewegung ausgelöst wird
  animateStep(currentStep);
}

function resetAnimation() {
  clearTimeout(animTimer);
  isAnimating = false;
  currentStep = 0;
  currentPhase = 0;
  lastPat = null; lastMat = null;
  patMarkers = []; matMarkers = [];
  document.getElementById('btn-play').disabled = false;
  document.getElementById('dual-panel').style.display = 'none';
  document.getElementById('epoch-label').textContent = '';
  document.getElementById('epoch-bar').style.width = '0%';
  routeGroup.clearLayers();
  if (dnaMap.hasLayer(iceLayerNorth)) dnaMap.removeLayer(iceLayerNorth);
  if (dnaMap.hasLayer(iceLayerAlps))  dnaMap.removeLayer(iceLayerAlps);
  dnaMap.setView([8, 28], 3);
  epochs.forEach(function(_, j) {
    var row = document.getElementById('ep-row-' + j);
    if (row) row.style.backgroundColor = '';
  });
}

// ============================================================
// EPOCHEN-TABELLE
// ============================================================
function buildEpochTable() {
  var tbody = document.getElementById('epoch-tbody');
  if (!tbody) return;
  epochs.forEach(function(ep, i) {
    var tr = document.createElement('tr');
    tr.id = 'ep-row-' + i;
    tr.style.borderBottom = '1px solid #e9ecef';
    tr.style.transition = 'background-color 0.3s';

    var patCell = '<span style="color:#ccc;">—</span>';
    if (ep.pat) {
      var pc = ep.pat.highlight ? END : PAT;
      patCell = '<strong style="color:'+pc+';">'+ep.pat.group+'</strong><br><span style="font-size:0.85em;color:#666;">'+ep.pat.info.replace(/<[^>]*>/g,'')+'</span>';
    }
    var matCell = '<span style="color:#ccc;">—</span>';
    if (ep.mat) {
      var mc = ep.mat.highlight ? END : MAT;
      matCell = '<strong style="color:'+mc+';">'+ep.mat.group+'</strong><br><span style="font-size:0.85em;color:#666;">'+ep.mat.info.replace(/<[^>]*>/g,'')+'</span>';
    }

    var iceNote = ep.ice ? ' \u2744' : '';
    tr.innerHTML =
      '<td style="padding:8px 10px;color:#999;text-align:center;">'+(i+1)+'</td>'+
      '<td style="padding:8px 10px;white-space:nowrap;font-size:0.9em;">'+ep.year+iceNote+'</td>'+
      '<td style="padding:8px 10px;">'+patCell+'</td>'+
      '<td style="padding:8px 10px;">'+matCell+'</td>';

    tr.style.cursor = 'pointer';
    (function(idx) {
      tr.addEventListener('click', function() {
        var e = epochs[idx];
        // Bei Klick: Kamera auf die Phase dieser Epoche setzen
        var cam = cameraPhases[e.phase];
        if (cam) dnaMap.flyTo([cam.lat, cam.lng], cam.zoom, { duration: 1.0 });
        // Marker-Popup öffnen
        var allM = patMarkers.concat(matMarkers);
        allM.forEach(function(mk) {
          var ll = mk.getLatLng();
          if (e.pat && Math.abs(ll.lat - e.pat.lat) < 0.1 && Math.abs(ll.lng - e.pat.lng) < 0.1) mk.openPopup();
          if (e.mat && Math.abs(ll.lat - e.mat.lat) < 0.1 && Math.abs(ll.lng - e.mat.lng) < 0.1) mk.openPopup();
        });
      });
    })(i);
    tbody.appendChild(tr);
  });
}

function highlightEpochRow(i) {
  epochs.forEach(function(_, j) {
    var row = document.getElementById('ep-row-' + j);
    if (row) row.style.backgroundColor = (j === i) ? '#e8eef6' : '';
  });
  var activeRow = document.getElementById('ep-row-' + i);
  if (activeRow) {
    var container = activeRow.closest('.epoch-table-wrap');
    if (container) container.scrollTop = activeRow.offsetTop - container.offsetTop - 60;
  }
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  initDnaMap();
  buildEpochTable();
});
</script>
