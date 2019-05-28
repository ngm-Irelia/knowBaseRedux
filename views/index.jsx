import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Header,Footer } from '../../build/common/common';
import store from '../../build/store/store';

const page = {
  title: '首页',
  css: [
    '/css/index.css'
  ],
  js: [
  ]
};

class Index extends Component {

  componentDidMount() {
    console.log("in index")
  }

  render() {
    return (

      <Provider store={store}>

        <div>
          <Header />

          <div class="main-product">
            <div class="layui-container">
              <p class="title">NGM的网站<span>知识介绍</span></p>
              <div class="layui-row layui-col-space25">
                <div class="layui-col-sm6 layui-col-md3">
                  <div class="content">
                    <div><img alt="1" src="/image/img/Big_icon1.png" /></div>
                    <div>
                      <p class="label">可视化展示</p>
                      <p>百度地图，arcgis，D3.js，echarts，等技术的可视化展示</p>
                    </div>
                    <a href="1">查看 ></a>
                  </div>
                </div>
                <div class="layui-col-sm6 layui-col-md3 ">
                  <div class="content">
                    <div><img alt="1" src="/image/img/Big_icon2.png" /></div>
                    <div>
                      <p class="label">H5展示</p>
                      <p>H5一些效果的展示</p>
                    </div>
                    <a href="1">查看 ></a>
                  </div>
                </div>
                <div class="layui-col-sm6 layui-col-md3 ">
                  <div class="content">
                    <div><img alt="1" src="/image/img/Big_icon3.png" /></div>
                    <div>
                      <p class="label">CSS3效果</p>
                      <p>纯CSS3实现的一些效果</p>
                    </div>
                    <a href="www.baidu.com">查看 ></a>
                  </div>
                </div>
                <div class="layui-col-sm6 layui-col-md3 ">
                  <div class="content">
                    <div><img alt="1" src="/image/img/Big_icon4.png" /></div>
                    <div>
                      <p class="label">知识杂记</p>
                      <p>使用中技术的记录~~</p>
                    </div>
                    <a href='1'>查看 ></a>
                  </div>
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

Index.UIPage = page;

export default Index;
