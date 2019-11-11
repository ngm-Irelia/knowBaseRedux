import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Header,Footer } from '../../../build/common/common';
import store from '../../../build/store/store';

let ReactDOMServer = require('react-dom/server');

const page = {
  title: '首页',
  css: [
    '/css/index/index.css'
  ],
  js: [
  ]
};

class Appa extends Component {

  componentDidMount() {
    console.log("in H5")
    console.log(store)
  }

  render() {
    return (
      <Provider store={store}>
        哈哈哈哈
      </Provider>
    )
  }
}

class H5 extends Component {

  componentDidMount() {
  }

  render() {
    return ReactDOMServer.renderToString(<Appa />);
  }
}


H5.UIPage = page;

export default H5;
