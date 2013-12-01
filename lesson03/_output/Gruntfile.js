/*global module:false*/
module.exports = function(grunt) {
	
  // Project configuration.
  grunt.initConfig({
	watch: {
      all: {
        files: ['gruntfile.js']
      },
    },
   
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task.
  grunt.registerTask('default', ['watch']);

};