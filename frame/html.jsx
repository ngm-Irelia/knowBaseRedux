import React, { Component } from 'react';
import Layout from './layouts/default';
import resources from './config/resources.json';
import { Provider } from 'react-redux';
import store from '../build/store/store';
const PAGE_ROOT = 'ngm-base-page-div';

const initScriptTmpl = ( ctx, props ) => `
  if ( window.UIPage ) {
    console.log("props ++++++++++++++++aaaaa++++++++++++++   ");
    console.log(${ props });
    console.log(${ ctx });
    UIPage.context = ${ ctx };
    var container = document.getElementById( "${ PAGE_ROOT }" );
    var Page = UIPage.default || UIPage;
    console.log(Page);
    console.log(UIPage.default);
    var ngmn = container;
    var ngmg = ${ props };
    var ngmcontext = ${ ctx };
    var Magicube = ${ props };
    ReactDOM.render( React.createElement( Page, ${ props } ), container );
  }
`.trim();

export default ( props ) => {
    const res =  resources[ props.env ] || {};
    const context = props.context;
    const contextPath = context.contextPath;
    const page = props.component.UIPage || {};
    
    console.log("props -------------------------   ");
    console.log(props);
    const initScript = initScriptTmpl( JSON.stringify( context ), props.data );

    let data = props.data;
    if ( data && typeof data !== 'object') data = JSON.parse(data);
    const cssTheme = data.theme ? ( '/' + data.theme ) : '';

    return (
        <html lang="zh-cmn-Hans">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
            <title>{ page.title || 'UI Page title' }</title>
            {/* <link rel="shortcut icon" href={ `${ contextPath }/image/logo.ico` } /> */}

            <link rel="stylesheet" href={ contextPath + 'js/public/layui/css/layui.css' } />
            
            { res.css && res.css.map( ( css, index ) => <link key={ index } rel="stylesheet" href={ contextPath + css } /> ) }
            { page.css && page.css.map( ( css, index ) => <link key={ index } rel="stylesheet" href={ contextPath + '/css' + cssTheme + css.replace(/\/css/, '') } /> ) }
        </head>
        <body>
        <Layout id={ PAGE_ROOT } contextPath={ contextPath }>
          <Provider store={store}>
            { props.children }
          </Provider> 
        </Layout>

        <script type="text/javascript" src={ `${ contextPath }/js/public/jquery.js` }></script>
        <script type="text/javascript" src={ `${ contextPath }/js/public/layui/layui.js` }></script>

        { res.js && res.js.map( ( js, index ) => <script key={ index } src={ contextPath + js } /> ) } 
        { page.js && page.js.map( ( js, index ) => <script key={ index } src={ contextPath + js } /> ) }
        { props.view ? <script src={ `${ contextPath }/views/${ props.view }.${ props.env === 'development' ? 'js' : 'min.js' }` } /> : null }
        <script dangerouslySetInnerHTML={ { __html: initScript } } />

        {/* <script type="module" src={ `${ contextPath }/js/modules/use.js` } /> */}
        </body>
        </html>
    );

};
