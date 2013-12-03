1. Installiere Dir alle abhängigen Pakete und assemble via cmd
npm i
npm i assemble --save-dev

2. Schauen wir uns einfach mal die Webseite an
Hier die URL: https://github.com/assemble/assemble


3. Füge den Task "assemble" hinzu und nenne die Aufgabe "build" und füge diesen der server-Aufage hinzu

5. Bestimme die Grundkonfigurationen von Assemble. Lege dabei eine einfache Ordnerstruktur an:
- templates 	// für das Layout
- partials 	// für Includes
- data		// für externe Daten wie json
- pages		// für die Seiten
- _html		// für Dein Output

6. Schreibe die HTML-Datei in ein Template um und lege eine index.hbs an
Achte dabei auf:
- Schreibweise der handlebars
- die Deklaration der Seite
- die Auszeichnung von Komponenten in partials

Dabei hilft auch ungemein die Webseite von Assemble: http://assemble.io/docs/

7. Baue deine Seite via "grunt build"

8. Integriere assemble in livereload innerhalb des watch-Tasks und füge den Build-Prozess der Aufgabe "server" hinzu