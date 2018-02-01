// including plugins
var gulp = require('gulp'),
    minifyHtml = require('gulp-minify-html'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify')

gulp.task("scss", function () {
    gulp.src(
        "scss/*.scss"
    ).pipe(sass())
    .pipe(gulp.dest("styles"));
});

// task
const jsPaths = [
  'app.js',
  'services/*.js',
  'components/*.js'
]
gulp.task('uglify', function () {
    gulp.src(jsPaths) // path to your files
    .pipe(uglify())
    .pipe(rename({suffix:  '.min'}))
    //.pipe(gulp.dest('path/to/destination'));
    .pipe(gulp.dest('build/js'));
});

// task
gulp.task('minify-css', function () {
    gulp.src('scss/*.scss') // path to your file
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css'));
});

// task
gulp.task('minify-js', function () {
    gulp.src('./components/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('destination/components'));
});


gulp.task('default', ['uglify ']);
