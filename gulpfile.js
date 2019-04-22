/**
 * Created by ngm on 2018/4/26.
 */
var gulp = require('gulp');
var path = require('path');


// build all files
const build = require( './tasks/build' );
const testFile = require( './tasks/testFile' );

/* Tasks */
gulp.task( 'default', [ 'build' ] );

gulp.task( 'build', build );




gulp.task( 'testFile', testFile);











gulp.task('help',function () {

    console.log('	gulp build	文件打包');

    console.log('	gulp watch	文件监控打包');

    console.log('	gulp help	gulp参数说明');

    console.log('	gulp server	测试server');

    console.log('	gulp -p	生产环境（默认生产环境）');

    console.log('	gulp -d	开发环境');

    console.log('	gulp -m <module>	部分模块打包（默认全部打包）');

});
