/**
 * Created by ngm on 2018/4/26.
 */
const gulp       = require( 'gulp' );
const header     = require( 'gulp-header' );
const path       = require( 'path' );

const config = require( '../config/settings' );

const { paths: { source: { common: source }, output: { common: output } }, banner } = config;

module.exports = ( callback ) => {

    console.info( 'Building common' );
    console.log(source);
    console.log(output);
    return gulp.src( path.join( source ) )
        .pipe( gulp.dest( output ) );

};
