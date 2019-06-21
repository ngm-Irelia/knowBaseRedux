import React, { Component } from 'react';
import {Header } from '../../build/components/knowBase';

const page = {
  title: '首页',
  css: [
    '/css/index/index.css'
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

        <div>
          <Header />

          <div className="main-product">
            <div className="layui-container">
              <p className="title">NGM的网站<span>知识介绍</span></p>
              <div className="layui-row layui-col-space25">
                <div className="layui-col-sm6 layui-col-md3">
                  <div className="content">
                    <div><img alt="1" src="/image/img/Big_icon1.png" /></div>
                    <div>
                      <p className="label">可视化展示</p>
                      <p>百度地图，arcgis，D3.js，echarts，等技术的可视化展示</p>
                    </div>
                    <a href="/visualization">查看 ></a>
                  </div>
                </div>
                <div className="layui-col-sm6 layui-col-md3 ">
                  <div className="content">
                    <div><img alt="1" src="/image/img/Big_icon2.png" /></div>
                    <div>
                      <p className="label">H5展示</p>
                      <p>H5一些效果的展示</p>
                    </div>
                    <a href="/H5">查看 ></a>
                  </div>
                </div>
                <div className="layui-col-sm6 layui-col-md3 ">
                  <div className="content">
                    <div><img alt="/CSS3" src="/image/img/Big_icon3.png" /></div>
                    <div>
                      <p className="label">CSS3效果</p>
                      <p>纯CSS3实现的一些效果</p>
                    </div>
                    <a href="www.baidu.com">查看 ></a>
                  </div>
                </div>
                <div className="layui-col-sm6 layui-col-md3 ">
                  <div className="content">
                    <div><img alt="/CSS3" src="/image/img/Big_icon4.png" /></div>
                    <div>
                      <p className="label">自己的框架</p>
                      <p>自己写的框架，包含通用的方法，组件，样式等~~</p>
                    </div>
                    <a href='/components'>查看 ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer">
              <div className="layui-container">
              <p className="footer-web">
                  <a href="https://github.com/ngm-Irelia" target="_black">github</a>
                  <a href="http://47.94.8.210/" target="_black">博客</a>
                  <a href="http://47.94.8.210:9527/" target="_black">黑色风格小项目</a>
                  <span><i className="layui-icon layui-icon-home"></i>&nbsp;15275151030@163.com</span>
              </p>

              </div>
          </div>

        </div>
 

    );
  }
}

Index.UIPage = page;
export default Index;
