/*!
 * borrow
 */
const viewEngine = require( './react-view-engine' );
const contextSupports = require( './context-supports' );
const casAuthentication = require( './cas' );

let defaultOptions = {
  doctype: '<!DOCTYPE html>',
  main: null,
  context: {
    contextPath: ''
  }
};

const targetObject = {
  options: ( options = {} ) => {
    defaultOptions = Object.assign( {}, defaultOptions, options );
    return targetObject;
  },
  engine: ( options = defaultOptions ) => viewEngine( options ),
  context: ( context = defaultOptions.context ) => contextSupports( context ),
  cas: casAuthentication
};

module.exports = Object.assign( targetObject.options, targetObject );