const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const imageMin= require('gulp-imagemin');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel') 

function compileSass(){
    return gulp.src('./sass/main.scss')
            .pipe(sass({outputStyle:'compressed'}))
            .pipe(gulp.dest('./production'))
}

function htmlMin(){
    return gulp.src('./index.html')
            .pipe(htmlmin({collapseWhitespace:true}))
            .pipe(gulp.dest('./production'))
}

function compressImage(){
    return gulp.src('./imagens/*')
            .pipe(imageMin())
            .pipe(gulp.dest('./production/images'))
}

function compressJS(){
    return gulp.src('./script.js')
            .pipe(babel({
                presets:['@babel/env']
            }))
            .pipe(uglify())
            .pipe(gulp.dest('./production'))
}

exports.default = gulp.series(htmlMin, compileSass, compressImage, compressJS)