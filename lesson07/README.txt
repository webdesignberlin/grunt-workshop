1. Installiere Dir alle abh�ngigen Pakete und assemble via cmd
npm i
npm i assemble --save-dev

2. Schauen wir uns einfach mal die Webseite an
Hier die URL: https://github.com/assemble/assemble


3. F�ge den Task "assemble" hinzu und nenne die Aufgabe "build" und f�ge diesen der server-Aufage hinzu

5. Bestimme die Grundkonfigurationen von Assemble. Lege dabei eine einfache Ordnerstruktur an:
- templates 	// f�r das Layout
- partials 	// f�r Includes
- data		// f�r externe Daten wie json
- pages		// f�r die Seiten
- _html		// f�r Dein Output

6. Schreibe die HTML-Datei in ein Template um und lege eine index.hbs an
Achte dabei auf:
- Schreibweise der handlebars
- die Deklaration der Seite
- die Auszeichnung von Komponenten in partials

Dabei hilft auch ungemein die Webseite von Assemble: http://assemble.io/docs/

7. Baue deine Seite via "grunt build"

8. Integriere assemble in livereload innerhalb des watch-Tasks und f�ge den Build-Prozess der Aufgabe "server" hinzu