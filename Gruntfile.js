// Generated  using Front-End-Sass Generator https://github.com/Frodigo/front-end-generator

'use strict';

var path = require('path');

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: 'development',
    dist: 'dist'
  };

  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // browser sync task
    browserSync: {
      bsFiles: {
        src : ['development/**/*.{html,css,jpg,png,svg,js}']
      },
      options: {
        watchTask: true,
        server: './development'
      }
    },

    // sass task

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'development/css/main.css': 'development/sass/main.scss'
        }
      }
    },


    // post css task

    postcss: {
      options: {
        map: false, // inline sourcemaps
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 5 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'development/css/*.css'
      }
    },

    // scss lint

    scsslint: {
      allFiles: [
        'development/sass/**/*.scss'
      ],
      options: {
        //bundleExec: true,
        reporterOutput: 'tests/scss/scss-lint-report.xml',
        colorizeOutput: true,
        force: true
      }
    },

    // sass doc

    sassdoc: {
      default: {
        src: 'development/sass',
        options: {
          dest: 'development/docs/sass'
        }
      }
    },

    // js doc

    jsdoc : {
      dist : {
        src: ['development/scripts/*.js', 'development/test/*.js'],
        options: {
          destination: 'development/docs/js'
        }
      }
    },


    // wiredep task

    wiredep: {
      task: {
        src: [
          'development/**/*.html',
          'development/sass/styles.scss'
        ]

      }
    },

    // jshint task
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        force: true
      },
      default: {
        files: [{
          src: ['development/scripts/**/*.js']
        }]
      }
    },

    // html lint task

    htmllint: {
      all: ['development/**/*.html', '!development/vendor/**/*.html', '!development/docs/**/*.html']
    },

    // clean task

    clean: {
      default: {
        files: [
          {
            dot: true,
            src: [
              'dist/**/*'
            ]
          }
        ]
      }
    },

    // copy task

    copyto: {
      options: {
        ignore: [
          '.gitkeep',
          '**/.git',
          '**/.git/**',
          '**/*.{scss,sass}',
          'development/sass',
          'development/sass/**'
        ]
      },
      default: {
        files: [
          {cwd: 'development/', src: ['**/*'], dest: 'dist/', expand: true}
        ]
      }
    },


    // watch task

    watch: {
      styles: {
        files: ['development/**/*.{scss,sass}'],
        tasks: ['sass','postcss'],
        options: {
          spawn: false
        }
      }
    }

  });

  grunt.registerTask('serve', [
    'browserSync',
    'sass',
    'watch'
  ]);


  grunt.registerTask('test', [
    'htmllint',
    'scsslint',
    'jshint'
  ]);

  grunt.registerTask('docs', [
    'sassdoc',
    'jsdoc'
  ]);

  grunt.registerTask('default', [
    'clean',
    'sass',
    'copyto',
    'test',
    'docs'
  ]);

};
