const gulp = require('gulp');
const sass = require('gulp-sass');
const min = require('gulp-clean-css');

gulp.task('default', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(min())
    .pipe(gulp.dest('./public'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
