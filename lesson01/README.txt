Erstelle die package.json via cmd
npm init

2. Folge den Anweisungen
Sie sicher, dass Du den Projekttitel ohne Leer- und Sonderzeichen schreibst und die Versionsnummer aus drei Ziffern besteht.

3. Erstelle die Gruntfile.js
Die Grundstruktur der Datei erfährt man von der entsprechenden Webseite gruntjs.com oder halt hier:

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

Das Ende "--save-dev" führt dazu, dass das Modul in die package.json als Abhängigkeit landet.

5. Füge eine Datei .gitignore hinzu und modifziere den Inhalt wie folgt:
node_modules

WICHTIG: Dadurch gewährleisten wir das Auschließen von spezischen Dateien im Repository, in unserem Fall den Ordner node_modules. Das erhöht die Produktivität in der Teamarbeit, da das Repo nicht zugemüllt wird.