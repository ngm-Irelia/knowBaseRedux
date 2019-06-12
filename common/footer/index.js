import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from './store';

//无状态组件性能更好

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="layui-container">
                <p className="footer-web">
                    <a href="https://github.com/ngm-Irelia" target="_black">github</a>
                    <a href="http://47.94.8.210/" target="_black">博客</a>
                    <a href="http://47.94.8.210:9527/" target="_black">黑色风格小项目</a>
                    <span><i className="layui-icon layui-icon-home"></i>&nbsp;15275151030@163.com</span>
                </p>
                
                </div>
            </div>
        )
    }
}

//把store中的数据，映射到props
const mapStateToPropsF = (state) => {
    return {
        focused: state.header.focused //因为使用combineReducers，路径发生变化，需要加上.header
    }
}

const mapDispatchToPropsF = (dispatch) => {

    return {
        handleFocused() {
             
            console.log(this)
            //发送请求接口
            
        }
    }
}

export default connect(mapStateToPropsF, mapDispatchToPropsF)(Footer);