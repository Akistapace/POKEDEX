const gulp = require('gulp');
const { src, dest, series, watch, parallel } = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
// const html = require('gulp-htmlmin');
const concat = require('gulp-concat');
const imgmin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css'); 
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

function uglifyjs() {
  return src('./src/**/*.js')
         .pipe(concat('index.js'))
         .pipe(uglify())
         .pipe(gulp.dest('./dist/'))
}

function gsass(){
  return src('./src/sass/main.scss')
         .pipe(sass())
         .pipe(gulp.dest('./src/css/'))
}

function cssmin(){
  return gulp.src('./src/css/*.css')
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
            cascade: false
         }))
         .pipe(rename({
            basename: 'style',
            suffix: '.min',
         }))
         .pipe(gulp.dest('./dist/'))

}

// function htmlmin(){
//   return src('./src/*.html')
//          .pipe(html({
//            collapseWhitespace:true
//          }))
//          .pipe(gulp.dest('./dist/'))
// }

function insignias() {
  return src('./src/assets/img/insignias/*')
         .pipe(imgmin())
         .pipe(gulp.dest('./dist/img/insignias/'))
}
function imgmini() {
  return src('./src/assets/img/*')
         .pipe(imgmin())
         .pipe(gulp.dest('./dist/img/'))
}

function watchTask(){
  // watch('*.html', browsersyncReload);
  watch(['src/sass/**/*.scss', 'src/js/*.js'], series(gsass,cssmin, uglifyjs));
}

exports.uglifyjs = uglifyjs;
exports.gsass = gsass;
// exports.htmlmin = htmlmin;
exports.imgmini = imgmini;
exports.insignias = insignias;
exports.cssmin = cssmin;
exports.watchTask = watchTask;


exports.default = parallel(uglifyjs, gsass, imgmini, cssmin, watchTask, insignias);