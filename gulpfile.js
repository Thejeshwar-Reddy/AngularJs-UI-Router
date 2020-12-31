const { src, dest, series, watch } = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const del = require('delete');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-clean-css');
const rev = require('gulp-rev');

function clean(done) {
  del(['app*.min.js', 'umega*.min.css']);
  return done();
};

function buildJS(done) {
  src(['app/client/**/*.js'], { base: "./" })
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('.'));
  done();
};

function buildCSS() {
  return src(['app/client/**/*.scss'], { base: "./" })
    .pipe(sass({ errLogToConsole: true }))
    .pipe(autoprefixer('last 4 version'))
    .pipe(minifyCSS({compatibility: 'ie10'}))
    .pipe(concat('umega.css'))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('.'));
}

var startServer = function (done) {
  browserSync.init({
    proxy: "http://localhost:3002/",
    port: 9091
  });
  done();
};

var watchSource = function (done) {
  watch(['app/client/**/*.js', 'app/client/**/*.scss'], series(buildJS, buildCSS));
  done();
};

exports.dev = series(clean, buildJS, buildCSS, startServer, watchSource)