const gulp = require('gulp');
const sass = require('gulp-sass');
const imageMin = require('gulp-imagemin');

gulp.task('default', ['font-awesome', 'imageMin', 'sass', 'watch']);

gulp.task('font-awesome', () => {
    gulp.src('./node_modules/@fortawesome/fontawesome-free-webfonts/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/font-awesome/css/'));
});

gulp.task('imageMin', () => {
    gulp.src('./assets/images/*')
        .pipe(imageMin([
            imageMin.optipng({optimizationLevel: 7})
        ]))
        .pipe(gulp.dest('./src/assets/images/'));
});

gulp.task('sass', () => {
    gulp.src('./assets/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/css/'));
});

gulp.task('watch', () => {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
    gulp.watch('./assets/images/*', ['imageMin']);
});
