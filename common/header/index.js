import React from 'react';
import { connect } from 'react-redux';

import { HeaderWrapper, Logo, Nav, NavItem, NavSearch } from './style';

import { actionCreators } from './store';


//无状态组件性能更好

class Header extends React.Component {

    render() {
        return (
            <div>
                <HeaderWrapper className="aaaa">
                <Logo> </Logo>
                <Nav>
                    <NavItem className="left active">简书</NavItem>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right"><span className="iconfont">&#xe6e4;</span></NavItem>
                    {/* <NavSearch
                        className={ this.props.focused ? 'focused' : ''}
                        onFocus = { this.props.handleFocused }
                        onBlur = { this.props.handleBlur }
                    ></NavSearch> */}

                    <input
                        className={ this.props.focused ? 'focused' : ''}
                        onFocus = { this.props.handleFocused }
                        onBlur = { this.props.handleBlur }
                    ></input>
                </Nav>
            </HeaderWrapper>
            </div>
        )
    }
}

//把store中的数据，映射到props
const mapStateToProps = (state) => {
    return {
        focused:state.header.focused //因为使用combineReducers，路径发生变化，需要加上.header
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        handleFocused(){
            const action = actionCreators.setSearchFocus();
            dispatch(action);  //其实就是store.dispatch()

            console.log(this)
            //发送请求接口
            const listAction = actionCreators.getTodoList();
            dispatch(listAction);  
        },
        handleBlur(){
            const action = actionCreators.setSearchBlur();
            dispatch(action); 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);