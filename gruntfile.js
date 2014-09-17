module.exports = function(grunt) {

  grunt.initConfig({

    markdownpdf: {
      options: {
        cssPath: "../../../../css/style.css",
        // paperOrientation: "landscape"
      },
      files: {
        src: "front-end-cheat-sheet.md",
        dest: "pdf"
      }
    },

    markdown: {
      all: {
        files: [
          {
            expand: true,
            src: 'front-end-cheat-sheet.md',
            dest: 'html',
            ext: '.html'
          }
        ]
      }
    },

    wkhtmltopdf: {
      dev: {
        src: 'html/*.html',
        dest: 'pdf'
      }
    },

  });

  grunt.loadNpmTasks('grunt-markdown-pdf');
  grunt.loadNpmTasks('grunt-markdown');
  grunt.loadNpmTasks('grunt-wkhtmltopdf');

  grunt.registerTask('default', ['markdown']);

};
