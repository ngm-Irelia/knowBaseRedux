import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Header} from '../../build/common/common';
import store from '../../build/store/store';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

const page = {
  title: '首页',
  css: [ 
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
          <div>store123</div>
        </div>
        
      </Provider>
    
    );
  }
}

Index.UIPage = page;

export default Index;
