import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Header from './common/header/index';
import store from './store';

import { BrowserRouter, Route } from "react-router-dom";

import Home from './views/home';
import Detail from './views/detail';

class App extends Component {

  componentDidMount(){
    console.log(Home)
  }

  render() {
    return (
     
      <Provider  store={store}>
        <Header/>
        <div className="browserR">
          <div>store</div>
          <BrowserRouter> 
              <Route path="/" exact component={Home} /> {/* 使用<Route /> 而不是 <Route></Route>*/}
              <Route path="/detail" exact component={Detail} />
          </BrowserRouter>
        </div>
        
      </Provider>
    
    );
  }
}

export default App;
