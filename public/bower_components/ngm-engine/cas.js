const url           = require( 'url' );
const request       = require( 'request' );
const xml2json      = require( 'xmlparser' );

/**
 * The CAS authentication types.
 * @enum {number}
 */
const AUTH_TYPE = {
  BOUNCE          : 0,
  BOUNCE_REDIRECT : 1,
  BLOCK           : 2
};

/**
 * @typedef {Object} CAS_options
 * @property {string}  cas_url
 * @property {string}  service_url
 * @property {('1.0'|'2.0'|'3.0'|'saml1.1')} [cas_version='3.0']
 * @property {boolean} [renew=false]
 * @property {boolean} [is_dev_mode=false]
 * @property {string}  [dev_mode_user='']
 * @property {Object}  [dev_mode_info={}]
 * @property {string}  [session_name='cas_user']
 * @property {string}  [session_info=false]
 * @property {boolean} [destroy_session=false]
 */

/**
 * @param {CAS_options} options
 * @constructor
 */
function CASAuthentication(options) {

  if (!options || typeof options !== 'object') {
    throw new Error( 'CAS Authentication was not given a valid configuration object.');
  }
  if (options.cas_url === undefined) {
    throw new Error('CAS Authentication requires a cas_url parameter.');
  }
  if (options.service_url === undefined) {
    throw new Error( 'CAS Authentication requires a service_url parameter.');
  }

  this.cas_version = options.cas_version !== undefined ? options.cas_version : '3.0';

  this.cas_url         = options.cas_url.replace( /(\/+)$/, '');
  var parsed_cas_url   = url.parse(this.cas_url);
  // this.request_client  = parsed_cas_url.protocol === 'http:' ? http : https;
  // this.cas_host        = parsed_cas_url.hostname;
  // this.cas_port        = parsed_cas_url.protocol === 'http:' ? 80 : 443;
  // this.cas_path        = parsed_cas_url.pathname;

  this.service_url     = options.service_url.replace( /(\/+)$/, '');

  this.renew           = options.renew !== undefined ? !!options.renew : false;

  this.is_dev_mode     = options.is_dev_mode !== undefined ? !!options.is_dev_mode : false;
  this.dev_mode_user   = options.dev_mode_user !== undefined ? options.dev_mode_user : '';
  this.dev_mode_info   = options.dev_mode_info !== undefined ? options.dev_mode_info : {};

  this.session_name    = options.session_name !== undefined ? options.session_name : 'cas_user';
  this.session_info    = [ '2.0', '3.0', 'saml1.1' ].indexOf(this.cas_version) >= 0 && options.session_info !== undefined ? options.session_info : false;
  this.destroy_session = options.destroy_session !== undefined ? !!options.destroy_session : false;

  // Bind the prototype routing methods to this instance of CASAuthentication.
  this.bounce          = this.bounce.bind(this);
  this.bounce_redirect = this.bounce_redirect.bind(this);
  this.block           = this.block.bind(this);
  this.logout          = this.logout.bind(this);
}

/**
 * Bounces a request with CAS authentication. If the user's session is not
 * already validated with CAS, their request will be redirected to the CAS
 * login page.
 */
CASAuthentication.prototype.bounce = function(req, res, next) {

  // Handle the request with the bounce authorization type.
  this._handle(req, res, next, AUTH_TYPE.BOUNCE);
};

/**
 * Bounces a request with CAS authentication. If the user's session is not
 * already validated with CAS, their request will be redirected to the CAS
 * login page.
 */
CASAuthentication.prototype.bounce_redirect = function(req, res, next) {

  // Handle the request with the bounce authorization type.
  this._handle(req, res, next, AUTH_TYPE.BOUNCE_REDIRECT);
};

/**
 * Blocks a request with CAS authentication. If the user's session is not
 * already validated with CAS, they will receive a 401 response.
 */
CASAuthentication.prototype.block = function(req, res, next) {

  // Handle the request with the block authorization type.
  this._handle(req, res, next, AUTH_TYPE.BLOCK);
};

/**
 * Handle a request with CAS authentication.
 */
CASAuthentication.prototype._handle = function(req, res, next, authType) {
  // If the session has been validated with CAS, no action is required.
  if (req.session[ this.session_name ]) {
    // If this is a bounce redirect, redirect the authenticated user.
    if (authType === AUTH_TYPE.BOUNCE_REDIRECT) {
      res.redirect(req.session.cas_return_to);
    }
    // Otherwise, allow them through to their request.
    else {
      next();
    }
  }
  // If dev mode is active, set the CAS user to the specified dev user.
  else if (this.is_dev_mode) {
    req.session[ this.session_name ] = this.dev_mode_user;
    req.session[ this.session_info ] = this.dev_mode_info;
    next();
  }
  // If the authentication type is BLOCK, simply send a 401 response.
  else if (authType === AUTH_TYPE.BLOCK) {
    res.sendStatus(401);
  }
  // If there is a CAS ticket in the query string, validate it with the CAS server.
  else if (req.query && req.query.ticket) {
    this._handleTicket(req, res, next);
  }
  // Otherwise, redirect the user to the CAS login.
  else {
    this._login(req, res, next);
  }
};

/**
 * Redirects the client to the CAS login.
 */
CASAuthentication.prototype._login = function(req, res, next) {

  // Redirect to the CAS login.
  res.redirect( `${ this.cas_url }/login?service=${ this.service_url }${ url.parse( req.url ).pathname }` );
};

/**
 * Logout the currently logged in CAS user.
 */
CASAuthentication.prototype.logout = function(req, res, next) {

  // Destroy the entire session if the option is set.
  if (this.destroy_session) {
    req.session.destroy(function(err) {
      if (err) {
        console.log(err);
      }
    });
  }
  // Otherwise, just destroy the CAS session variables.
  else {
    delete req.session[ this.session_name ];
    if (this.session_info) {
      delete req.session[ this.session_info ];
    }
  }

  // Redirect the client to the CAS logout.
  res.redirect(this.cas_url + '/logout');
};

/**
 * Handles the ticket generated by the CAS login requester and validates it with the CAS login acceptor.
 */
CASAuthentication.prototype._handleTicket = function(req, res, next) {

  const path = url.parse( req.url ).pathname;
  const requestUrl = `${ this.cas_url }/serviceValidate?ticket=${ req.query.ticket }&service=${ this.service_url }${ path }`;

  request.get( requestUrl , function ( err, response, body ) {

    if ( err ) {
      console.log( 'CAS Validate error! detail: ' + err );
      return;
    }

    const str = body.replace(/:?cas:?/g, '');
    let json = {};
    let status = "success";

    try {
      json = xml2json.parser( str );
    } catch ( e ) {
      status = "fail";
    }

    if( json['serviceResponse'] && json['serviceResponse']['authenticationSuccess'] ){
      req.session[this.session_name] = json['serviceResponse']['authenticationSuccess']['user'];
      next();
    } else {
      console.log('CAS Validate error! detail: validate fail!');
    }
  } )
};

module.exports = CASAuthentication;