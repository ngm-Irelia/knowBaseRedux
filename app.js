const express = require('express');
const path = require('path');

const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const proxy = require('http-proxy-middleware');


const ips     = require( path.join( __dirname, 'config', 'ips.json' ) );
const paths   = require( path.join( __dirname, 'config', 'paths' ) );
const context = require( path.join( __dirname, 'config', 'context.json' ) );

const { frame: framePath, views: viewsPath, components: comsPath, bower: bowerPath,common:commonPath } = paths;


const ngmEngine = require( 'ngm-engine' ); //here 换成ngm-engine 应该是手动往modules里面加，服务器中应该也是手动去加
ngmEngine.options( {
    main: path.join( framePath, 'html.js' ),
    context: context
} );


const app = express();

/* 可以倒是可以，但是得用jsx才行~ 后续优化成js未看
const engine = require('react-view-engine');
engine.initJSX()*/
// view engine setup
app.set( 'views', viewsPath );
app.set( 'view engine', 'js' );
/*app.engine( 'js', engine.engine );
app.use( engine.handler );*/
app.engine( 'js', ngmEngine.engine() );
app.use( ngmEngine.context() );

//app.use( express.static( path.join( __dirname, 'public' ) ) );
//设置路由
const options = {
    target: "http://" + ips.knowBase.ip + ":" + ips.knowBase.port,
    changeOrigin: true,
    xfwd: true
};
const newProxy  = proxy( options );
app.use( '/knowBase/*', newProxy );

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
if ( app.get( 'env' ) === 'production' ) {
    app.use( express.static( path.join( __dirname, 'build/public' ) ) );
} else {
    app.use( express.static( path.join( __dirname, 'public' ) ) );
}

const index = require('./routes/index');

app.use('/', index);

app.use( '/views', express.static( viewsPath ) );
app.use( '/components', express.static( comsPath ) );
app.use( '/common', express.static( commonPath ) );
app.use( '/bower_components', express.static( bowerPath) );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// 监听端口
/*app.listen(9525, function(){
    console.log('服务器运行中');
});*/

module.exports = app;
