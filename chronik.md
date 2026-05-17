---
layout: default
title: Chronik lesen
permalink: /chronik/
sitemap: false
---

<meta name="robots" content="noindex, nofollow">

<div class="pw-container" id="pw-gate">
  <h2>Chronik lesen</h2>
  <p>Diese Seite ist den Besitzern der gedruckten Pilz-Chronik vorbehalten. Das Passwort findest du im Buch.</p>
  <input type="password" class="pw-input" id="pw-field" placeholder="Passwort" onkeydown="if(event.key==='Enter') checkPw()">
  <br>
  <button class="pw-btn" onclick="checkPw()">Zugang</button>
  <div class="pw-error" id="pw-error">Falsches Passwort.</div>
</div>

<div class="chronik-content" id="chronik-content">
  <h2>Pilz-Chronik – Band 1 & 2</h2>
  <p style="color:#666; margin-bottom:30px;">Die vollständigen Bände als PDF. Bitte nur zum persönlichen Gebrauch – einige Abbildungen sind ausschließlich für die private Nutzung lizenziert.</p>

  <div class="band-section">
    <h3>Band 1</h3>
    <embed src="{{ '/assets/Band_1-kompr.pdf' | relative_url }}" type="application/pdf" class="pdf-embed">
    <br><a href="{{ '/assets/Band_1-kompr.pdf' | relative_url }}" class="download-link" download>↓ Band 1 herunterladen (PDF)</a>
  </div>

  <div class="band-section">
    <h3>Band 2</h3>
    <embed src="{{ '/assets/Band_2-kompr.pdf' | relative_url }}" type="application/pdf" class="pdf-embed">
    <br><a href="{{ '/assets/Band_2-kompr.pdf' | relative_url }}" class="download-link" download>↓ Band 2 herunterladen (PDF)</a>
  </div>
</div>

<script>
function checkPw() {
  var input = document.getElementById('pw-field').value;
  if (input === 'pilz') {
    document.getElementById('pw-gate').style.display = 'none';
    document.getElementById('chronik-content').style.display = 'block';
  } else {
    document.getElementById('pw-error').style.display = 'block';
    document.getElementById('pw-field').value = '';
  }
}
</script>
