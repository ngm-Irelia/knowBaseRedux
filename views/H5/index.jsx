import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Header,Footer } from '../../../build/common/common';
import store from '../../../build/store/store';

const page = {
  title: '首页',
  css: [
    '/css/index/index.css'
  ],
  js: [
  ]
};

class H5 extends Component {

  componentDidMount() {
    console.log("in H5")
  }

  render() {
    return (

      <Provider store={store}>

        <div>
          <Header />

          H5
          
          <Footer />

        </div>

      </Provider>

    );
  }
}

H5.UIPage = page;

export default H5;
