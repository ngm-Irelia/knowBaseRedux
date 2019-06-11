/** 
 * @namespace 所有全局使用的类，都放到 ngmCommon 命名空间下
 */
var NgmCommon = window.NgmCommon = NgmCommon || {};

(function(){

  NgmCommon.ArcgisNgm = ArcgisNgm;
  
  function ArcgisNgm(){
    let map, mapAreaGraphicLayer, lineGraphicLayer, graphicLayer, editToolbar,keyAreaLayer, bayonetLayer, aSGraphicLayer;

    let mapstyle = "black";
    window.mapCommon = {
        mapWorkMarker:[],
        mapWorkArea:{},
        mapKeyArea:{}
    };//存放正在操作的点
    window.mapAdvanceSearchFlag = localStorage.mapAdvanceSearchFlag ? localStorage.mapAdvanceSearchFlag : "false";//高级搜索标志

    //地理坐标，墨托卡坐标等的转换
    function turnSpace(point,sign) {
      let returndata;
      if(sign === "lngLatToXY"){//经纬度转化为墨托卡
          returndata = webMercatorUtils.lngLatToXY(point.x, point.y);
      }
      if(sign === "xyToLngLat"){//墨托卡转化为经纬度
          returndata = webMercatorUtils.xyToLngLat(point.x, point.y);
      }
      if(sign === "toScreen"){//经纬度转化为屏幕坐标
          returndata = map.toScreen( point );
      }
      return returndata;
    };
     
    //加载地图
    this.run = function (showid) {
        require([
            "esri/map", "esri/geometry/Circle", "esri/symbols/SimpleFillSymbol",
            "esri/graphic", "esri/layers/GraphicsLayer","esri/toolbars/edit","esri/toolbars/draw",
            "dojo/dom", "dojo/dom-attr",
            "dojo/parser", "dijit/registry",
            "dojo/ready",
            "dojo/_base/array",
            "esri/Color",
            "dojo/dom-style",
            "dojo/query",
            "esri/dijit/Scalebar",
            "esri/request",
            "esri/graphic",
            "esri/geometry/Extent",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/symbols/PictureMarkerSymbol",
            "esri/renderers/ClassBreaksRenderer",
            "esri/SpatialReference",
            "esri/dijit/PopupTemplate",
            "esri/geometry/Point",
            "esri/geometry/webMercatorUtils",
            "esri/layers/WebTiledLayer",
            "dijit/layout/BorderContainer",
            "dijit/layout/ContentPane",
            "dijit/layout/BorderContainer", "dijit/layout/ContentPane",
            "dijit/form/Button", "dijit/WidgetSet", "dojo/domReady!"
        ], function(
            Map, Circle, SimpleFillSymbol,
            Grahpic, GraphicsLayer,Edit,Draw,
            dom, domAttr,
            parser, registry,

            ready, arrayUtils, Color, domStyle, query,Scalebar,
             esriRequest, Graphic, Extent,
            SimpleMarkerSymbol, PictureMarkerSymbol, ClassBreaksRenderer,
            SpatialReference, PopupTemplate, Point, webMercatorUtils,
            WebTiledLayer

        ){ 
          if(mapstyle === "white"){
            map = new Map(showid, {
              basemap: "streets",//gray  streets-night-vector  streets  dark-gray
              center: [100.741, 40.39],
              slider: false,
              zoom:4,
              isClickRecenter:false
            });
          }else{
            map = new Map(showid, {
              basemap: "dark-gray",//gray  streets-night-vector  streets  dark-gray
              center: [100.741, 50.39],
              slider: false,
              zoom:4,
              isClickRecenter:false
            });
          }

          //创建地图区域图层
          mapAreaGraphicLayer = new GraphicsLayer();
          //把图层添加到地图上
          map.addLayer(mapAreaGraphicLayer);
          map.setMapCursor("pointer");
          //setMapArea();

          //创建线条专门图层
          lineGraphicLayer = new GraphicsLayer();
          map.addLayer(lineGraphicLayer);
          map.setMapCursor("pointer");

          //创建重点区域图层
          keyAreaLayer = new GraphicsLayer();
          map.addLayer(keyAreaLayer);
          map.setMapCursor("pointer");

          //区域统计图层
          aSGraphicLayer = new GraphicsLayer();
          map.addLayer(aSGraphicLayer);
          map.setMapCursor("pointer");

          //创建图标图层
          graphicLayer = new GraphicsLayer();
          map.addLayer(graphicLayer);
          map.setMapCursor("pointer");

          //创建卡口图层
          bayonetLayer = new GraphicsLayer();
          map.addLayer(bayonetLayer);
          map.setMapCursor("pointer");


          //添加比例尺
          var scalebar = new Scalebar({
              map: map,
              scalebarUnit: "dual"
          });
          //初始一个覆盖物
          var textattr = { sign:"no" };
          var textpt = new esri.geometry.Point(1, 1);
          var textSymbol =  new esri.symbol.TextSymbol(" ");
          var textGraphic = new esri.Graphic(textpt, textSymbol,textattr);//创建图像
          graphicLayer.add(textGraphic);//把图像添加到刚才创建的图层上

          editToolbar = new esri.toolbars.Edit(map);//工具

          mapload = true;

          map.disableRubberBandZoom();//不允许shift相关默认操作
          map.disableClickRecenter();//不允许shift相关默认操作
          map.disableShiftDoubleClickZoom();//不允许shift相关默认操作

          map.on("mouse-drag-start",function(){
              $("#basemap_layers").children("svg").css("cursor","pointer");
          });
          /* map.on("mouse-drag",function(e){//拖动时，asDiv也要随动
                let $asdiv = $("#asDiv");
                let x = parseInt($asdiv.css("left"));
                let y = parseInt($asdiv.css("top"));
                $asdiv.css("left",parseInt(e.movementX)+x+"px").css("top",parseInt(e.movementY)+y+"px");
          }); */
          map.on("zoom-start",function(){ });
          map.on("zoom-end",function(){ });
          map.on("dbl-click",function(){ });
          map.on("click",function(){ });
          // 多选点
          map.on("key-down",function(event){
              if (event.keyCode == 16) { //shift
                  shiftSign = true;
              }
          });
          map.on("key-up",function(event){
              if (event.keyCode == 16) { //shift
                  shiftSign = false;
                  shiftGraphic = [];
              }
          });

          setTimeout(function(){
              $(".esriControlsBR").hide();
              $("#basemap_layers").children("svg").css("cursor","pointer");
              $("#basemap_zoom_slider").css("display","none");
              $(".actionsPane").css("display","none");
          },500);
            
        });
    };
  }

})()