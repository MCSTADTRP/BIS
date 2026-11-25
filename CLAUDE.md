# BIS Website — Projektnotizen

## Projektziel

Website der **Bandar Ink Society (BIS)**, ein Tattoo-Studio in Central-Bay, United-Islands (Minecraft-Roleplay-Stadt).
Neubau der Originalseite https://bandar-inc-society.base44.app/ mit allen Features, aber deutlich schöner.

- Domain: noch offen
- Sprachen: Deutsch und Hindi (Umschalter oben rechts, Auswahl wird in `localStorage` gemerkt). Alles auf der Seite ist übersetzt: Texte, Bildbeschreibungen, Seitentitel und Meta-Beschreibung, Adresse, Namen (Hindi-Schreibweise in `NAMES_HI` in `assets/js/main.js`), Tattoo-Beschreibungen. Ausnahmen: Logo-Bild, Abkürzung "BIS", Telefonnummern, Begriffe wie "AK 47" und "1312 (ACAB)", Admin-Leiste.
- Neue Texte immer in beide Sprachen anlegen: `I18N.de` und `I18N.hi` in `assets/js/main.js` (gleiche Schlüssel). Im HTML `data-i18n`, `data-i18n-ph` (Platzhalter), `data-i18n-aria`, `data-i18n-alt`, `data-name` (Personennamen). Tattoo-Beschreibung in `assets/js/data.js` als `info: { de: "…", hi: "…" }`. Neue Mitarbeiter-Namen zusätzlich in `NAMES_HI` eintragen.
- Hindi-Schrift: Outfit hat keine Devanagari-Zeichen, es greifen die Systemschriften. Für `html[lang="hi"]` gelten eigene Regeln am Ende von `assets/css/style.css` (kein Buchstabenabstand, größere Kleinschrift).
- Marke: oranges Graffiti-Logo auf Schwarz (`assets/img/logo.png`, freigestellt aus `logo-b91/BANDAR Ink Society Logo.png`)

## Design

- Hintergrund `#0D0D0D`, Akzent Orange `#FF6B00`, Text `#F2F2F2`
- Schrift: Outfit (lokal, `assets/fonts/outfit.woff2`), keine externen Fonts
- Alles Orange-Töne über CSS-Variablen in `assets/css/style.css`

## Technik

- Statische Seite: HTML, CSS, Vanilla-JS. Kein Framework, kein Build, kein PHP.
- Hosting: Cloudflare Pages (Ordner per Drag-and-Drop hochladen). Limit pro Datei: 25 MiB.
- Eine Seite mit Abschnitten: Home (Hero), Tattoos (Galerie), Mitarbeiter, Standort. Scroll-Spy in der Navigation.

## Struktur

- `index.html` — gesamte Seite
- `assets/css/style.css` — Styles
- `assets/js/main.js` — Übersetzungen (DE/HI), Galerie, Team, Lightbox, Karte, Admin-Modus
- `assets/js/data.js` — **Inhalte**: Tattoos und Mitarbeiter (hier pflegen)
- `assets/img/` — Logo, Favicon, `og.jpg`, Standort-Fotos (`empfang.jpg`, `saal-1.jpg`, `saal-2.jpg`), Karte (`karte.jpg`)
- `assets/img-neu/` und `assets/img/team/` — Bilder, die per Export dazukommen
- `robots.txt`

## Features (aus der Originalseite übernommen)

- Tattoo-Galerie: Suche in der Information, Kategorien (Gesicht, Brust, Rücken, Arm Rechts/Links, Bein Rechts/Links, plus neu "Alle"), Spalten Preis, Nr., Bild, Sitzungen, Information, Lightbox
- Mitarbeiter gruppiert in Tätowierer und Assistenz, mit Nummer, Name, Rolle, Telefon
- Standort: Fotos (Empfang, Tattoo-Saal 1 und 2) mit Lightbox, interaktive Karte (ziehen, Mausrad-Zoom, Pinch-Zoom, Zoom-Buttons). Der BIS-Marker ist fest gesetzt und nicht verschiebbar; Position in `assets/js/main.js` (`pos`, Anteil an der Kartenbreite/-höhe: x 0.192, y 0.363). Die Karte hat festes Seitenverhältnis 535:526, damit der Marker bei jeder Größe auf derselben Stelle liegt.
- DE/HI-Umschaltung (Texte stammen aus dem Original)

## Warenkorb

