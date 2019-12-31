import React, { Component } from 'react';
//import Header from '../common/header/index';
import {Header} from '../../build/components/knowBase';
//import Header from '../../build/components/header.jsx';

const page = {
  title: '首页',
  css: [
     
  ],
  js: [
  ]
};

class Map extends Component {

  componentDidMount() {
  }

  render() {
    return (

      <div>
        <Header />
        map page !!!!
        
        <div> aaaaaaaaaaa </div>

      </div>

    );
  }
}

Map.UIPage = page;

export default Map;
