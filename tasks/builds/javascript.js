const gulp       = require( 'gulp' );
const header     = require( 'gulp-header' );
const uglify     = require( 'gulp-uglify' );
const babel      = require( 'gulp-babel' );
const path       = require( 'path' );
const sourcemaps = require( 'gulp-sourcemaps' ); // 作用是生成.map文件，便于寻找错误在哪个位置

const config = require( '../config/settings' );
const tasks  = require( '../config/tasks' );

const { 
  paths: { source: { javascript: source }, 
  output: { javascript: output } }, 
  banner 
} = config;

module.exports = ( callback ) => {

  console.info( 'Building javascript' );

  return gulp.src( [ path.join( source, '**', '*.js' ), 
  `!${ path.join( source, 'public', '**', '*.js' ) }` ] )
    .pipe( sourcemaps.init() )                 //添加.map文件
    .pipe( babel( tasks.babel.javascript ) )   //ES6代码转为可执行js代码
    .pipe( uglify( { mangle: false } ) )       //压缩js文件， mangle:false 不修改变量名
    .pipe( header( banner ) )                  //文件添加标头
    .pipe( sourcemaps.write( './' ) )
    .pipe( gulp.dest( output ) );

};
