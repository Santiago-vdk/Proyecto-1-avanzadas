module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-nodemon');

  // Project configuration.
  grunt.initConfig({
    nodemon: {
      dev: {
        script: './server.js'
      }
    }
  });
  var defaultTasks = ['nodemon'];
  grunt.registerTask('default', defaultTasks);
};
