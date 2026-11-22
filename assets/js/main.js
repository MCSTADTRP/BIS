(function () {
  "use strict";

  var I18N = {
    de: {
      nav_home: "Home", nav_tattoos: "Tattoos", nav_team: "Mitarbeiter", nav_location: "Standort",
      hero_tagline: "BIS — Bandar Inc Society · Central-Bay",
      hero_desc: "Du möchtest deinem Körper Permanente Tinte verpassen? Hier bist du Richtig!",
      hero_cta1: "Galerie entdecken", hero_cta2: "Standort ansehen", hero_scroll: "Scroll",
      gallery_eyebrow: "Die Galerie", gallery_title: "TATTOOS", add: "Hinzufügen",
      gallery_search: "Information durchsuchen, z.B. Schädel…", cat_all: "Alle",
      col_price: "Preis", col_number: "Nr.", col_image: "Bild", col_sessions: "Sitzungen", col_info: "Information",
      gallery_empty: "Noch keine Tattoos in dieser Kategorie", gallery_noresults: "Keine Treffer",
      confirm_tattoo: "Dieses Tattoo entfernen?", confirm_staff: "Diesen Mitarbeiter entfernen?",
      team_eyebrow: "Die Kuratoren", team_title: "MITARBEITER",
      team_sub: "Präzision ohne Kompromiss. Zertifiziert in Hygiene und Sterilisation.",
      grp_artist: "Tätowierer", grp_assist: "Assistenz", team_empty: "Noch keine Mitarbeiter",
      loc_eyebrow: "Das Refugium", loc_title: "STANDORT", loc_reception: "Empfang", loc_room: "Tattoo-Saal",
      loc_map: "Central-Bay · United-Islands", loc_map_hint: "Ziehen · Zoomen",
      loc_address: "Adresse", loc_phone: "Telefon",
      footer_nav: "Navigation", footer_contact: "Kontakt",
      footer_copy: "© 2026 Bandar Inc Society (BIS). Alle Rechte vorbehalten.",
      cat_face: "Gesicht", cat_chest: "Brust", cat_back: "Rücken", cat_armR: "Arm Rechts", cat_armL: "Arm Links", cat_legR: "Bein Rechts", cat_legL: "Bein Links",
      td_title: "Tattoo hinzufügen", td_image: "Bild", td_number: "Tattoo-Nr.", td_price: "Preis", td_info: "Information",
      td_sessions: "Sitzungen", td_category: "Kategorie", td_ph_number: "z.B. 7", td_ph_price: "z.B. 480",
      td_ph_sessions: "z.B. 3", td_ph_info: "Was ist das für ein Tattoo?",
      sd_title: "Mitarbeiter hinzufügen", sd_image: "Porträt (optional)", sd_name: "Name", sd_role: "Rolle",
      sd_phone: "Telefon (optional)", sd_ph_name: "z.B. Imran Kumar", sd_ph_phone: "z.B. 17938/80794",
      cancel: "Abbrechen", save: "Speichern",
      err_image: "Bitte ein Bild auswählen.", err_number: "Bitte eine Tattoo-Nummer angeben.",
      err_price: "Bitte einen Preis angeben.", err_name: "Bitte einen Namen angeben."
    },
    hi: {
      nav_home: "होम", nav_tattoos: "टैटू", nav_team: "कर्मचारी", nav_location: "स्थान",
      hero_tagline: "BIS — बंदर इंक सोसाइटी · सेंट्रल-बे",
      hero_desc: "क्या आप अपने शरीर पर स्थायी स्याही लगवाना चाहते हैं? आप बिल्कुल सही जगह पर हैं!",
      hero_cta1: "गैलरी खोजें", hero_cta2: "स्थान देखें", hero_scroll: "स्क्रॉल",
      gallery_eyebrow: "गैलरी", gallery_title: "टैटू", add: "जोड़ें",
      gallery_search: "जानकारी खोजें, जैसे खोपड़ी…", cat_all: "सभी",
      col_price: "मूल्य", col_number: "क्र.", col_image: "तस्वीर", col_sessions: "सत्र", col_info: "जानकारी",
      gallery_empty: "इस श्रेणी में अभी कोई टैटू नहीं", gallery_noresults: "कोई परिणाम नहीं",
      confirm_tattoo: "यह टैटू हटाएं?", confirm_staff: "इस कर्मचारी को हटाएं?",
      team_eyebrow: "कलाकार", team_title: "कर्मचारी",
      team_sub: "बिना समझौते सटीकता। स्वच्छता और नस्यकरण में प्रमाणित।",
      grp_artist: "टैटू कलाकार", grp_assist: "सहायक", team_empty: "अभी तक कोई कर्मचारी नहीं",
      loc_eyebrow: "आश्रय", loc_title: "स्थान", loc_reception: "स्वागत कक्ष", loc_room: "टैटू-कक्ष",
      loc_map: "सेंट्रल-बे · यूनाइटेड-आइलैंड्स", loc_map_hint: "खींचें · ज़ूम करें",
      loc_address: "पता", loc_phone: "फ़ोन",
      footer_nav: "नेविगेशन", footer_contact: "संपर्क",
      footer_copy: "© 2026 बंदर इंक सोसाइटी (BIS)। सर्वाधिकार सुरक्षित।",
      cat_face: "चेहरा", cat_chest: "छाती", cat_back: "पीठ", cat_armR: "दाहिनी बांह", cat_armL: "बाईं बांह", cat_legR: "दाहिना पैर", cat_legL: "बायाँ पैर",
      td_title: "टैटू जोड़ें", td_image: "तस्वीर", td_number: "टैटू क्र.", td_price: "मूल्य", td_info: "जानकारी",
      td_sessions: "सत्र", td_category: "श्रेणी", td_ph_number: "जैसे 7", td_ph_price: "जैसे 480",
      td_ph_sessions: "जैसे 3", td_ph_info: "यह कैसा टैटू है?",
      sd_title: "कर्मचारी जोड़ें", sd_image: "पोर्ट्रेट (वैकल्पिक)", sd_name: "नाम", sd_role: "भूमिका",
      sd_phone: "फ़ोन (वैकल्पिक)", sd_ph_name: "जैसे इमरान कुमार", sd_ph_phone: "जैसे 17938/80794",
      cancel: "रद्द करें", save: "सहेजें",
      err_image: "कृपया एक तस्वीर चुनें।", err_number: "कृपया टैटू नंबर दें।",
      err_price: "कृपया मूल्य दें।", err_name: "कृपया नाम दें।"
    }
  };

  var CATS = ["face", "chest", "back", "armR", "armL", "legR", "legL"];
  var ROLES = ["artist", "assist"];
  var LANG_KEY = "bis_lang";
  var ADMIN_KEY = "bis_admin";
  var DATA_KEY = "bis_admin_data";

  var lang = "de";
  try { lang = localStorage.getItem(LANG_KEY) === "hi" ? "hi" : "de"; } catch (e) {}

  var params = new URLSearchParams(location.search);
  try {
    if (params.get("admin") === "1") localStorage.setItem(ADMIN_KEY, "1");
    if (params.get("admin") === "0") localStorage.removeItem(ADMIN_KEY);
  } catch (e) {}
  var isAdmin = false;
  try { isAdmin = localStorage.getItem(ADMIN_KEY) === "1"; } catch (e) {}

  var seed = window.BIS_DATA || { tattoos: [], team: [] };
  var data = clone(seed);
  if (isAdmin) {
    try {
      var stored = JSON.parse(localStorage.getItem(DATA_KEY));
      if (stored && stored.tattoos && stored.team) data = stored;
    } catch (e) {}
  }

  var state = { cat: "all", q: "" };

  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function t(k) { return (I18N[lang] && I18N[lang][k]) || I18N.de[k] || k; }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function persist() { try { localStorage.setItem(DATA_KEY, JSON.stringify(data)); } catch (e) { alert("Speicher voll – bitte erst exportieren."); } }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  function applyLang() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(function (n) { n.textContent = t(n.getAttribute("data-i18n")); });
    $$("[data-i18n-ph]").forEach(function (n) { n.placeholder = t(n.getAttribute("data-i18n-ph")); });
    $("#langLabel").textContent = lang === "de" ? "HI" : "DE";
    fillSelect($("#tdCategory"), CATS.map(function (c) { return [c, t("cat_" + c)]; }));
    fillSelect($("#sdRole"), ROLES.map(function (r) { return [r, t("grp_" + r)]; }));
    renderChips();
    renderTattoos();
    renderTeam();
  }

  function fillSelect(sel, opts) {
    var cur = sel.value;
    sel.textContent = "";
    opts.forEach(function (o) { var op = el("option", "", o[1]); op.value = o[0]; sel.appendChild(op); });
    if (cur) sel.value = cur;
  }

  $("#langBtn").addEventListener("click", function () {
    lang = lang === "de" ? "hi" : "de";
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    applyLang();
  });

  var header = $("#siteHeader");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var burger = $("#burger"), nav = $("#mainNav");
  function setMenu(open) {
    nav.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  }
  burger.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });

  var navLinks = $$("[data-nav]");
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var id = e.target.id;
      navLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("data-nav") === id); });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(function (s) { spy.observe(s); });

  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  function observeReveals(root) { $$(".reveal:not(.in)", root).forEach(function (n) { revealObs.observe(n); }); }
  observeReveals();

  var hero = $("#home"), glow = $("#heroGlow");
  hero.addEventListener("pointermove", function (e) {
    var r = hero.getBoundingClientRect();
    glow.style.setProperty("--mx", e.clientX - r.left + "px");
    glow.style.setProperty("--my", e.clientY - r.top + "px");
  });

  function renderChips() {
    var box = $("#tattooChips");
    box.textContent = "";
    [["all", t("cat_all")]].concat(CATS.map(function (c) { return [c, t("cat_" + c)]; })).forEach(function (c) {
      var b = el("button", "chip" + (state.cat === c[0] ? " on" : ""), c[1]);
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", state.cat === c[0] ? "true" : "false");
      b.addEventListener("click", function () { state.cat = c[0]; renderChips(); renderTattoos(); });
      box.appendChild(b);
    });
  }

  $("#tattooSearch").addEventListener("input", function (e) { state.q = e.target.value.trim().toLowerCase(); renderTattoos(); });

  function renderTattoos() {
    var rows = $("#tattooRows");
    rows.textContent = "";
    var inCat = data.tattoos.filter(function (x) { return state.cat === "all" || x.category === state.cat; });
    var list = inCat.filter(function (x) { return !state.q || (x.info || "").toLowerCase().indexOf(state.q) > -1; });
    list.sort(function (a, b) { return String(a.number).localeCompare(String(b.number), undefined, { numeric: true }); });
    if (!list.length) {
      rows.appendChild(el("p", "tt-empty", inCat.length ? t("gallery_noresults") : t("gallery_empty")));
      return;
    }
    list.forEach(function (x) {
      var row = el("div", "tt-row");
      row.appendChild(el("span", "tt-price", x.price));
      row.appendChild(el("span", "tt-num", "#" + x.number));
      var imgBtn = el("button", "tt-img");
      imgBtn.type = "button";
      var img = el("img");
      img.src = x.image; img.alt = x.info || "Tattoo " + x.number; img.loading = "lazy";
      imgBtn.appendChild(img);
      imgBtn.addEventListener("click", function () {
        openLightbox(list.map(function (y) { return { src: y.image, cap: "#" + y.number + (y.info ? " · " + y.info : "") }; }), list.indexOf(x));
      });
      row.appendChild(imgBtn);
      var sess = el("span", "tt-sess", x.sessions);
      sess.setAttribute("data-l", t("col_sessions"));
      row.appendChild(sess);
      row.appendChild(el("span", "tt-info", x.info));
      if (isAdmin) row.appendChild(delButton("tt-del", function () {
        if (!confirm(t("confirm_tattoo"))) return;
        data.tattoos = data.tattoos.filter(function (y) { return y.id !== x.id; });
        persist(); renderTattoos();
      }));
      rows.appendChild(row);
    });
  }

  function delButton(cls, fn) {
    var b = el("button", cls, "✕");
    b.type = "button"; b.setAttribute("aria-label", "Delete");
    b.addEventListener("click", fn);
    return b;
  }

  function initials(name) {
    var p = name.trim().split(/\s+/);
    return ((p[0] || "")[0] || "") + ((p[1] || "")[0] || "");
  }

  function renderTeam() {
    var wrap = $("#teamWrap");
    wrap.textContent = "";
    if (!data.team.length) { wrap.appendChild(el("p", "tt-empty", t("team_empty"))); return; }
    ROLES.forEach(function (role) {
      var members = data.team.filter(function (m) { return m.role === role; });
      if (!members.length) return;
      var group = el("div", "team-group");
      var head = el("div", "group-head");
      head.appendChild(el("span", "", t("grp_" + role)));
      head.appendChild(el("i"));
      group.appendChild(head);
      var grid = el("div", "team-grid");
      members.forEach(function (m, i) {
        var card = el("article", "member");
        if (m.photo) {
          var ph = el("img", "member-photo"); ph.src = m.photo; ph.alt = m.name; ph.loading = "lazy";
          card.appendChild(ph);
        } else {
          card.appendChild(el("span", "member-initials", initials(m.name).toUpperCase()));
        }
        card.appendChild(el("span", "member-shade"));
        card.appendChild(el("span", "member-idx", String(i + 1)));
        card.appendChild(el("h3", "member-name", m.name));
        card.appendChild(el("p", "member-role", t("grp_" + role)));
        if (m.phone) {
          var ph2 = el("p", "member-phone");
          ph2.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>';
          ph2.appendChild(el("span", "", m.phone));
          card.appendChild(ph2);
        }
        if (isAdmin) card.appendChild(delButton("member-del", function () {
          if (!confirm(t("confirm_staff"))) return;
          data.team = data.team.filter(function (y) { return y !== m; });
          persist(); renderTeam();
        }));
        grid.appendChild(card);
      });
      group.appendChild(grid);
      wrap.appendChild(group);
    });
  }

  var lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap"), lbItems = [], lbIdx = 0;
  function showLb() {
    var it = lbItems[lbIdx];
    lbImg.src = it.src; lbImg.alt = it.cap || "";
    lbCap.textContent = it.cap || "";
    var multi = lbItems.length > 1;
    $("#lbPrev").hidden = !multi; $("#lbNext").hidden = !multi;
  }
  function openLightbox(items, idx) {
    lbItems = items; lbIdx = Math.max(0, idx);
    showLb(); lb.hidden = false; document.body.style.overflow = "hidden";
  }
  function closeLightbox() { lb.hidden = true; document.body.style.overflow = ""; }
  function stepLb(d) { lbIdx = (lbIdx + d + lbItems.length) % lbItems.length; showLb(); }
  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", function () { stepLb(-1); });
  $("#lbNext").addEventListener("click", function () { stepLb(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLb(-1);
    if (e.key === "ArrowRight") stepLb(1);
  });

  var photoBtns = $$("[data-photo]");
  var photoItems = [
    { src: "assets/img/empfang.jpg", cap: "" },
    { src: "assets/img/saal-1.jpg", cap: "" },
    { src: "assets/img/saal-2.jpg", cap: "" }
  ];
  photoBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      var caps = [t("loc_reception"), t("loc_room") + " 1", t("loc_room") + " 2"];
      photoItems.forEach(function (p, i) { p.cap = caps[i]; });
      openLightbox(photoItems, Number(b.getAttribute("data-photo")));
    });
  });

  (function initMap() {
    var map = $("#map"), stage = $("#mapStage"), marker = $("#mapMarker");
    var MIN = 1, MAX = 6;
    var s = 1, tx = 0, ty = 0;
    var pos = { x: 0.192, y: 0.363 };

    function size() { return { w: map.clientWidth, h: map.clientHeight }; }
    function clampPan() {
      var d = size();
      tx = Math.min(0, Math.max(d.w - d.w * s, tx));
      ty = Math.min(0, Math.max(d.h - d.h * s, ty));
    }
    function paint() {
      clampPan();
      stage.style.transform = "translate(" + tx + "px," + ty + "px) scale(" + s + ")";
      marker.style.setProperty("--inv", String(1 / s));
      marker.style.left = pos.x * 100 + "%";
      marker.style.top = pos.y * 100 + "%";
    }
    function zoomAt(px, py, f) {
      var ns = Math.min(MAX, Math.max(MIN, s * f));
      if (ns === s) return;
      var k = ns / s;
      tx = px - (px - tx) * k;
      ty = py - (py - ty) * k;
      s = ns;
      paint();
    }
    function center() { var d = size(); return { x: d.w / 2, y: d.h / 2 }; }

    map.addEventListener("wheel", function (e) {
      e.preventDefault();
      var r = map.getBoundingClientRect();
      zoomAt(e.clientX - r.left, e.clientY - r.top, e.deltaY < 0 ? 1.18 : 1 / 1.18);
    }, { passive: false });

    var ptrs = {}, drag = null, pinch = null;
    function ptrCount() { return Object.keys(ptrs).length; }
    function pinchData() {
      var k = Object.keys(ptrs), a = ptrs[k[0]], b = ptrs[k[1]];
      return { dist: Math.hypot(a.x - b.x, a.y - b.y), cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2 };
    }

    map.addEventListener("pointerdown", function (e) {
      if (e.target.closest(".map-ui")) return;
      map.setPointerCapture(e.pointerId);
      ptrs[e.pointerId] = { x: e.clientX, y: e.clientY };
      if (ptrCount() === 2) { drag = null; var p = pinchData(); pinch = { dist: p.dist, s: s }; }
      else { drag ={ x: e.clientX, y: e.clientY, tx: tx, ty: ty }; map.classList.add("dragging"); }
    });
    map.addEventListener("pointermove", function (e) {
      if (ptrs[e.pointerId]) ptrs[e.pointerId] = { x: e.clientX, y: e.clientY };
      if (pinch && ptrCount() === 2) {
        var p = pinchData(), r2 = map.getBoundingClientRect();
        var target = Math.min(MAX, Math.max(MIN, pinch.s * (p.dist / pinch.dist)));
        zoomAt(p.cx - r2.left, p.cy - r2.top, target / s);
        return;
      }
      if (drag) { tx = drag.tx + (e.clientX - drag.x); ty = drag.ty + (e.clientY - drag.y); paint(); }
    });
    function endPtr(e) {
      delete ptrs[e.pointerId];
      if (ptrCount() < 2) pinch = null;
      if (ptrCount() === 0) { drag = null; map.classList.remove("dragging"); }
    }
    map.addEventListener("pointerup", endPtr);
    map.addEventListener("pointercancel", endPtr);

    $("#zoomIn").addEventListener("click", function () { var c = center(); zoomAt(c.x, c.y, 1.4); });
    $("#zoomOut").addEventListener("click", function () { var c = center(); zoomAt(c.x, c.y, 1 / 1.4); });
    $("#zoomReset").addEventListener("click", function () { s = 1; tx = 0; ty = 0; paint(); });
    window.addEventListener("resize", paint);
    paint();
  })();

  function readImage(file, max) {
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();
      fr.onerror = reject;
      fr.onload = function () {
        var img = new Image();
        img.onerror = reject;
        img.onload = function () {
          var k = Math.min(1, max / Math.max(img.width, img.height));
          var c = document.createElement("canvas");
          c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
          c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
          resolve(c.toDataURL("image/jpeg", 0.82));
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    });
  }

  $$("[data-close]").forEach(function (b) { b.addEventListener("click", function () { b.closest("dialog").close(); }); });

  var tdlg = $("#tattooDialog"), sdlg = $("#staffDialog");
  $("#addTattooBtn").addEventListener("click", function () {
    $("#tattooForm").reset(); $("#tdErr").textContent = ""; tdlg.showModal();
  });
  $("#addStaffBtn").addEventListener("click", function () {
    $("#staffForm").reset(); $("#sdErr").textContent = ""; sdlg.showModal();
  });

  $("#tattooForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var err = $("#tdErr"), file = $("#tdImage").files[0];
    var number = $("#tdNumber").value.trim(), price = $("#tdPrice").value.trim();
    if (!file) { err.textContent = t("err_image"); return; }
    if (!number) { err.textContent = t("err_number"); return; }
    if (!price) { err.textContent = t("err_price"); return; }
    readImage(file, 1100).then(function (url) {
      data.tattoos.push({
        id: uid(), category: $("#tdCategory").value, number: number, price: price,
        sessions: $("#tdSessions").value.trim(), info: $("#tdInfo").value.trim(), image: url
      });
      persist(); renderTattoos(); tdlg.close();
    });
  });

  $("#staffForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var err = $("#sdErr"), name = $("#sdName").value.trim(), file = $("#sdImage").files[0];
    if (!name) { err.textContent = t("err_name"); return; }
    function done(url) {
      var m = { name: name, role: $("#sdRole").value, phone: $("#sdPhone").value.trim() };
      if (url) m.photo = url;
      data.team.push(m);
      persist(); renderTeam(); sdlg.close();
    }
    if (file) readImage(file, 800).then(done); else done(null);
  });

  function dataUrlToBlob(u) {
    var p = u.split(","), bin = atob(p[1]), arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return new Blob([arr], { type: "image/jpeg" });
  }
  function download(name, blob) {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
  }
  function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "x"; }

  function exportData() {
    var out = clone(data), files = [];
    out.tattoos.forEach(function (x, i) {
      if (x.image && x.image.indexOf("data:") === 0) {
        var n = "tattoo-" + slug(String(x.number)) + "-" + (i + 1) + ".jpg";
        files.push([n, x.image]); x.image = "assets/img/tattoos/" + n;
      }
      delete x.id;
    });
    out.team.forEach(function (m) {
      if (m.photo && m.photo.indexOf("data:") === 0) {
        var n = slug(m.name) + ".jpg";
        files.push([n, m.photo]); m.photo = "assets/img/team/" + n;
      }
    });
    out.tattoos.forEach(function (x) { x.id = slug(x.category + "-" + x.number); });
    var txt = "window.BIS_DATA = " + JSON.stringify(out, null, 2) + ";\n";
    download("data.js", new Blob([txt], { type: "text/javascript" }));
    files.forEach(function (f, i) { setTimeout(function () { download(f[0], dataUrlToBlob(f[1])); }, 350 * (i + 1)); });
    alert("data.js → assets/js/data.js ersetzen.\nTattoo-Bilder → assets/img/tattoos/\nPorträts → assets/img/team/");
  }

  if (isAdmin) {
    $$(".admin-only").forEach(function (n) { n.hidden = false; });
    $("#adminBar").hidden = false;
    $("#adminExport").addEventListener("click", exportData);
    $("#adminReset").addEventListener("click", function () {
      if (!confirm("Lokale Änderungen verwerfen?")) return;
      try { localStorage.removeItem(DATA_KEY); } catch (e) {}
      location.reload();
    });
    $("#adminExit").addEventListener("click", function () {
      try { localStorage.removeItem(ADMIN_KEY); } catch (e) {}
      location.search = "";
    });
  }

  applyLang();
  observeReveals();
})();
