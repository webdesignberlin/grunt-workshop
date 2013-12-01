1. Sie sicher, dass Du Compass und SASS installiert hast

2. Öffne die Gruntfile.js und verschaffe Dir einen Überblick

3. Installiere Dir grunt-contrib-watch und grunt-contrib-compass via cmd
npm install grunt-contrib-watch && npm install grunt-contrib-compass

Bitte ohne --save-dev!

4. Konfiguriere Dir einen watch-task in der Gruntfile.js auf die SCSS-Dateien, der "grunt css" heißt und dann den Task compass startet

5. Starte diesen und schau, ob alles funktioniert!

6. Füge nun den css-task zum default hinzu und ergänze ihn mit dem watch-task

7. Stoppe die Zeit zum Kompilieren. Zufrieden?

8. Zum Vergleich lassen wir jetzt bgShell antreten: 
npm install grunt-bg-shell

9. Erstelle die Konfiguration und den Task bg

10. Vergleiche die Zeiten zu contrib-compass