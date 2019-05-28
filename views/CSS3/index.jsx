import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Header,Footer } from '../../../build/common/common';
import store from '../../../build/store/store';

const page = {
  title: '首页',
  css: [
    '/css/index.css'
  ],
  js: [
  ]
};

class CSS3 extends Component {

  componentDidMount() {
    console.log("in index")
  }

  render() {
    return (

      <Provider store={store}>

        <div>
          <Header />

          CSS3
          
          <Footer />

        </div>

      </Provider>

    );
  }
}

CSS3.UIPage = page;

export default CSS3;
