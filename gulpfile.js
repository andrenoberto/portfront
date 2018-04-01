const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', () => {
    gulp.src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('watch', () => {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
