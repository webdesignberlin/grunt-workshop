/*global module:false*/
module.exports = function(grunt) {
	
  // Project configuration.
  grunt.initConfig({
   
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('');


  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit', 'concat', 'uglify']);

};