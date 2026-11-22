# BIS Website — Projektnotizen

## Projektziel

Website der **Bandar Ink Society (BIS)**, ein Tattoo-Studio in Central-Bay, United-Islands (Minecraft-Roleplay-Stadt).
Neubau der Originalseite https://bandar-inc-society.base44.app/ mit allen Features, aber deutlich schöner.

- Domain: noch offen
- Sprachen: Deutsch und Hindi (Umschalter oben rechts, Auswahl wird in `localStorage` gemerkt)
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
- `assets/img/` — Logo, Favicon, `og.jpg`, Standort-Fotos (`empfang.jpg`, `saal-1.jpg`, `saal-2.jpg`), Karte (`karte.png`)
- `assets/img/tattoos/` und `assets/img/team/` — Bilder, die per Export dazukommen
- `robots.txt`

## Features (aus der Originalseite übernommen)

- Tattoo-Galerie: Suche in der Information, Kategorien (Gesicht, Brust, Rücken, Arm Rechts/Links, Bein Rechts/Links, plus neu "Alle"), Spalten Preis, Nr., Bild, Sitzungen, Information, Lightbox
- Mitarbeiter gruppiert in Tätowierer und Assistenz, mit Nummer, Name, Rolle, Telefon
- Standort: Fotos (Empfang, Tattoo-Saal 1 und 2) mit Lightbox, interaktive Karte (ziehen, Mausrad-Zoom, Pinch-Zoom, Zoom-Buttons). Der BIS-Marker ist fest gesetzt und nicht verschiebbar; Position in `assets/js/main.js` (`pos`, Anteil an der Kartenbreite/-höhe: x 0.192, y 0.363). Die Karte hat festes Seitenverhältnis 535:526, damit der Marker bei jeder Größe auf derselben Stelle liegt.
- DE/HI-Umschaltung (Texte stammen aus dem Original)

## Inhalte pflegen

- Mitarbeiter und Tattoos stehen in `assets/js/data.js`.
- Admin-Modus: `?admin=1` an die URL hängen (z. B. `domain/?admin=1`). Dann erscheinen "Hinzufügen"-Buttons, Löschen-Kreuze und eine Leiste mit Export/Reset. Änderungen liegen nur lokal im Browser. "Export" lädt eine fertige `data.js` plus die Bilder herunter; diese Dateien in den Ordner kopieren (`data.js` nach `assets/js/`, Tattoo-Bilder nach `assets/img/tattoos/`, Porträts nach `assets/img/team/`) und neu hochladen. `?admin=0` schaltet den Modus aus.
- Original-Mitarbeiterfotos waren nur Platzhalter (Inselkarte), deshalb zeigen die Karten Initialen. Ein Porträt wird über das Feld `photo` in `data.js` gesetzt.

## Arbeitsregeln

- Dateien direkt im Ordner bearbeiten. Keine ZIPs, der Nutzer lädt den ganzen Ordner hoch.
- Keine Kommentare im Code (weder HTML, CSS noch JS).
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
