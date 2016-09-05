var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// JavaScript
gulp.task('scripts', function(){
  gulp.src('js/*.js')
    .pipe(reload({stream:true}));
});

// Styles
gulp.task('styles', function(){
  gulp.src('css/*.css')
    .pipe(reload({stream:true}));
});

// reload server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// watch for changes on files
gulp.task('watch', function(){
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('css/*.css', ['styles']);
  gulp.watch("*.html", ['bs-reload']);
});

// deploys
gulp.task('default',  ['scripts', 'styles', 'browser-sync','watch']);
