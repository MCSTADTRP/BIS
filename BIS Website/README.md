# BIS Website

Website der Bandar Ink Society (BIS), Tattoo-Studio in Central-Bay. Statisch (HTML, CSS, Vanilla-JS), gehostet auf Cloudflare Pages.

## Veröffentlichen

1. Den kompletten Ordner im Cloudflare-Dashboard unter Pages per Drag-and-Drop hochladen.
2. Die Domain im Pages-Projekt unter "Custom domains" verbinden.

## Lokal ansehen

Im Ordner einen einfachen Server starten:

```
python -m http.server 8765
```

Danach http://localhost:8765 aufrufen.

## Inhalte ändern

- Mitarbeiter und Tattoos: `assets/js/data.js`
- Tattoos bequem hinzufügen: `?admin=1` an die URL hängen, Einträge anlegen, "Export" klicken und die heruntergeladenen Dateien in den Ordner kopieren (Details in [CLAUDE.md](CLAUDE.md)).

## Ordner

```
index.html
robots.txt
assets/
  css/style.css
  js/main.js, data.js
  img/
  fonts/
```

Weitere Notizen in [CLAUDE.md](CLAUDE.md), offene Aufgaben in [TODO.md](TODO.md).
