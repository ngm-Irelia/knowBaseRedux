import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Header,Footer } from '../../../build/common/common';
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

  componentDidMount() { 
  }

  render() {
    return (

      <Provider store={store}>

        <div>
          <Header />

          <div class="main-case">
            <div class="layui-container">
              <div class="layui-row">
                <div class="layui-inline content">
                  <div class="layui-inline case-img"><a href="/bmap" target="_black"><img src="/image/img/case1.jpg" /></a> </div>
                  <p class="show-title">百度地图</p>
                  <p class="show-detail">包括地图上的一些分析，交互操作！！！</p>
                </div>
                <div class="layui-inline content even center">
                  <div class="layui-inline case-img"><img src="/image/img/case2.jpg" /> </div>
                  <p class="show-title">arcgis</p>
                  <p class="show-detail">包括地图上的一些分析，交互操作！！！</p>
                </div>
                <div class="layui-inline content">
                  <div class="layui-inline case-img"><img src="/image/img/case3.jpg" /> </div>
                  <p class="show-title">D3关系分析</p>
                  <p class="show-detail">实体关系分析，包括搜索，时间轴等！！！</p>
                </div>
                <div class="layui-inline content even">
                  <div class="layui-inline case-img"><a href="/d3show" target="_black"> <img src="/image/img/case4.jpg" /> </a> </div>
                  <p class="show-title">D3的可视化动画</p>
                  <p class="show-detail">各种表格的切换和动画</p>
                </div>
                <div class="layui-inline content center">
                  <div class="layui-inline case-img"> <a href="/echarts" target="_black"><img src="/image/img/case5.jpg" /> </a></div>
                  <p class="show-title">echarts</p>
                  <p class="show-detail">包括地图上的一些分析，交互操作！！！</p>
                </div>
                
              </div>
               
            </div>
          </div>



          <Footer />

        </div>

      </Provider>

    );
  }
}

Visualization.UIPage = page;

export default Visualization;
