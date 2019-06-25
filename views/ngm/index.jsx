import React, { Component } from 'react';
import { Header } from '../../../build/components/knowBase';

const page = {
  title: '首页',
  css: [
    '/css/ngm/ngm.css',
    '/js/public/pageswitch/plugins.min.css',
    '/js/public/pageswitch/style.light-blue-500.min.css',
    '/js/public/pageswitch/sys-navigation.css'
  ],
  js: [
    '/js/public/pageswitch/js/plugins.min.js',
    '/js/public/pageswitch/js/page.config.js',
    '/js/public/pageswitch/js/pageswitch.js'
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

        {/* container 暂时是必要的呢 */}
        <div id="container">

          {/* 第一页面 */}
          <div className="sys-navi-base section active" id="section0">
            <h1 className="sys-navi-h1">方法</h1>
           
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
                  <div className="casia-btn-normal"  title="casia-btn-normal"  >确定</div>
                  <div className="show-btn-title">casia-btn-normal</div>
                </div>
                <div>
                  <div className="casia-btn-warning" title="casia-btn-warning" >警告</div>
                  <div className="show-btn-title">casia-btn-warning</div>
                </div>
                <div>
                  <div className="casia-btn-danger"  title="casia-btn-danger"  >危险</div>
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
                  <div className="casia-angle-btn-normal"  title="casia-angle-btn-normal"  >确定</div>
                  <div className="show-btn-title">casia-angle-btn-normal</div>
                </div>
                <div>
                  <div className="casia-angle-btn-warning" title="casia-angle-btn-warning" >警告</div>
                  <div className="show-btn-title">casia-angle-btn-warning</div>
                </div>
                <div>
                  <div className="casia-angle-btn-danger"  title="casia-angle-btn-danger"  >危险</div>
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
                  <div className="casia-circle-btn-normal"  title="casia-circle-btn-normal"  >确</div>
                  <div className="show-btn-title">casia-circle-btn-normal</div>
                </div>
                <div>
                  <div className="casia-circle-btn-warning" title="casia-circle-btn-warning" >警</div>
                  <div className="show-btn-title">casia-circle-btn-warning</div>
                </div>
                <div>
                  <div className="casia-circle-btn-danger"  title="casia-circle-btn-danger"  >危</div>
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
                  <input type="text" className="casia-input" value="casia-input" />
                </div>

                <div>
                  {/* <textarea className="casia-area"> 多行文本框 </textarea> */}
                </div>
                
              </div>
            </div>


            <div className="header-line">
              Components 通用的单选框 casia-radio，多选框： casia-checkbox   
            </div>
            <div className="show-func">
              <div className="show-btn">
                <div>
                  <input type="checkbox" id="read" className="casia-checkbox" value="read"/> <label htmlFor="read" style={{"userSelect": "none"}}>读书</label>
                  <input type="checkbox" id="study" className="casia-checkbox" value="study"/> <label htmlFor="study" style={{"userSelect": "none"}}>学习</label>
                </div>

                <div>
                  <input type="radio" id="readradio" className="casia-radio" name="s" value="s1"/> <label htmlFor="readradio" style={{"userSelect": "none"}}>读书</label>
                  <input type="radio" id="studyradio" className="casia-radio" name="s" value="s2"/> <label htmlFor="studyradio" style={{"userSelect": "none"}}>学习</label>
                </div>
                
              </div>

              <div className="show-btn">
                <div>
                  <div className="casia-btn-primary" title="casia-btn-primary" >
                    <input type="checkbox" id="ds" className="casia-checkbox" value="study"/> 
                    <label htmlFor="ds" style={{"userSelect": "none"}}>多选</label>
                  </div>
                  
                </div>

                <div>
                  <div className="casia-btn-primary" title="casia-btn-primary" >
                      <input type="radio" id="dan" className="casia-radio" name="dan" value="s1"/> 
                      <label htmlFor="dan" style={{"userSelect": "none"}}>单选</label>
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

          {/* 第二页面 */}
          <div className="sys-navi-other section" id="section1">
            <h1 className="sys-navi-h1">样式</h1>
            
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
                  <input type="text" className="casia-input" value="casia-input" />
                </div>

                <div>
                  {/* <textarea className="casia-area"> 多行文本框 </textarea> */}
                </div>

              </div>
            </div>


            <div className="header-line">
              Components 通用的单选框 casia-radio，多选框： casia-checkbox
            </div>
            <div className="show-func">
              <div className="show-btn">
                <div>
                  <input type="checkbox" id="read" className="casia-checkbox" value="read" /> <label htmlFor="read" style={{"userSelect": "none"}}>读书</label>
                  <input type="checkbox" id="study" className="casia-checkbox" value="study" /> <label htmlFor="study" style={{"userSelect": "none"}}>学习</label>
                </div>

                <div>
                  <input type="radio" id="readradio" className="casia-radio" name="s" value="s1" /> <label htmlFor="readradio" style={{"userSelect": "none"}}>读书</label>
                  <input type="radio" id="studyradio" className="casia-radio" name="s" value="s2" /> <label htmlFor="studyradio" style={{"userSelect": "none"}}>学习</label>
                </div>

              </div>

              <div className="show-btn">
                <div>
                  <div className="casia-btn-primary" title="casia-btn-primary" >
                    <input type="checkbox" id="ds" className="casia-checkbox" value="study" />
                    <label htmlFor="ds" style={{"userSelect": "none"}}>多选</label>
                  </div>

                </div>

                <div>
                  <div className="casia-btn-primary" title="casia-btn-primary" >
                    <input type="radio" id="dan" className="casia-radio" name="dan" value="s1" />
                    <label htmlFor="dan" style={{"userSelect": "none"}}>单选</label>
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
        
        </div>

        <a href="javascript:void(0);" className="btn-page btn-prve">上一页</a>
        <a href="javascript:void(0);" className="btn-page btn-next">下一页</a>

       

      </div>


    );
  }
}

Index.UIPage = page;
export default Index;
