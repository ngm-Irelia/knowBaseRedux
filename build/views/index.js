/*!
 * knowbaseredux - undefined
 * @version v0.1.0
 * @link undefined
 * hi ngm.
 */
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('UIPage', ['exports', 'react', 'react-redux', '../common/header/index', '../store', 'react-router-dom', './home', './detail'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-redux'), require('../common/header/index'), require('../store'), require('react-router-dom'), require('./home'), require('./detail'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.reactRedux, global.index, global.store, global.reactRouterDom, global.home, global.detail);
    global.UIPage = mod.exports;
  }
})(this, function (exports, _react, _reactRedux, _index, _store, _reactRouterDom, _home, _detail) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _index2 = _interopRequireDefault(_index);

  var _store2 = _interopRequireDefault(_store);

  var _home2 = _interopRequireDefault(_home);

  var _detail2 = _interopRequireDefault(_detail);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var page = {
    title: '首页',
    css: ['/css/index/index.css'],
    js: []
  };

  var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index() {
      _classCallCheck(this, Index);

      return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    _createClass(Index, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log("in index");
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _reactRedux.Provider,
          { store: _store2.default },
          _react2.default.createElement(_index2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'browserR' },
            _react2.default.createElement(
              'div',
              null,
              'store'
            ),
            _react2.default.createElement(
              _reactRouterDom.BrowserRouter,
              null,
              _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _home2.default }),
              ' ',
              _react2.default.createElement(_reactRouterDom.Route, { path: '/detail', exact: true, component: _detail2.default })
            )
          )
        );
      }
    }]);

    return Index;
  }(_react.Component);

  Index.UIPage = page;

  exports.default = Index;
});