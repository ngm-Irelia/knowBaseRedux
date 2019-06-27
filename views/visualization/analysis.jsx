import React from 'react';

const page = {
    title: 'Analysis',
    css: [ 
    ],
    js: [ 
        '/bower_components/d3/d3.min.js',
        "/js/public/comp/modules/analytic/analytic.js",
        "/js/visualization/analysis.js"
    ]
};

class Analysis extends React.Component {
    render() {
        return (
            <div>

                <div id="showarea" style={{"width":"100%", "height":"845px" }}>
                    很不幸，关系图必须要有一个启动端口，才能去查看
                </div>

                {/* <!--搜索框--> */}
                <div id="analytic-search-module"> </div>

                {/* <!--时间轴--> */}
                <div id="topology_relative_timeline">
                    {/* <div id="topology_timeline_taggle" className="icon-chevron-down-blue"></div> */}
                    <div id="topology_timeline_box">
                        <div id="topology_timeline">
                        <div className="event_selected">
                            <p id="event_title"> <i id="event_icon">-</i>关系类别</p>
                            <div id="event_list_child"></div>
                            <p className="showList"></p>
                        </div>
                        <div id="topology_timeline_axis">
                            <svg className='topo_timeline_svg ctrl'></svg>
                        </div>
                        </div>
                        <div id="topology_chart_record">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Analysis.UIPage = page;
export default Analysis;