- Jedes Tattoo in der Galerie hat ein "+"; damit kommt es in den Warenkorb (Symbol oben im Header, Schublade von rechts). Der Warenkorb bleibt im Browser (`localStorage`, Schlüssel `bis_cart`).
- Nutzer liefert nur die **Barpreise** (`priceCash` in `assets/js/data.js`). Der Kartenpreis wird automatisch berechnet: Barpreis plus 5 % (`cardMarkupPct`), dann auf die nächste 5er-Zahl aufgerundet (`cardRoundTo`). Beispiele: 750 → 790, 500 → 525, 1250 → 1315. Wird ein Kartenpreis trotzdem von Hand als `price` gesetzt, hat der Vorrang.
- Währung: Euro (`currency: "€"`).
- Aktuelle Barpreise: Tattoo 1, 2, 9, 10, 14, 15 = 750; Tattoo 3 bis 6, 16, 17, 18 = 500; Tattoo 7, 8, 11, 12, 13 = 1250. Damit haben alle 18 Tattoos einen Preis.
- Tattoo 12 liegt in der Kategorie Arm Links (Dateiname sagte "Rücken", Nutzer hat korrigiert).
- Mengenrabatt auf die gesamte Anzahl: ab 2 Tattoos 5 %, ab 5 Tattoos 10 %, ab 10 Tattoos 20 % (`volumeDiscounts` in `assets/js/data.js`).
- Rabattcodes in `codes` in `assets/js/data.js`, z. B. `"UI-NEWS": 10` (10 % auf alles, Groß-/Kleinschreibung egal). Neue Partner-Codes dort ergänzen.
- Code kommt oben drauf: Mengenrabatt und Code-Rabatt werden in Prozentpunkten addiert (20 % + 10 % = 30 %), `stackDiscounts: true`. Mit `false` gilt nur der höhere von beiden.
- Der Warenkorb zeigt Gesamtsumme in Bargeld und in Karte, die Ersparnis durch Bargeld und einen Hinweis auf den nächsten Rabatt. "Zusammenfassung kopieren" legt den Auftrag in die Zwischenablage. Bezahlt wird im Spiel, es gibt kein Checkout.
- Admin-Formular: Barpreis ist Pflicht, Kartenpreis optional (sonst automatisch).

## Tattoo-Fotos

