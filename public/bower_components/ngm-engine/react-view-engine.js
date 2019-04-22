/*!
 * borrow
 */
const path = require( 'path' );
const React = require( 'react' );
const ReactDOMServer = require( 'react-dom/server' );

const createEngine = ( engineOptions ) => {

  const main = engineOptions.main ? getComponent( engineOptions.main ) : null;

  const renderFile = ( filename, options, callback ) => {
    try {
      const component = getComponent( filename );
      const props = getProps( options );
      const view = getView( filename, options );

      let element = React.createElement( component, props );
      if ( main ) {
        element = React.createElement(
            main,
            {
              component: component,
              data: JSON.stringify( props ).replace( /script/g, 'scr"+"ipt' ),
              view: view,
              context: engineOptions.context,
              env: options.settings.env
            },
            element
        );
      }

      const rendered = engineOptions.doctype + ReactDOMServer.renderToStaticMarkup( element );

      callback( null, rendered );
    } catch ( error ) {
      return callback( error );
    }
  };

  return renderFile;
};

// Transpiled ES6 may export components as { default: Component }
const getComponent = ( module ) => {
  const component = require( module );
  return component.default || component;
};

// Options settings prop filter
const getProps = ( options ) => {
  const props = {};
  Object.entries( options ).forEach( ( [ key, value ] ) => {
    if ( ![ 'settings', '_locals', 'cache' ].includes( key ) ) {
      props[ key ] = value
    }
  } );
  return props;
};

const getView = ( filename, options ) => {
  const { dir, name } = path.parse( filename );
  const view = path.posix.format( {
    dir: path.relative( options.settings.views, dir ),
    name
  } );
  return view;
};

module.exports = createEngine;