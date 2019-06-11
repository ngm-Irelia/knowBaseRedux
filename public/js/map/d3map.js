/**
 * Created by ngm on 2017/12/20.
 */

/** 
* @namespace 所有全局使用的类，都放到 ngmCommon 命名空间下
*/
var NgmCommon = window.NgmCommon = NgmCommon || {};

(function () {

  NgmCommon.D3GIS = D3GIS;

  /**
 * Created by ngm on 2017/12/20.
 */
  function D3GIS(baseId) {
    let dG = this;
    let width = $("#map_show").width();
    let height = $("#map_show").height();
    console.log("hahahaha");
    console.log(height)
    let gisPoint;//d3加点
    let gisNodes;// 后台获得的点 仅仅保存各省数据
    let nowShowNodes; //后台获取到的点数据，保存正在显示的数据，可以是 省 ，市 ，，，
    let gisbars; //获得的柱状图
    let gis;
    let zoom;
    let centered;
    // 是否获取json数据
    let dataFlag = false;
    let mousedown_gis = null;
    let mouseup_gis = null;
    //拖动连线
    var gis_drag_line;

    var svg = d3.select("#" + baseId)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("class", "ctrl svgBorder " + baseId);

    var g = svg.append("g");

    // 定义 地图的投影
    let baseProject = d3.geo.mercator()
      .center([107, 31])
      .scale(width * 8 / 9.5)
      .translate([width / 2, height / 1.5]);
    let projection = baseProject;

    // 定义地理路径生成器
    let geopath = d3.geo.path()
      .projection(projection); //设定投影

    // 颜色 比例尺//var color = d3.scale.category20();  "#546d82", #3696b3  ,"#252b30" "#21282d",
    let mapstyle = "black";
    let color;
    if (mapstyle === "black") {
      color = ["#293742", "#304453", "#384651", "#415362", "#31404b", "#1d3549"];
    } else {
      color = ["#05F0FF", "#9FE6FF", "#81DEFF", "#5DD5FF", "#25C6FF", "#00B0F0"];
    }

    d3.select("#" + baseId).on("mousedown", gis_mousedown).on("mousemove", gis_mousemove)//托动连线
      .on('mouseup', gis_mouseup);

    this.run = function () {
      dataFlag = true;
      show();
    };

    this.moveAndZoom = function (bool) {
      let _that = this;
      if (bool) {
        if (dataFlag) {

          var initTran = projection.translate();
          var initScale = projection.scale();


          //定义缩放
          zoom = d3.behavior.zoom()
            .scaleExtent([0.3, 10])
            .on("zoom", function (d) {
              //更新投影函数的平移量
              projection.translate(
                [
                  initTran[0] + d3.event.translate[0],
                  initTran[1] + d3.event.translate[1]
                ]);

              //更新投影函数的缩放量
              //projection.scale( initScale*d3.event.scale);
              // 重绘地图
              gis.attr("d", geopath);

              // 重绘点
              //d3.selectAll(".gisimage"+baseId).remove();
              d3.selectAll(".gisg").remove();
              if (nowShowNodes) {
                _that.addPoint(nowShowNodes); //这里不能存
              }

              // 重绘柱状图
              d3.selectAll(".gisbar" + baseId).remove();

              if (gisbars) {
                _that.addBar(gisbars, "noAnimation");
              }


              //重绘南海诸岛
              d3.selectAll(".southChinaSeaaa" + baseId).remove();
              var southSeaPeking = [121.0254 + 5, 23.5986 + 5];
              var southSeaProPeking = projection(southSeaPeking);
              //加上南海
              svg.append("image")
                .attr("class", "southChinaSeaaa southChinaSeaaa" + baseId)
                .attr("x", southSeaProPeking[0])
                .attr("y", southSeaProPeking[1])
                .attr("width", 54 * d3.event.scale * 1.8)
                .attr("height", 70 * d3.event.scale * 1.8)
                .attr("xlink:href", "../../image/map/nanhai.svg");


            })

          // svg中添加一个透明的矩形，用来捕捉事件
          /*svg.append("rect")
              .attr("class","overlay")
              .attr("x",0)
              .attr("y",0)
              .attr("width",width)
              .attr("height",height)
              .call(zoom);*/

          d3.selectAll("." + baseId).call(zoom);

          // IF dataJson END !!
        }



        //IF bool END !!
      }
      /*FUN moveAndZoom END!!*/
    };

    this.addManyPoint = function (nodes) {
      if (dataFlag) {
        gisNodes = nodes;
        //需要对nodes做一系列的处理。。。
        gisPoint = svg.selectAll(".gisimage")
          .data(nodes)
          .enter()
          .append("image")
          .attr("class", "gisimage gisimage" + baseId)
          .attr("x", function (d, i) {
            var peking = [d.centralPoint.lon, d.centralPoint.lat];
            var proPeking = projection(peking);
            return proPeking[0] - 15;//让图片移动到中间
          })
          .attr("y", function (d, i) {
            var peking = [d.centralPoint.lon, d.centralPoint.lat];
            var proPeking = projection(peking);
            return proPeking[1] - 15;
          })
          .attr("width", 30)
          .attr("height", 30)
          .attr("xlink:href", "../../image/map/point.png")


        // IF dataJson END !!
      }

    };

    this.clickAddRealPoint = function (sign) {
      if (sign) {
        if (dataFlag) {
          d3.select(".svgBorder")
            .on("click", function (d) {
              var selectPoint = [];
              var point = [];

              var peking;
              var proPeking;
              for (var lon = 73.4; lon < 136.0; lon += 0.1) {
                for (var lat = 3.5; lat < 54.0; lat += 0.1) {
                  point = [lon, lat];
                  peking = point;
                  proPeking = projection(peking);
                  if (Math.abs(proPeking[0] - (d3.event.x - 10)) < 0.8 && Math.abs(proPeking[1] - (d3.event.y - 83)) < 0.8) {
                    selectPoint.push(point);
                  }

                }
              }
              var len = selectPoint.length;
              var lonSum = 0;
              var latSum = 0;
              if (len >= 1) {
                for (var i = 0; i < len; i++) {
                  lonSum += selectPoint[i][0];
                  latSum += selectPoint[i][1];
                }
                point = [lonSum / len, latSum / len];
                peking = point;
                proPeking = projection(peking);

                svg.append("image")
                  .attr("class", "clickPoint")
                  .attr("x", proPeking[0])
                  .attr("y", proPeking[1])
                  .attr("width", 30)
                  .attr("height", 30)
                  .attr("xlink:href", "../../image/map/point.png");

              }
              //click }） end
            })
          /* if dataFlag end */
        }

        /* if end */
      }
    };

    this.addSelectArea = function (sign, style) {
      if (sign) {

        var areaArr = [];
        var point;
        var areaArrLen = 0;
        if (dataFlag) {

          d3.selectAll(".overlay").call(d3.behavior.zoom().on("zoom", null));
          d3.selectAll(".overlay").remove();

          if (style == "rect") {

            d3.select(".svgBorder")
              .on("mousedown", function (d) { // dragstart监听器
                point = [d3.event.offsetX, d3.event.offsetY];
                areaArr.push(point);
                areaArrLen = areaArr.length;

                svg.append("rect")
                  .attr("x", point[0])
                  .attr("y", point[1])
                  .attr("width", 0)
                  .attr("height", 0)
                  .attr("class", "area rectArea" + areaArrLen)
                  .style("fill", "#33d0ff")
                  .attr("opacity", 0.5)

                d3.select(".svgBorder").on("mousemove", function (d) { // drag 监听器
                  d3.select(".rectArea" + areaArrLen) //选择当前被拖拽的元素
                    //将d3.event.x 赋值给被绑定的数据 ，再将 cx 属性设置为该值
                    .attr("width", d3.event.offsetX - point[0] > 0 ? d3.event.offsetX - point[0] : point[0] - d3.event.offsetX)
                    //将d3.event.y 赋值给被绑定的数据 ，再将 cy 属性设置为该值
                    .attr("height", d3.event.offsetY - point[1] > 0 ? d3.event.offsetY - point[1] : point[1] - d3.event.offsetY);

                })

              })

              .on("mouseup", function (d) { // dragend 监听器
                d3.select(this).on('mousemove', null)
              })
          } else if (style == "circle") {
            d3.select(".svgBorder")
              .on("mousedown", function (d) { // dragstart监听器

                point = [d3.event.offsetX, d3.event.offsetY];
                areaArr.push(point);
                areaArrLen = areaArr.length;

                svg.append("rect")
                  .attr("x", point[0])
                  .attr("y", point[1])
                  .attr("width", 0)
                  .attr("height", 0)
                  .attr("class", "rectArea" + areaArrLen)
                  .style("fill", "#33d0ff")
                  .attr("opacity", 0.5)

                d3.select(".svgBorder").on("mousemove", function (d) { // drag 监听器

                  d3.select(".rectArea" + areaArrLen) //选择当前被拖拽的元素
                    //将d3.event.x 赋值给被绑定的数据 ，再将 cx 属性设置为该值
                    .attr("width", d3.event.offsetX - point[0] > 0 ? d3.event.offsetX - point[0] : point[0] - d3.event.offsetX)
                    //将d3.event.y 赋值给被绑定的数据 ，再将 cy 属性设置为该值
                    .attr("height", d3.event.offsetY - point[1] > 0 ? d3.event.offsetY - point[1] : point[1] - d3.event.offsetY);

                })

              })

              .on("mouseup", function (d) { // dragend 监听器
                d3.select(this).on('mousemove', null)
              })
            /*if IF END !!*/
          }

          // IF   END !!
        }


        /*IF END !!*/
      } else {
        svg.append("rect")
          .attr("class", "overlay")
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", width)
          .attr("height", height)
          .call(zoom);

        d3.selectAll(".svgBorder").on("mousedown", null);
        d3.selectAll(".svgBorder").on("mousemove", null);

        d3.selectAll(".area").remove();
      }
      /*addSelectArea END !!*/
    };

    this.allowLine = function (sign) {
      if (sign) {
        if (dataFlag) {
          /*****************************************************************************
           * 若实现连线功能，应该连先后，把数据保存---读取数据加点，应该改为 ： 读取数据加 点 线
           *************************************************************************/

          d3.selectAll(".overlay").call(d3.behavior.zoom().on("zoom", null));
          d3.selectAll(".overlay").remove();
          gisPoint.on("mousedown", function (d, i) {
            //d3.select(this).classed("selected",true);

            mousedown_gis = projection(d);
            // 重置线
            gis_drag_line.classed('hidden', false)
              .attr('d', 'M' + mousedown_gis[0] + ',' + mousedown_gis[1] + 'L' + mousedown_gis[0] + ',' + mousedown_gis[1]);
          })
            .on('mouseup', function (d) {
              if (!mousedown_gis) return;
              gis_drag_line.classed('hidden', true).style('marker-end', '');
              // 检查终点是不是自身
              mouseup_gis = projection(d);
              //if(mouseup_node === mousedown_node) { resetMouseVars();return;};
              if (mouseup_gis === mousedown_gis) { return; };
              //添加新的线
              var source, target;
              source = mousedown_gis;
              target = mouseup_gis;

              var gislinePath = d3.svg.line();

              svg.append("path")
                .attr("class", "gisline")
                .attr("d", 'M' + source[0] + ',' + source[1] + 'L' + target[0] + ',' + target[1])
                .attr("stroke", "#33D0FF")
                .attr("stroke-width", "3px");

              resetGisMouseVars();

            })



          // IF dataJson END !!
        }

        /*if end */
      } else {
        svg.append("rect")
          .attr("class", "overlay")
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", width)
          .attr("height", height)
          .call(zoom);

        gisPoint.on("mousedown", null);

        d3.selectAll(".gisline").remove();
      }

      /*function end*/
    };
    //图例
    this.addLegend = function (data, pointsData) {
      let dealNodes = data.filter((n, i) => {
        if (n.name.indexOf("北京") < 0) {
          return n;
        }
      });
      let maxvalue = parseInt(d3.max(dealNodes, function (d, i) { return parseInt(d.value) })) + 1;
      function returnPointColor(size) {
        var mainColorList = ['#daff58', '#97dd29', '#ffcb2c', '#fca950', '#fc8550', '#ff6f19', '#ff5b3b', '#eb5041', '#fc3b27', '#ff1800'];
        let casen = parseInt((size / maxvalue) * 10);
        if (casen > 9) {
          return mainColorList[9];
        }
        return mainColorList[casen];
      }

      //排序data
      function compare(property) {
        return function (a, b) {
          let value1 = a[property];
          let value2 = b[property];
          return value2 - value1;
        }
      }

      let dealData = data.sort(compare('value')).slice(0, 5);

      let gLegend = svg.append('g')
        .attr("class", "gLegend")
        .attr("x", function (d, i) {
          return 0;
        })
        .attr("y", function (d, i) {
          return 0;
        });

      gLegend.append('path') //左上
        .attr("class", "transparentPath")
        .attr('d', function (d) {
          return "M9," + (height - 85) + " L9," + (height - 91) + " L15," + (height - 91) + " L15," + (height - 90) + " L10," + (height - 90) + " L10," + (height - 85) + " L9," + (height - 85);
        })
        .style('fill', function (d, i) {
          return "#33d0ff";
        });
      gLegend.append('path') //左下
        .attr("class", "transparentPath")
        .attr('d', function (d) {
          return "M9," + (height - 15) + " L9," + (height - 11) + " L15," + (height - 11) + " L15," + (height - 10) + " L10," + (height - 10) + " L10," + (height - 15) + " L9," + (height - 15);
        })
        .style('fill', function (d, i) {
          return "#33d0ff";
        });
      gLegend.append('path') //右下
        .attr("class", "transparentPath")
        .attr('d', function (d) {
          return "M121," + (height - 16) + " L121," + (height - 10) + " L115," + (height - 10) + " L115," + (height - 11) + " L120," + (height - 11) + " L120," + (height - 16) + " L121," + (height - 16);
        })
        .style('fill', function (d, i) {
          return "#33d0ff";
        });
      gLegend.append('path')//右上
        .attr("class", "transparentPath")
        .attr('d', function (d) {
          return "M121," + (height - 85) + " L121," + (height - 91) + " L115," + (height - 91) + " L115," + (height - 90) + " L120," + (height - 90) + " L120," + (height - 85) + " L121," + (height - 85);
        })
        .style('fill', function (d, i) {
          return "#33d0ff";
        });

      gLegend.selectAll(".gLegendText")//文字
        .data(dealData)
        .enter()
        .append('text')
        .attr("class", "gLegendText")
        .style("fill", function (d) {//切换颜色
          return "#33d0ff";
        })
        .style("font-size", function (d) {
          return "10px";
        })
        .attr("x", function (d, i) {
          return 20;
        })
        .attr("y", function (d, i) {
          return height - 15 * (dealData.length - 1 - i) - 16;
        })
        .text(function (d) {
          return d.name + " " + parseInt(d.value);
        });

      gLegend.selectAll(".gLegendRect")//图例
        .data(dealData)
        .enter()
        .append('rect')
        .attr('x', 20 + 70)
        .attr('y', function (d, i) {
          return height - 15 * (dealData.length - 1 - i) - 22;
        })
        .attr("class", "gLegendRect")
        .attr('width', function (d, i) {
          return 20;
        })
        .attr('height', function (d, i) {
          return 6;
        })
        .style('fill', function (d, i) {
          return returnPointColor(d.value);
        });

      gLegend.append('rect')//边框
        .attr('x', 10)
        .attr('y', height - 90)
        .attr("class", "transparentPath")
        .attr('width', function (d, i) {
          return 110;
        })
        .attr('height', function (d) {
          return 80;
        })
        .attr('stroke', function (d) {
          return "#31404b";
        })
        .style('fill', function (d, i) {
          return "rgba(255, 255, 255, 0)";
        })
        .on("dblclick", function (event) {
          //todo 弹出大的柱状图，饼状图的框  gisNodes 就是后端接口传过来的所有的数据
          enlargeGis(event, pointsData);
        })
    }
    //圆点图
    this.addPoint = function (nodes, saveSign) {
      //对nodes做处理，排除掉 “北京”
      console.log(nodes)
      let dealNodes = nodes.filter((n, i) => {
        if (n.name.indexOf("北京") < 0) {
          return n;
        }
      });

      let maxvalue = parseInt(d3.max(dealNodes, function (d, i) { return parseInt(d.value) })) + 1;
      //点的颜色
      function returnPointColor(size) {
        var mainColorList = ['#daff58', '#97dd29', '#ffcb2c', '#fca950', '#fc8550', '#ff6f19', '#ff5b3b', '#eb5041', '#fc3b27', '#ff1800'];
        let casen = parseInt((size / maxvalue) * 10);

        if (casen > 9) {
          return mainColorList[9];
        }
        return mainColorList[casen];
      }
      //点的图片
      function returnPoint(size) {
        let casen = parseInt((size / maxvalue) * 10) + 1;
        if (casen > 10) { return 1; }
        return 11 - casen;
      }


      if (dataFlag) {
        if (saveSign && typeof saveSign !== 'undefined') {
          gisNodes = nodes; //保存 按省 统计的数据
        }
        nowShowNodes = nodes;
        //需要对nodes做一系列的处理。。。
        var g = svg.selectAll('.gisg')
          .data(nodes)
          .enter()
          .append('g')
          .attr("class", "gisg")
          //.on("mouseover", clumnMouseover)
          //.on("mouseout", clumnMouseout)
          .attr("x", function (d, i) {
            var peking = [d.centralPoint.lon, d.centralPoint.lat];
            var proPeking = projection(peking);
            return proPeking[0] - 7;//让图片移动到中间
          })
          .attr("y", function (d, i) {
            var peking = [d.centralPoint.lon, d.centralPoint.lat];
            var proPeking = projection(peking);
            return proPeking[1] - 7;
          });

        svg.selectAll('.gisg')
          .append("image")
          .attr("class", "gisimage gisimage" + baseId)
          .attr("x", function (d, i) {
            var peking = [d.centralPoint.lon, d.centralPoint.lat];
            var proPeking = projection(peking);
            return proPeking[0] - 7;//让图片移动到中间
          })
          .attr("y", function (d, i) {
            var peking = [d.centralPoint.lon, d.centralPoint.lat];
            var proPeking = projection(peking);
            return proPeking[1] - 7;
          })
          .attr("width", 15)
          .attr("height", 15)
          .attr("xlink:href", function (d) {//切换图片 
            let level = returnPoint(d.value);
            return "../../image/map/point" + level + ".svg";
          })
          .on("dblclick", pointDblclicked)
          .on("mouseover", function (d) {
            console.log("todo 鼠标悬停在圆圈的数据 d === ");
            console.log(d);
          })
        // .on("click",function(d){
        //   console.log("点击到了图片上了哦～");
        //   console.log(d);
        // })

        svg.selectAll('.gisg')
          .append('text')
          .attr("class", "MyText")
          .style("fill", function (d) {//切换颜色
            return returnPointColor(d.value);
          })
          .attr("x", function (d, i) {
            var peking = [d.centralPoint.lon, d.centralPoint.lat];
            var proPeking = projection(peking);
            return proPeking[0] - 7;//让图片移动到中间
          })
          .attr("y", function (d, i) {
            var peking = [d.centralPoint.lon, d.centralPoint.lat];
            var proPeking = projection(peking);
            return proPeking[1] - 7;
          })
          .text(function (d) {
            return d.name + " " + parseInt(d.value);
          })
          .on("dblclick", pointDblclicked)
          .on("mouseover", function (d) {
            console.log("todo 鼠标悬停在文字的数据 d === ");
            console.log(d);
          })
        // .on("click",function(d){
        //   console.log("点击到了文字上了哦～");
        //   console.log(d);
        // })

        // IF dataJson END !!
      }

    };
    //柱状图
    this.addBar = function (bardata, type) {
      gisbars = bardata;
      let maxvalue = d3.max(bardata, function (d, i) { return d.value * 1; }) * 1.1;
      for (let d = 0; d < bardata.length; d++) {
        addOneBar([bardata[d]], maxvalue, type);
      }
    };

    function addOneBar(data, maxvalue, type) {
      let datasize = data[0].value;
      var svgWidth = 20;
      var svgHeight = 150;
      let barsvg = svg.append("svg")
        .attr("class", "gisbar gisbar" + baseId)
        .attr("x", function (d, i) {
          var peking = [data[0].gis.lon, data[0].gis.lat];
          var proPeking = projection(peking);
          return proPeking[0] - 12;//让图片移动到中间
        })
        .attr("y", function (d, i) {
          var peking = [data[0].gis.lon, data[0].gis.lat];
          var proPeking = projection(peking);
          return proPeking[1] - svgHeight;
        }).attr('width', svgWidth) // svgWidth
        .attr('height', svgHeight)
        .attr('id', 'svg-column');
      var margin = {
        top: 5,
        right: 10,
        bottom: 5,
        left: 0
      };

      //创建各个面的颜色数组


      function returnMainColor(size) {
        //var mainColorList = ['#2979ff', '#ebec5b', '#d2ef5f', '#b1d894', '#97d5ad', '#82d1c0', '#70cfd2', '#63c8ce', '#50bab8', '#38a99d'];
        var mainColorList = ['#2979ff', '#00b0ff', '#00e5ff', '#00e676', '#c6ff00', '#ffea00', '#ffc400', '#ff9100', '#ff3d00', '#ff1744'];
        let casen = parseInt((size / maxvalue) * 10);
        return mainColorList[casen];
      }
      function returnTopColor(size) {
        //var topColorList = ['#e9d748', '#d1d252', '#c0d75f', '#a2d37d', '#83d09e', '#68ccb6', '#5bc8cb', '#59c0c6', '#3aadab', '#2da094'];
        var topColorList = ['#2979ff', '#00b0ff', '#00e5ff', '#00e676', '#c6ff00', '#ffea00', '#ffc400', '#ff9100', '#ff3d00', '#ff1744'];
        let casen = parseInt((size / maxvalue) * 10);

        return topColorList[casen];
      }
      function returnRightColor(size) {
        //var rightColorList = ['#dfce51', '#d9db59', '#b9d54a', '#9ece7c', '#8ac69f', '#70c3b1', '#65c5c8', '#57bac0', '#42aba9', '#2c9b8f'];
        var rightColorList = ['#2979ff', '#00b0ff', '#00e5ff', '#00e676', '#c6ff00', '#ffea00', '#ffc400', '#ff9100', '#ff3d00', '#ff1744'];
        let casen = parseInt((size / maxvalue) * 10);

        return rightColorList[casen];
      }

      function addXAxis() {
        var transform = d3.geo.transform({
          point: function (x, y) {
            this.stream.point(x, y)
          }
        });
        //定义几何路径
        var path = d3.geo.path()
          .projection(transform);
        xLinearScale = d3.scale.linear()
          .domain(data.map(function (d) {
            return d.name;
          }))
          .range([0, svgWidth - margin.right - margin.left], 0.2);
        var xAxis = d3.svg.axis().scale(xLinearScale)
          .ticks(data.length).orient("bottom");
        //绘制X轴
        var xAxisG = barsvg.append("g") // x轴的总 g
          .call(xAxis)
          .attr("transform", "translate(" + (margin.left) + "," + (svgHeight - margin.bottom) + ")");
        //删除原X轴
        xAxisG.select("path").remove();
        xAxisG.selectAll('line').remove();
        dataProcessing(xLinearScale); //核心算法
      }

      var yLinearScale;
      //创建y轴的比例尺渲染y轴
      function addYScale() {
        yLinearScale = d3.scale.linear()
          .domain([0, maxvalue])
          .range([svgHeight - margin.top - margin.bottom, 0]);
        //定义Y轴比例尺以及刻度
        /*var yAxis = d3.axisLeft(yLinearScale).ticks(10);*/
        var yAxis = d3.svg.axis()
          .scale(yLinearScale)
          .ticks(7)
          .orient("left");

        //绘制Y轴
        /*var yAxisG = barsvg.append("g").call(yAxis).attr('transform', 'translate(' + (margin.left) + "," + margin.top + ")");
        //删除原Y轴路径和tick
        yAxisG.select("path").remove();
        yAxisG.selectAll('line').remove();*/
      }

      //核心算法  作用是修改了 初始data的值，d=data，仅仅是指向变了，并没有新复制一份数据！！！！！！
      function dataProcessing(xLinearScale) {

        var angle = Math.PI / 2.3;
        for (var i = 0; i < data.length; i++) {
          var d = data[i];
          var depth = 5;
          d.ow = 12;//xLinearScale.bandwidth() * 0.7;
          d.ox = 20 * i + 1//xLinearScale(d.name);
          d.oh = 1;
          d.p1 = {
            x: Math.cos(angle) * d.ow,
            y: -Math.sin(angle) - depth
          };
          d.p2 = {
            x: d.p1.x + d.ow,
            y: d.p1.y
          };
          d.p3 = {
            x: d.p2.x,
            y: d.p2.y + d.oh
          };
        }


      }

      function addColumn() {

        var g = barsvg.selectAll('.g')
          .data(data)
          .enter()
          .append('g')
          //.on("mouseover", clumnMouseover)
          //.on("mouseout", clumnMouseout)
          .attr('transform', function (d) {

            return "translate(" + (d.ox + margin.left) + "," + (svgHeight + margin.bottom - 10) + ")"
          });
        g.transition()
          .duration(1500)
          .attr("transform", function (d) {
            return "translate(" + (d.ox + margin.left) + ", " + (yLinearScale(d.value) + margin.bottom) + ")"
          });

        g.append('rect')
          .attr('x', 0)
          .attr('y', 0)
          .attr("class", "transparentPath")
          .attr('width', function (d, i) {
            return d.ow;
          })
          .attr('height', function (d) {
            return d.oh;
          })
          .style('fill', function (d, i) {
            return returnMainColor(datasize)
          })
          .transition()
          .duration(1500)
          .attr("height", function (d, i) {
            return svgHeight - margin.bottom - margin.top - yLinearScale(d.value);
          });

        g.append('path')
          .attr("class", "transparentPath")
          .attr("stroke", "red")
          .attr("stroke-width", "2")
          .attr('d', function (d) {
            return "M0,0 L" + d.p1.x + "," + d.p1.y + " L" + d.p2.x + "," + d.p2.y + " L" + d.ow + ",0 L0,0";
          })
          .style('fill', function (d, i) {
            return returnTopColor(datasize)
          });

        g.append('path')
          .attr("class", "transparentPath")
          .attr('d', function (d) {
            return "M" + d.ow + ",0 L" + d.p2.x + "," + d.p2.y + " L" + d.p3.x + "," + d.p3.y + " L" + d.ow + "," + d.oh + " L" + d.ow + ",0"
          })
          .style('fill', function (d, i) {
            return returnRightColor(datasize)
          })
          .transition()
          .duration(1500)
          .attr("d", function (d, i) {
            return "M" + d.ow + ",0 L" + d.p2.x + "," + d.p2.y + " L" + d.p3.x + "," + (d.p3.y + svgHeight - margin.top - margin.bottom - yLinearScale(d.value)) + " L" + d.ow + "," + (svgHeight - margin.top - margin.bottom - yLinearScale(d.value)) + " L" + d.ow + ",0"
          });

        var textRounder = function (value) { return Math.round(value); };
        g.append('text')
          .attr("class", "MyText")
          .style("fill", function (d) {
            return returnMainColor(datasize)
          })
          .attr("transform", "translate(" + 0 + "," + 1 + ")")
          .attr("x", function (d, i) {
            return 0;
            //return d.ow;
          })
          .attr("dx", function () {
            return 0;//(xScale.rangeBand() - rectPadding)/2
          })
          .attr("dy", function (d) {
            return 0;
          })
          .attr("y", function (d) {
            var min = yLinearScale.domain()[0];
            return yLinearScale(min) - svgHeight - 5;
          }).transition()
          .delay(function (d, i) {
            return i * svgHeight;
          })
          .duration(2000)
          .ease("bounce")
          /*.attr("y",function(d){ 
            return yLinearScale(d.value);
          })*/
          .tween("text", function (d) {
            var i = d3.interpolate(this.textContent, parseInt(d.value));

            return function (t) {
              this.textContent = textRounder(i(t));
            };
          })
          //.remove(1000)
          ;

      }

      function addColumnNoAnimation() {

        var g = barsvg.selectAll('.g')
          .data(data)
          .enter()
          .append('g')
          //.on("mouseover", clumnMouseover)
          //.on("mouseout", clumnMouseout)
          .attr("transform", function (d) {
            return "translate(" + (d.ox + margin.left) + ", " + (yLinearScale(d.value) + margin.bottom) + ")"
          });

        g.append('rect')
          .attr('x', 0)
          .attr('y', 0)
          .attr("class", "transparentPath")
          .attr('width', function (d, i) {
            return d.ow;
          })
          .style('fill', function (d, i) {
            return returnMainColor(datasize)
          })
          .attr("height", function (d, i) {
            return svgHeight - margin.bottom - margin.top - yLinearScale(d.value);
          });

        g.append('path')
          .attr("class", "transparentPath")
          .attr('d', function (d) {
            return "M0,0 L" + d.p1.x + "," + d.p1.y + " L" + d.p2.x + "," + d.p2.y + " L" + d.ow + ",0 L0,0";
          })
          .style('fill', function (d, i) {
            return returnTopColor(datasize)
          });

        g.append('path')
          .attr("class", "transparentPath")
          .style('fill', function (d, i) {
            return returnRightColor(datasize)
          })
          .attr("d", function (d, i) {
            return "M" + d.ow + ",0 L" + d.p2.x + "," + d.p2.y + " L" + d.p3.x + "," + (d.p3.y + svgHeight - margin.top - margin.bottom - yLinearScale(d.value)) + " L" + d.ow + "," + (svgHeight - margin.top - margin.bottom - yLinearScale(d.value)) + " L" + d.ow + ",0"
          });

        var textRounder = function (value) { return Math.round(value); };
        g.append('text')
          .attr("class", "MyText")
          .style("fill", function (d) {
            return returnMainColor(datasize)
          })
          .attr("transform", "translate(" + 0 + "," + 1 + ")")
          .attr("x", function (d, i) {
            return 0;
            //return d.ow;
          })
          .attr("dx", function () {
            return 0;//(xScale.rangeBand() - rectPadding)/2
          })
          .attr("dy", function (d) {
            return 0;
          })
          .attr("y", function (d) {
            var min = yLinearScale.domain()[0];
            return yLinearScale(min) - svgHeight - 5;
          })
          .text(function (d) {
            return parseInt(d.value);
          })
          ;

      }

      addXAxis();
      addYScale();
      if (type === "noAnimation") {
        addColumnNoAnimation();
      } else {
        addColumn();
      }

    }

    function returnBackColor(size) {
      var mainColorList = ['#daff58', '#97dd29', '#ffcb2c', '#fca950', '#fc8550', '#ff6f19', '#ff5b3b', '#eb5041', '#fc3b27', '#ff1800'];
      let casen = parseInt((size / maxvalue) * 10);

      if (casen > 9) {
        return mainColorList[9];
      }
      return mainColorList[casen];
    }

    function show() {//sizeData
      $.get('/js/public/mapdata/china.json', function (chinaJson) {
        getChinaJson = chinaJson;
        gis = g.attr("id", "states").selectAll(".gispath")//g.append("g").attr("id", "states")
          .data(chinaJson.features)  // 啊啊哦，这个地方是重点 dataJson原
          .enter()
          .append("path")
          .style("fill", function (d, i) {
            if (mapstyle === "black") {
              return "#10182A";//color = ["#293742","#304453","#384651","#415362","#31404b", "#1d3549"];  31404B
            } else {
              return "#00B0F0";//color = ["#05F0FF","#9FE6FF","#81DEFF","#5DD5FF","#25C6FF", "#00B0F0"];
            }
          })
          .attr("class", "province")
          .attr("d", geopath)// 使用路径生成器
          .on("click", clicked)
          .on("dblclick", dblclicked);

        //添加连接线
        gis_drag_line = svg.append("svg:path")
          .attr("class", 'links dragline hidden')
          .attr("d", "M0,0L0,0");
        /*d3.xml("../../image/gis/nanhai.svg", function(error,xmlDocument){
         svg.html(function(d){
         return d3.select(this).html()+xmlDocument.getElementsByTagName("g")[0].outerHTML;
         });
    
         d3.select("#southchinasea")
         .attr("x",100)
         .attr("y",100)
         .attr("transform","translate(540,410)scale(1)")
         .attr("class","southChinaSea");
         })*/


        var southSeaPeking = [121.0254 + 5, 23.5986 + 5];
        var southSeaProPeking = projection(southSeaPeking);

        //加上南海
        svg.append("image")
          .attr("class", "southChinaSeaaa southChinaSeaaa" + baseId)
          .attr("x", southSeaProPeking[0])
          .attr("y", southSeaProPeking[1])
          .attr("xlink:href", "../../image/map/nanhai.svg");
      });
    }
    //地图底图的切换！！
    function showMap(jsondata, citySign) {
      d3.selectAll('g').remove(); // 删除原来的地图

      g = svg.append("g");

      //添加省的数据 
      gis = g.attr("id", "states").selectAll(".gispath")//g.append("g").attr("id", "states")
        .data(jsondata.features)  // 啊啊哦，这个地方是重点
        .enter()
        .append("path")
        .style("fill", function (d, i) {
          if (mapstyle === "black") {
            return "#10182A";
          } else {
            return "#00B0F0";
          }
        })
        .attr("class", "province")
        .attr("d", geopath)// 使用路径生成器
        .on("click", clicked)
        .on("dblclick", dblclicked);

      if (citySign && typeof citySign === 'string') {
        //放大到城市
        //dG.moveAndZoom(true);
        console.log("发送新的请求啊")
        //发送新的请求，获取新的gisNodes
        let cityJson = { "dimensionProperty": "SBDKGIS", "objectName": "KQDKQT", "operation": "count", "levelParent": citySign };
        // $.ajax({
        //   type: "POST",
        //   url: EPMUI.context.url + '/chart/chartData',
        //   dataType: "json",
        //   data: {
        //     operationDataString: JSON.stringify(cityJson)
        //   },
        //   success: function (data) {
        //     baseaddPoint(data.gisResults, true);
        //     dG.addLegend(data.gisResults, data); //图例             
        //   }
        // })


        let baseJson1 = { "gisResults": 
          [
            { "centralPoint": { "lat": 49.2957, "lon": 127.1448 }, "id": 2311,  "name": "黑河市",  "value": "3" }, 
            { "centralPoint": { "lat": 45.9558, "lon": 131.2756 }, "id": 2309, "name": "七台河市", "value": "0" }, 
            { "centralPoint": { "lat": 47.5818, "lon": 124.541 }, "id": 2302, "name": "齐齐哈尔市", "value": "4" }, 
            { "centralPoint": { "lat": 47.5763, "lon": 133.0005 }, "id": 2308, "name": "佳木斯市", "value": "8" }, 
            { "centralPoint": { "lat": 45.7361, "lon": 132.7917 }, "id": 2303, "name": "鸡西市", "value": "0" }, 
            { "centralPoint": { "lat": 46.7523, "lon": 133.5938 }, "id": 2305, "name": "双鸭山市", "value": "0" }, 
            { "centralPoint": { "lat": 52.2345, "lon": 124.1016 }, "id": 2327, "name": "大兴安岭地区", "value": "0" }, 
            { "centralPoint": { "lat": 44.7089, "lon": 129.7815 }, "id": 2310, "name": "牡丹江市", "value": "2" }, 
            { "centralPoint": { "lat": 47.7081, "lon": 130.4407 }, "id": 2304, "name": "鹤岗市", "value": "0" }, 
            { "centralPoint": { "lat": 47.9608, "lon": 129.1992 }, "id": 2307, "name": "伊春市", "value": "0" }, 
            { "centralPoint": { "lat": 45.368, "lon": 127.9688 }, "id": 2301, "name": "哈尔滨市", "value": "3306" }, 
            { "centralPoint": { "lat": 46.8018, "lon": 126.7163 }, "id": 2312, "name": "绥化市", "value": "4" }, 
            { "centralPoint": { "lat": 46.4282, "lon": 124.7717 }, "id": 2306, "name": "大庆市", "value": "4" }
          ], 
          "tableName": "考勤打卡详情-上班打卡坐标/总量统计图", "xName": "上班打卡坐标", "yName": "总量" };
        baseaddPoint(data.gisResults, true);
        dG.addLegend(data.gisResults, data); //图例 

      } else {
        //dG.moveAndZoom(false);
        if (gisNodes) {
          baseaddPoint(gisNodes);
        }
      }


      g.selectAll("path")
        .classed("active", centered && function (d) { return d === centered; });
    }
    //双击地图 移动到对应的省份
    function dblclicked(d) {
      var x, y, k;
      if (d && parseInt(d.properties.id) < 99) {
        $.get('/js/public/mapdata/geometryProvince/' + d.properties.id + '.json', function (provinceJson) {
          if (d && centered !== d) {
            var centroid = geopath.centroid(d);
            x = centroid[0];
            y = centroid[1];
            k = 4;
            centered = d;

            d3.selectAll(".gisg").remove();
            d3.selectAll(".gisbar" + baseId).remove();

            // 定义 地图的投影  变化地图 放大   
            projection = d3.geo.mercator()
              .center([d.properties.cp[0], d.properties.cp[1]])
              .scale(width * 8 / 3)
              .translate([width / 2, height / 1.7]);

            // 定义地理路径生成器
            geopath = d3.geo.path()
              .projection(projection); //设定投影

            gis.transition()
              .duration(750)
              .attr("d", geopath);// 使用路径生成器

            setTimeout(function () {
              var newChinaJson = JSON.parse(JSON.stringify(getChinaJson)); //深拷贝
              newChinaJson.features = newChinaJson.features.concat(provinceJson.features);

              showMap(newChinaJson, d.properties.name);
            }, 750);

          } else {
            x = width / 2;
            y = height / 2;
            k = 1;
            centered = null;

            d3.selectAll(".gisg").remove();
            d3.selectAll(".gisbar" + baseId).remove();

            // 定义 地图的投影  变化地图 放大
            projection = baseProject;

            // 定义地理路径生成器
            geopath = d3.geo.path()
              .projection(projection); //设定投影

            gis.transition()
              .duration(750)
              .attr("d", geopath)// 使用路径生成器

            setTimeout(function () {
              showMap(getChinaJson);
            }, 750);

          }
        });
      } else {//退回基本显示
        x = width / 2;
        y = height / 2;
        k = 1;
        centered = null;

        d3.selectAll(".gisg").remove();
        d3.selectAll(".gisbar" + baseId).remove();

        // 定义 地图的投影  变化地图 放大
        projection = baseProject;

        // 定义地理路径生成器
        geopath = d3.geo.path()
          .projection(projection); //设定投影

        gis.transition()
          .duration(750)
          .attr("d", geopath)// 使用路径生成器

        setTimeout(function () {
          showMap(getChinaJson);
        }, 750);
      }
    }
    //点击地图变色
    function clicked(d) {
      var x, y, k;
      if (d && centered !== d) {
        var centroid = geopath.centroid(d);
        x = centroid[0];
        y = centroid[1];
        k = 4;
        centered = d;
      } else {
        x = width / 2;
        y = height / 2;
        k = 1;
        centered = null;
      }

      g.selectAll("path")
        .classed("active", centered && function (d) { return d === centered; });

      /*g.transition()
        .duration(750)
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
        .style("stroke-width", 1.5 / k + "px");*/

    }

    function gisGetCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    }

    function gis_mousedown() {

    }
    //拖动连接线
    function gis_mousemove() {
      if (!mousedown_gis) return;
      mouseup_gis = d3.mouse(this);
      gis_drag_line.attr('d', 'M' + mousedown_gis[0] + ',' + mousedown_gis[1] + 'L' + (d3.mouse(this)[0]) + ',' + (d3.mouse(this)[1]));
    }
    //放开鼠标进行连线
    function gis_mouseup() {
      if (mousedown_gis) {
        // 隐藏线
        gis_drag_line.classed('hidden', true).style('marker-end', '');
        // 清除
        resetGisMouseVars();
      }
    }
    //清空拖动连线的数据
    function resetGisMouseVars() {
      mousedown_gis = null;
    }

    function pointDblclicked(d) {
      var x, y, k;
      if (d && parseInt(d.id) < 99) {
        $.get('/js/public/mapdata/geometryProvince/' + d.id + '.json', function (provinceJson) {
          if (d && centered !== d) {
            var centroid = geopath.centroid(d);
            x = centroid[0];
            y = centroid[1];
            k = 4;
            centered = d;

            d3.selectAll(".gisg").remove();
            d3.selectAll(".gisbar" + baseId).remove();

            // 定义 地图的投影  变化地图 放大
            projection = d3.geo.mercator()
              .center([d.centralPoint.lon, d.centralPoint.lat])
              .scale(width * 8 / 3)
              .translate([width / 2, height / 1.7]);

            // 定义地理路径生成器
            geopath = d3.geo.path()
              .projection(projection); //设定投影

            gis.transition()
              .duration(750)
              .attr("d", geopath);// 使用路径生成器

            setTimeout(function () {
              var newChinaJson = JSON.parse(JSON.stringify(getChinaJson)); //深拷贝
              newChinaJson.features = newChinaJson.features.concat(provinceJson.features);

              showMap(newChinaJson, d.name);
            }, 750);

          } else {
            x = width / 2;
            y = height / 2;
            k = 1;
            centered = null;

            d3.selectAll(".gisg").remove();
            d3.selectAll(".gisbar" + baseId).remove();

            // 定义 地图的投影  变化地图 放大
            projection = baseProject;

            // 定义地理路径生成器
            geopath = d3.geo.path()
              .projection(projection); //设定投影

            gis.transition()
              .duration(750)
              .attr("d", geopath)// 使用路径生成器

            setTimeout(function () {
              showMap(getChinaJson);
            }, 750);

          }
        });
      } else {//退回基本显示
        x = width / 2;
        y = height / 2;
        k = 1;
        centered = null;

        d3.selectAll(".gisg").remove();
        d3.selectAll(".gisbar" + baseId).remove();

        // 定义 地图的投影  变化地图 放大
        projection = baseProject;

        // 定义地理路径生成器
        geopath = d3.geo.path()
          .projection(projection); //设定投影

        gis.transition()
          .duration(750)
          .attr("d", geopath)// 使用路径生成器

        setTimeout(function () {
          showMap(getChinaJson);
        }, 750);
      }
    }

    function baseaddBar(data) {
      dG.addBar(data);
    }
    function baseaddPoint(data) {
      dG.addPoint(data);
    }
    /*ALL IN UNDER!!*/
  }


})()