- Quelle: `C:\Users\Mateo\Documents\MC Stadt [WICHTIG]\bis-tattoos`, Dateinamen `<Nummer>-<Körperstelle>.png` (z. B. `7-brust.png`, `1-rechterarm.png`, `3-kopf.png`). Zuordnung: kopf = Gesicht, brust, rücken, rechterarm/rechtearm = Arm Rechts, linkearm/linkerarm = Arm Links, rechtebein = Bein Rechts, linkebein = Bein Links (auch armlinks/armrechts, gesicht, linkesbein/rechtesbein, rechtbein).
- Originale: 2560×1377, Person immer in der Mitte. Zuschnitt für alle gleich: Pixel x 980 bis 1600, y 360 bis 1290 (620×930, Verhältnis 2:3), damit die Person das Bild füllt und das Tattoo gut erkennbar ist. Ausnahmen, weil das Tattoo sonst abgeschnitten wäre: Nr. 49 (930, 200, 1550, 1130), Nr. 69, 70, 89 (970, 400, 1621, 1377).
- Stand: Nr. 1 bis 100 sind eingetragen. Nr. 19 bis 100 haben noch keinen Preis und keine Beschreibung. `26-linkerarm.png` ist dieselbe Datei wie `46-rechterarm.png` und wurde ausgelassen, Nr. 26 ist `26-rechtesbein.png`.
- Ausgabe in mehrere Bildordner direkt unter `assets/`, je 25 Tattoos: `img1` (Nr. 1 bis 25), `img2` (26 bis 50), `img3` (51 bis 75), `img4` (76 bis 100), weiter `img5` ab Nr. 101 usw. Kein Ordner hat mehr als 50 Dateien (Nutzer kann nur ca. 50 Dateien auf einmal hochladen). `assets/img/` enthält nur die Seitenbilder (Logo, Fotos, Karte). Dateien: `tattoo-<Nr>.jpg` (600×900, JPEG Qualität 70, progressiv, ca. 25 KB) für die Lightbox und `tattoo-<Nr>-s.jpg` (360×540, Qualität 64, ca. 10 KB) für Karten und Warenkorb. Felder `image` und `thumb` in `assets/js/data.js`.
- Galerie ist ein Kartenraster (Desktop 5 Spalten, Handy 2 Spalten) statt Liste: großes Bild, Nummer, Körperstelle (nur beim Filter "Alle"), Preise, Plus-Button, Sitzungen, Beschreibung.
- Es wird insgesamt 301 Tattoos geben, der Nutzer schickt sie nach und nach. Die Galerie zeigt deshalb 20 Karten und lädt per "Mehr anzeigen" (je 20) nach; Filter und Suche setzen zurück. Die Suche findet Nummer (auch mit #) und Beschreibung. Mit 300 Karten getestet: alle zusammen rendern in ca. 130 ms, Bilder laden nur sichtbar.
- Neue Tattoos kommen in Schüben: Fotos in `bis-tattoos`, Dateiname `<Nr>-<Körperstelle>.png`. Ablauf pro Schub: zuschneiden und komprimieren (Parameter oben), Einträge in `assets/js/data.js` ergänzen, Bar-Preis, Beschreibung (Deutsch und Hindi) und Kategorie nach Angabe des Nutzers. Dateiname kann falsch sein (Tattoo 12 hieß "rücken", ist aber Arm Links), Angaben des Nutzers gehen vor.
- Beschreibung bleibt leer (Karte zeigt dann nichts).
- Sitzungen: Standard ist 1 (Feld `sessions` weglassen). Der Preis gilt pro Sitzung, steht in einer Zeile mit den Sitzungen ("Sitzungen: 1 · Preis pro Sitzung"). Bei `sessions: 2` oder mehr erscheint auf der Karte der Hinweis "Du bezahlst für 2 Sitzungen, also 2× den Preis" plus "Mindestens 3 Tage Wartezeit bis zur nächsten Sitzung" (`sessionWaitDays` in `data.js`). Im Warenkorb wird Preis × Sitzungen gerechnet; der Mengenrabatt zählt Tattoos, nicht Sitzungen. Ein Full-Body-Tattoo mit mehreren Sitzungen kommt später, Nutzer sagt Bescheid.
- Ohne Preis steht auf der Karte "Preis folgt", ohne Plus-Button und ohne Sitzungszeile. Preise (Karte `price`, Bar `priceCash`) und Sitzungen (`sessions`) kommen vom Nutzer und werden in `assets/js/data.js` ergänzt.
- Mitarbeiter-Fotos kommen später (Feld `photo` in `assets/js/data.js`).

## Musikplayer

- Unten links, fest positioniert: Play/Pause, Titel, Stummschalter, Lautstärkeregler. Am Handy nur Play und Lautsprecher, der Lautsprecher klappt den Regler auf. Auf iPhones (Lautstärke per Web nicht regelbar) wird der Regler ausgeblendet, der Lautsprecher schaltet stumm.
- Song: `assets/audio/tunak.mp3` (Daler Mehndi, Tunak Tunak Tun, ca. 6 MB, Endlosschleife). Lädt erst beim Klick auf Play (`preload="none"`), kein Autoplay. Lautstärke wird gemerkt (`bis_vol`, Standard 40). Titel und Interpret stehen in `index.html`, Hindi-Schreibweise in `NAMES_HI`.
- Der Song ist urheberrechtlich geschützt; Nutzer wurde darauf hingewiesen.

## Design

- Schlicht und ruhig: runde Ecken (`--r`, `--r-sm`, `--pill` in `style.css`), keine Körnung, Ringe, Maus-Leuchten, Logo-Animation oder Laufschrift (nur eine ruhige Zeile unter dem Hero). Nutzer will es "sehr clean".

## Performance (auch für schwache Geräte)

- Start-Ladung unkomprimiert ca. 160 KB (HTML, CSS, JS, Schrift, Logo). Tattoo-Bilder laden erst beim Scrollen (`loading="lazy"`), die 100 Tattoos zusammen (Vorschauen plus große Versionen) ca. 3,4 MB, geladen wird nur, was sichtbar wird.
- Logo: `logo.png` (900 px, Palette, 28 KB) im Hero, `logo-sm.png` (360 px, 9 KB) in Header und Footer. Standort-Fotos 1280 px JPEG (ca. 55 KB), Karte `karte.jpg` (51 KB).
- Neue Bilder immer so komprimieren: JPEG, progressiv, nicht größer als nötig (doppelte Anzeigegröße), kleine Vorschau plus größere Version.

## Inhalte pflegen

- Mitarbeiter und Tattoos stehen in `assets/js/data.js`.
- Admin-Modus: `?admin=1` an die URL hängen (z. B. `domain/?admin=1`). Dann erscheinen "Hinzufügen"-Buttons, Löschen-Kreuze und eine Leiste mit Export/Reset. Änderungen liegen nur lokal im Browser. "Export" lädt eine fertige `data.js` plus die Bilder herunter; diese Dateien in den Ordner kopieren (`data.js` nach `assets/js/`, Tattoo-Bilder nach `assets/img-neu/`, Porträts nach `assets/img/team/`) und neu hochladen. `?admin=0` schaltet den Modus aus.
- Original-Mitarbeiterfotos waren nur Platzhalter (Inselkarte), deshalb zeigen die Karten Initialen. Ein Porträt wird über das Feld `photo` in `data.js` gesetzt.

## Arbeitsregeln

- Dateien direkt im Ordner bearbeiten. Keine ZIPs, der Nutzer lädt den ganzen Ordner hoch.
- Keine Kommentare im Code (weder HTML, CSS noch JS), in keiner Datei. Nur Code, keine KI-Erklärtexte. Gilt auch für neue Dateien.
- Keine externen Fonts/CDNs (DSGVO).
- Mobile prüfen: kein horizontales Scrollen, Tap-Ziele mindestens 36 px.
- Impressum und Datenschutzerklärung fehlen noch und sind vor dem Livegang nötig.
- Kein Tracking einzelner Besucher (keine IP-Logger, keine Fingerprints).
- PowerShell: wegen `[WICHTIG]` im Pfad bei Get-/Copy-/Remove-Item immer `-LiteralPath`; Ordner anlegen mit Bash `mkdir -p`.
- Lokal testen: im Ordner `python -m http.server 8765`, dann http://localhost:8765.

## Changelog

### 2026-11-21
- Projektordner angelegt.
- Originalseite analysiert (Hero, Galerie mit Filter/Suche, Mitarbeiter, Standort mit Fotos und Karte, DE/HI) und komplett neu gebaut.
- Logo freigestellt, Favicon und OG-Bild erzeugt, Standort-Fotos und Karte von der Originalseite übernommen und komprimiert.
- Mitarbeiter: Imran Kumar und Karan Gupta (Tätowierer), Ajay Bhatt und Tayler Creed (Assistenz, 17938/78200).
- Admin-Modus mit lokalem Hinzufügen/Löschen und Export eingebaut.
- Desktop und Handy lokal getestet, keine Konsolenfehler.

### 2026-11-24
- Warenkorb eingebaut: Plus-Button pro Tattoo, Bar- und Kartenpreis, Mengenrabatt (2/5/10 Tattoos = 10/20/40 %), Rabattcodes (UI-NEWS = 10 %), Gesamtsumme in Bar und Karte, Ersparnis durch Bargeld.
- Rechnung geprüft (u. a. 3 Tattoos, 11 Tattoos, Code).
- Alle Dateien auf Kommentare geprüft, keine vorhanden.
- Code-Rabatt kommt oben auf den Mengenrabatt (`stackDiscounts: true`).
- Preise für Tattoo 1 bis 8 eingetragen (Bar 750, 500, 1250), Kartenpreis automatisch +5 % auf 5er-Zahl aufgerundet, Währung auf Euro umgestellt.
- Sitzungen: Standard 1, Preis gilt pro Sitzung (Hinweis auf der Karte), bei mehr Sitzungen Hinweis zu doppeltem Preis und Wartezeit, Warenkorb rechnet Preis × Sitzungen.
- Beschreibungen für alle 18 Tattoos eingetragen (Deutsch und Hindi). Die gesamte Seite ist jetzt vollständig auf Hindi verfügbar.
- Galerie von Liste auf großes Kartenraster umgestellt, Fotos enger auf die Person zugeschnitten und größer dargestellt.
- Die ersten 18 Tattoos eingetragen (Fotos zugeschnitten und komprimiert, ohne Preise). Alle übrigen Bilder verkleinert: Start-Ladung ca. 160 KB.

### 2026-11-25
- Tattoos 19 bis 100 zugeschnitten, komprimiert und eingetragen (noch ohne Preis und Beschreibung).
- Körperstelle unter der Nummer wird bei aktivem Kategorie-Filter ausgeblendet.
- Mengenrabatt gesenkt: ab 2/5/10 Tattoos jetzt 5/10/20 %.
- Musikplayer unten links eingebaut, Design aufgeräumt, Galerie wird auf kleinen Bildschirmen zuverlässig eingeblendet.
- Tattoo-Bilder in 25er-Unterordner aufgeteilt (höchstens 50 Dateien pro Ordner).
- Statt Unterordnern jetzt eigene Bildordner `assets/img1` bis `assets/img4`.
