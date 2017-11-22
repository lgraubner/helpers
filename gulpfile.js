const gulp = require('gulp');

const babel = require('gulp-babel');

gulp.task('default', () => {
  gulp
    .src(['src/**/*.js', '!src/**/*.test.js'])
    .pipe(
      babel({
        presets: ['env', 'stage-3'],
        plugins: ['add-module-exports'],
      })
    )
    .pipe(gulp.dest('dist'));
});
