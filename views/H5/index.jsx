import React, { Component } from 'react';
//import { Provider } from 'react-redux';
import { Header,Footer } from '../../../build/common/common';
import store from '../../../build/store/store';


console.log("store ======================== Provider *******************");
console.log(store);

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

        <div>
          <Header store={store} />

          H5

        </div>


    );
  }
}

H5.UIPage = page;

export default H5;