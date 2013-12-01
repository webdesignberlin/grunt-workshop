/*global module:false*/
module.exports = function(grunt) {
	
  // Project configuration.
  grunt.initConfig({

      compass: {
          dist: {
              options: {
                  config: 'config.rb'  // css_dir = 'dev/css'
              }
          }
      },

      watch: {
          scss: {
              files: ['scss/*.scss'],
              tasks: ['compass:dist']
          },
          bg: {
              files: ['scss/*.scss']
          }
      },

      bgShell: {
          _defaults: {
              bg: true
          },
          watchCompass: {
              cmd: 'compass watch'
          }
      }
   
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bg-shell');


  // Default task.
  grunt.registerTask('css', ['compass']);
  grunt.registerTask('bg', ['bgShell:watchCompass', 'watch:bg']);
  grunt.registerTask('default', ['css', 'watch']);

};