Erstelle die package.json via cmd
npm init

2. Folge den Anweisungen
Sie sicher, dass Du den Projekttitel ohne Leer- und Sonderzeichen schreibst und die Versionsnummer aus drei Ziffern besteht.

3. Erstelle die Gruntfile.js
Die Grundstruktur der Datei erf�hrt man von der entsprechenden Webseite gruntjs.com oder halt hier:

/*global module:false*/
module.exports = function(grunt) {
	
  // Project configuration.
  grunt.initConfig({
   
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('');


  // Default task.
  grunt.registerTask('default', []);

};

4. Installiere grunt via cmd
npm install grunt --save-dev

Das Ende "--save-dev" f�hrt dazu, dass das Modul in die package.json als Abh�ngigkeit landet.

5. F�ge eine Datei .gitignore hinzu und modifziere den Inhalt wie folgt:
node_modules

WICHTIG: Dadurch gew�hrleisten wir das Auschlie�en von spezischen Dateien im Repository, in unserem Fall den Ordner node_modules. Das erh�ht die Produktivit�t in der Teamarbeit, da das Repo nicht zugem�llt wird.