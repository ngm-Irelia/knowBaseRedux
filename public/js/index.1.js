/* import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../../common/header/store';

//无状态组件性能更好

class Header extends Component {

    render() {
              
        return (
            <div className="header">
              <div>
                <div className="header_logo" name={ this.props.focused ? "ttt" : "bbb"}></div>
                <div className="header_ryxq" onClick={ this.props.handleGoPage }>眼中有日月星辰</div>
                <input onFocus={ this.props.handleInput } />
                <input onFocus={ this.props.handleFocused } /> 
                
              </div>
              
              <div className="header_list"> <a href="/knowledge" >知识</a></div>
              <div className="header_list"> <a href="/H5" >H5</a></div>
              <div className="header_list"> <a href="/CSS3" >CSS3</a></div>
              <div className="header_list"> <a href="/visualization" >可视化</a></div>
              <div className="header_list"> <a href="/index" >首页1</a></div>
            </div>
        )
    }
}

//把store中的数据，映射到props
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused //因为使用combineReducers，路径发生变化，需要加上.header
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        handleGoPage(){
            console.log(" in handleGoPage");
        },
        handleInput(){
            console.log(" in handleInput");
        },
        handleFocused() {
            const action = actionCreators.setSearchFocus();
            dispatch(action);  //其实就是store.dispatch()

            console.log(this)
            //发送请求接口
            const listAction = actionCreators.getTodoList();
            dispatch(listAction);
        },
        handleBlur() {
            const action = actionCreators.setSearchBlur();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); */