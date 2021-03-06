import React, { Component, Fragment } from 'react';
import { Header } from '../../../build/components/knowBase';

const page = {
  title: '首页',
  css: [
    '/css/ngm/ngm.css',
  ],
  js: [
    '/js/ngm/index.js'
  ]
};



class Index extends Component {

  componentDidMount() {
  }

  handleChangeInput() {
  }

  render() {
    return (
      <div className="page">
        <Header />
        <div className="ngm-page">
          <div className="page1">
            <div className="header-line">
              Components 通用的颜色：
            </div>
            <div className="show-func">

              <div className="show-color">
                <div className="sc casia-primary" title="casia-primary">casia-primary</div>
                <div className="sc casia-normal" title="casia-normal">casia-normal</div>
                <div className="sc casia-warning" title="casia-warning">casia-warning</div>
                <div className="sc casia-danger" title="casia-danger">casia-danger</div>
              </div>

            </div>

            <div className="header-line">
              Components 通用的按钮：
            </div>
            <div className="show-func">
              <div className="show-btn">
                <div>
                  <div className="casia-btn-primary" title="casia-btn-primary" >默认</div>
                  <div className="show-btn-title">casia-btn-primary</div>
                </div>
                <div>
                  <div className="casia-btn-normal" title="casia-btn-normal"  >确定</div>
                  <div className="show-btn-title">casia-btn-normal</div>
                </div>
                <div>
                  <div className="casia-btn-warning" title="casia-btn-warning" >警告</div>
                  <div className="show-btn-title">casia-btn-warning</div>
                </div>
                <div>
                  <div className="casia-btn-danger" title="casia-btn-danger"  >危险</div>
                  <div className="show-btn-title">casia-btn-danger</div>
                </div>
              </div>
            </div>
            <div className="show-func">
              <div className="show-btn">
                <div>
                  <div className="casia-angle-btn-primary" title="casia-angle-btn-primary" >默认</div>
                  <div className="show-btn-title">casia-angle-btn-primary</div>
                </div>
                <div>
                  <div className="casia-angle-btn-normal" title="casia-angle-btn-normal"  >确定</div>
                  <div className="show-btn-title">casia-angle-btn-normal</div>
                </div>
                <div>
                  <div className="casia-angle-btn-warning" title="casia-angle-btn-warning" >警告</div>
                  <div className="show-btn-title">casia-angle-btn-warning</div>
                </div>
                <div>
                  <div className="casia-angle-btn-danger" title="casia-angle-btn-danger"  >危险</div>
                  <div className="show-btn-title">casia-angle-btn-danger</div>
                </div>
              </div>
            </div>
            <div className="show-func">
              <div className="show-btn">
                <div>
                  <div className="casia-circle-btn-primary" title="casia-circle-btn-primary" >默</div>
                  <div className="show-btn-title">casia-circle-btn-primary</div>
                </div>
                <div>
                  <div className="casia-circle-btn-normal" title="casia-circle-btn-normal"  >确</div>
                  <div className="show-btn-title">casia-circle-btn-normal</div>
                </div>
                <div>
                  <div className="casia-circle-btn-warning" title="casia-circle-btn-warning" >警</div>
                  <div className="show-btn-title">casia-circle-btn-warning</div>
                </div>
                <div>
                  <div className="casia-circle-btn-danger" title="casia-circle-btn-danger"  >危</div>
                  <div className="show-btn-title">casia-circle-btn-danger</div>
                </div>
              </div>
            </div>

            <div className="header-line">
              Components 通用的输入框：
            </div>
            <div className="show-func">
              <div className="show-btn">
                <div>
                  <input type="text" className="casia-input" value="casia-input" onChange={this.handleChangeInput.bind(this)} />
                </div>

              </div>
            </div>

            <div className="header-line">
              Components 通用的单选框 casia-radio，多选框： casia-checkbox
            </div>
            <div className="show-func">
              <div className="show-btn">
                <div>
                  <input type="checkbox" id="read" className="casia-checkbox" value="read" onChange={this.handleChangeInput} /> <label htmlFor="read" style={{ "userSelect": "none" }}>读书</label>
                  <input type="checkbox" id="study" className="casia-checkbox" value="study" onChange={this.handleChangeInput} /> <label htmlFor="study" style={{ "userSelect": "none" }}>学习</label>
                </div>

                <div>
                  <input type="radio" id="readradio" className="casia-radio" name="s" value="s1" onChange={this.handleChangeInput} /> <label htmlFor="readradio" style={{ "userSelect": "none" }}>读书</label>
                  <input type="radio" id="studyradio" className="casia-radio" name="s" value="s2" onChange={this.handleChangeInput} /> <label htmlFor="studyradio" style={{ "userSelect": "none" }}>学习</label>
                </div>

              </div>

              <div className="show-btn">
                <div>
                  <div className="casia-btn-primary" title="casia-btn-primary" >
                    <input type="checkbox" id="ds" className="casia-checkbox" value="study" onChange={this.handleChangeInput} />
                    <label htmlFor="ds" style={{ "userSelect": "none" }}>多选</label>
                  </div>

                </div>

                <div>
                  <div className="casia-btn-primary" title="casia-btn-primary" >
                    <input type="radio" id="dan" className="casia-radio" name="dan" value="s1" onChange={this.handleChangeInput} />
                    <label htmlFor="dan" style={{ "userSelect": "none" }}>单选</label>
                  </div>

                </div>

              </div>
            </div>



            <div className="header-line">

            </div>
            <div className="show-func">
              <div className="show-btn">


                <div>

                </div>

              </div>
            </div>



          </div>

          <div className="page2">

            <div className="header-line">
              Components 现有 工具方法 介绍：
            </div>
            <div className="show-func">

              <div className="sf">
                <div className="sf-title">Components.selectText()</div>
                <div className="sf-header">	禁止文字选择 </div>
              </div>

              <div className="sf">
                <div className="sf-title">Components.loadScriptPromise(url)</div>
                <div className="sf-header">	动态加载js  </div>
                <div className="sf-content">	@param url 需要加载的js文件路径  </div>
              </div>

              <div className="sf">
                <div className="sf-title">Components.getTime(time)</div>
                <div className="sf-header">	对时间的相关处理 </div>
                <div className="sf-content">
                  @param time  字符串 =  '' | 'now' | 'day' | 'week' | 'month' | 'year' | '数字'
                  <br />''     ：当前日期，包含时分秒
                  <br />'now'  ：当天
                  <br />'day'  ：一天前
                  <br />'week' ：一周前
                  <br />'month'：一月前
                  <br />'year' ：一年前
                  <br />number ：number天前。  为负数的话，就是 n天后
                </div>
              </div>

              <div className="sf">
                <div className="sf-title">Components.getData(urls, param, type, tradit)</div>
                <div className="sf-header">	使用promise对ajax接口的封装 </div>
                <div className="sf-content">
                  @param urls	   请求的url<br />
                  @param param	 请求的参数<br />
                  @param type	   请求的类型GET POST 等<br />
                  @param tradit	 是否自动解析数组<br />
                </div>
              </div>

              <div className="sf">
                <div className="sf-title">Components.getSearch(search)</div>
                <div className="sf-header">	解析search的值，转为json对象 </div>
                <div className="sf-content">
                  @param search window.location.search
                </div>
              </div>

              <div className="sf">
                <div className="sf-title">Components.getCookie(search)</div>
                <div className="sf-header">	解析cookie的值，转为json对象 </div>
              </div>

              <div className="sf">
                <div className="sf-title">Components.CheckEmail()</div>
                <div className="sf-header">	邮箱监测 </div>
                <div className="sf-content">
                  @param email 邮箱账号
                </div>
              </div>

              <div className="sf">
                <div className="sf-title">Components.checkIDCard()</div>
                <div className="sf-header">	身份证检测 </div>
                <div className="sf-content">
                  @param card 身份证号
                </div>
              </div>

              <div className="sf">
                <div className="sf-title">Components.trim()</div>
                <div className="sf-header">	去除两侧空格 </div>
                <div className="sf-content">
                  @param v 要处理的字符串
                </div>
              </div>

              <div className="sf">
                <div className="sf-title">Components.isIE()</div>
                <div className="sf-header">	检测是否是IE、Edge浏览器 </div>
              </div>

            </div>





            <div className="header-line">
              Components 现有 实例方法 介绍：
            </div>

            <div className="show-func">

              <div className="sf">
                <div className="sf-title">Components().BarChart.run(showId, data)</div>
                <div className="sf-header"> 组件-横向柱状图 </div>
                <div className="sf-content">
                  @param showId 放组件的盒子id<br />
                  @param data	 现实的数据. 例子：<br />
                  {`[{
                    id: "111",
                    name: "中国",
                    number: 1399
                  }, {
                    id: "999",
                    name: "中国2",
                    number: 999
                  }]`}
                </div>
              </div>

              <div className="sf">
                <div className="sf-title">Components().PictureVirtual.run(showId, Img)</div>
                <div className="sf-header"> 图片虚化组件  -注意，现在要求 父盒子必须要有宽高~，后续有时间，在代码中优化下组件</div>
                <div className="sf-content">
                  @param showId 放组件的盒子id<br />
                  @param Img	图片
                </div>
              </div>

              <div className="sf">
                <div className="sf-title">Components().PictureVirtual.run()</div>
                <div className="sf-header"> 图片虚化组件-通过class【picture-virtual】定义</div>
                <div className="sf-content">
                  父元素上设置  className="picture-virtual" data-src="imgurl" <br />
                  运行： Components().PictureVirtual.run();  即可<br /><br />

                  <div>
                    若是动态加载的DOM元素，需要在元素加载完成后再次调用 run()
                  </div>
                </div>
              </div>

              <div className="sf" style={{ "height": " 517px" }}>
                <div className="sf-title">Components().loading(id,clean)</div>
                <div className="sf-header"> loading加载组件</div>
                <div className="sf-content">
                  @param id 选填，需要加载的父元素  如果为空，则全页面覆盖的loading，不为空则为局部loading<br />
                  @param {"{boolean}"} clean  选填； false清除loading，true和 空 ，添加loading<br />
                  运行： Components().loading(参数)<br /><br />

                </div>
                <div className="sf-demo" id="loading-demo">
                  loading-demo
                </div>
                <div className="sf-demo" id="loading-demo2">
                  loading-demo2
                </div>
              </div>


              <div className="sf" style={{ "height": " 337px" }}>
                <div className="sf-title">Components().alert(config)</div>
                <div className="sf-header"> alert弹框组件</div>
                <div className="sf-content">
                  @param config 一个对象<br />
                  支持的字段有 <br />
                  <br />
                  title:"弹框标题-支持html"<br />
                  content:"弹框内容-支持html"<br />
                  color:标题文字颜色<br />
                  time:弹框过time时间后，隐藏<br />
                  <br />
                  使用方式：<br />
                  <em>{'Components().alert({title: "标题", content:"弹框内容-支持html",color:"red" });'}</em>
                </div>
                <br />
                <div className="casia-btn-normal" id="alert1">弹框1</div>
              </div>

              <div className="sf">
                <div className="sf-title"></div>
                <div className="sf-header"></div>
                <div className="sf-content">
                </div>
              </div>


            </div>

          </div>





        </div>


      </div>


    );
  }
}

Index.UIPage = page;
export default Index;
