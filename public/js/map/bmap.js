/** 
 * @namespace 所有全局使用的类，都放到 ngmCommon 命名空间下
 */
var NgmCommon = window.NgmCommon = NgmCommon || {};

(function(){

  NgmCommon.BMapNgm = BMapNgm;

  function BMapNgm(){
    var map,
        mapstyle="black",//地图主题
        mapHeatSign = false,//热力图
        mapSmallSign = false,//点状图
        mapFontStatus = true,// 文字显示
        mapLineStatus = true;// 线条显示 

    let markerPath = 'M10.1,0C5.2,0,2.1,3.4,2.7,8.2C3.2,12,9.3,18.8,10.3,20c1.4-1.5,6.7-8,7-11.8C17.8,3.3,14.9,0,10.1,0z M16.3,8.3c-0.2,2.3-4.9,8.6-5.9,10c-1.2-1.4-5.9-7.5-6.5-10c-0.8-4.1,2.4-7.1,6.5-7.1C14.4,1.2,16.5,4.1,16.3,8.3z M10.1,12.4V8.2l3.3-1.7v4L10.1,12.4z M6.6,6.3L10,4.5l3.5,1.7L10,8L6.6,6.3z M9.9,12.4l-3.3-1.9v-4l3.3,1.7V12.4z';
    let markerPathPeople = 'M19.1,0C7.1,0-0.7,8.6,0.8,20.5C2.1,30,17.2,47,19.8,50c3.4-3.7,16.8-20,17.5-29.5C38.5,8.2,31.2,0,19.1,0z'+
        'M34.6,20.7c-0.4,5.8-12.3,21.6-14.9,25c-3-3.4-14.9-18.8-16.2-25C1.7,10.6,9.6,3,19.8,3C29.9,3,35.3,10.3,34.6,20.7z M15.8,10.1'+
        'c0.9-0.6,2-0.9,3.1-0.9c0.6,0,1.2,0.1,1.7,0.4c0.2,0.1,0.3,0.3,0.5,0.4c0.5,0.1,1,0.3,1.4,0.6c0.5,0.5,0.8,1.3,0.9,2'+
        'c0.1,1.2-0.1,2.5-0.5,3.7c0.3,0.3,0.4,0.6,0.4,1c0,0.4-0.1,0.9-0.3,1.2c-0.1,0.2-0.3,0.3-0.5,0.3c-0.1,0.6-0.3,1.2-0.6,1.8'+
        'c-0.2,0.3-0.3,0.5-0.5,0.7c0,0.7,0,1.5,0.1,2.2c0.2,0.5,0.6,0.9,1.1,1.1c1.4,0.8,3,1.1,4.3,2c0.7,0.4,1.2,1,1.6,1.7'+
        'c0.2,0.4,0.3,1,0.3,1.5c-6.5,0-13,0-19.5,0c0.1-0.8,0.3-1.6,0.7-2.2c0.3-0.5,0.9-0.9,1.4-1.2c1.1-0.7,2.5-1,3.7-1.7'+
        'c0.5-0.3,1.1-0.7,1.4-1.3c0.1-0.7,0.1-1.5,0.1-2.2c-0.3-0.2-0.4-0.5-0.6-0.8c-0.3-0.5-0.5-1.1-0.5-1.7c-0.3-0.1-0.5-0.3-0.7-0.6'+
        'c-0.2-0.3-0.2-0.7-0.3-1c0-0.3,0.1-0.7,0.4-0.9c-0.5-1-0.7-2.1-0.6-3.1c0-0.7,0.2-1.3,0.4-1.9C15,10.9,15.3,10.4,15.8,10.1'+
        'L15.8,10.1z';
    let mapJsonStyle = [
        {
            "featureType": "land",
            "elementType": "geometry",
            "stylers": {
                "color": "#303d47"
            }
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "#536981"
            }
        },
        {
            "featureType": "green",
            "elementType": "all",
            "stylers": {
                "color": "#b0d3dd"
            }
        },
        {
            "featureType": "highway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#d2eef0"
            }
        },
        {
            "featureType": "highway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#7dabb3"
            }
        },
        {
            "featureType": "arterial",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#d6e4e5"
            }
        },
        {
            "featureType": "arterial",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#b0d5d4"
            }
        },
        {
            "featureType": "local",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#7a959a"
            }
        },
        {
            "featureType": "local",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#d6e4e5"
            }
        },
        {
            "featureType": "arterial",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#3d85c6"
            }
        },
        {
            "featureType": "highway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#374a46"
            }
        },
        {
            "featureType": "highway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#6aa84f"
            }
        },
        {
            "featureType": "manmade",
            "elementType": "geometry",
            "stylers": {
                "color": "#1d3549"
            }
        },
        {
            "featureType": "building",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#415362"
            }
        },
        {
            "featureType": "railway",
            "elementType": "all",
            "stylers": {
                "color": "#bf9000"
            }
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#3d85c6",
                "weight": "3.1",
                "lightness": -46,
                "saturation": 93
            }
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#ffffff"
            }
        },
        {
            "featureType": "label",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#ffffff"
            }
        },
        {
            "featureType": "label",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#022338"
            }
        }
    ];
    
    //加载地图
    this.run = function(showid){
        console.log("aaaaaa")
        mapload = true;
        map = new BMap.Map(showid,{enableMapClick: false});    // 创建Map实例
        mapstyle === "black" ? map.setMapStyle({styleJson:mapJsonStyle}) : map.setMapStyle({style:'normal'});
        map.centerAndZoom(new BMap.Point(106.24, 39.915), 5);  // 初始化地图,设置中心点坐标和地图级别43.24, 57.915  106.24, 39.915
        map.addControl(new BMap.OverviewMapControl());
        map.setCurrentCity("北京");           //设置地图显示的城市
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        map.enableDoubleClickZoom();         //启用鼠标双击放大
        map.disablePinchToZoom(true);        //禁用双指操作缩放
        map.enableAutoResize();
        map.setDefaultCursor("pointer");
        let scaleMap = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT,offset: new BMap.Size(311, 30)});
        map.addControl(scaleMap);

        map.addEventListener("movestart",function(){ });
        map.addEventListener("click",function(){ });
        // 多选点
        $(document).keydown(function(event){
            if (event.keyCode == 16) { //shift
                shiftSign = true;
            }
        });
        $(document).keyup(function(event){
            if (event.keyCode == 16) { //shift
                shiftSign = false;
            }
        });

        map.addEventListener("rightclick",function(){ });
        map.addEventListener("tilesloaded",function(){
            $("svg[type='system']").css("cursor","pointer");
            $("img[src='http://api0.map.bdimg.com/images/copyright_logo.png']").css("display",'none');
            $("a[href='http://www.openstreetmap.org/']").parent().parent().parent().css("display",'none');
            setTimeout(function () {
                $("a[href='http://www.openstreetmap.org/']").parent().css("display",'none');
            },1000);
        });
        map.addEventListener("zoomend",function(){ }); 
    };
  }

})()