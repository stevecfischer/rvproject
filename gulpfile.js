var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglifyjs');
var useref = require('gulp-useref');
var fontAwesome = require('node-font-awesome');

var browserSync = require('browser-sync').create();

var config = {
    appDir: './app',
    distDir: './dist'
};

gulp.task('fonts', function () {
    gulp.src(fontAwesome.fonts)
        .pipe(gulp.dest(config.distDir + '/fonts'));
});

gulp.task('icons', function () {
    gulp.src(fontAwesome.fonts)
        .pipe(gulp.dest(config.distDir + '/fonts'));
});

gulp.task('images', function () {
    return gulp.src(config.appDir + '/images/**/*')
        .pipe(gulp.dest(config.distDir + '/images'))
})

gulp.task('html', function () {
    return gulp.src(config.appDir + '/index.html')
        .pipe(gulp.dest(config.distDir))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('js', function () {
    return gulp.src(config.appDir + '/js/**/*.js')
        .pipe(gulp.dest(config.distDir + '/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('sass', function () {
    //{outputStyle: 'compressed'}
    return gulp.src(config.appDir + '/stylesheets/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [fontAwesome.scssPath]
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.distDir + '/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass', 'html', 'js', 'images'], function () {
    gulp.watch(config.appDir + '/stylesheets/**/*.scss', ['sass']);
    gulp.watch(config.appDir + '/*.html', ['html']);
    gulp.watch(config.appDir + '/js/**/*.js', ['js']);
    // Other watchers
});

// gulp.task('useref', function () {
//     return gulp.src(config.appDir + '/*.html')
//         .pipe(useref())
//         .pipe(gulpIf('*.js', uglify()))
//         .pipe(gulp.dest(config.distDir))
// });

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    })
});