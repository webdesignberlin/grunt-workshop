1. Installiere Dir grunt-init via cmd (f�r ausf�hrliche Infos siehe: http://gruntjs.com/project-scaffolding)
npm install -g grunt-init

2. Kopiere Dir per Clone das Repo von "grunt-init-gruntfile" in den grunt-init-Ordner
git clone https://github.com/gruntjs/grunt-init-gruntfile.git ~/.grunt-init/gruntfile

Da das Root-Verzeichnis manchmal falsch verkn�pft ist, kann man den Ordner auch einfach fest eingeben oder per Explorer dort hinnavigieren und dann einfach nur den Clone-Befehl ausf�hren:
git clone https://github.com/gruntjs/grunt-init-gruntfile.git

Vergiss nicht, den Ordner dann in gruntfile umzubenennen.

3. Nun geh in Dein Projekt zur�ck (Lesson02) und f�hre via cmd folgendes aus:
grunt-init gruntfile

Folge wie gewohnt den Anweisungen.

4. F�ge die .gitignore und package.json aus Lesson01 hinzu oder erstelle sie einfach neu
�ndere ggf die package.json ab, sodass diese mit der Lesson �bereinstimmt