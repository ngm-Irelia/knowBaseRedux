(function() {

    var h, w;
    var svg = d3.select('body')
        .append('svg');

    function getWidth() {
        w = window.innerWidth;
        h = window.innerHeight;
        svg.attr({
            width: w,
            height: h,
            style:"position:fixed;top:0px;"
        });
        d3.select('#border').attr('width', w);
    }
    getWidth();
    window.addEventListener('resize', getWidth);

    //首页
    function intro() {
        var mask, text;

        (function() {
            mask = svg.append('clipPath')
                .attr('id', 'mask');
            mask
                .append('rect')
                .attr({
                    id: 'rectmask',
                    x: 0,
                    y: 0,
                    width: 0,
                    height: h
                });

            var pattern = textures.lines()
                .thinner()
                .heavier()
                .stroke('rgb( 251, 53, 80 )')
                .orientation('' + (~~(1 + Math.random() * 3) * 2 + (Math.random() < .5 ? -1 : 1)) + '/8')
                .id('pattern');

            svg.call(pattern);

            text = svg.append('text')
                .attr({
                    x: w / 2,
                    'font-size': '250px',
                    fill: pattern.url(),
                    'clip-path': 'url(#mask)',
                    'cursor':"pointer"
                })
                .style('text-anchor', 'middle')
                .style('font-family', 'Raleway')
                .text('NGM'.toUpperCase());

            text.attr('y', h / 2);
            var bbox = text.node().getBBox();
            text.attr('y', h / 2 + h / 2 - (bbox.y + bbox.height / 2));

            step1();
        })();

        function step1() {
            d3.select('#rectmask')
                .attr({
                    width: 0,
                    height: h,
                    y: 0
                })
                .transition()
                .duration(500)
                .attr('width', w)
                .transition()
                .duration(800)
                .transition();

            d3.select('#pattern')
                .select('path')
                .attr('stroke-width', 4)
                .transition()
                .delay(1000)
                .duration(500)
                .attr({
                    'stroke-width': 30,
                    'font-size': '150px'
                });


            text.transition()
                .delay(2000)
                .duration(500)
                .attr({
                    'font-size': '50px',
                    x: 100,
                    y: 100
                }).each('end', function(){
                    text.on('click',function(){
                        window.location.href = "/index";
                    });

                    endStep();
                });

        }

        function endStep() {
            //text.remove();
            //mask.remove();
            //d3.select('#pattern').remove();
            //svg.select('defs').remove();

            var data;
            var n = 10;
            var data2 = d3.shuffle(d3.range(n));
            var data3 = d3.shuffle(d3.range(n));
            data = d3.range(n).map(function(d) {
                return {
                    pos1: d,
                    pos2: data2[d],
                    pos3: data3[d],
                }
            });
            chartPage(data);
			
        }
    }

    //图表页面 动画3
    function anim3() {
        console.log("图表页面 动画3 ....")
        var margin, space, barWidth, rects, nb, g, data;

        (function() {
            margin = 50;
            space = 10;
            barWidth = 30;

            nb = Math.floor((w - margin * 2) / (barWidth + space));
            margin = (w - (nb * (barWidth + space))) / 2;

            g = svg.append('g')
                .attr('id', 'bars');

            data = d3.range(nb).map(function(d) {
                var pos = Math.random() < .5 ? -1 : 1,
                    height = 20 + Math.random() * (h / 2 - 20 - 20),
                    h1 = 5 + Math.random() * (height / 2 - 10),
                    h2 = 5 + Math.random() * (height / 2 - 10),
                    h3 = height - h1 - h2;

                return {
                    pos: pos,
                    height: height,
                    cumul: [h1, h2, h3]
                };
            });

            rects = g.selectAll('rect')
                .remove()
                .data(d3.range(nb * 3))
                .enter()
                .append('rect')
                .datum(function(d, i) {
                    var opacity = 1.0;
                    if (data[~~(i / 3)].pos < 0) {
                        if (i % 3 === 1) {
                            opacity = .6;
                        } else if (i % 3 === 2) {
                            opacity = .3;
                        }
                    } else {
                        if (i % 3 === 1) {
                            opacity = .6;
                        } else if (i % 3 === 0) {
                            opacity = .3;
                        }
                    }
                    return {
                        opacity: opacity,
                        pos: data[~~(i / 3)].pos,
                        height: data[~~(i / 3)].height
                    };
                });

            step1();
        })();

        // small bars graph
        function step1() {
            var count = 0;

            rects
                .attr({
                    opacity: 1.0,
                    fill: 'rgb( 251, 53, 80 )',
                    y: h / 2,
                    width: 8,
                    height: 0
                })
                .attr('x', function(d, i) {
                    return margin + space / 2 + (barWidth + space) * ~~(i / 3) + (i % 3) * 11;
                })
                .transition()
                .delay(function(d, i) {
                    return i * 10;
                })
                .attr('height', function(d, i) {
                    return data[~~(i / 3)].cumul[i % 3];
                })
                .attr('y', function(d, i) {
                    return d.pos < 0 ? h / 2 - (data[~~(i / 3)].cumul[i % 3]) : h / 2;
                })
                .transition()
                .duration(300)
                .each('end', function() {
                    count++;
                    if (count === nb * 3) {
                        step2();
                    }
                });
        }

        // large bars graph
        function step2() {
            var count = 0;

            rects
                .transition()
                .duration(300)
                .attr('height', function(d, i) {
                    var _h = 0;
                    if (d.pos < 0) {
                        if (i % 3 === 0) {
                            _h = Math.abs(d.height);
                        }
                    } else {
                        if (i % 3 === 2) {
                            _h = Math.abs(d.height);
                        }
                    }
                    
                    return _h;
                })
                .attr('y', function(d, i) {
                    var _y = h / 2;
                    if (d.pos < 0) {
                        if (i % 3 === 0) {
                            _y = h / 2 - d.height;
                        }
                    }
                    return _y;
                })
                .attr('width', barWidth)
                .attr('x', function(d, i) {
                    return margin + space / 2 + (barWidth + space) * ~~(i / 3);
                })
                .each('end', function() {
                    count++;
                    if (count === nb * 3){
                        step3();
                    }
                });
        }

        function step3() {
            var last = 0,
                count = 0;

            var sortedHeights = data.map(function(d) {
                return d.height * d.pos;
            }).sort(function(a, b) {
                return -(a - b);
            });

            rects
                .datum(function(d, i) {
                    var index = sortedHeights.indexOf(d.height * d.pos);
                    if (index == last) {
                        index++;
                    }
                    last = index;
                    return {
                        orderedIndex: index,
						height:d.height
                    }
                })
                .transition()
                .duration(500)
                .attr('x', function(d) {
                    return margin + space / 2 + (barWidth + space) * d.orderedIndex;
                })
                .transition() // 让柱状图缩小
                .delay(300)
                .duration(500)
				.attr({
				    y: 60,
				    width:5
				}) 
				.attr('x', function(d, i) {
				    return w/2 -100 + 11* ~~(i/6);
				})
                .attr('height', function(d, i) {
                    return d.height/10;
                })
                .each('end', function(){
                    rects.on('click',function(){
                        window.location.href = "/echarts";
                    });
                
                    endStep();
                });
        }
		
		function endStep(){
			//新的动画
			map();
		}

        
    }

    //图表页面 动画2
    function anim2() {
        var data, data2, arc, g1, g2, arcs1, arcs2, index;

        function arcTween(transition) {
            transition.attrTween('d', function(d) {
                var interpolate = d3.interpolate(d.endAngle, d.toAngle);
                return function(t) {
                    d.endAngle = interpolate(t);
                    return arc(d);
                };
            });
        }

        function arcTween2(transition) {
            transition.attrTween('d', function(d) {
                var interpolate = d3.interpolate(d.startAngle, d.toAngle);
                return function(t) {
                    d.startAngle = interpolate(t);
                    return arc(d);
                };
            });
        }

        (function() {
            data = [];
            var longueur = w - 100;
            for (var position = 0; position < longueur; position += data[data.length - 1].size) {
                var size = 30 + ~~(Math.random() * 70);

                if (position + size > longueur) size = longueur - position;

                data.push({
                    size: size,
                    x: position + size / 2,
                    upper: Math.random() < 0.5
                });
            }

            data2 = [], index = 0;
            for (var i = 0; i < data.length - 1; i++) {
                if (data[i].upper == data[i + 1].upper) {
                    if (data2[index]) {
                        data2[index].size += data[i + 1].size;
                    } else {
                        var size = data[i].size + data[i + 1].size;
                        data2.push({
                            size: size,
                            x: data[i].x - data[i].size / 2,
                            upper: data[i].upper
                        });
                    }

                    if (i == data.length - 2) {
                        data2[index].x += data2[index].size / 2;
                    }
                } else {
                    if (data2[index]) {
                        data2[index].x += data2[index].size / 2;
                        index++;
                    }
                }
            }

            arc = d3.svg.arc()
                .innerRadius(0)
                .outerRadius(function(d) {
                    return d.size / 2;
                });

            g2 = svg.append('g')
                .attr('id', 'g2');

            g1 = svg.append('g')
                .attr('id', 'g1');

            arcs1 = g1.selectAll('path')
                .data(data.map(function(d) {
                    d.startAngle = 3 * Math.PI / 2;
                    d.endAngle = 3 * Math.PI / 2;
                    return d;
                }))
                .enter()
                .append('path')
                .attr('d', arc)
                .attr('fill', 'rgb( 251, 53, 80 )')
                .attr('transform', function(d) {
                    return 'translate(' + (50 + d.x) + ',' + (h / 2) + ')';
                })
                .data(data.map(function(d) {
                    d.toAngle = d.upper ? Math.PI / 2 : 5 * Math.PI / 2;
                    return d;
                }));

            arcs2 = g2.selectAll('path')
                .data(data2.map(function(d) {
                    d.startAngle = 3 * Math.PI / 2;
                    d.endAngle = 3 * Math.PI / 2;
                    return d;
                }))
                .enter()
                .append('path')
                .attr('d', arc)
                .attr('fill', 'rgba( 251, 53, 80, .3 )')
                .attr('transform', function(d) {
                    return 'translate(' + (50 + d.x) + ',' + (h / 2) + ')';
                })
                .data(data2.map(function(d) {
                    d.toAngle = d.upper ? Math.PI / 2 : 5 * Math.PI / 2;
                    return d;
                }));

            step1();
        })();

        function step1() {
            var count = 0;

            arcs1
                .transition()
                .duration(500)
                .ease('sin')
                .call(arcTween)
                .each('end', function() {
                    count++;
                    if (count === data.length) step2();
                });
        }

        function step2() {
            var count = 0;

            arcs2
                .transition()
                .duration(500)
                .call(arcTween)
                .transition()
                .duration(300)
                .each('end', function() {
                    count++;
                    if (count === data2.length) step3();
                });
        }

        function step3() {
            var count = 0;

            arcs2
                .transition()
                .duration(500)
                .call(arcTween2);

            arcs1
                .transition()
                .duration(500)
                .call(arcTween2)
                .each('end', function() {
                    count++;
                    if (count === data.length) endStep();
                });
        }

        function endStep() {
            g1.remove();
            g2.remove();

            anim3();
        }
    }

    //图表页面
    function chartPage(_data) {
        var data, paths;

        (function() {
            data = _data;

            paths = svg.selectAll('path')
                .data(data)
                .enter()
                .append('path')
                .attr({
                    stroke: 'rgb( 251, 53, 80 )',
                    fill: 'none',
                    'stroke-width': ~~((h - 200) / data.length)
                })
                .attr('opacity', function(d) {
                    return (1 / data.length) * (d.pos1 + 1);
                })
                .attr('d', function(d) {
                    var path =
                        ' M ' + ~~(w - 50) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos1 + 0.5)) +
                        ' L ' + ~~(5 / 6 * (w - 100)) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos1 + 0.5)) +
                        ' L ' + ~~(4 / 6 * (w - 100)) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos1 + 0.5)) +
                        ' L ' + ~~(w / 2 + 15) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos1 + 0.5)) +
                        ' L ' + ~~(w / 2 - 15) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos1 + 0.5)) +
                        ' L ' + ~~(2 / 6 * (w - 100)) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos1 + 0.5)) +
                        ' L ' + ~~(1 / 6 * (w - 100)) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos1 + 0.5)) +
                        ' L ' + 50 + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos1 + 0.5));
                    return path;
                });

            step1();
        })();

        function step1() {
            paths
                .transition()
                .duration(500)
                .attr('d', function(d) {
                    var path =
                        ' M ' + ~~(w - 50) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos1 + 0.5)) +
                        ' L ' + ~~(5 / 6 * (w - 100)) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos1 + 0.5)) +
                        ' L ' + ~~(4 / 6 * (w - 100)) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos2 + 0.5)) +
                        ' L ' + ~~(w / 2 + 15) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos2 + 0.5)) +
                        ' L ' + ~~(w / 2 - 15) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos2 + 0.5)) +
                        ' L ' + ~~(2 / 6 * (w - 100)) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos2 + 0.5)) +
                        ' L ' + ~~(1 / 6 * (w - 100)) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos1 + 0.5)) +
                        ' L ' + 50 + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos1 + 0.5));
                    return path;
                })
                .transition()
                .duration(500)
                .attr('d', function(d) {
                    var path =
                        ' M ' + ~~(w - 50) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos3 + 0.5)) +
                        ' L ' + ~~(5 / 6 * (w - 100)) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos3 + 0.5)) +
                        ' L ' + ~~(4 / 6 * (w - 100)) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos2 + 0.5)) +
                        ' L ' + ~~(w / 2 + 15) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos2 + 0.5)) +
                        ' L ' + ~~(w / 2 - 15) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos2 + 0.5)) +
                        ' L ' + ~~(2 / 6 * (w - 100)) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos2 + 0.5)) +
                        ' L ' + ~~(1 / 6 * (w - 100)) + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos1 + 0.5)) +
                        ' L ' + 50 + ' ' + (50 + ~~((h - 100) / data.length) * (d.pos1 + 0.5));
                    return path;
                })
                .transition()
                .duration(300)
                .each('end', step2);
        }

        function step2() {
            var count = 0;

            paths
                .transition()
                .duration(500)
                .attr('stroke-width', 3)
                .transition()
                .duration(300)
                .each('end', function(d, i) {
                    step3();
                });
        }

        function step3() {
            var count = 0;

            svg.selectAll('path')
                .datum(function(d) {
                    return {
                        length: this.getTotalLength()
                    };
                })
                .attr('stroke-dasharray', function(d) {
                    return (d.length / 10) + ' ' + 0;
                })
                .transition()
                .delay(function(d, i) {
                    return i * 50;
                })
                .duration(1000)
                .attr('stroke-dasharray', function(d) {
                    return 0 + ' ' + (d.length / 10);
                })
                .each('end', function() {
                    count++;
                    if (count == data.length) endStep();
                });
        }

        function endStep() {
            paths.remove();
            anim2();
        }
    }
	
    // radars
    function map() {
        var angles, center, pts, pentas, lines, g, shapes;

        (function() {
            angles = d3.range(5).map(function(d) {
                return {
                    sin: Math.sin((2 * Math.PI) / 5 * d - Math.PI / 2),
                    cos: Math.cos((2 * Math.PI) / 5 * d - Math.PI / 2)
                };
            });

            center = {
                x: w / 2,
                y: h / 2 + 20
            }

            pts = d3.range(5).map(function(d) {
                return angles.map(function(a) {
                    return {
                        x: ~~(center.x + a.cos * (d + 1) * 50),
                        y: ~~(center.y + a.sin * (d + 1) * 50)
                    };
                });
            });

            pentas = svg.selectAll('path')
                .data(pts)
                .enter()
                .append('path')
                .attr({
                    'stroke-width': 2,
                    fill: 'none'
                })
                .attr('stroke', function(d, i) {
                    return 'rgba( 251, 53, 80, ' + (i === pts.length - 1 ? 1.0 : 0.5) + ' )'
                })
                .attr('d', function(d) {
                    return d.map(function(pt, i) {
                        return (i === 0 ? 'M ' : 'L ') + pt.x + ' ' + pt.y;
                    }).join(' ') + ' Z';
                })
                .datum(function(d) {
                    return {
                        length: this.getTotalLength()
                    };
                })
                .attr('stroke-dasharray', function(d) {
                    return '0 ' + d.length;
                });

            step1();
        })();

        function step1() {
            var count = 0;

            pentas
                .transition()
                .delay(function(d, i) {
                    return (pts.length - i) * 150;
                })
                .duration(500)
                .attr('stroke-dasharray', function(d) {
                    return d.length + ' 0';
                })
                .each('end', function() {
                    count++;
                    if (count == pts.length-1) step2();
                });
        }

        function step2() {
            var count = 0;

            lines = svg.selectAll('line')
                .data(d3.range(5))
                .enter()
                .append('line')
                .attr({
                    stroke: 'rgba( 251, 53, 80, 0.5 )',
                    'stroke-width': 2,
                    x1: center.x,
                    y1: center.y,
                    x2: center.x,
                    y2: center.y
                })
                .transition()
                .duration(300)
                .attr('x2', function(d) {
                    return pts[pts.length - 1][d].x;
                })
                .attr('y2', function(d) {
                    return pts[pts.length - 1][d].y;
                })
                .each('end', function() {
                    count++;
                    if (count == pts.length) step3();
                });
        }

        function step3() {
            var count = 0;
            g = svg.append('g');
            shapes = g.selectAll('path')
                .data(d3.range(4))
                .enter()
                .append('path')
                .attr({
                    fill: 'rgba( 251, 53, 80, 0.5 )',
                    d: d3.range(5).map(function(i) {
                        return (i === 0 ? 'M ' : 'L ') + center.x + ' ' + center.y;
                    }).join(' ') + ' Z'
                });

            (function animShapes() {
                var n = 0;
                shapes
                    .transition()
                    .duration(300)
                    .delay(function(d) {
                        return count === 0 ? d * 500 : 0;
                    })
                    .attr('d', function() {
                        return d3.range(5).map(function(i) {
                            var n = ~~(Math.random() * 5);
                            return (i === 0 ? 'M ' : 'L ') + pts[n][i].x + ' ' + pts[n][i].y;
                        }).join(' ') + ' Z';
                    })
                    .each('end', function() {
                        n++;
                        if (n == 3) {
                            count++;
                            if (count === 3) step4();
                            else animShapes();
                        }
                    });
            })();
        }

        function step4() {
            d3.selectAll('line')
                .transition()
                .duration(300)
                .attr('x2', center.x)
                .attr('y2', center.y);

            var count = 0;
            pentas
                .data(pts)
                .attr('d', function(d) {
                    return d.reverse().map(function(pt, i) {
                        return (i === 0 ? 'M ' : 'L ') + pt.x + ' ' + pt.y;
                    }).join(' ') + ' Z';
                })
                .datum(function(d) {
                    return {
                        length: this.getTotalLength()
                    };
                })
                .attr('stroke-dasharray', function(d) {
                    return (d.length / 5) + ' ' + 0;
                })
                .transition()
                .delay(function(d, i) {
                    return 300 + (pts.length - i) * 150;
                })
                .duration(500)
                .attr('stroke-dasharray', function(d) {
                    return 0 + ' ' + (d.length / 5);
                })
                .each('end', function() {
                    count++;
                    if (count === pts.length-1) endStep();
                });

            shapes
                .transition()
                .duration(300)
                .attr('d', d3.range(5).map(function(i) {
                    return (i === 0 ? 'M ' : 'L ') + center.x + ' ' + center.y;
                }).join(' ') + ' Z')
        }

        function endStep() {
            pentas.remove();
            d3.selectAll('line').remove();
            g.remove();

            outro();
        }
    }

    function outro() {
        var mask, mask2, text, text2;

        (function() {
            mask = svg.append('clipPath')
                .attr('id', 'mask');
            mask
                .append('path')
                .attr({
                    id: 'pathmask',
                    d: 'M ' + (w - 1) + ' ' + h + ' L ' + w + ' 0 L -1 ' + h + ' Z'
                });

            mask2 = svg.append('clipPath')
                .attr('id', 'mask2');
            mask2
                .append('path')
                .attr({
                    id: 'pathmask2',
                    d: 'M 0 0 L ' + (w + 1) + ' 0 L 1 ' + h + ' Z'
                });

            text = svg.append('text')
                .attr({
                    x: -w / 2,
                    'font-size': '100px',
                    fill: 'rgb( 251, 53, 80 )',
                    'clip-path': 'url(#mask)',
                    opacity: 0
                })
                .style('text-anchor', 'middle')
                .style('font-family', 'Raleway')
                .text('Gis.'.toUpperCase());

            text2 = svg.append('text')
                .attr({
                    x: w + w / 2,
                    'font-size': '100px',
                    fill: 'rgb( 251, 53, 80 )',
                    'clip-path': 'url(#mask2)',
                    opacity: 0
                })
                .style('text-anchor', 'middle')
                .style('font-family', 'Raleway')
                .text('Gis.'.toUpperCase());

            text.attr('y', h / 2);
            var bbox = text.node().getBBox();
            text.attr('y', h / 2 + h / 2 - (bbox.y + bbox.height / 2));
            text2.attr('y', h / 2 + h / 2 - (bbox.y + bbox.height / 2));

            step1();
        })();

        function step1() {
            text
                .transition()
                .duration(1000)
                .attr('x', w / 2)
                .attr('opacity', 1)
                .each('end', function(d) {
                    d3.select(this)
                        .attr('clip-path', '')
                })
				.transition()
				.duration(500)
                .transition()
                .duration(1000)
				.attr({
					'font-size': '50px',
				    'x': w - 200,
					'y': 100
				}).each('end', function(){
					d3.select('#pathmask').remove();
					mask.remove();
					d3.select('#pathmask2').remove();
					mask2.remove();
					
				    text.on('click',function(){
                        window.location.href = "/map";
				    });
				});

            text2
                .transition()
                .duration(1000)
                .attr('x', w / 2)
                .attr('opacity', 1)
                .remove();
        }
    }

    intro(); //todo 首页

})();