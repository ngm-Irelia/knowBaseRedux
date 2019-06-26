import React, { Component } from 'react';
import Layout from './layouts/default';
import resources from './config/resources.json';

const PAGE_ROOT = 'ngm-base-page-div';

const initScriptTmpl = ( ctx, props ) => `
  if ( window.UIPage ) {
    UIPage.context = ${ ctx };
    var container = document.getElementById( "${ PAGE_ROOT }" );
    var Page = UIPage.default || UIPage;
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
    const gistype = context.gis.type;
    const gisjs = context.gis.js;

    console.log("props ================= ");
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

            <link rel="stylesheet" href={ contextPath + '/js/public/layui/css/layui.css' } />
            <link rel="stylesheet" href={ contextPath + '/css' + cssTheme + '/public/global.css' } />
            <link rel="stylesheet" href={ contextPath + '/js/public/comp/Components.css' } />

            
            
            { res.css && res.css.map( ( css, index ) => <link key={ index } rel="stylesheet" href={ contextPath + css } /> ) }
            { page.css && page.css.map( ( css, index ) => <link key={ index } rel="stylesheet" href={ contextPath + css.replace(/\/css/, '/css' + cssTheme) } /> ) }
        </head>
        <body>
         
            <Layout id={ PAGE_ROOT } contextPath={ contextPath }>
              { props.children }
            </Layout>
         
        <script type="text/javascript" src={ `${ contextPath }/js/public/jquery.js` }></script>
        <script type="text/javascript" src={ `${ contextPath }/js/public/comp/Components.js` }></script>
        <script type="text/javascript" src={ `${ contextPath }/js/public/layui/layui.js` }></script>

        { res.js && res.js.map( ( js, index ) => <script key={ index } src={ contextPath + js } /> ) } 
        { page.js && page.js.map( ( js, index ) => <script key={ index } src={ contextPath + js } /> ) }
        { props.view ? <script src={ `${ contextPath }/views/${ props.view }.${ props.env === 'development' ? 'js' : 'min.js' }` } /> : null }
        <script dangerouslySetInnerHTML={ { __html: initScript } } />
        
        {gistype=='bmap'?<script src= "http://api.map.baidu.com/api?v=2.0&ak=oGipGGHoW0wB5s24tUaobMN4ku23wKCu" />:null}
        {gistype=='supermap'?<script src= {gisjs}/>:null}
        </body>
        </html>
    );

};
