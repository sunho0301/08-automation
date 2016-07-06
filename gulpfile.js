'use strict';
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('say-hello', function() {
    console.log('Hello Gulp!');
})

gulp.task('build', function(){
    var stream = gulp.src(['app/**', '!app.**.*.js'])
    //.pipe(modifyingPlugin())
    .pipe(gulp.dest('build'));
    return stream;
});

gulp.task('min-js', function(){
    var stream = gulp.src('app/**/*.js')
    .pipe(uglify()) //pipe through the plugin
    .pipe(gulp.dest('build'));
    return stream;
});

gulp.task('default', ['build', 'min-js'], function() {
    console.log('All Done!');
})

// watch changes automatically
gulp.task('watch', function() {
  gulp.watch('app/**/*.js', ['min-js']);
  gulp.watch(['app/**', '!app/**/*.js'], ['build']);
});




gulp.task('browserSync', function(){
  browserSync.init({
    server: { 
      baseDir: 'build'
    }
  });
});