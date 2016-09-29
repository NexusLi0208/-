var gulp = require('gulp')
    // JS语法检查


, jshint = require('gulp-jshint')
    //合并文件


, concat = require('gulp-concat')
    //重命名文件


, rename = require('gulp-rename')
    //编译SASS


, sass = require('gulp-sass')
    //压缩js


, cssmin = require('gulp-minify-css')
    //压缩html


, uglify = require('gulp-uglify')
    , minifyHtml = require("gulp-minify-html"); //压缩CSS
//任务

//合并项目JS文件并压缩
gulp.task('scripts', function () {
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});
//压缩SASS
gulp.task('sass', function () {
    return gulp.src('sass/**/*.scss').pipe(sass()).pipe(gulp.dest('css'));
});
//检查JS语法
gulp.task('lint', function () {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
//压缩html文件
gulp.task('minify-html', function () {
    gulp.src('html/*.html') // 要压缩的html文件
        .pipe(minifyHtml()) //压缩
        .pipe(gulp.dest('dist/html'));
});