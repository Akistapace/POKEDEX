const gulp = require('gulp');
const browserSync  = require('browser-sync').create();
const { src, dest, series, watch, parallel } = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
// const imgmin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css'); 
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const fileinclude = require('gulp-file-include');

var paths = {
      html: {
        src: './src/pages/*.html',
        dest: './'
      },
      scripts: { 
        js: ['./src/js/*.js'],
        dir_js: ['./src/js/min/'],
      },
      styles: {
        css: ['./src/css/'],
        cssmain: ['./src/css/main.css'],
        sass: ['./src/sass/main.scss'],

        dir_css: ['./src/css/min/'],
      },
      images: {
        src: [
          './src/assets/img/*',
          './src/assets/img/insignias/*',
        ],
        dest: [
          './src/assets/img/min/',
          './src/assets/img/min/insignias/',
        ]
      },
      watchs: ['./src/sass/**/*.scss', './src/js/*.js', './src/parcels/*.html', './src/pages/*.html'] 
}

// Concatena e Minimiza o javascript
function uglifyjs() {
  return src(paths.scripts.js)
         .pipe(concat('index.js'))
         .pipe(uglify())
         .pipe(gulp.dest(paths.scripts.dir_js))
         .pipe(browserSync.stream())
}

function gsass(){
  return src(paths.styles.sass)
         .pipe(sass())
         .pipe(gulp.dest(paths.styles.css))
         .pipe(browserSync.stream());
}

function cssmin(){
  return gulp.src(paths.styles.cssmain)
         .pipe(cleanCSS({
            debug: true,
            compatibility: 'ie8',
            level: {
                1: {
                    specialComments: 0,
                },
            },
         }))
         .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false,
         }))
         .pipe(rename({
            basename: 'main',
            suffix: '.min',
         }))
         .pipe(dest(paths.styles.dir_css))
}

// Static Server + watching scss/html/js files
function browsSync() {
  browserSync.init({
    server: {
      baseDir: paths.html.dest
    }
  });

  watch(paths.watchs, series(gsass, cssmin, uglifyjs,includeHTML)).on('change', browserSync.reload);;
}

function includeHTML(){
  return gulp.src(paths.html.src)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.html.dest));
}

// function watchTask(){
//   gulp.watch(paths.watchs, series(gsass, cssmin, uglifyjs));
// }

// function imgmini() {
//   return src(paths.images.src)
//          .pipe(imgmin())
//          .pipe(gulp.dest(paths.images.dest))
// }

exports.uglifyjs = uglifyjs;
exports.gsass = gsass;
exports.cssmin = cssmin;
exports.browsSync = browsSync;

exports.includeHTML = includeHTML;
// exports.imgmini = imgmini;
// exports.watchTask = watchTask;

exports.default = parallel(series(includeHTML,gsass,cssmin,browsSync),uglifyjs)