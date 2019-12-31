import React, { Component } from 'react';
import axios from 'axios';
import { Header } from '../../../build/common/common';
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
  }

  /* uploadFile = (data) => {
    console.log(data);
    axios.post('/server/file/add', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
 */
  render() {
    return (

        <div>
          <Header store={store} />

          <div className="h5-base">

            <input className="uploadFile" type="file" value="上传文件"/>
            <div id="J-upload-file" >上传文件</div>
          </div>

        </div>


    );
  }
}

H5.UIPage = page;

export default H5;