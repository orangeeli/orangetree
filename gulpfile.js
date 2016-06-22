(()=>{

  // TODO : each task should go to each separate module

  'use strict';

  // Upgrade to node 6 or use babel for import usage
  const gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    mocha = require('gulp-mocha'),
    pugLinter = require('gulp-pug-linter'),
    debug = require('gulp-debug'),
    del = require('del'),
    nsp = require('gulp-nsp'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

  const tasks = {

    nsp(cb){
      nsp({package: __dirname + '/package.json'}, cb);
    },

    browserify(){
      return browserify("./app/js/app.js")
        .transform("babelify", {presets: ["es2015", "react"]}) // https://www.npmjs.com/package/babelify
        .bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source("app.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("./public/js"));
    },

    sass(){
      return gulp.src('./app/css/app.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
    },

    pug () {
      return gulp.src('./app/**/*.pug')
        .pipe(debug({title: 'unicorn:'}))
        .pipe(pug({
          pretty: true
        }))
        .pipe(gulp.dest('public'));
    },
    mocha (){
      return gulp.src(['./test/**/*.js'], {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({
          reporter: 'nyan',
          recursive: true
        })).once('error', function () {
          process.exit(1);
        });
    },
    gulpLint(){
      return gulp
        .src('./app/**/*.pug')
        .pipe(pugLinter())
        .pipe(pugLinter.reporter());
    },
    www : {
      clean () {
        return del([
          'public/**/*'
        ]);
      }
    },
    partials : {
      clean () {
        return del([
          'public/partials'
        ]);
      }
    }

  };

  // TODO: have another task for deploy
  gulp.task('compile:sass', tasks.sass);
  gulp.task('compile:js', tasks.browserify);
  gulp.task('lint:pug', tasks.pugLinter);
  gulp.task('compile:pug', tasks.pug);
  gulp.task('test:mocha', tasks.mocha);
  gulp.task('clean:www', tasks.www.clean);
  gulp.task('security:nsp', tasks.nsp);

  gulp.task('default', ['security:nsp', 'clean:www', 'compile:sass', 'lint:pug', 'compile:pug', 'compile:js']);

})();

