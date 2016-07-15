var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var inlinesource = require('gulp-inline-source');
var uglify = require('gulp-uglify');
var pump = require('pump');


gulp.task('default', ['sass', 'minify', 'scripts', 'compress']);

gulp.task('minify', function() {
    return gulp.src('src/index.html')
        .pipe(inlinesource())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('dist/js/main.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('sass', function() {
    return gulp.src('src/css/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});

gulp.task('scripts', function() {
    return gulp.src([
        'src/js/typing-info.js',
        'src/js/mistakes.js',
        'src/js/random-words.js',
        'src/js/custom-words.js',
        'src/js/settings.js',
        'src/js/letter.js',
        'src/js/letters-view.js',
        'src/js/app.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

