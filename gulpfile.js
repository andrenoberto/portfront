const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', () => {
    gulp.src('./assets/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/css/'));
});

gulp.task('watch', () => {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
});
