const gulp       = require( 'gulp' );
const babel      = require( 'gulp-babel' );
const cached     = require( 'gulp-cached' );
const header     = require( 'gulp-header' );
const plumber    = require( 'gulp-plumber' );
const print      = require( 'gulp-print' );
const rename     = require( 'gulp-rename' );
const uglify     = require( 'gulp-uglify' );
const path       = require( 'path' );

const config = require( '../config/settings' );
const tasks  = require( '../config/tasks' );

const { paths: { source: { views: source }, output: { views: output } }, banner } = config;

module.exports = ( callback ) => {

  console.info( 'Building views' );

  return gulp.src( path.join( source, '**', '*.jsx' ) )
      .pipe( plumber() )                   //防止错误，导致build结束
      .pipe( cached( 'build-views' ) )     //内存中放副本
      .pipe( print() )                     //打印出stream里面的所有文件名，通常调试的时候比较需要
      .pipe( babel( tasks.babel.views ) )
      .pipe( header( banner ) )
      .pipe( gulp.dest( output ) )     // 输出了正常文件
      .pipe( uglify( tasks.uglify ) )
      .pipe( header( banner ) )
      .pipe( rename( ( path ) => {
        path.basename += '.min'
        return path;
      } ) )
      .pipe( gulp.dest( output ) );   //输出了重命名后的文件

};
