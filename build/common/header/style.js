import styled from 'styled-components';
import logoPic from '../../public/image/favicon.ico';

export const HeaderWrapper = styled.div`
    position:relative;
    height: 58px;
    border-bottom:1px solid red;
`;

export const Logo = styled.a.attrs({"href":'/'})`
    position:absolute;
    height: 58px;
    width: 64px;
    border-bottom:1px solid #f0f0f0;
    display:block;
    background:url(${logoPic});
`;

export const Nav = styled.div`
    height: 58px;
    width: 960px;
    margin:0 auto;
    /* background:grey; */
`;

export const NavItem = styled.div`
    padding: 0 15px;
    color: #333;
    line-height: 54px;
    &.left {
        float:left;
    }
    &.right {
        float:right;
    }
    &.active { 
        color: red;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    margin-top:10px;
    padding: 0px 25px;
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    border:1px solid #666;
    transition: width 500ms, border 500ms;
    &::placeholder {
        color:#999;
    }
    &.focused {
        width:260px;
        border:1px solid blue;
    }
`;