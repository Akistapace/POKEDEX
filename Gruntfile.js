'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'src/js/*.js',
        '!dist/index.min.js'
      ]
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: false,
          sourcemap: false
        },
        files: {
          'src/css/main.min.css': [
              'src/sass/main.scss'
          ],
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/index.min.js': [
            'src/js/*.js'
          ]
        },
        options: {
          sourceMap: 'dist/index.min.js.map',
          sourceMappingURL: 'dist/index.min.js.map'
        }
      },
      build: {
        'dist/js/index.min.js': [
          'src/js/*.js'
      ]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: [
          'src/sass/**/*.scss'
        ],
        tasks: ['sass']
      },
      js: {
        files: [
          'src/js/*.js'
        ],
        tasks: ['jshint', 'uglify']
      },
      html: {
        files: [
          '**/*.html'
        ]
      }
    },
    clean: {
      dist: [
        ' dist/*.min.css',
        'dist/index.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'sass',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};