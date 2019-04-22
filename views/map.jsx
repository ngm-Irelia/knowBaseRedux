import React, { Component } from 'react';
//import Header from '../common/header/index';
import {Header} from '../../build/components/knowBase';


const page = {
  title: '首页',
  css: [
     
  ],
  js: [
  ]
};

class Map extends Component {

  componentDidMount() {
    console.log("in index")
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
