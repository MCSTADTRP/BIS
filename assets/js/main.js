(function () {
  "use strict";

  var I18N = {
    de: {
      nav_home: "Home", nav_tattoos: "Tattoos", nav_team: "Mitarbeiter", nav_location: "Standort",
      hero_tagline: "BIS — Bandar Inc Society · Central-Bay",
      hero_desc: "Du möchtest deinem Körper Permanente Tinte verpassen? Hier bist du Richtig!",
      hero_cta1: "Galerie entdecken", hero_cta2: "Standort ansehen", hero_scroll: "Scroll",
      gallery_eyebrow: "Die Galerie", gallery_title: "TATTOOS", add: "Hinzufügen",
      gallery_search: "Nummer oder Information suchen, z.B. Rose…", more_btn: "Mehr anzeigen", more_count: "{a} von {b} Tattoos", cat_all: "Alle",
      col_price: "Preis", col_number: "Nr.", col_image: "Bild", col_sessions: "Sitzungen", col_info: "Information",
      gallery_empty: "Noch keine Tattoos in dieser Kategorie", gallery_noresults: "Keine Treffer",
      confirm_tattoo: "Dieses Tattoo entfernen?", confirm_staff: "Diesen Mitarbeiter entfernen?",
      team_eyebrow: "Die Kuratoren", team_title: "MITARBEITER",
      team_sub: "Präzision ohne Kompromiss. Zertifiziert in Hygiene und Sterilisation.",
      grp_artist: "Tätowierer", grp_assist: "Assistenz", job_marketing: "Marketing-Manager", team_empty: "Noch keine Mitarbeiter",
      loc_eyebrow: "Das Refugium", loc_title: "STANDORT", loc_reception: "Empfang", loc_room: "Tattoo-Saal",
      loc_map: "Central-Bay · United-Islands", loc_map_hint: "Ziehen · Zoomen",
      loc_address: "Adresse", loc_phone: "Telefon",
      footer_nav: "Navigation", footer_contact: "Kontakt",
      footer_copy: "© 2026 Bandar Inc Society (BIS). Alle Rechte vorbehalten.",
      cat_face: "Gesicht", cat_chest: "Brust", cat_back: "Rücken", cat_armR: "Arm Rechts", cat_armL: "Arm Links", cat_legR: "Bein Rechts", cat_legL: "Bein Links",
      td_title: "Tattoo hinzufügen", td_image: "Bild", td_number: "Tattoo-Nr.", td_price: "Preis Karte (optional)", td_info: "Information",
      td_sessions: "Sitzungen", td_category: "Kategorie", td_ph_number: "z.B. 7", td_ph_price: "z.B. 480",
      td_ph_sessions: "z.B. 1", td_ph_info: "Was ist das für ein Tattoo?",
      sd_title: "Mitarbeiter hinzufügen", sd_image: "Porträt (optional)", sd_name: "Name", sd_role: "Rolle",
      sd_phone: "Telefon (optional)", sd_ph_name: "z.B. Imran Kumar", sd_ph_phone: "z.B. 17938/80794",
      cancel: "Abbrechen", save: "Speichern",
      err_image: "Bitte ein Bild auswählen.", err_number: "Bitte eine Tattoo-Nummer angeben.",
      err_price: "Bitte einen Barpreis angeben.", err_name: "Bitte einen Namen angeben.",
      meta_title: "Bandar Ink Society (BIS) – Tattoo-Studio in Central-Bay",
      meta_desc: "Bandar Ink Society (BIS): Tattoo-Studio in Central-Bay, United-Islands. Galerie, Mitarbeiter und Standort.",
      brand_name: "Bandar Ink Society", marq_name: "BANDAR INK SOCIETY",
      addr_street: "Friedensstraße 3", addr_city: "Central-Bay", addr_country: "United-Islands",
      addr_city_caps: "CENTRAL-BAY", addr_country_caps: "UNITED-ISLANDS",
      addr_full: "Friedensstraße 3, Central-Bay, United-Islands", footer_name: "Bandar Inc Society (BIS)",
      aria_nav: "Navigation", aria_lang: "Sprache wechseln", aria_menu: "Menü", aria_map: "Karte",
      aria_reset: "Zurücksetzen", aria_top: "Nach oben", aria_close: "Schließen", aria_prev: "Zurück", aria_next: "Weiter",
      alt_room1: "Tattoo-Saal 1", alt_room2: "Tattoo-Saal 2", alt_map: "Karte von Central-Bay",
      td_price_cash: "Preis Bar", td_ph_price_cash: "z.B. 430",
      per_session: "Preis pro Sitzung", in_cart: "Im Warenkorb: {n}×", view_cart: "Warenkorb ansehen", sessions_n: "{n} Sitzungen",
      sess_pay: "Du bezahlst für {n} Sitzungen, also {n}× den Preis.",
      sess_wait: "Mindestens {d} Tage Wartezeit bis zur nächsten Sitzung.",
      price_card: "Karte", price_cash: "Bar", add_to_cart: "In den Warenkorb",
      cart_title: "Warenkorb", cart_empty: "Dein Warenkorb ist leer.",
      cart_remove: "Entfernen", cart_code: "Rabattcode", cart_code_ph: "Code eingeben", cart_apply: "Einlösen",
      cart_code_bad: "Dieser Code ist ungültig.", cart_code_ok: "Code {c} aktiv: {p}% Rabatt",
      cart_pay: "Zahlungsart", pay_cash: "Bargeld", pay_card: "Karte",
      cart_discounts: "Mengenrabatt", cart_tier: "ab {n} Tattoos {p}%",
      cart_next: "Noch {n} Tattoo(s) bis {p}% Rabatt!",
      sum_sub: "Zwischensumme", sum_vol: "Mengenrabatt {p}%", sum_code: "Rabattcode {c} {p}%",
      sum_total: "Gesamt", sum_down: "Zu deinen Gunsten auf volle 50 gerundet", sum_save: "Du sparst mit Bargeld",
      cart_done: "Fertig", cart_clear: "Leeren",
      order_title: "BIS Bestellung", order_items: "Tattoos", order_discount: "Rabatt",
      order_total_cash: "Gesamt Bargeld", order_total_card: "Gesamt Karte", order_pay: "Zahlungsart", order_tip: "Trinkgeld", order_to_pay: "Zu zahlen",
      tip_title: "Unterstütze unsere Tätowierer!", tip_text: "Noch ein kleines Trinkgeld für die Nadelkünstler?",
      tip_100: "Legende", tip_50: "Stark", tip_20: "Okay …", tip_none: "gar kein Trinkgeld",
      tip_yes_title: "Du bist der Hammer!", tip_yes_text: "Deine Bestellung ist mit Trinkgeld kopiert. Zeig sie uns im Studio.",
      tip_no_title: "Oh. Okay.", tip_no_text: "Unsere Tätowierer weinen kurz. Deine Bestellung ist trotzdem kopiert.",
      tip_fail: "Kopieren hat nicht geklappt. Markiere den Text und kopiere ihn selbst.",
      price_soon: "Preis folgt", agb_link: "AGB", agb_title: "Allgemeine Geschäftsbedingungen"
    },
    hi: {
      nav_home: "होम", nav_tattoos: "टैटू", nav_team: "कर्मचारी", nav_location: "स्थान",
      hero_tagline: "BIS — बंदर इंक सोसाइटी · सेंट्रल-बे",
      hero_desc: "क्या आप अपने शरीर पर स्थायी स्याही लगवाना चाहते हैं? आप बिल्कुल सही जगह पर हैं!",
      hero_cta1: "गैलरी खोजें", hero_cta2: "स्थान देखें", hero_scroll: "स्क्रॉल",
      gallery_eyebrow: "गैलरी", gallery_title: "टैटू", add: "जोड़ें",
      gallery_search: "नंबर या जानकारी खोजें, जैसे गुलाब…", more_btn: "और दिखाएं", more_count: "{b} में से {a} टैटू", cat_all: "सभी",
      col_price: "मूल्य", col_number: "क्र.", col_image: "तस्वीर", col_sessions: "सत्र", col_info: "जानकारी",
      gallery_empty: "इस श्रेणी में अभी कोई टैटू नहीं", gallery_noresults: "कोई परिणाम नहीं",
      confirm_tattoo: "यह टैटू हटाएं?", confirm_staff: "इस कर्मचारी को हटाएं?",
      team_eyebrow: "कलाकार", team_title: "कर्मचारी",
      team_sub: "बिना समझौते सटीकता। स्वच्छता और नस्यकरण में प्रमाणित।",
      grp_artist: "टैटू कलाकार", grp_assist: "सहायक", job_marketing: "मार्केटिंग मैनेजर", team_empty: "अभी तक कोई कर्मचारी नहीं",
      loc_eyebrow: "आश्रय", loc_title: "स्थान", loc_reception: "स्वागत कक्ष", loc_room: "टैटू-कक्ष",
      loc_map: "सेंट्रल-बे · यूनाइटेड-आइलैंड्स", loc_map_hint: "खींचें · ज़ूम करें",
      loc_address: "पता", loc_phone: "फ़ोन",
      footer_nav: "नेविगेशन", footer_contact: "संपर्क",
      footer_copy: "© 2026 बंदर इंक सोसाइटी (BIS)। सर्वाधिकार सुरक्षित।",
      cat_face: "चेहरा", cat_chest: "छाती", cat_back: "पीठ", cat_armR: "दाहिनी बांह", cat_armL: "बाईं बांह", cat_legR: "दाहिना पैर", cat_legL: "बायाँ पैर",
      td_title: "टैटू जोड़ें", td_image: "तस्वीर", td_number: "टैटू क्र.", td_price: "कार्ड मूल्य (वैकल्पिक)", td_info: "जानकारी",
      td_sessions: "सत्र", td_category: "श्रेणी", td_ph_number: "जैसे 7", td_ph_price: "जैसे 480",
      td_ph_sessions: "जैसे 1", td_ph_info: "यह कैसा टैटू है?",
      sd_title: "कर्मचारी जोड़ें", sd_image: "पोर्ट्रेट (वैकल्पिक)", sd_name: "नाम", sd_role: "भूमिका",
      sd_phone: "फ़ोन (वैकल्पिक)", sd_ph_name: "जैसे इमरान कुमार", sd_ph_phone: "जैसे 17938/80794",
      cancel: "रद्द करें", save: "सहेजें",
      err_image: "कृपया एक तस्वीर चुनें।", err_number: "कृपया टैटू नंबर दें।",
      err_price: "कृपया नकद मूल्य दें।", err_name: "कृपया नाम दें।",
      meta_title: "बंदर इंक सोसाइटी (BIS) – सेंट्रल-बे में टैटू स्टूडियो",
      meta_desc: "बंदर इंक सोसाइटी (BIS): सेंट्रल-बे, यूनाइटेड-आइलैंड्स में टैटू स्टूडियो। गैलरी, कर्मचारी और स्थान।",
      brand_name: "बंदर इंक सोसाइटी", marq_name: "बंदर इंक सोसाइटी",
      addr_street: "फ्रीडेनस्ट्रासे 3", addr_city: "सेंट्रल-बे", addr_country: "यूनाइटेड-आइलैंड्स",
      addr_city_caps: "सेंट्रल-बे", addr_country_caps: "यूनाइटेड-आइलैंड्स",
      addr_full: "फ्रीडेनस्ट्रासे 3, सेंट्रल-बे, यूनाइटेड-आइलैंड्स", footer_name: "बंदर इंक सोसाइटी (BIS)",
      aria_nav: "नेविगेशन", aria_lang: "भाषा बदलें", aria_menu: "मेन्यू", aria_map: "नक्शा",
      aria_reset: "रीसेट", aria_top: "ऊपर जाएं", aria_close: "बंद करें", aria_prev: "पिछला", aria_next: "अगला",
      alt_room1: "टैटू-कक्ष 1", alt_room2: "टैटू-कक्ष 2", alt_map: "सेंट्रल-बे का नक्शा",
      td_price_cash: "नकद मूल्य", td_ph_price_cash: "जैसे 430",
      per_session: "मूल्य प्रति सत्र", in_cart: "कार्ट में: {n}×", view_cart: "कार्ट देखें", sessions_n: "{n} सत्र",
      sess_pay: "आप {n} सत्रों का भुगतान करेंगे, यानी {n}× मूल्य।",
      sess_wait: "अगले सत्र से पहले कम से कम {d} दिन इंतज़ार करना होगा।",
      price_card: "कार्ड", price_cash: "नकद", add_to_cart: "कार्ट में जोड़ें",
      cart_title: "कार्ट", cart_empty: "आपका कार्ट खाली है।",
      cart_remove: "हटाएं", cart_code: "छूट कोड", cart_code_ph: "कोड दर्ज करें", cart_apply: "लागू करें",
      cart_code_bad: "यह कोड अमान्य है।", cart_code_ok: "कोड {c} सक्रिय: {p}% छूट",
      cart_pay: "भुगतान का तरीका", pay_cash: "नकद", pay_card: "कार्ड",
      cart_discounts: "मात्रा पर छूट", cart_tier: "{n} टैटू से {p}%",
      cart_next: "{p}% छूट के लिए {n} टैटू और!",
      sum_sub: "उप-योग", sum_vol: "मात्रा छूट {p}%", sum_code: "छूट कोड {c} {p}%",
      sum_total: "कुल", sum_down: "आपके फ़ायदे में पूरे 50 पर घटाया गया", sum_save: "नकद से आपकी बचत",
      cart_done: "हो गया", cart_clear: "खाली करें",
      order_title: "BIS ऑर्डर", order_items: "टैटू", order_discount: "छूट",
      order_total_cash: "कुल नकद", order_total_card: "कुल कार्ड", order_pay: "भुगतान", order_tip: "टिप", order_to_pay: "देय राशि",
      tip_title: "हमारे टैटू कलाकारों का साथ दें!", tip_text: "सुई के कलाकारों के लिए थोड़ी सी टिप?",
      tip_100: "लीजेंड", tip_50: "शानदार", tip_20: "ठीक है …", tip_none: "कोई टिप नहीं",
      tip_yes_title: "आप कमाल हैं!", tip_yes_text: "आपका ऑर्डर टिप के साथ कॉपी हो गया है। इसे स्टूडियो में हमें दिखाएं।",
      tip_no_title: "ओह। ठीक है।", tip_no_text: "हमारे कलाकार थोड़ा रो लेंगे। आपका ऑर्डर फिर भी कॉपी हो गया है।",
      tip_fail: "कॉपी नहीं हो सका। टेक्स्ट चुनकर खुद कॉपी करें।",
      price_soon: "मूल्य जल्द", agb_link: "नियम व शर्तें", agb_title: "सामान्य नियम व शर्तें"
    }
  };

  var NAMES_HI = {
    "Imran Kumar": "इमरान कुमार",
    "Karan Gupta": "करण गुप्ता",
    "Ajay Bhatt": "अजय भट्ट",
    "Tayler Creed": "टेलर क्रीड"
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
  var config = {
    currency: seed.currency || "$",
    stackDiscounts: !!seed.stackDiscounts,
    sessionWaitDays: seed.sessionWaitDays || 3,
    totalRoundTo: seed.totalRoundTo == null ? 50 : seed.totalRoundTo,
    cardMarkupPct: seed.cardMarkupPct == null ? 5 : seed.cardMarkupPct,
    cardRoundTo: seed.cardRoundTo || 5,
    volumeDiscounts: (seed.volumeDiscounts || []).slice().sort(function (a, b) { return a.min - b.min; }),
    codes: {}
  };
  Object.keys(seed.codes || {}).forEach(function (k) { config.codes[k.trim().toUpperCase()] = seed.codes[k]; });

  var data = clone({ tattoos: seed.tattoos || [], team: seed.team || [] });
  if (isAdmin) {
    try {
      var stored = JSON.parse(localStorage.getItem(DATA_KEY));
      if (stored && stored.tattoos && stored.team) data = stored;
    } catch (e) {}
  }
  data.tattoos.forEach(function (x) { if (!x.id) x.id = String(x.category) + "-" + String(x.number); });

  var PAGE_SIZE = 20;
  var state = { cat: "all", q: "", limit: PAGE_SIZE };

  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function num(v) {
    var n = parseFloat(String(v == null ? "" : v).replace(",", ".").replace(/[^\d.]/g, ""));
    return isFinite(n) ? n : 0;
  }
  function round2(n) { return Math.round(n * 100) / 100; }
  function fmt(n) {
    return round2(n).toLocaleString(lang === "hi" ? "hi-IN" : "de-DE", { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + " " + config.currency;
  }
  function sessOf(x) { return Math.max(1, parseInt(x.sessions, 10) || 1); }
  function catsOf(x) { return [].concat(x.category); }
  function catLabel(x) { return catsOf(x).map(function (c) { return t("cat_" + c); }).join(" · "); }
  function picsOf(x) { return [x.number].concat(x.image || x.thumb ? [] : x.extra || []); }
  function cardFromCash(cash) {
    if (cash <= 0) return 0;
    var raw = round2(cash * (100 + config.cardMarkupPct) / 100);
    return Math.ceil(raw / config.cardRoundTo) * config.cardRoundTo;
  }
  function priceCash(x) { return num(x.priceCash) > 0 ? num(x.priceCash) : num(x.price); }
  function priceCard(x) { return num(x.price) > 0 ? num(x.price) : cardFromCash(num(x.priceCash)); }
  function hasPrice(x) { return priceCash(x) > 0 || priceCard(x) > 0; }  function tf(k, vars) {
    var s = t(k);
    Object.keys(vars || {}).forEach(function (v) { s = s.split("{" + v + "}").join(vars[v]); });
    return s;
  }
  function t(k) { return (I18N[lang] && I18N[lang][k]) || I18N.de[k] || k; }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  var sheets = window.BIS_DATA.sheets || null;
  var sheetObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      paintSheet(e.target);
      sheetObs.unobserve(e.target);
    });
  }, { rootMargin: "600px 0px" });
  function paintSheet(node) {
    var src = node.getAttribute("data-sheet");
    if (src) node.style.backgroundImage = 'url("' + src + '")';
  }
  function tattooPicture(x, alt, small, cell) {
    var own = small ? x.thumb || x.image : x.image || x.thumb;
    if (own) {
      var img = el("img");
      img.src = own; img.alt = alt; img.loading = "lazy"; img.decoding = "async";
      return img;
    }
    var box = el("span", "pic"), n = Number(cell || x.number);
    if (alt) { box.setAttribute("role", "img"); box.setAttribute("aria-label", alt); }
    if (sheets && n % 1 === 0 && n >= 1 && n <= sheets.max) {
      var i = (n - 1) % sheets.per;
      box.style.backgroundSize = sheets.cols * 100 + "% " + sheets.rows * 100 + "%";
      box.style.backgroundPosition = (i % sheets.cols) * 100 / (sheets.cols - 1) + "% " + Math.floor(i / sheets.cols) * 100 / (sheets.rows - 1) + "%";
      box.setAttribute("data-sheet", sheets.path + (Math.floor((n - 1) / sheets.per) + 1) + ".jpg");
      sheetObs.observe(box);
    }
    return box;
  }
  function persist() { try { localStorage.setItem(DATA_KEY, JSON.stringify(data)); } catch (e) { alert("Speicher voll – bitte erst exportieren."); } }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  function nameOf(n) { return lang === "hi" && NAMES_HI[n] ? NAMES_HI[n] : n; }
  function infoText(x) {
    if (!x.info) return "";
    if (typeof x.info === "string") return x.info;
    return x.info[lang] || x.info.de || "";
  }
  function infoAll(x) {
    if (!x.info) return "";
    return typeof x.info === "string" ? x.info : Object.keys(x.info).map(function (k) { return x.info[k]; }).join(" ");
  }

  function applyLang() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(function (n) { n.textContent = t(n.getAttribute("data-i18n")); });
    $$("[data-i18n-ph]").forEach(function (n) { n.placeholder = t(n.getAttribute("data-i18n-ph")); });
    $$("[data-i18n-aria]").forEach(function (n) { n.setAttribute("aria-label", t(n.getAttribute("data-i18n-aria"))); });
    $$("[data-i18n-alt]").forEach(function (n) { n.alt = t(n.getAttribute("data-i18n-alt")); });
    $$("[data-name]").forEach(function (n) { n.textContent = nameOf(n.getAttribute("data-name")); });
    document.title = t("meta_title");
    $$('meta[name="description"],meta[property="og:description"]').forEach(function (m) { m.setAttribute("content", t("meta_desc")); });
    $$('meta[property="og:title"]').forEach(function (m) { m.setAttribute("content", t("brand_name")); });
    $("#langLabel").textContent = lang === "de" ? "HI" : "DE";
    fillSelect($("#tdCategory"), CATS.map(function (c) { return [c, t("cat_" + c)]; }));
    fillSelect($("#sdRole"), ROLES.map(function (r) { return [r, t("grp_" + r)]; }));
    renderChips();
    renderTattoos();
    renderTeam();
    renderCart();
    renderAgb();
  }

  function renderAgb() {
    var list = $("#agbList");
    list.textContent = "";
    (seed.agb || []).forEach(function (entry) {
      var part = entry[lang] || entry.de, item = el("li");
      item.appendChild(el("h4", "", part.title));
      item.appendChild(el("p", "", part.text));
      list.appendChild(item);
    });
  }
  $("#agbBtn").addEventListener("click", function () { $("#agbDialog").showModal(); $("#agbList").scrollTop = 0; });

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
  }, { rootMargin: "0px 0px -8% 0px" });
  function observeReveals(root) { $$(".reveal:not(.in)", root).forEach(function (n) { revealObs.observe(n); }); }
  observeReveals();

  function renderChips() {
    var box = $("#tattooChips");
    box.textContent = "";
    [["all", t("cat_all")]].concat(CATS.map(function (c) { return [c, t("cat_" + c)]; })).forEach(function (c) {
      var b = el("button", "chip" + (state.cat === c[0] ? " on" : ""), c[1]);
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", state.cat === c[0] ? "true" : "false");
      b.addEventListener("click", function () { state.cat = c[0]; state.limit = PAGE_SIZE; renderChips(); renderTattoos(); });
      box.appendChild(b);
    });
  }

  $("#tattooSearch").addEventListener("input", function (e) { state.q = e.target.value.trim().toLowerCase().replace(/^#/, ""); state.limit = PAGE_SIZE; renderTattoos(); });

  function renderTattoos() {
    var rows = $("#tattooRows");
    rows.textContent = "";
    var inCat = data.tattoos.filter(function (x) { return state.cat === "all" || catsOf(x).indexOf(state.cat) > -1; });
    var list = inCat.filter(function (x) { return !state.q || String(x.number) === state.q || infoAll(x).toLowerCase().indexOf(state.q) > -1; });
    list.sort(function (a, b) { return String(a.number).localeCompare(String(b.number), undefined, { numeric: true }); });
    if (!list.length) {
      rows.appendChild(el("p", "tt-empty", inCat.length ? t("gallery_noresults") : t("gallery_empty")));
      return;
    }
    list.slice(0, state.limit).forEach(function (x) {
      var pics = picsOf(x), duo = pics.length > 1;
      var card = el("article", "tcard" + (duo ? " wide" : ""));
      var priced = hasPrice(x);

      var name = infoText(x) || "Tattoo #" + x.number;
      function openDetail() {
        openLightbox(list.map(function (y) { return { tattoo: y }; }), list.indexOf(x));
      }

      var head = el("button", "tc-head");
      head.type = "button";
      head.appendChild(el("span", "tc-name", name));
      head.appendChild(el("span", "tc-where", "#" + x.number + (state.cat === "all" || catsOf(x).length > 1 ? " · " + catLabel(x) : "")));
      head.addEventListener("click", openDetail);
      card.appendChild(head);

      var imgBtn = el("button", "tc-img" + (duo ? " duo" : ""));
      imgBtn.type = "button";
      imgBtn.setAttribute("aria-label", "#" + x.number + " " + name);
      pics.forEach(function (cell, i) {
        imgBtn.appendChild(tattooPicture(x, name + (i ? " (" + (i + 1) + ")" : ""), true, cell));
      });
      imgBtn.addEventListener("click", openDetail);
      card.appendChild(imgBtn);
      if (isAdmin) card.appendChild(delButton("tt-del", function () {
        if (!confirm(t("confirm_tattoo"))) return;
        data.tattoos = data.tattoos.filter(function (y) { return y.id !== x.id; });
        delete cart.items[x.id];
        saveCart(); persist(); renderTattoos(); renderCart();
      }));

      var foot = el("div", "tc-foot");
      if (priced) {
        var price = el("button", "tc-price");
        price.type = "button";
        price.appendChild(el("b", "", fmt(priceCash(x))));
        price.appendChild(el("small", "", t("price_cash")));
        price.addEventListener("click", openDetail);
        foot.appendChild(price);
        var add = el("button", "tt-add", "+");
        add.type = "button";
        add.setAttribute("aria-label", t("add_to_cart") + " #" + x.number);
        add.title = t("add_to_cart");
        if (cart.items[x.id]) add.appendChild(el("em", "", String(cart.items[x.id])));
        add.addEventListener("click", function () {
          addToCart(x.id);
          add.classList.remove("pop"); void add.offsetWidth; add.classList.add("pop");
        });
        foot.appendChild(add);
      } else {
        foot.appendChild(el("span", "tt-soon", t("price_soon")));
      }
      card.appendChild(foot);
      rows.appendChild(card);
    });
    if (list.length > state.limit) {
      var more = el("div", "tt-more");
      more.appendChild(el("p", "", tf("more_count", { a: Math.min(state.limit, list.length), b: list.length })));
      var btn = el("button", "btn btn-ghost", t("more_btn"));
      btn.type = "button";
      btn.addEventListener("click", function () { state.limit += PAGE_SIZE; renderTattoos(); });
      more.appendChild(btn);
      rows.appendChild(more);
    } else if (list.length > PAGE_SIZE) {
      rows.appendChild(el("p", "tt-more", tf("more_count", { a: list.length, b: list.length })));
    }
  }

  var CART_KEY = "bis_cart";
  var cart = { items: {}, pay: "cash", code: "" };
  var codeDraft = "", codeMsg = null;
  try {
    var savedCart = JSON.parse(localStorage.getItem(CART_KEY));
    if (savedCart && savedCart.items) {
      cart.items = savedCart.items;
      cart.pay = savedCart.pay === "card" ? "card" : "cash";
      cart.code = savedCart.code || "";
    }
  } catch (e) {}
  if (cart.code && !config.codes[cart.code]) cart.code = "";

  var cartEl = $("#cart"), cartOverlay = $("#cartOverlay"), cartBody = $("#cartBody"), cartBtn = $("#cartBtn");
  cartEl.inert = true;

  function findTattoo(id) {
    for (var i = 0; i < data.tattoos.length; i++) if (data.tattoos[i].id === id) return data.tattoos[i];
    return null;
  }
  function saveCart() { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {} }

  function addToCart(id) {
    cart.items[id] = (cart.items[id] || 0) + 1;
    saveCart(); renderCart(); renderTattoos();
    cartBtn.classList.remove("bump"); void cartBtn.offsetWidth; cartBtn.classList.add("bump");
  }
  function setQty(id, q) {
    if (q <= 0) delete cart.items[id]; else cart.items[id] = Math.min(99, q);
    saveCart(); renderCart(); renderTattoos();
  }

  function calc() {
    var lines = [], count = 0, sumCard = 0, sumCash = 0;
    Object.keys(cart.items).forEach(function (id) {
      var x = findTattoo(id);
      if (!x) { delete cart.items[id]; return; }
      var q = cart.items[id];
      lines.push({ x: x, q: q });
      count += q; sumCard += priceCard(x) * sessOf(x) * q; sumCash += priceCash(x) * sessOf(x) * q;
    });
    var volPct = 0, nextTier = null;
    config.volumeDiscounts.forEach(function (d) {
      if (count >= d.min) volPct = d.pct; else if (!nextTier) nextTier = d;
    });
    var codePct = cart.code ? (config.codes[cart.code] || 0) : 0;
    var pct = config.stackDiscounts ? volPct + codePct : Math.max(volPct, codePct);
    function side(sub) {
      var d = round2(sub * pct / 100), exact = round2(sub - d), total = exact, step = config.totalRoundTo;
      if (pct > 0 && step > 0) total = Math.floor((exact + 0.001) / step) * step;
      return { sub: sub, disc: d, down: round2(exact - total), total: total };
    }
    var card = side(sumCard), cash = side(sumCash);
    return {
      lines: lines, count: count, volPct: volPct, codePct: codePct, pct: pct, card: card, cash: cash,
      saving: round2(card.total - cash.total),
      next: nextTier ? { need: nextTier.min - count, pct: nextTier.pct } : null
    };
  }

  function discountLabel(c) {
    var vol = tf("sum_vol", { p: c.volPct }), code = tf("sum_code", { c: cart.code, p: c.codePct });
    if (config.stackDiscounts) return c.volPct && c.codePct ? vol + " + " + code : (c.volPct ? vol : code);
    return c.codePct >= c.volPct ? code : vol;
  }

  function orderText(c, tip) {
    var out = [t("order_title"), ""];
    c.lines.forEach(function (l) {
      out.push(l.q + "× #" + l.x.number + (infoText(l.x) ? " " + infoText(l.x) : "") + " — " + catLabel(l.x) + (sessOf(l.x) > 1 ? " (" + tf("sessions_n", { n: sessOf(l.x) }) + ")" : ""));
    });
    out.push("");
    if (c.pct) out.push(t("order_discount") + ": " + c.pct + "%");
    out.push(t("order_total_cash") + ": " + fmt(c.cash.total));
    out.push(t("order_total_card") + ": " + fmt(c.card.total));
    out.push(t("order_pay") + ": " + t("pay_" + cart.pay));
    if (tip) {
      out.push(t("order_tip") + ": " + tip + "% (+" + fmt(tipAmount(c, tip)) + ")");
      out.push(t("order_to_pay") + ": " + fmt(payTotal(c) + tipAmount(c, tip)));
    }
    return out.join("\n");
  }

  function payTotal(c) { return (cart.pay === "card" ? c.card : c.cash).total; }
  function tipAmount(c, pct) { return round2(payTotal(c) * pct / 100); }
  function copyText(txt) {
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(txt);
    return Promise.reject();
  }

  var TIPS = [100, 50, 20];
  var tipDlg = $("#tipDialog"), tipOrder = null;
  function openTip(c) {
    tipOrder = c;
    copyText(orderText(c)).catch(function () {});
    var box = $("#tipOptions");
    box.textContent = "";
    TIPS.forEach(function (pct, i) {
      var b = el("button", "tip-opt" + (i ? "" : " top"));
      b.type = "button";
      b.appendChild(el("b", "", pct + "%"));
      b.appendChild(el("span", "", t("tip_" + pct)));
      b.appendChild(el("small", "", "+" + fmt(tipAmount(c, pct))));
      b.addEventListener("click", function () { chooseTip(pct); });
      box.appendChild(b);
    });
    $("#tipAsk").hidden = false;
    $("#tipResult").hidden = true;
    tipDlg.showModal();
  }
  function chooseTip(pct) {
    var txt = orderText(tipOrder, pct);
    function show(copied) {
      var kind = pct ? "yes" : "no", area = $("#tipCopy");
      $("#tipResultTitle").textContent = t("tip_" + kind + "_title");
      $("#tipResultText").textContent = copied ? t("tip_" + kind + "_text") : t("tip_fail");
      $("#tipSum").textContent = t("order_to_pay") + ": " + fmt(payTotal(tipOrder) + tipAmount(tipOrder, pct)) + " · " + t("pay_" + cart.pay);
      area.hidden = copied;
      area.value = copied ? "" : txt;
      $("#tipAsk").hidden = true;
      $("#tipResult").hidden = false;
    }
    copyText(txt).then(function () { show(true); }, function () { show(false); });
  }
  $("#tipNone").addEventListener("click", function () { chooseTip(0); });

  function sumRow(cls, label, value) {
    var r = el("div", "sum-row" + (cls ? " " + cls : ""));
    r.appendChild(el("span", "", label));
    r.appendChild(el("b", "", value));
    return r;
  }

  function renderCart() {
    var c = calc();
    cartBtn.hidden = !(c.count > 0 || data.tattoos.length > 0);
    var badge = $("#cartBadge");
    badge.textContent = String(c.count);
    badge.setAttribute("data-zero", c.count ? "0" : "1");
    cartBody.textContent = "";
    if (!c.lines.length) {
      cartBody.appendChild(el("p", "cart-empty", t("cart_empty")));
      return;
    }
    var sel = cart.pay === "card" ? c.card : c.cash;

    var list = el("div", "cart-items");
    c.lines.forEach(function (l) {
      var item = el("div", "cart-item");
      var thumb = el("span", "ci-thumb");
      thumb.appendChild(tattooPicture(l.x, "", true));
      item.appendChild(thumb);
      var name = el("div", "ci-name", catLabel(l.x));
      name.appendChild(el("small", "", "#" + l.x.number + (infoText(l.x) ? " · " + infoText(l.x) : "") + (sessOf(l.x) > 1 ? " · " + tf("sessions_n", { n: sessOf(l.x) }) : "")));
      item.appendChild(name);
      var unit = cart.pay === "card" ? priceCard(l.x) : priceCash(l.x);
      var perTattoo = unit * sessOf(l.x);
      item.appendChild(el("div", "ci-total", fmt(perTattoo * l.q)));
      var qty = el("div", "qty");
      var minus = el("button", "", "−"), plus = el("button", "", "+");
      minus.type = plus.type = "button";
      minus.setAttribute("aria-label", t("cart_remove")); plus.setAttribute("aria-label", t("add_to_cart"));
      minus.addEventListener("click", function () { setQty(l.x.id, l.q - 1); });
      plus.addEventListener("click", function () { setQty(l.x.id, l.q + 1); });
      qty.appendChild(minus); qty.appendChild(el("span", "", String(l.q))); qty.appendChild(plus);
      item.appendChild(qty);
      var unitText = sessOf(l.x) > 1 ? sessOf(l.x) + " × " + fmt(unit) : fmt(unit);
      item.appendChild(el("div", "ci-unit", l.q > 1 ? l.q + " × (" + unitText + ")" : unitText));
      list.appendChild(item);
    });
    cartBody.appendChild(list);

    var codeBlock = el("div", "cart-block");
    codeBlock.appendChild(el("span", "cart-label", t("cart_code")));
    var row = el("div", "code-row");
    var input = el("input"); input.type = "text"; input.autocomplete = "off"; input.spellcheck = false;
    input.placeholder = t("cart_code_ph"); input.value = codeDraft || cart.code;
    input.addEventListener("input", function () { codeDraft = input.value; });
    var apply = el("button", "btn btn-ghost btn-sm", t("cart_apply")); apply.type = "button";
    function applyCode() {
      var key = input.value.trim().toUpperCase();
      codeDraft = key;
      if (!key) { cart.code = ""; codeMsg = null; }
      else if (config.codes[key]) { cart.code = key; codeMsg = { ok: true }; }
      else { cart.code = ""; codeMsg = { ok: false }; }
      saveCart(); renderCart();
    }
    apply.addEventListener("click", applyCode);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); applyCode(); } });
    row.appendChild(input); row.appendChild(apply);
    codeBlock.appendChild(row);
    var msg = el("p", "code-msg");
    if (cart.code) { msg.className = "code-msg ok"; msg.textContent = tf("cart_code_ok", { c: cart.code, p: config.codes[cart.code] }); }
    else if (codeMsg && !codeMsg.ok) { msg.className = "code-msg err"; msg.textContent = t("cart_code_bad"); }
    codeBlock.appendChild(msg);
    cartBody.appendChild(codeBlock);

    var payBlock = el("div", "cart-block");
    payBlock.appendChild(el("span", "cart-label", t("cart_pay")));
    var choice = el("div", "pay-choice");
    [["cash", c.cash.total], ["card", c.card.total]].forEach(function (p) {
      var b = el("button", "pay" + (cart.pay === p[0] ? " on" : ""));
      b.type = "button";
      b.appendChild(el("span", "", t("pay_" + p[0])));
      b.appendChild(el("b", "", fmt(p[1])));
      b.addEventListener("click", function () { cart.pay = p[0]; saveCart(); renderCart(); renderTattoos(); });
      choice.appendChild(b);
    });
    payBlock.appendChild(choice);
    cartBody.appendChild(payBlock);

    var sum = el("div", "sum");
    sum.appendChild(sumRow("", t("sum_sub"), fmt(sel.sub)));
    if (c.pct > 0) sum.appendChild(sumRow("disc", discountLabel(c), "−" + fmt(round2(sel.sub - sel.total))));
    if (sel.down > 0) sum.appendChild(el("p", "sum-hint", t("sum_down")));
    sum.appendChild(sumRow("total", t("sum_total") + " · " + t("pay_" + cart.pay), fmt(sel.total)));
    cartBody.appendChild(sum);

    if (c.saving > 0) {
      var save = el("div", "save-box");
      save.appendChild(el("span", "", t("sum_save")));
      save.appendChild(el("b", "", fmt(c.saving)));
      cartBody.appendChild(save);
    }

    if (c.lines.some(function (l) { return sessOf(l.x) > 1; })) {
      cartBody.appendChild(el("p", "tier-hint", tf("sess_wait", { d: config.sessionWaitDays })));
    }
    if (c.next) cartBody.appendChild(el("p", "tier-hint", tf("cart_next", { n: c.next.need, p: c.next.pct })));
    if (config.volumeDiscounts.length) {
      var tiers = el("div", "cart-block");
      tiers.appendChild(el("span", "cart-label", t("cart_discounts")));
      var tl = el("div", "tier-list");
      config.volumeDiscounts.forEach(function (d) {
        tl.appendChild(el("span", c.count >= d.min ? "on" : "", tf("cart_tier", { n: d.min, p: d.pct })));
      });
      tiers.appendChild(tl);
      cartBody.appendChild(tiers);
    }

    var actions = el("div", "cart-actions");
    var done = el("button", "btn btn-primary btn-sm", t("cart_done")); done.type = "button";
    done.addEventListener("click", function () { openTip(c); });
    var clear = el("button", "btn btn-ghost btn-sm", t("cart_clear")); clear.type = "button";
    clear.addEventListener("click", function () { cart.items = {}; saveCart(); renderCart(); renderTattoos(); });
    actions.appendChild(done); actions.appendChild(clear);
    cartBody.appendChild(actions);
  }

  function openCart() {
    cartOverlay.hidden = false;
    cartEl.inert = false;
    cartEl.classList.add("open");
    cartEl.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("#cartClose").focus();
  }
  function closeCart() {
    cartEl.classList.remove("open");
    cartEl.setAttribute("aria-hidden", "true");
    cartEl.inert = true;
    cartOverlay.hidden = true;
    document.body.style.overflow = "";
    cartBtn.focus();
  }
  cartBtn.addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && cartEl.classList.contains("open") && !tipDlg.open) closeCart(); });

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
          var ph = el("img", "member-photo"); ph.src = m.photo; ph.alt = nameOf(m.name); ph.loading = "lazy";
          card.appendChild(ph);
        } else {
          card.appendChild(el("span", "member-initials", initials(nameOf(m.name)).toUpperCase()));
        }
        card.appendChild(el("span", "member-shade"));
        card.appendChild(el("span", "member-idx", String(i + 1)));
        card.appendChild(el("h3", "member-name", nameOf(m.name)));
        card.appendChild(el("p", "member-role", t("grp_" + role)));
        if (m.job) card.appendChild(el("p", "member-job", t("job_" + m.job)));
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

  var lb = $("#lightbox"), lbImg = $("#lbImg"), lbPic = $("#lbPic"), lbCap = $("#lbCap"), lbInfo = $("#lbInfo"), lbItems = [], lbIdx = 0;
  function renderInfo(x) {
    lbInfo.textContent = "";
    lbInfo.appendChild(el("h3", "", infoText(x) || "Tattoo #" + x.number));
    lbInfo.appendChild(el("p", "lbi-where", "#" + x.number + " · " + catLabel(x)));
    var priced = hasPrice(x);
    if (priced) {
      var prices = el("div", "lbi-prices");
      [[priceCash(x), "price_cash"], [priceCard(x), "price_card"]].forEach(function (p) {
        var box = el("div");
        box.appendChild(el("b", "", fmt(p[0])));
        box.appendChild(el("small", "", t(p[1])));
        prices.appendChild(box);
      });
      lbInfo.appendChild(prices);
    } else {
      lbInfo.appendChild(el("p", "lbi-meta", t("price_soon")));
    }
    lbInfo.appendChild(el("p", "lbi-meta", t("col_sessions") + ": " + sessOf(x) + (priced ? " · " + t("per_session") : "")));
    if (sessOf(x) > 1) {
      var note = el("p", "tt-note");
      note.appendChild(el("b", "", tf("sess_pay", { n: sessOf(x) })));
      note.appendChild(el("span", "", tf("sess_wait", { d: config.sessionWaitDays })));
      lbInfo.appendChild(note);
    }
    if (!priced) return;
    var add = el("button", "btn btn-primary btn-sm", t("add_to_cart"));
    add.type = "button";
    add.addEventListener("click", function () {
      addToCart(x.id);
      renderInfo(x);
      $(".btn-primary", lbInfo).focus();
    });
    lbInfo.appendChild(add);
    if (cart.items[x.id]) {
      var go = el("button", "btn btn-ghost btn-sm", t("view_cart"));
      go.type = "button";
      go.addEventListener("click", function () { closeLightbox(); openCart(); });
      lbInfo.appendChild(go);
      var count = el("p", "lbi-count", tf("in_cart", { n: cart.items[x.id] }));
      count.setAttribute("role", "status");
      lbInfo.appendChild(count);
    }
  }
  function showLb() {
    var it = lbItems[lbIdx];
    lbPic.textContent = "";
    lbPic.hidden = !it.tattoo;
    lbImg.hidden = !!it.tattoo;
    lbInfo.hidden = !it.tattoo;
    lbCap.hidden = !!it.tattoo;
    lb.classList.toggle("detail", !!it.tattoo);
    lb.scrollTop = 0;
    if (it.tattoo) {
      renderInfo(it.tattoo);
      var pics = picsOf(it.tattoo), alt = infoText(it.tattoo) || "Tattoo " + it.tattoo.number;
      lbPic.classList.toggle("duo", pics.length > 1);
      pics.forEach(function (cell) {
        var pic = tattooPicture(it.tattoo, alt, false, cell);
        paintSheet(pic);
        lbPic.appendChild(pic);
      });
      lbImg.removeAttribute("src");
    } else {
      lbImg.src = it.src; lbImg.alt = it.cap || "";
    }
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
    var number = $("#tdNumber").value.trim(), cash = num($("#tdPriceCash").value), cardRaw = $("#tdPrice").value.trim();
    if (!file) { err.textContent = t("err_image"); return; }
    if (!number) { err.textContent = t("err_number"); return; }
    if (!cash) { err.textContent = t("err_price"); return; }
    readImage(file, 1100).then(function (url) {
      var item = {
        id: uid(), category: $("#tdCategory").value, number: number, priceCash: cash,
        sessions: Math.max(1, parseInt($("#tdSessions").value, 10) || 1), info: $("#tdInfo").value.trim(), image: url
      };
      if (cardRaw) item.price = num(cardRaw);
      data.tattoos.push(item);
      persist(); renderTattoos(); renderCart(); tdlg.close();
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
        files.push([n, x.image]); x.image = "assets/img/" + n;
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
    var full = {
      currency: config.currency,
      stackDiscounts: config.stackDiscounts,
      sessionWaitDays: config.sessionWaitDays,
      totalRoundTo: config.totalRoundTo,
      cardMarkupPct: config.cardMarkupPct,
      cardRoundTo: config.cardRoundTo,
      volumeDiscounts: config.volumeDiscounts,
      codes: seed.codes || {},
      sheets: seed.sheets,
      agb: seed.agb,
      tattoos: out.tattoos,
      team: out.team
    };
    var txt = "window.BIS_DATA = " + JSON.stringify(full, null, 2) + ";\n";
    download("data.js", new Blob([txt], { type: "text/javascript" }));
    files.forEach(function (f, i) { setTimeout(function () { download(f[0], dataUrlToBlob(f[1])); }, 350 * (i + 1)); });
    alert("data.js → assets/js/data.js ersetzen.\nTattoo-Bilder → assets/img/\nPorträts → assets/img/team/");
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
