/* =====================================================================
   main.js — Logique du site
   ---------------------------------------------------------------------
   Vous n'avez normalement PAS besoin de modifier ce fichier :
   tous les textes sont dans content.js.

   Sommaire :
     1. Outils
     2. Langue (FR / EN)
     3. Thème (clair / sombre)
     4. Rendu des sections (hero, à propos, projets, compétences, expériences)
     5. Visuels générés pour les projets sans capture d'écran
     6. Fenêtre de détail d'un projet
     7. Navigation (menu mobile, lien actif)
     8. Animations au scroll
     9. Formulaire de contact
    10. Démarrage
   ===================================================================== */
(function () {
  "use strict";

  /* ================================================================
     1. OUTILS
     ================================================================ */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Échappe le texte pour l'insérer sans risque dans du HTML
  const esc = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  // Petite icône réutilisable (voir les <symbol> dans index.html)
  const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;

  // Lecture/écriture sécurisées du stockage local (peut être bloqué)
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* ignoré */ } },
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ================================================================
     2. LANGUE
     ================================================================ */
  let lang = store.get("lang") === "en" ? "en" : "fr"; // français par défaut

  // Récupère un texte d'interface : t("hero.title") → UI[lang].hero.title
  const t = (path) => path.split(".").reduce((obj, key) => (obj ? obj[key] : undefined), UI[lang]);

  // Récupère un texte qui peut être soit une chaîne, soit { fr, en }
  const tr = (val) => (typeof val === "object" && val !== null ? val[lang] : val);

  function applyLanguage() {
    document.documentElement.lang = lang;

    // Tous les éléments marqués data-i18n="chemin.du.texte"
    $$("[data-i18n]").forEach((el) => {
      const txt = t(el.dataset.i18n);
      if (typeof txt === "string") el.textContent = txt;
    });
    $$("[data-i18n-alt]").forEach((el) => (el.alt = t(el.dataset.i18nAlt)));

    // Titre de l'onglet et description (SEO)
    document.title = t("meta.title");
    $('meta[name="description"]').setAttribute("content", t("meta.description"));

    // Boutons d'en-tête
    const langBtn = $("#lang-toggle");
    langBtn.textContent = lang === "fr" ? "EN" : "FR";
    langBtn.setAttribute("aria-label", t("a11y.lang"));
    $("#menu-toggle").setAttribute("aria-label", t("a11y.menu"));
    updateThemeLabel();

    // Lien du CV selon la langue
    $$(".js-cv").forEach((a) => a.setAttribute("href", SITE.cv[lang]));

    renderAll();
  }

  function toggleLanguage() {
    lang = lang === "fr" ? "en" : "fr";
    store.set("lang", lang);
    applyLanguage();
  }

  /* ================================================================
     3. THÈME
     Par défaut, le site suit les préférences du système.
     Le bouton permet de forcer clair ou sombre (mémorisé).
     ================================================================ */
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  const currentTheme = () =>
    document.documentElement.getAttribute("data-theme") || (systemDark.matches ? "dark" : "light");

  function updateThemeLabel() {
    const btn = $("#theme-toggle");
    btn.setAttribute("aria-label", currentTheme() === "dark" ? t("a11y.themeToLight") : t("a11y.themeToDark"));
  }

  function toggleTheme() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    store.set("theme", next);
    updateThemeLabel();
  }

  /* ================================================================
     4. RENDU DES SECTIONS
     ================================================================ */
  let activeFilter = "all";

  function renderHero() {
    $("#availability").innerHTML = t("hero.availability")
      .map((a) => `<div><dt>${esc(a.label)}</dt><dd>${esc(a.value)}</dd></div>`)
      .join("") + `<p class="rhythm">${esc(t("hero.rhythm"))}</p>`;
  }

  function renderAbout() {
    $("#about-paragraphs").innerHTML = t("about.paragraphs").map((p) => `<p>${esc(p)}</p>`).join("");

    $("#education").innerHTML = EDUCATION.map((e) => `
      <li>
        <strong>${esc(e[lang].degree)}</strong>
        <span>${esc(e.school)}</span>
        <span class="muted">${esc(e[lang].period)}</span>
      </li>`).join("");

    $("#languages").innerHTML = t("about.languages")
      .map((l) => `<li><strong>${esc(l.name)}</strong><span class="muted">${esc(l.level)}</span></li>`)
      .join("");

    $("#soft-skills").innerHTML = t("about.soft").map((s) => `<li class="chip">${esc(s)}</li>`).join("");

    $("#hobbies").innerHTML = t("about.hobbies").map((h, i) => `
      <li class="hobby reveal" style="--delay:${i * 80}ms">
        <span class="hobby-icon">${icon(h.icon)}</span>
        <div>
          <h4>${esc(h.name)}</h4>
          <p>${esc(h.text)}</p>
        </div>
      </li>`).join("");

    $("#pipeline").innerHTML = t("about.pipeline").map((step, i) => `
      <li class="pipeline-step reveal" style="--delay:${i * 80}ms">
        <span class="pipeline-icon">${icon(step.icon)}</span>
        <span class="pipeline-num">0${i + 1}</span>
        <h4>${esc(step.title)}</h4>
        <p>${esc(step.text)}</p>
      </li>`).join("");
  }

  function renderFilters() {
    const filters = t("projects.filters");
    $("#project-filters").innerHTML = Object.keys(filters).map((key) => `
      <button type="button" class="filter-btn" data-filter="${key}" aria-pressed="${key === activeFilter}">
        ${esc(filters[key])}
      </button>`).join("");
  }

  // Couverture du projet : l'image choisie dans content.js (champ "image"),
  // sinon le visuel généré. Indépendante des captures d'écran.
  const cardImage = (p) => p.image || "";

  const hasVideos = (p) => Array.isArray(p.videos) && p.videos.length > 0;
  const hasShots = (p) => Array.isArray(p.screenshots) && p.screenshots.length > 0;

  // Transforme un lien vidéo en lecteur intégré :
  //  - YouTube (watch, youtu.be, shorts), Loom, Vimeo → lecteur du site
  //  - sinon, fichier local (.mp4 / .webm)            → lecteur du navigateur
  function videoPlayer(src, label) {
    let m, embed = "";
    if ((m = src.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/))) {
      embed = "https://www.youtube-nocookie.com/embed/" + m[1] + "?rel=0";
    } else if ((m = src.match(/loom\.com\/(?:share|embed)\/(\w+)/))) {
      embed = "https://www.loom.com/embed/" + m[1];
    } else if ((m = src.match(/vimeo\.com\/(?:video\/)?(\d+)/))) {
      embed = "https://player.vimeo.com/video/" + m[1];
    }
    if (embed) {
      return `<iframe src="${esc(embed)}" title="${esc(label)}" loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
    }
    return `<video src="${esc(src)}" controls preload="metadata" playsinline aria-label="${esc(label)}"></video>`;
  }

  // Les boutons d'une carte : Détails · Code · Démo · Vidéo · Captures
  function cardActions(p) {
    const a = t("projects.actions");
    const title = p[lang].title;
    const out = [
      `<a class="btn-sm btn-sm-main" href="#projet/${p.id}" aria-label="${esc(a.details + " : " + title)}">${esc(a.details)} ${icon("arrow-right")}</a>`,
    ];

    if (p.github === "prive") {
      out.push(`<span class="btn-sm is-muted" title="${esc(t("projects.detail.privateNote"))}">${icon("lock")}${esc(a.private)}</span>`);
    } else if (p.github) {
      out.push(`<a class="btn-sm" href="${esc(p.github)}" target="_blank" rel="noopener" aria-label="${esc(a.code + " GitHub : " + title + " " + t("a11y.newTab"))}">${icon("github")}${esc(a.code)}</a>`);
    }

    // Chaque bouton s'affiche dès que l'information est renseignée
    if (p.demo) {
      out.push(`<a class="btn-sm" href="${esc(p.demo)}" target="_blank" rel="noopener" aria-label="${esc(a.demo + " : " + title + " " + t("a11y.newTab"))}">${icon("play")}${esc(a.demo)}</a>`);
    }
    if (hasVideos(p)) {
      out.push(`<a class="btn-sm" href="#projet/${p.id}/videos" aria-label="${esc(a.video + " : " + title)}">${icon("video")}${esc(a.video)}</a>`);
    }
    if (hasShots(p)) {
      out.push(`<a class="btn-sm" href="#projet/${p.id}/captures" aria-label="${esc(a.screenshots + " : " + title)}">${icon("image")}${esc(a.screenshots)}</a>`);
    }

    return `<div class="card-actions">${out.join("")}</div>`;
  }

  function renderProjects() {
    $("#projects-grid").innerHTML = PROJECTS.map((p, i) => {
      const txt = p[lang];
      const hidden = activeFilter !== "all" && !p.categories.includes(activeFilter);
      return `
      <li class="project-card reveal" data-categories="${p.categories.join(" ")}" style="--delay:${(i % 3) * 80}ms"${hidden ? " hidden" : ""}>
        <div class="card-media">
          ${cardImage(p) ? `<img src="${esc(cardImage(p))}" alt="" loading="lazy">` : cover(p.cover, p.id)}
          ${p.pro ? `<span class="badge-pro">${icon("briefcase")}${esc(t("projects.pro"))}</span>` : ""}
        </div>
        <div class="card-body">
          <p class="card-label">${esc(txt.label)}</p>
          <h3 class="card-title">
            <a href="#projet/${p.id}" class="card-link">${esc(txt.title)}</a>
          </h3>
          <p class="card-summary">${esc(txt.summary)}</p>
          <ul class="tags">${p.stack.slice(0, 4).map((s) => `<li class="tag">${esc(s)}</li>`).join("")}${
            p.stack.length > 4 ? `<li class="tag tag-more">+${p.stack.length - 4}</li>` : ""}</ul>
          ${cardActions(p)}
        </div>
      </li>`;
    }).join("");
  }

  function renderSkills() {
    $("#skills-grid").innerHTML = SKILLS.map((cat, i) => `
      <article class="skill-card reveal" style="--delay:${(i % 3) * 80}ms">
        <h3><span class="skill-icon">${icon(cat.icon)}</span>${esc(tr(cat.name))}</h3>
        <ul class="tags">${cat.items.map((it) => `<li class="tag">${esc(tr(it))}</li>`).join("")}</ul>
      </article>`).join("");
  }

  function renderExperience() {
    $("#timeline").innerHTML = EXPERIENCES.map((xp) => {
      const txt = xp[lang];
      return `
      <li class="timeline-item reveal">
        <span class="timeline-dot" aria-hidden="true"></span>
        <article class="xp-card">
          <header class="xp-head">
            <div>
              <h3>${esc(txt.role)} <span class="xp-company">· ${esc(xp.company)}</span></h3>
              <p class="xp-meta">
                <span>${icon("calendar")}${esc(txt.period)}</span>
                <span>${icon("map-pin")}${esc(xp.location)}</span>
              </p>
            </div>
          </header>
          <p class="xp-context"><strong>${esc(t("experience.context"))} :</strong> ${esc(txt.context)}</p>
          <h4 class="xp-subtitle">${esc(t("experience.missions"))}</h4>
          <ul class="xp-missions">${txt.missions.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
          <p class="xp-impact">${icon("target")}<span><strong>${esc(t("experience.impact"))} :</strong> ${esc(txt.impact)}</span></p>
          <ul class="tags">${xp.stack.map((s) => `<li class="tag">${esc(s)}</li>`).join("")}</ul>
          ${xp.projectId ? `<a class="text-link" href="#projet/${xp.projectId}">${esc(t("experience.seeProject"))} ${icon("arrow-right")}</a>` : ""}
        </article>
      </li>`;
    }).join("");
  }

  function renderAll() {
    renderHero();
    renderAbout();
    renderFilters();
    renderProjects();
    renderSkills();
    renderExperience();
    observeReveals();
    // Si un projet est ouvert, on le réaffiche dans la nouvelle langue
    if (dialog.open && openProjectId) fillDialog(openProjectId);
  }

  /* ================================================================
     5. VISUELS GÉNÉRÉS
     Illustrations abstraites (SVG) affichées tant qu'aucune capture
     n'est renseignée dans content.js (champ "image").
     Les couleurs viennent du CSS : elles s'adaptent au thème.
     ================================================================ */
  // Générateur pseudo-aléatoire « stable » : même résultat à chaque chargement
  function seeded(seed) {
    let s = seed;
    return () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  }

  function cover(type, id) {
    const W = 400, H = 225;
    let art = "";

    switch (type) {
      case "chat": // Bulles de conversation (assistant RAG)
        art = `
          <rect x="70" y="46" width="170" height="46" rx="14" class="c-soft"/>
          <rect x="88" y="62" width="110" height="6" rx="3" class="c-prim" opacity=".45"/>
          <rect x="88" y="74" width="70" height="6" rx="3" class="c-prim" opacity=".3"/>
          <rect x="150" y="108" width="180" height="70" rx="14" class="c-acc"/>
          <rect x="168" y="126" width="130" height="6" rx="3" class="c-on" opacity=".9"/>
          <rect x="168" y="140" width="144" height="6" rx="3" class="c-on" opacity=".7"/>
          <rect x="168" y="154" width="90" height="6" rx="3" class="c-on" opacity=".5"/>
          <circle cx="52" cy="69" r="10" class="c-prim"/>`;
        break;

      case "traffic": // Carrefour et feux
        art = `
          <rect x="0" y="92" width="${W}" height="42" class="c-soft"/>
          <rect x="178" y="0" width="44" height="${H}" class="c-soft"/>
          <path d="M0 113 H170 M230 113 H${W}" class="c-line-strong" stroke-dasharray="10 10"/>
          <path d="M200 0 V84 M200 142 V${H}" class="c-line-strong" stroke-dasharray="10 10"/>
          <rect x="236" y="38" width="22" height="48" rx="6" class="c-prim"/>
          <circle cx="247" cy="52" r="6" class="c-muted"/><circle cx="247" cy="71" r="6" class="c-acc"/>
          <rect x="142" y="140" width="22" height="48" rx="6" class="c-prim"/>
          <circle cx="153" cy="154" r="6" class="c-acc"/><circle cx="153" cy="173" r="6" class="c-muted"/>
          <rect x="60" y="100" width="34" height="12" rx="4" class="c-prim"/>
          <rect x="300" y="116" width="34" height="12" rx="4" class="c-acc"/>
          <rect x="185" y="30" width="12" height="30" rx="4" class="c-acc"/>`;
        break;

      case "agents": { // Réseau d'agents
        const nodes = [[200, 112, 18], [110, 60, 11], [300, 58, 11], [92, 162, 11], [310, 166, 11], [200, 30, 8], [200, 196, 8]];
        const edges = [[0, 1], [0, 2], [0, 3], [0, 4], [1, 5], [2, 5], [3, 6], [4, 6], [1, 3], [2, 4]];
        art = edges.map(([a, b]) => `<line x1="${nodes[a][0]}" y1="${nodes[a][1]}" x2="${nodes[b][0]}" y2="${nodes[b][1]}" class="c-line-strong"/>`).join("")
          + nodes.map(([x, y, r], i) => `<circle cx="${x}" cy="${y}" r="${r}" class="${i === 0 ? "c-acc" : "c-prim"}"/>`).join("")
          + `<circle cx="200" cy="112" r="30" class="c-ring"/>`;
        break;
      }

      case "flow": { // Pipeline ETL → Data Warehouse → BI
        const box = (x, label, cls) => `
          <rect x="${x}" y="84" width="84" height="56" rx="10" class="${cls}"/>
          <text x="${x + 42}" y="117" text-anchor="middle" class="c-text${cls === "c-acc" ? " on" : ""}">${label}</text>`;
        art = box(30, "SOURCES", "c-soft") + box(158, "ETL", "c-prim-box") + box(286, "DWH", "c-acc")
          + `<path d="M118 112 H152 M246 112 H280" class="c-line-strong" marker-end="url(#arr-${id})"/>
             <rect x="286" y="160" width="10" height="24" rx="2" class="c-prim" opacity=".5"/>
             <rect x="302" y="150" width="10" height="34" rx="2" class="c-prim" opacity=".7"/>
             <rect x="318" y="164" width="10" height="20" rx="2" class="c-prim" opacity=".5"/>
             <rect x="334" y="144" width="10" height="40" rx="2" class="c-acc"/>
             <rect x="350" y="156" width="10" height="28" rx="2" class="c-prim" opacity=".7"/>`;
        break;
      }

      case "bars": { // Graphique en barres (dashboard)
        const vals = [0.45, 0.62, 0.55, 0.78, 0.7, 0.88, 0.66, 0.92];
        art = `<path d="M50 190 H360" class="c-line-strong"/>`
          + vals.map((v, i) => {
            const h = v * 140, x = 64 + i * 37;
            return `<rect x="${x}" y="${190 - h}" width="24" height="${h}" rx="4" class="${i === 5 ? "c-acc" : "c-prim"}" opacity="${i === 5 ? 1 : 0.35 + v * 0.4}"/>`;
          }).join("")
          + `<polyline points="${vals.map((v, i) => `${76 + i * 37},${180 - v * 140}`).join(" ")}" class="c-line-acc"/>`;
        break;
      }

      case "cluster": { // Nuages de points K-Means
        const rnd = seeded(7);
        const centers = [[120, 80, "c-prim"], [270, 70, "c-acc"], [210, 160, "c-muted"]];
        art = centers.map(([cx, cy, cls]) => {
          let dots = "";
          for (let i = 0; i < 18; i++) {
            const a = rnd() * Math.PI * 2, r = rnd() * 42;
            dots += `<circle cx="${(cx + Math.cos(a) * r).toFixed(1)}" cy="${(cy + Math.sin(a) * r * 0.8).toFixed(1)}" r="4" class="${cls}" opacity=".75"/>`;
          }
          return dots + `<path d="M${cx - 8} ${cy} H${cx + 8} M${cx} ${cy - 8} V${cy + 8}" class="c-cross"/>`;
        }).join("");
        break;
      }

      case "tree": { // Arbre de décision
        const n = [[200, 40], [120, 105], [280, 105], [75, 170], [165, 170], [240, 170], [325, 170]];
        const e = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]];
        art = e.map(([a, b]) => `<line x1="${n[a][0]}" y1="${n[a][1]}" x2="${n[b][0]}" y2="${n[b][1]}" class="c-line-strong"/>`).join("")
          + n.map(([x, y], i) => i < 3
            ? `<rect x="${x - 26}" y="${y - 14}" width="52" height="28" rx="8" class="c-prim-box"/>`
            : `<circle cx="${x}" cy="${y}" r="14" class="${i === 4 || i === 6 ? "c-acc" : "c-soft"}"/>`).join("");
        break;
      }

      case "cnn": { // Couches d'un réseau convolutif
        const stack = (x, size, count, cls) => {
          let s = "";
          for (let i = count - 1; i >= 0; i--) {
            s += `<rect x="${x + i * 8}" y="${112 - size / 2 - i * 8}" width="${size}" height="${size}" rx="6" class="${cls}" opacity="${1 - i * 0.18}"/>`;
          }
          return s;
        };
        art = stack(40, 96, 3, "c-soft") + stack(170, 70, 4, "c-prim-box") + stack(270, 44, 5, "c-prim")
          + `<circle cx="360" cy="92" r="9" class="c-acc"/><circle cx="360" cy="124" r="9" class="c-muted"/>`;
        break;
      }

      case "topics": { // Thématiques extraites de textes
        const rows = [0.9, 0.72, 0.6, 0.48, 0.35];
        art = rows.map((v, i) => `
          <rect x="120" y="${42 + i * 30}" width="${v * 230}" height="16" rx="8" class="${i === 0 ? "c-acc" : "c-prim"}" opacity="${i === 0 ? 1 : 0.8 - i * 0.12}"/>
          <text x="104" y="${55 + i * 30}" text-anchor="end" class="c-text">#</text>`).join("")
          + `<rect x="36" y="40" width="46" height="34" rx="10" class="c-soft"/><rect x="48" y="84" width="46" height="34" rx="10" class="c-soft"/>`;
        break;
      }
    }

    return `
      <svg class="cover" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <defs>
          <pattern id="dots-${id}" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" class="c-dot"/></pattern>
          <marker id="arr-${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="c-prim"/></marker>
        </defs>
        <rect width="${W}" height="${H}" class="c-bg"/>
        <rect width="${W}" height="${H}" fill="url(#dots-${id})"/>
        ${art}
      </svg>`;
  }

  /* ================================================================
     6. DÉTAIL D'UN PROJET
     L'URL change en #projet/identifiant : le lien est partageable,
     et le bouton « retour » du navigateur ferme la fenêtre.
     ================================================================ */
  const dialog = $("#project-dialog");
  let openProjectId = null;
  let lastFocused = null;

  // Boutons en haut de la fenêtre de détail
  function dialogActions(p) {
    const d = t("projects.detail");
    const btns = [];
    if (p.demo) {
      btns.push(`<a class="btn btn-primary" href="${esc(p.demo)}" target="_blank" rel="noopener">${icon("play")}${esc(d.demo)}<span class="visually-hidden"> ${esc(t("a11y.newTab"))}</span></a>`);
    }
    if (p.github === "prive") {
      btns.push(`<p class="private-note">${icon("lock")}${esc(d.privateNote)}</p>`);
    } else if (p.github) {
      btns.push(`<a class="btn btn-ghost" href="${esc(p.github)}" target="_blank" rel="noopener">${icon("github")}${esc(d.github)}<span class="visually-hidden"> ${esc(t("a11y.newTab"))}</span></a>`);
    }
    return btns.length ? `<div class="dialog-actions">${btns.join("")}</div>` : "";
  }

  function fillDialog(id) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return false;
    const txt = p[lang];
    const d = t("projects.detail");

    $("#dialog-content").innerHTML = `
      <button class="icon-btn dialog-close" type="button" aria-label="${esc(t("a11y.close"))}">${icon("x")}</button>
      <div class="dialog-media">
        ${cardImage(p) ? `<img src="${esc(cardImage(p))}" alt="">` : cover(p.cover, p.id + "-d")}
      </div>
      <div class="dialog-body">
        <p class="card-label">${esc(txt.label)}</p>
        <h2 id="dialog-title">${esc(txt.title)}</h2>
        <p class="dialog-summary">${esc(txt.summary)}</p>
        ${dialogActions(p)}

        <div class="detail-block">
          <h3>${icon("search")}${esc(d.context)}</h3>
          <p>${esc(txt.context)}</p>
        </div>
        <div class="detail-block">
          <h3>${icon("layers")}${esc(d.stack)}</h3>
          <ul class="tags">${p.stack.map((s) => `<li class="tag">${esc(s)}</li>`).join("")}</ul>
        </div>
        <div class="detail-block">
          <h3>${icon("list")}${esc(d.steps)}</h3>
          <ol class="steps">${txt.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
        </div>
        <div class="detail-block">
          <h3>${icon("target")}${esc(d.results)}</h3>
          <ul class="results">${txt.results.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
        </div>
        ${hasVideos(p) ? `
        <div class="detail-block" id="videos">
          <h3>${icon("video")}${esc(d.videos)}</h3>
          <ul class="video-list">${p.videos.map((src, i) => `
            <li class="video-frame">${videoPlayer(src, d.videos + " " + (i + 1) + " – " + txt.title)}</li>`).join("")}
          </ul>
        </div>` : ""}
        ${hasShots(p) ? `
        <div class="detail-block" id="gallery">
          <h3>${icon("image")}${esc(d.gallery)}</h3>
          <ul class="gallery">${p.screenshots.map((src, i) => `
            <li><a href="${esc(src)}" target="_blank" rel="noopener">
              <img src="${esc(src)}" alt="${esc(d.gallery + " " + (i + 1) + " – " + txt.title)}" loading="lazy">
            </a></li>`).join("")}
          </ul>
        </div>` : ""}
        <div class="detail-block learnings">
          <h3>${icon("bulb")}${esc(d.learnings)}</h3>
          <p>${esc(txt.learnings)}</p>
        </div>

      </div>`;

    $(".dialog-close", dialog).addEventListener("click", () => dialog.close());
    return true;
  }

  function openProject(id) {
    if (!fillDialog(id)) return;
    openProjectId = id;
    if (!dialog.open) {
      lastFocused = document.activeElement;
      dialog.showModal();
      document.body.classList.add("no-scroll");
    }
    dialog.scrollTop = 0;
  }

  // Lit l'URL : ouvre ou ferme la fenêtre en conséquence
  function handleHash() {
    // #projet/id, #projet/id/captures ou #projet/id/videos
    const match = location.hash.match(/^#projet\/([\w-]+)(?:\/(captures|videos))?$/);
    if (match) {
      openProject(match[1]);
      const target = match[2] && $(match[2] === "videos" ? "#videos" : "#gallery", dialog);
      if (target) target.scrollIntoView({ block: "start" });
    }
    else if (dialog.open) dialog.close();
  }

  dialog.addEventListener("close", () => {
    openProjectId = null;
    document.body.classList.remove("no-scroll");
    // Vide la fenêtre : arrête toute vidéo en cours de lecture
    $("#dialog-content").innerHTML = "";
    // Nettoie l'URL sans faire défiler la page
    if (location.hash.startsWith("#projet/")) history.replaceState(null, "", location.pathname + location.search);
    if (lastFocused) lastFocused.focus({ preventScroll: true });
  });

  // Clic sur le fond sombre → fermeture
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });

  /* ================================================================
     7. NAVIGATION
     ================================================================ */
  function setupNav() {
    const header = $(".site-header");
    const nav = $("#main-nav");
    const menuBtn = $("#menu-toggle");

    const closeMenu = () => {
      nav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    };

    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    $$("a", nav).forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

    // Ombre sous l'en-tête dès qu'on défile
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Surligne dans le menu la section actuellement visible
    const links = $$("a", nav);
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => {
          const active = l.getAttribute("href") === "#" + entry.target.id;
          l.classList.toggle("is-active", active);
          if (active) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach((s) => spy.observe(s));
  }

  /* ================================================================
     8. ANIMATIONS AU SCROLL
     Les éléments .reveal apparaissent en fondu quand ils entrent à l'écran.
     ================================================================ */
  const revealer = "IntersectionObserver" in window && !reduceMotion
    ? new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;

  function observeReveals() {
    $$(".reveal:not(.is-visible)").forEach((el) => {
      if (revealer) revealer.observe(el);
      else el.classList.add("is-visible");
    });
  }

  /* ================================================================
     9. FORMULAIRE DE CONTACT (Formspree)
     ================================================================ */
  function setupForm() {
    const form = $("#contact-form");
    const status = $("#form-status");
    const button = $("button[type=submit]", form);

    const showStatus = (msg, type, withEmail) => {
      status.className = "form-status " + type;
      status.innerHTML = esc(msg) + (withEmail ? `<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>.` : "");
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Vérification simple des champs (messages natifs du navigateur)
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (!SITE.formspreeId) {
        showStatus(t("contact.notConfigured"), "error", true);
        return;
      }

      button.disabled = true;
      showStatus(t("contact.sending"), "pending");
      try {
        const res = await fetch("https://formspree.io/f/" + SITE.formspreeId, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });
        if (!res.ok) throw new Error("HTTP " + res.status);
        form.reset();
        showStatus(t("contact.success"), "success");
      } catch (err) {
        showStatus(t("contact.error"), "error", true);
      } finally {
        button.disabled = false;
      }
    });
  }

  /* ================================================================
     10. DÉMARRAGE
     ================================================================ */
  function init() {
    // Liens personnels (définis une seule fois dans content.js → SITE)
    $$(".js-linkedin").forEach((a) => (a.href = SITE.linkedin));
    $$(".js-github").forEach((a) => (a.href = SITE.github));
    $$(".js-email").forEach((a) => (a.href = "mailto:" + SITE.email));
    $$(".js-email-text").forEach((el) => (el.textContent = SITE.email));
    $$(".js-photo").forEach((img) => (img.src = SITE.photo));
    $("#year").textContent = new Date().getFullYear();

    // Filtres de projets (délégation : un seul écouteur pour tous les boutons)
    $("#project-filters").addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeFilter = btn.dataset.filter;
      $$(".filter-btn").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      $$(".project-card").forEach((card) => {
        const show = activeFilter === "all" || card.dataset.categories.split(" ").includes(activeFilter);
        card.hidden = !show;
        if (show) card.classList.add("is-visible");
      });
    });

    $("#lang-toggle").addEventListener("click", toggleLanguage);
    $("#theme-toggle").addEventListener("click", toggleTheme);
    systemDark.addEventListener("change", updateThemeLabel);

    applyLanguage(); // affiche tout le contenu
    setupNav();
    setupForm();

    window.addEventListener("hashchange", handleHash);
    handleHash(); // ouvre directement un projet si l'URL le demande
  }

  init();
})();
