var express = require('express');
var router = express.Router();

const THEME_DEFAULT = 'white';

//require("node-jsx").install();   //安装"node-jsx"，安装该模块可以使nodejs兼容jsx语法
//var React=require("react");
//var Com=require('../component/test.js').Component //引入react组件



router.get('/', function(req, res, next) {
    //var html=React.renderToString(Com({name:"dudeyouth"}))   //向组件传参，并使用renderToString方法解析成html字符串
    res.render('visualization/d3show', { 
        title: 'd3show',
        theme: req.cookies.theme || THEME_DEFAULT
    });
});

router.get('/index', function(req, res, next) { 
    res.render('index', { 
        title: 'index',
        theme: req.cookies.theme || THEME_DEFAULT
    });
});

router.get('/visualization', function(req, res, next) { 
    res.render('visualization/visualization', { 
        title: 'visualization',
        theme: req.cookies.theme || THEME_DEFAULT 
    }); 
});

router.get('/bmap', function(req, res, next) { 
    res.render('map/bmap', { 
        title: 'bmap',
        theme: req.cookies.theme || THEME_DEFAULT 
    }); 
});

router.get('/H5', function(req, res, next) {
    res.render('H5/index', { 
        title: 'H5',
        theme: req.cookies.theme || THEME_DEFAULT  
    }); 
});

router.get('/CSS3', function(req, res, next) {
    res.render('CSS3/index', { 
        title: 'CSS3',
        theme: req.cookies.theme || THEME_DEFAULT 
    });
});

router.get('/D3', function(req, res, next) {
    res.render('D3', { 
        title: 'D3',
        theme: req.cookies.theme || THEME_DEFAULT  
    });
});

router.get('/echarts', function(req, res, next) {
    res.render('map/echarts', { 
        title: 'Echarts',
        theme: req.cookies.theme || THEME_DEFAULT  
    });
});


router.get('/d3show', function(req, res, next) {
    //var html=React.renderToString(Com({name:"dudeyouth"}))   //向组件传参，并使用renderToString方法解析成html字符串
    res.render('visualization/d3show', { 
        title: 'd3show',
        theme: req.cookies.theme || THEME_DEFAULT
    });
});

router.get('/ngm', function(req, res, next) {
    //var html=React.renderToString(Com({name:"dudeyouth"}))   //向组件传参，并使用renderToString方法解析成html字符串
    res.render('ngm/index', { 
        title: '框架',
        theme: req.cookies.theme || THEME_DEFAULT
    });
});


module.exports = router;