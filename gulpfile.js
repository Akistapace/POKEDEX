const gulp = require('gulp'),
    { src, dest, series, watch, parallel } = require('gulp'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    jshint = require('gulp-jshint'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    fileinclude = require('gulp-file-include'),
    paths = {
        html: {
            src: './src/html/pages/*.html',
            dest: './'
        },
        scripts: {
            js: './src/js/*.js',
            dir_js: './src/js/min/',
        },
        styles: {
            css: './src/css/',
            cssmain: './src/css/main.css',
            sass: './src/sass/main.scss',

            dir_css: './src/css/min/',
        },
        watch: {
            sass: './src/sass/**/*.scss',
            js: './src/js/*.js',
            html: ['./src/html/components/*.html', './src/html/pages/*.html'],
        }
    }

// Concatena e Minimiza o javascript 
const Uglifyjs = () => {
    return src(paths.scripts.js)
        .pipe(concat('index.js')).pipe(notify("Concatenando arquivos Js"))
        .pipe(babel()).pipe(notify("Rodando Babel"))
        .on("error", notify.onError("Error: <%= error.message %>"))
        .pipe(uglify()).pipe(notify("Rodando Uglify"))
        .on("error", notify.onError("Error: <%= error.message %>"))
        .pipe(jshint()).pipe(notify("Rodando Jshint"))
        .on("error", notify.onError("Error: <%= error.message %>"))
        .pipe(dest(paths.scripts.dir_js)).pipe(notify("Javascript compilado"))
        .pipe(browserSync.stream())
}

const Sass = () => {
    return src(paths.styles.sass)
        .pipe(sass())
        .on("error", notify.onError("Error: <%= error.message %>"))
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
        .pipe(gulp.dest(paths.styles.css))
        .pipe(browserSync.stream());
}

const includeHTML = () => {
    return gulp.src(paths.html.src)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(paths.html.dest));
}

// Static Server + watching scss/html/js files
const browsSync = () => {
    browserSync.init({
        server: {
            baseDir: paths.html.dest
        }
    })
    watch(paths.watch.sass, Sass).on('change', browserSync.reload)
    watch(paths.watch.js, Uglifyjs).on('change', browserSync.reload)
    watch(paths.watch.html, includeHTML).on('change', browserSync.reload)
}

exports.Uglifyjs = Uglifyjs;
exports.Sass = Sass;
exports.browsSync = browsSync;
exports.includeHTML = includeHTML;
exports.default = browsSync