/**
 * Created by ngm on 2018/4/26.
 */
const gulp          = require( 'gulp' );
const header        = require( 'gulp-header' );
const plumber       = require( 'gulp-plumber' );
const rename        = require( 'gulp-rename' );
const uglify        = require( 'gulp-uglify' );
const path          = require( 'path' );
const webpack       = require( 'webpack' );
const webpackStream = require( 'webpack-stream' );

const config = require( '../config/settings' );
const tasks  = require( '../config/tasks' );

const { paths: { source: { common: source }, output: { common: output } }, files: { common: files }, banner } = config;

module.exports = ( callback ) => {

    console.info( 'Building common' );
    
    return gulp.src( path.join( source, files.src ) )
      .pipe( plumber() )
      .pipe( webpackStream( tasks.webpack.common, webpack ) )
      .pipe( header( banner ) )
      .pipe( gulp.dest( output ) )
      .pipe( uglify( tasks.uglify ) )
      .pipe( header( banner ) )
      .pipe( rename( ( path ) => {
        path.basename += '.min'
        return path;
      } ) )
      .pipe( gulp.dest( output ) );

};
