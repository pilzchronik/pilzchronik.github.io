---
layout: cover
title: Suche
permalink: /suche/
description: "Volltext-Stichwortsuche auf der Pilz-Chronik Bonusseite – Personen, Orte und Themen aus Werkstatt, Nachweisen und Unterseiten finden."
---

<link href="{{ site.baseurl }}/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="{{ site.baseurl }}/pagefind/pagefind-ui.js"></script>

<section class="bwm-page bwm-suche-page" aria-label="Suche">

  <div class="bwm-page-head">
    <p class="bwm-page-eyebrow">10 Suche</p>
    <h1 class="bwm-page-title">Stichwort-Suche</h1>
    <hr class="bwm-page-line">
    <p class="bwm-page-lead">
      Findet Personen, Orte und Themen in den Beiträgen der Werkstatt, in den Nachweisen
      und auf allen Unterseiten der Bonusseite. Gib einen Begriff ein &mdash;
      die Treffer erscheinen direkt darunter.
    </p>
  </div>

  <div class="bwm-search bwm-search-fullpage">
    <div id="search"></div>
  </div>

</section>

<script>
  window.addEventListener('DOMContentLoaded', function() {
    new PagefindUI({
      element: "#search",
      showSubResults: true,
      excerptLength: 30
    });
    // Vorbelegung aus ?q= (z. B. von der Startseiten-Suche): Feld fuellen + Suche ausloesen.
    // PagefindUI rendert sein Eingabefeld asynchron, daher kurz darauf warten.
    try {
      var q = new URLSearchParams(window.location.search).get('q');
      if (q) {
        var start = new Date().getTime();
        var iv = setInterval(function() {
          var input = document.querySelector('#search input.pagefind-ui__search-input');
          if (input) {
            input.value = q;
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.focus();
            clearInterval(iv);
          } else if (new Date().getTime() - start > 5000) {
            clearInterval(iv);
          }
        }, 120);
      }
    } catch (e) { /* ignore */ }
  });
</script>
