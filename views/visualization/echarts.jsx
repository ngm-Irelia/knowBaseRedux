import React from 'react';

//import {Header } from '../../../build/components/knowBase';
import { Header } from '../../../build/common/common';


const page = {
    title: 'echarts',
    css: [
      "/css/visualization/echarts.css"
    ],
    js: [ 
      "/js/getDataRequest.js",
      "/js/public/echarts.min.js",
      "/js/echarts/echartsMap.js",
      "/js/echarts/echarts.js"
    ]
};

class Echarts extends React.Component {

  componentWillMount (){
    console.log("Echarts componentWillMount ------")
  }
  componentDidMount(){
      console.log("Echarts componentDidMount --------")
  }

  componentWillReceiveProps(){
    console.log("Echarts componentWillReceiveProps --------")
  }



    render() {
      return (
        
          <div>
            <Header />
            
            <div className="org-base">
        
            <div id="org-map" className="org-content">
              
            </div>
              {/*  右侧信息弹框  */}
              <div className="org-risk-overview-model">
                <div className="org-risk-overview-model-backImg"> </div>
                <div className="org-risk-overview-model-centerTopImg"> </div>
                <div className="org-risk-overview-model-centerBottomImg"> </div>
                <div className="org-risk-overview-model-base">
                  <header className="model-header">未整改明细</header>
                  <div className="model-close">x</div>
                  <table className="model-table">
                    <thead>
                      <tr>
                        <th style={{ 'width': '40px' }}>序号</th>
                        <th style={{ 'width': '80px' }}>支行名称</th>
                        <th style={{ 'width': '80px' }}>风险系数</th>
                      </tr>
                    </thead> 
                    <tbody> 
                      <tr>
                        <td style={{ 'width': '40px' }}>1</td>
                        <td style={{ 'width': '80px' }}>南京分行</td>
                        <td style={{ 'width': '80px' }}>118</td>
                      </tr>
                      <tr>
                        <td style={{ 'width': '40px' }}>1</td>
                        <td style={{ 'width': '80px' }}>南京分行</td>
                        <td style={{ 'width': '80px' }}>118</td>
                      </tr>
                      <tr>
                        <td style={{ 'width': '40px' }}>1</td>
                        <td style={{ 'width': '80px' }}>南京分行</td>
                        <td style={{ 'width': '80px' }}>118</td>
                      </tr>
                      <tr>
                        <td style={{ 'width': '40px' }}>1</td>
                        <td style={{ 'width': '80px' }}>南京分行</td>
                        <td style={{ 'width': '80px' }}>118</td>
                      </tr>
                      <tr>
                        <td style={{ 'width': '40px' }}>1</td>
                        <td style={{ 'width': '80px' }}>南京分行</td>
                        <td style={{ 'width': '80px' }}>118</td>
                      </tr>
                      <tr>
                        <td style={{ 'width': '40px' }}>1</td>
                        <td style={{ 'width': '80px' }}>南京分行</td>
                        <td style={{ 'width': '80px' }}>118</td>
                      </tr>
                    </tbody>    
                  </table>
                </div>	
              </div>
              <aside className="org-aside">
                <div className="org-risk-overview">
                  <div className="org-risk-overview-baseMsg"> 
                  </div>
                  
                  <div id="org-risk-overview-chart" className="org-risk-overview-chart"> 
                  </div> 
                </div>
                <div className="org-problem-statistics">
                  <header>分行问题统计</header>
                  <div>
                    <div id="org-problem-num" className="org-problem-number-btn org-problem-number-btn-checked">模型发现问题个数</div>
                    <div id="org-runp-num" className="org-problem-runp-btn">模型跑批个数</div>
                  </div>
                  <div className="org-problem-statistics-list">
                    <table className="org-problem-statistics-table">
                      <thead>
                        <tr>
                          <th className="org-table-10">序号</th>
                          <th className="org-table-20">机构</th>
                          <th className="org-table-50"> </th>
                          <th className="org-table-10"> </th>
                          <th className="org-table-10">排名</th>
                        </tr>
                      </thead>
                      
                      <tbody> 
                      </tbody>
                      
                    </table>
                  </div>
                </div>
              </aside>
            </div>
          </div>
      

        
      );
    }
}

Echarts.UIPage = page;
export default Echarts;
