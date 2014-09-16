module.exports = function(grunt) {

  grunt.initConfig({

    markdownpdf: {
      options: {
        cssPath: "style.css",
        paperOrientation: "landscape"
      },
      files: {
        src: "front-end-cheat-sheet.md",
        dest: "pdf"
      }
    }

  });

  grunt.loadNpmTasks('grunt-markdown-pdf');

  grunt.registerTask('default', ['markdownpdf']);

};
