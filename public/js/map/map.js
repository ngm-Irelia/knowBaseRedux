/**
 * Created by ngm on 2017/12/20.
 */
$(function () {

  $(".map_type").bind('click', function () {
    console.log("click  map_type -----" + $(this).attr('value'));
    loadGis($(this).attr('value'));
  })

  //动态加载js
  function mapLoadScriptPromise(url) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      if (script.readyState) {// ie
        script.onreadystatechange = function () {
          if (script.readyState === "loaded" || script.readyState === "complete") {
            script.onreadystatechange = null;
            resolve();
          }
        };
      } else {//Others: Firefox, Safari, Chrome, and Opera
        script.onload = function () {
          resolve();
        };
      }

      if (!url) {
        reject('url is error!');
      }
      script.src = url;
      document.body.appendChild(script);
    })
  }
  function mapLoadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (typeof (callback) !== "undefined") {
      if (script.readyState) {// ie
        script.onreadystatechange = function () {
          if (script.readyState === "loaded" || script.readyState === "complete") {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {//Others: Firefox, Safari, Chrome, and Opera
        script.onload = function () {
          callback();
        };
      }
    }
    script.src = url;
    document.body.appendChild(script);
  }
  //加载对应地图
  function loadGis(gisType) {
    if (gisType === "bmap") {
      $("#map_show").html('网速问题，禁用百度地图');
      // Promise.all([mapLoadScriptPromise('/js/public/gis/DrawingManager.js'),
      //   mapLoadScriptPromise('/js/public/gis/LuShu.js'),
      //   mapLoadScriptPromise('/js/public/gis/Heatmap.js'),
      //   mapLoadScriptPromise('/js/public/gis/TextIconOverlay.js'),
      //   mapLoadScriptPromise('/js/public/gis/CurveLine.js'),
      //   mapLoadScriptPromise('/js/public/gis/MarkerClusterer.js'),
      //   mapLoadScriptPromise('/js/map/bmap.js')
      // ]).then(function(value) {
      //   window.USEMAP = new NgmCommon.BMapNgm();
      //   USEMAP.run('map_show');

      // });
    }
    if (gisType === "arcgis") {
      $("#map_show").html('网速问题，禁用arcgis');
      //加载css
      // $("<link>").attr({ rel: "stylesheet",type: "text/css",href: 'http://js.arcgis.com/3.22/esri/css/esri.css' }).appendTo("head");

      // Promise.all([mapLoadScriptPromise('/js/public/china-map.js'),
      //   mapLoadScriptPromise('http://js.arcgis.com/3.22/'),
      //   mapLoadScriptPromise('/js/map/arcgis.js')
      // ]).then(function () {
      //   window.USEMAP = new NgmCommon.ArcgisNgm();
      //   USEMAP.run('map_show'); 
      // });

    }

    if (gisType === "d3") {
      $("#map_show").html('');

      window.USEMAP = new window.NgmCommon.D3GIS('map_show');
      USEMAP.run();

      //获取点数据
      USEMAP.addPoint(getAllData.getD3gisData(), true); //todo 这是圆点图

      /* Promise.all([
        mapLoadScriptPromise('/js/public/china-map.js'),
        mapLoadScriptPromise('/js/map/d3map.js')
      ]).then(function () {
        console.log("j加载 d3 map ---- ")
        window.USEMAP = new window.NgmCommon.D3GIS('map_show');
        USEMAP.run(); 

        //获取点数据
        return getAllData.getD3gisData();
      }).then(function (returnData) {
        USEMAP.addPoint(returnData); //todo 这是圆点图
      }).catch(function () {
        //$("#page_alert").show();
        //$("#page_alert_content").html("没有数据!");
      }); */
    }

    if (gisType === "echarts") {


    }
  }




  //存放数据的接口
  let GetAllData = function () {
    this.useAjax = function (urls, { param = null, type = "GET", tradit = "false" }) {// 解构赋值
      return new Promise(function (resolve, reject) {
        let getTradit = tradit ? true : false;
        $.ajax({
          url: urls,
          traditional: getTradit, //是否自动解析数组
          type: type,
          data: param,
          dataType: "json",
          success: function (data) {
            resolve(data);
          },
          error: function (error) {
            reject("未查询到数据!");
          }
        })
      });
    }
  };
  //搜索框 普通搜索页数
  GetAllData.prototype.getSearchModulePage = function (param) {
    let _thatAllData = this;
    return new Promise(function (resolve, reject) {
      _thatAllData.useAjax(UIPage.context.url + '/object/page', {
        param: param,
        type: 'POST'
      }).then(function (data) {
        resolve(data);
      }).catch(function () {
        reject("未查询到数据!");
      });
    })
  };

  GetAllData.prototype.getD3gisData = function () {
    let baseJson = {"gisResults": [
      {"id":"65","size":"550","name":"新疆维吾尔自治区","cp":[84.9023,42.148],"childNum":18}
      ,{"id":"54","size":"550","name":"西藏自治区","cp":[87.8695,31.6846],"childNum":7}
      , {"id":"15","size":"450","name":"内蒙古自治区","cp":[112.5977,46.3408],"childNum":12}
      , {"id":"63","size":"800","name":"青海省","cp":[95.2402,35.4199],"childNum":8}
      , {"id":"51","size":"900","name":"四川省","cp":[101.9199,30.1904],"childNum":21}
      , {"id":"23","size":"700","name":"黑龙江省","cp":[126.1445,48.7156],"childNum":13}
      , {"id":"62","size":"690","name":"甘肃省","cp":[99.7129,38.166],"childNum":14}
      , {"id":"53","size":"1200","name":"云南省","cp":[101.0652,25.1807],"childNum":16}
      , {"id":"45","size":"1450","name":"广西壮族自治区","cp":[107.7813,23.6426],"childNum":14}
      , {"id":"43","size":"1700","name":"湖南省","cp":[111.5332,27.3779],"childNum":14}
      , {"id":"61","size":"1150","name":"陕西省","cp":[109.5996,35.7396],"childNum":10}
      , {"id":"44","size":"1600","name":"广东省","cp":[113.4668,22.8076],"childNum":21}
      , {"id":"22","size":"1120","name":"吉林省","cp":[125.7746,43.5938],"childNum":9}
      , {"id":"13","size":"1300","name":"河北省","cp":[115.4004,39.4688],"childNum":11}
      , {"id":"42","size":"1500","name":"湖北省","cp":[112.2363,31.1572],"childNum":17}
      , {"id":"52","size":"2000","name":"贵州省","cp":[106.6113,26.9385],"childNum":9}
      , {"id":"37","size":"1500","name":"山东省","cp":[118.7402,36.4307],"childNum":17}
      , {"id":"36","size":"1700","name":"江西省","cp":[116.0156,27.29],"childNum":11}
      , {"id":"41","size":"1700","name":"河南省","cp":[113.0668,33.8818],"childNum":17}
      , {"id":"21","size":"1500","name":"辽宁省","cp":[122.0438,41.0889],"childNum":14}
      , {"id":"14","size":"1450","name":"山西省","cp":[112.4121,37.6611],"childNum":11}
      , {"id":"34","size":"1700","name":"安徽省","cp":[117.2461,32.0361],"childNum":17}
      , {"id":"33","size":"2100","name":"浙江省","cp":[120.498,29.0918],"childNum":11}
      , {"id":"32","size":"1950","name":"江苏省","cp":[118.8586,32.915],"childNum":13}
      , {"id":"50","size":"2380","name":"重庆市","cp":[107.7539,30.1904],"childNum":40}
      , {"id":"64","size":"2100","name":"宁夏回族自治区","cp":[105.9961,37.3096],"childNum":5}
      , {"id":"46","size":"4500","name":"海南省","cp":[109.9512,19.2041],"childNum":18}
      , {"id":"71","size":"3000","name":"台湾省","cp":[120.0254,23.5986],"childNum":1}
      , {"id":"11","size":"5000","name":"北京市","cp":[116.4551,40.2539],"childNum":19}
      , {"id":"12","size":"5000","name":"天津市","cp":[117.4219,39.4189],"childNum":18}
      , {"id":"31","size":"7500","name":"上海市","cp":[121.4648,31.2891],"childNum":19}
      , {"id":"81","size":"18000","name":"香港特别行政区","cp":[114.1178,22.3242],"childNum":1}
      , {"id":"82","size":"27","name":"澳门特别行政区","cp":[111.5547,22.1484],"childNum":1}
      ] 
      }; 

    let manyPoints = baseJson.gisResults;
    return manyPoints;

    let _thatAllData = this;

    return new Promise(function (resolve, reject) {
      _thatAllData.useAjax(UIPage.context.url + '/gis/d3gis', {
        param: param,
        type: 'POST'
      }).then(function (data) {
        resolve(data);
      }).catch(function () {
        reject("未查询到数据!");
      });
    })
  }




  //数据函数
  window.getAllData = new GetAllData();
})
