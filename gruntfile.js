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

    compass: {
      options: {
        // banner: "/* <%= pkg.author %>, Version: <%= pkg.version %> */",
        // httpPath: "/build",
        // imagesPath: 'assets/img',
        // specify: '*.scss'
        asset_cache_buster: false,
        cssDir: 'css',
        // httpImagesPath: '/img',
        // imagesDir: 'build/img',
        noLineComments: true,
        sassDir: 'scss'
      },
      development: {
        options: {
          environment: 'development'
        }
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['compass']);

};
