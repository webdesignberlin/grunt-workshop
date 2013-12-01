1. Installiere Dir grunt-init via cmd (für ausführliche Infos siehe: http://gruntjs.com/project-scaffolding)
npm install -g grunt-init

2. Kopiere Dir per Clone das Repo von "grunt-init-gruntfile" in den grunt-init-Ordner
git clone https://github.com/gruntjs/grunt-init-gruntfile.git ~/.grunt-init/gruntfile

Da das Root-Verzeichnis manchmal falsch verknüpft ist, kann man den Ordner auch einfach fest eingeben oder per Explorer dort hinnavigieren und dann einfach nur den Clone-Befehl ausführen:
git clone https://github.com/gruntjs/grunt-init-gruntfile.git

Vergiss nicht, den Ordner dann in gruntfile umzubenennen.

3. Nun geh in Dein Projekt zurück (Lesson02) und führe via cmd folgendes aus:
grunt-init gruntfile

Folge wie gewohnt den Anweisungen.

4. Füge die .gitignore und package.json aus Lesson01 hinzu oder erstelle sie einfach neu
Ändere ggf die package.json ab, sodass diese mit der Lesson übereinstimmt