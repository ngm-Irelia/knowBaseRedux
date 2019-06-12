import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Header } from '../../../build/common/common';
//import {Header } from '../../../build/components/knowBase';
import store from '../../../build/store/store';

const page = {
  title: '可视化',
  css: [
    '/css/visualization/visualization.css'
  ],
  js: [
  ]
};

class Visualization extends Component {

  componentWillMount (){
    console.log("Visualization componentWillMount ------")
  }
  componentDidMount(){
      console.log("Visualization componentDidMount --------")
  }

  componentWillReceiveProps(){
    console.log("Visualization componentWillReceiveProps --------")
  }

  render() {
    return (

      <div>
        {/* <Provider store={store}> */}
        <div>
          <Header />

          <div className="main-case">
            <div className="layui-container">
              <div className="layui-row">
                <div className="layui-inline content">
                  <div className="layui-inline case-img"><a href="/bmap" target="_black"><img src="/image/img/case1.jpg" /></a> </div>
                  <p className="show-title">百度地图</p>
                  <p className="show-detail">包括地图上的一些分析，交互操作！！！</p>
                </div>
                <div className="layui-inline content even center">
                  <div className="layui-inline case-img"><img src="/image/img/case2.jpg" /> </div>
                  <p className="show-title">arcgis</p>
                  <p className="show-detail">包括地图上的一些分析，交互操作！！！</p>
                </div>
                <div className="layui-inline content">
                  <div className="layui-inline case-img"><img src="/image/img/case3.jpg" /> </div>
                  <p className="show-title">D3关系分析</p>
                  <p className="show-detail">实体关系分析，包括搜索，时间轴等！！！</p>
                </div>
                <div className="layui-inline content even">
                  <div className="layui-inline case-img"><a href="/d3show" target="_black"> <img src="/image/img/case4.jpg" /> </a> </div>
                  <p className="show-title">D3的可视化动画</p>
                  <p className="show-detail">各种表格的切换和动画</p>
                </div>
                <div className="layui-inline content center">
                  <div className="layui-inline case-img"> <a href="/echarts" target="_black"><img src="/image/img/case5.jpg" /> </a></div>
                  <p className="show-title">echarts</p>
                  <p className="show-detail">包括地图上的一些分析，交互操作！！！</p>
                </div>
                
              </div>
              
            </div>
          </div>



         {/*  <Footer /> */}
        </div>
        {/* </Provider> */}
      </div>

    );
  }
}

Visualization.UIPage = page;

export default Visualization;
