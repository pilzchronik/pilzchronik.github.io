---
layout: cover
title: Startseite
description: "Bonusseite zur gedruckten Pilz-Chronik (Band 1 & 2). Werkstatt mit Korrekturen, Quellenfunden und Forschungsstand zur Familie Pilz/Pültz in Sachsen, Böhmen und Tirol."
---

<link href="{{ site.baseurl }}/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="{{ site.baseurl }}/pagefind/pagefind-ui.js"></script>

<section class="bwm-hero" aria-label="Hero">
  <div class="bwm-hero-copy">
    <p class="bwm-hero-eyebrow">Familienchronik &middot; zwei B&auml;nde</p>
    <h1 class="bwm-hero-title">Pilz-Chronik</h1>
    <p class="bwm-hero-author">Wolfgang Pilz</p>
    <hr class="bwm-hero-accent">
    <p class="bwm-hero-lead">Korrekturen, neue Forschungsergebnisse und Materialien zu beiden B&auml;nden.</p>
  </div>

  <figure class="bwm-hero-figure">
    <div class="bwm-photo">
      <img src="{{ '/assets/images/hilda-und-alois-pilz-um-1966.jpg' | relative_url }}" alt="Hilda und Alois Pilz, um 1966" width="1200" height="863">
      <figcaption class="bwm-photo-cap">Hilda und Alois Pilz, um 1966</figcaption>
    </div>
  </figure>
</section>

<section class="bwm-tools" aria-label="Suche und Chat">
  <div class="bwm-tool bwm-tool-search">
    <p class="bwm-tool-label">Stichwort-Suche &mdash; auf dieser Webseite st&ouml;bern</p>
    <div id="search" class="bwm-search"></div>
  </div>
  <div class="bwm-tool bwm-tool-chat">
    <p class="bwm-tool-label">Chat-Assistent &mdash; eine Frage frei formulieren</p>
    <p class="bwm-tool-text">Kennt die <em>gesamte</em> Pilz-Familienforschung &mdash; auch das, was nicht auf dieser Webseite steht (Stand M&auml;rz 2026). Antworten in S&auml;tzen, sofort.</p>
    <button type="button" class="bwm-chat-cue" id="bwm-chat-open">Sprechblase rechts unten <svg class="bwm-chat-cue-arrow" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M6 6 L18 18 M18 11 L18 18 L11 18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
  </div>
</section>

<section class="bwm-primary" aria-label="Hauptbereiche">
  <p class="bwm-primary-eyebrow">Hauptbereiche</p>
  <div class="bwm-primary-list">
    <a class="bwm-primary-item" href="{{ '/werkstatt/' | relative_url }}">
      <span class="bwm-primary-item-num">01</span>
      <h2 class="bwm-primary-item-title">Werkstatt</h2>
      <p class="bwm-primary-item-body">Korrekturen und neue Funde seit Drucklegung &mdash; Errata, Quellenfunde, offene Fragen. Jeder Beitrag ist eine Momentaufnahme: Er gibt den Forschungsstand seines Datums wieder, nicht das letzte Wort.</p>
      <span class="bwm-primary-item-cta">Eintr&auml;ge ansehen &rarr;</span>
    </a>

    <a class="bwm-primary-item" href="{{ '/orte/' | relative_url }}">
      <span class="bwm-primary-item-num">02</span>
      <h2 class="bwm-primary-item-title">Karte &amp; Orte</h2>
      <p class="bwm-primary-item-body">Interaktive Familienkarte, Ortsverzeichnis und Ortsnamenlexikon B&ouml;hmen.</p>
      <span class="bwm-primary-item-cta">Karte &ouml;ffnen &rarr;</span>
    </a>

    <a class="bwm-primary-item" href="{{ '/dna-analyse/' | relative_url }}">
      <span class="bwm-primary-item-num">03</span>
      <h2 class="bwm-primary-item-title">DNA-Analyse</h2>
      <p class="bwm-primary-item-body">Haplogruppen und was die Genetik &uuml;ber die Familienherkunft sagt.</p>
      <span class="bwm-primary-item-cta">DNA ansehen &rarr;</span>
    </a>

    <a class="bwm-primary-item" href="{{ '/nachweise/' | relative_url }}">
      <span class="bwm-primary-item-num">04</span>
      <h2 class="bwm-primary-item-title">Nachweise</h2>
      <p class="bwm-primary-item-body">Quellen, Archive, Inhalt &amp; Index, Abbildungsverzeichnis.</p>
      <span class="bwm-primary-item-cta">Nachweise durchsuchen &rarr;</span>
    </a>

    <a class="bwm-primary-item" href="{{ '/zeitleiste/' | relative_url }}">
      <span class="bwm-primary-item-num">05</span>
      <h2 class="bwm-primary-item-title">Zeitleiste</h2>
      <p class="bwm-primary-item-body">Chronologische &Uuml;bersicht der Familienereignisse &uuml;ber beide B&auml;nde.</p>
      <span class="bwm-primary-item-cta">Zeitleiste &ouml;ffnen &rarr;</span>
    </a>

    <a class="bwm-primary-item" href="{{ '/stammbaum/' | relative_url }}">
      <span class="bwm-primary-item-num">06</span>
      <h2 class="bwm-primary-item-title">Stammbaum</h2>
      <p class="bwm-primary-item-body">Diagramme als PDF und Hauptzugang zur Webseite Pilz Vorfahren mit Personen, Familien, Orten und Quellen.</p>
      <span class="bwm-primary-item-cta">Stammbaum &ouml;ffnen &rarr;</span>
    </a>
  </div>
</section>

<script>
  window.addEventListener('DOMContentLoaded', function() {
    if (typeof PagefindUI !== 'undefined') {
      new PagefindUI({
        element: "#search",
        showSubResults: true,
        excerptLength: 30,
        translations: {
          placeholder: "Person, Ort oder Thema suchen …",
          zero_results: "Nichts gefunden für „[SEARCH_TERM]“",
          many_results: "[COUNT] Treffer",
          one_result: "1 Treffer"
        }
      });
    }
    var chatBtn = document.getElementById('bwm-chat-open');
    if (chatBtn) {
      chatBtn.addEventListener('click', function() {
        if (window.Chatling && typeof window.Chatling.open === 'function') {
          window.Chatling.open();
        }
      });
    }
  });
</script>
