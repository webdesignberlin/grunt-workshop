1. Installiere Dir alle abh�ngigen Pakete und grunt-contrib-connect via cmd
npm i
npm i grunt-contrib-connect --save-dev

2. Installiere Dir schon einmal das Plugin f�r den Browser (optional)

3. F�ge den Task "connect" hinzu und nenne die Aufgabe "server", der ebenfalls "watch" beinhaltet

5. Integriere Livereload f�r die folgenden Tasks: watch, connect
Benutze dabei die Optionen aus connect, sodass livereload nicht doppelt gepflegt werden muss.

6. F�hre nun "grunt server" aus und schau, ob alles funktioniert