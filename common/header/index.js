import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from './store';

//无状态组件性能更好

class Header extends React.Component {

    render() {
        return (
            <div class="nav index">
                <div class="layui-container">

                    <div class="nav-logo">
                        <a href="index.html">
                            <img src="image/favicon.ico" alt="NGM" />
                        </a>
                    </div>
                    <div class="nav-list">
                        <button>
                            <span></span><span></span><span></span>
                        </button>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item"><a href="product.html">可视化</a></li>
                            <li class="layui-nav-item"><a href="news.html">H5</a></li>
                            <li class="layui-nav-item"><a href="case.html">CSS3</a></li>
                            <li class="layui-nav-item"><a href="about.html">知识</a></li>
                        </ul>
                    </div>
                </div>
                {/* <input
                className={ this.props.focused ? 'focused' : 'ttt'}
                onFocus = { this.props.handleFocused }
                onBlur = { this.props.handleBlur }
            ></input> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);