import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Header} from '../../build/common/common';
import store from '../../build/store/store';

import { BrowserRouter, Route } from "react-router-dom";

const page = {
  title: '首页',
  css: [
    '/css/index/index.css'
  ],
  js: [ 
  ]
};

class Index extends Component {

  componentDidMount(){
    console.log("in index")
  }

  render() {
    return (
     
      <Provider store={store}>
       
        <div className="browserR">
          <Header />
          <div>store</div>
        </div>
        
      </Provider>
    
    );
  }
}

Index.UIPage = page;

export default Index;
