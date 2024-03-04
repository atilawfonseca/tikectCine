const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const maps = require('gulp-sourcemaps');

function compilSass(){
    return gulp.src('./src/styles/style.scss')
    .pipe(maps.init())
    .pipe(sass({
        outputStyle:'compressed'
    }))
    .pipe(maps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

exports.default = function (){
    gulp.watch('./src/styles/style.scss', {ignoreInitial:false}, gulp.series(compilSass));
}

