const { src, dest, series, watch } = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const del = require('delete');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');

function clean(done) {
  del(['app*.min.js', 'umega*.min.css']);
  return done();
};

function buildJS_dev(done) {
  src(['app/client/**/*.js'], { base: "./" })
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('.'));
  done();
}

var startServer = function (done) {
  browserSync.init({
    proxy: "http://localhost:3002/",
    port: 9091
  });
  done();
};

var watchSource = function (done) {
  watch(['app/client/**/*.js'], buildJS_dev);
  done();
};

exports.dev = series(clean, buildJS_dev, startServer, watchSource)