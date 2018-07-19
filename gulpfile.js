'use strict'

const gulp    = require('gulp')
const server  = require('gulp-server-livereload')

const config = {
  host: '0.0.0.0',
  port: process.env.PORT || 4000
}

gulp.task('live-reload', () => {

  gulp.src('').pipe(server({
    host: config.host,
    port: config.port, 
    defaultFile: 'index.html',
    livereload: false,
    directoryListing: false,
    open: true
  }))
  
})

gulp.task(
  'default', 
  ['live-reload']
)