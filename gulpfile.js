"use strict";
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    htmlmin = require('gulp-htmlmin'),
    jsmin = require('gulp-jsmin'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    cssmin = require('gulp-cssmin'),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');


gulp.task('default',()=>{
  gulp.src('src/scss/*.scss').pipe(sass()).pipe(cssmin()).pipe(autoprefixer()).pipe(gulp.dest('dist/css'));
  gulp.src('src/*.html').pipe(htmlmin({collapseWhitespace:true})).pipe(gulp.dest('dist'));
  gulp.src('src/html/*.html').pipe(htmlmin({collapseWhitespace:true})).pipe(gulp.dest('dist/html'));
  gulp.src('src/js/*.js').pipe(jsmin()).pipe(gulp.dest('dist/js'));
  gulp.src('src/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
});

gulp.task('watch',()=>watch('src//*.*',()=>{
  gulp.src('src/*.scss').pipe(sass()).pipe(cssmin()).pipe(autoprefixer()).pipe(gulp.dest('dist'));
  gulp.src('src/*.css').pipe(cssmin()).pipe(autoprefixer()).pipe(gulp.dest('dist'));
  gulp.src('src/scss/*.scss').pipe(sass()).pipe(cssmin()).pipe(autoprefixer()).pipe(gulp.dest('dist/css'));
  gulp.src('src/scss/*.scss').pipe(sass()).pipe(cssmin()).pipe(autoprefixer()).pipe(gulp.dest('dist/css')).pipe(concatCss("../e.css"));

  gulp.src('src/*.html').pipe(htmlmin({collapseWhitespace:true})).pipe(gulp.dest('dist'));
  gulp.src('src/html/*.html').pipe(htmlmin({collapseWhitespace:true})).pipe(gulp.dest('dist/html'));

  gulp.src('src/*.js').pipe(jsmin()).pipe(gulp.dest('dist'));
  gulp.src('src/js/*.js').pipe(jsmin()).pipe(gulp.dest('dist/js'));
  gulp.src('src/js//*.js').pipe(jsmin()).pipe(gulp.dest('dist/js'));

  gulp.src('src/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
}));