// Gulp plugins:
var gulp = require('gulp')
var pug = require('gulp-pug')
var stylus = require('gulp-stylus')
var nib = require('nib')
var changed = require('gulp-changed')
var prefix = require('gulp-autoprefixer')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var plumber = require('gulp-plumber')
var browser_sync = require('browser-sync')
var gulp_if = require('gulp-if')
var argv = require('yargs').argv

// Useful globs in handy variables:
var markup_src = [
  'source/markup/**/*.pug',
  '!source/markup/_layout.pug',
  '!source/markup/partials{,/**}',
  '!source/markup/sections{,/**}',
  '!source/markup/features{,/**}' ]

var styles_src = [
  'source/stylesheets/**/*.styl',
  '!source/stylesheets/partials{,/**}',
  '!source/stylesheets/modules{,/**}' ]

var js_src = [
  'source/javascript/**/*.js',
  '!source/javascript/vendor{,/**}' ]

var js_vendors_src = [
  'node_modules/smooth-scroll/dist/js/smooth-scroll.min.js'
]

var images_src = 'source/images/**/*.*'

// Aaaand we start taskin’
// By default, we build, serve, and watch for changes:
gulp.task('watch', ['build', 'browser-sync'], function () {
  gulp.watch(markup_src[0], ['markup'])
  gulp.watch(styles_src[0], ['styles'])
  gulp.watch(js_src[0], ['javascript'])
  gulp.watch(js_vendors_src, ['javascript_vendors'])
  gulp.watch(images_src, ['images'])
})

// Build the site:
gulp.task('build',
  [ 'markup',
    'styles',
    'javascript',
    'javascript_vendors',
    'images' ]
)

// Generate markup:
gulp.task('markup', function () {
  gulp.src(markup_src)
  .pipe(plumber())
  .pipe(pug({
    pretty: (argv.production ? false : true)
  }))
  .pipe(gulp.dest('build/'))
})

// Generate styles, add prefixes:
gulp.task('styles', function () {
  gulp.src(styles_src)
  .pipe(plumber())
  .pipe(stylus({
    use: nib(),
    import: [ 'nib' ],
    compress: (argv.production ? true : false)
  }))
  .pipe(prefix('last 2 versions', '> 1%'))
  .pipe(gulp.dest('build/stylesheets'))
})

// Copy javascript:
gulp.task('javascript', function () {
  gulp.src(js_src)
  .pipe(plumber())
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/javascript'))
})
// TO-DO: Implement hinting & collation.

gulp.task('javascript_vendors', function () {
  gulp.src(js_vendors_src)
  .pipe(plumber())
  .pipe(gulp.dest('build/javascript/vendor'))
})

// Copy images to build dir:
gulp.task('images', function () {
  gulp.src(images_src)
  .pipe(plumber())
  .pipe(gulp.dest('build/images'))
})

// Init browser-sync & watch generated files:
gulp.task('browser-sync', function () {
  browser_sync.init(null, {
    server: {
      baseDir: './build'
    },
    files: [
      'build/**/*.html',
      'build/**/*.css',
      'build/**/*.js'
    ]
  })
})
