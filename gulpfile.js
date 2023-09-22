const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

async function buildStyles() {
  return await src('namms10/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('css'))
}

async function watchTask() {
  return await watch[('namms10/**/*.scss', buildStyles)]
}

exports.default = series(buildStyles, watchTask)
