---
layout: cover
title: Startseite
description: "Bonusseite zur gedruckten Pilz-Chronik (Band 1 & 2). Werkstatt mit Korrekturen, Quellenfunden und Forschungsstand zur Familie Pilz/Pültz in Sachsen, Böhmen und Tirol."
---

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
      <img id="bwm-hero-img" src="{{ '/assets/images/hilda-und-alois-pilz-um-1966.jpg' | relative_url }}" alt="Hilda und Alois Pilz, um 1966">
      <figcaption id="bwm-hero-cap" class="bwm-photo-cap">Hilda und Alois Pilz, um 1966</figcaption>
    </div>
  </figure>
</section>

<script>
  // Wechselndes Titelbild: bei jedem Aufruf zufaellig eines aus der Liste.
  // Liste pflegen = hier Eintraege ergaenzen/entfernen (Pfad + Bildunterschrift).
  (function () {
    var pics = [
      { src: "{{ '/assets/images/hilda-und-alois-pilz-um-1966.jpg' | relative_url }}", cap: "Hilda und Alois Pilz, um 1966" },
      { src: "{{ '/assets/images/familie-reider-um-1915.jpg' | relative_url }}", cap: "Familie Reider, um 1915" },
      { src: "{{ '/assets/images/franz-und-theresia-hofmann.jpg' | relative_url }}", cap: "Franz Hofmann (1853–1927) und Theresia Hofmann, geb. Foh (1853–1946)" },
      { src: "{{ '/assets/images/jaeger-und-foerster-boehmen.jpg' | relative_url }}", cap: "Jäger und Förster in Böhmen, rechts Alois Johann Pilz" },
      { src: "{{ '/assets/images/eberstaller-mit-tochter-hilda.jpg' | relative_url }}", cap: "Johann und Katharina Eberstaller, geb. Reider, mit Tochter Hilda" }
    ];
    var p = pics[Math.floor(Math.random() * pics.length)];
    var img = document.getElementById('bwm-hero-img');
    var cap = document.getElementById('bwm-hero-cap');
    if (img) { img.src = p.src; img.alt = p.cap; }
    if (cap) { cap.textContent = p.cap; }
  })();
</script>

<section class="pc-access" aria-label="Suche und Chat-Assistent">
  <div class="pc-access-inner">

    {%- comment -%} Stichwort-Suche (links) — treibt die bestehende Pagefind-Suche {%- endcomment -%}
    <div class="pc-access-col">
      <p class="pc-access-label">Stichwort-Suche</p>
      <h2 class="pc-access-title">Auf dieser Webseite st&ouml;bern</h2>
      <p class="pc-access-meta">Personen, Orte und Themen quer durch alle Beitr&auml;ge &mdash; Volltextsuche &uuml;ber die ganze Seite.</p>
      <form class="pc-access-input" id="bwm-search-form" action="{{ '/suche/' | relative_url }}" method="get" autocomplete="off">
        <input type="search" id="bwm-search-input" name="q" placeholder="Person, Ort oder Thema suchen &hellip;" aria-label="Stichwort-Suche">
        <button type="submit" aria-label="Suchen">
          <svg class="pc-access-input-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="7" stroke="currentColor" stroke-width="2" fill="none"/><line x1="15.8" y1="15.8" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
      </form>
      <div class="pc-access-examples" aria-label="Suchbeispiele">
        <button type="button" class="pc-access-example" data-search="D&ouml;rnthal">D&ouml;rnthal</button>
        <button type="button" class="pc-access-example" data-search="Eberstaller">Eberstaller</button>
        <button type="button" class="pc-access-example" data-search="DNA">DNA</button>
      </div>
    </div>

    <div class="pc-access-divider" aria-hidden="true"></div>

    {%- comment -%} Chat-Assistent (rechts) — Handoff v5, Variante 2 (Button,
       Vorrang vor dem Prototyp): KEIN Fake-Eingabefeld (verwirrt, weil man
       hineinschreiben will, es oeffnet aber nur den Bot). Stattdessen ein
       vollbreiter, dunkelblauer Button in gleicher Groesse wie das Suchfeld. {%- endcomment -%}
    <div class="pc-access-col">
      <p class="pc-access-label">Chat-Assistent</p>
      <h2 class="pc-access-title">Das Familienarchiv fragen</h2>
      <p class="pc-access-meta">Kennt die <em>gesamte</em> Pilz-Familienforschung &mdash; auch das, was nicht auf dieser Webseite steht (Stand M&auml;rz 2026).</p>
      <button type="button" class="pc-access-input pc-access-input--chat" id="bwm-chat-open">
        <span class="pc-access-cta-label">Chat-Assistent &ouml;ffnen</span>
        <span class="pc-access-cta-icon" aria-hidden="true">
          <svg class="pc-access-input-icon" focusable="false" viewBox="0 0 24 24"><path d="M5 12 H18 M13 7 L18 12 L13 17" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
      </button>
      <div class="pc-access-examples" aria-label="Beispiel-Fragen">
        <button type="button" class="pc-access-example" data-chat>Woher stammt der Name Pilz?</button>
        <button type="button" class="pc-access-example" data-chat>Was sagt die DNA?</button>
      </div>
      <p class="pc-access-note">&Ouml;ffnet das Chat-Fenster rechts unten.</p>
    </div>

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
    // Such-Beispielchips: Begriff ins Suchfeld setzen und zur Suche-Seite gehen
    document.querySelectorAll('.pc-access-example[data-search]').forEach(function(chip) {
      chip.addEventListener('click', function() {
        var field = document.getElementById('bwm-search-input');
        var form  = document.getElementById('bwm-search-form');
        if (field && form) { field.value = chip.getAttribute('data-search'); form.submit(); }
      });
    });

    // Chat-Assistent: Button + Beispiel-Chips oeffnen das Chatling-Widget.
    function bwmOpenChat() {
      if (window.Chatling && typeof window.Chatling.open === 'function') {
        try { window.Chatling.open(); } catch (e) { /* ignore */ }
      }
    }
    var chatBtn = document.getElementById('bwm-chat-open');
    if (chatBtn) chatBtn.addEventListener('click', bwmOpenChat);
    document.querySelectorAll('.pc-access-example[data-chat]').forEach(function(chip) {
      chip.addEventListener('click', bwmOpenChat);
    });
  });
</script>
