/**
 * Created by ngm on 2018/4/26.
 */
var gulp = require('gulp');


// build all files
const build = require( './tasks/build' );

// watch for file changes and build
const watch = require( './tasks/watch' );

// develop server
const develop = require( './tasks/develop' );

// utility tasks
const clean = require( './tasks/clean' );

// distribution tasks
const dist = require( './tasks/dist' );

// convert stylus to css
const convertStylus = require( './tasks/builds/stylus' );


/* Tasks */
gulp.task( 'default', [ 'build' ] );

gulp.task( 'build', build );

gulp.task( 'watch', watch );

gulp.task( 'develop', develop );

gulp.task( 'clean', clean );

gulp.task( 'dist', dist );

gulp.task( 'convert-stylus', convertStylus );








gulp.task('help',function () {

    console.log('	gulp build	文件打包');

    console.log('	gulp watch	文件监控打包');

    console.log('	gulp help	gulp参数说明');

    console.log('	gulp server	测试server');

    console.log('	gulp -p	生产环境（默认生产环境）');

    console.log('	gulp -d	开发环境');

    console.log('	gulp -m <module>	部分模块打包（默认全部打包）');

});
