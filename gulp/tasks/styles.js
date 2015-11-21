var gulp     = require('gulp');
var sass     = require('gulp-sass');

gulp.task('styles', function () {
    return gulp.src('./app/css/main.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css/'));
});