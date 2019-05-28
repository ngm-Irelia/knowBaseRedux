var express = require('express');
var router = express.Router();
//require("node-jsx").install();   //安装"node-jsx"，安装该模块可以使nodejs兼容jsx语法
//var React=require("react");
//var Com=require('../component/test.js').Component //引入react组件
router.get('/', function(req, res, next) {
    //var html=React.renderToString(Com({name:"dudeyouth"}))   //向组件传参，并使用renderToString方法解析成html字符串
    res.render('index', { title: 'index' });  //渲染到界面
});

router.get('/index', function(req, res, next) { 
    res.render('index', { title: 'index' }); 
});

router.get('/visualization', function(req, res, next) { 
    res.render('visualization/visualization', { title: 'index' }); 
});

router.get('/H5', function(req, res, next) {
    res.render('H5/index', { title: 'H5' });  //渲染到界面
});

router.get('/CSS3', function(req, res, next) {
    res.render('CSS3/index', { title: 'CSS3' });  //渲染到界面
});


router.get('/D3', function(req, res, next) {
    res.render('D3', { title: 'D3' });  //渲染到界面
});
router.get('/echarts', function(req, res, next) {
    res.render('echarts', { title: 'Echarts' });  //渲染到界面
});
module.exports = router;