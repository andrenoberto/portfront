const gulp = require('gulp');
const browserSync = require('browser-sync');
const imageMin = require('gulp-imagemin');
const sass = require('gulp-sass');

gulp.task('default', ['font-awesome', 'imageMin', 'sass', 'watch']);

gulp.task('font-awesome', () => {
    gulp.src('./node_modules/@fortawesome/fontawesome-free-webfonts/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
        .pipe(gulp.dest('./src/assets/font-awesome/css/'))
});

gulp.task('imageMin', () => {
    gulp.src('./assets/images/*')
        .pipe(imageMin([
            imageMin.optipng({optimizationLevel: 7})
        ]))
        .pipe(gulp.dest('./src/assets/images/'))
});

gulp.task('sass', () => {
    gulp.src('./assets/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
        .pipe(gulp.dest('./src/assets/css/'))
});

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    gulp.watch('./src/**/*').on('change', browserSync.reload);
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
    gulp.watch('./assets/images/*', ['imageMin']);
});

gulp.task('watch', () => {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
    gulp.watch('./assets/images/*', ['imageMin']);
});
