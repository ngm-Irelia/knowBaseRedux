/*!
 * knowbaseredux - undefined
 * @version v0.1.0
 * @link undefined
 * hi ngm.
 */
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('UIPage', ['exports', 'react', 'react-redux', '../../build/common/common', '../../build/store/store', 'react-dom', 'react-router-dom'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-redux'), require('../../build/common/common'), require('../../build/store/store'), require('react-dom'), require('react-router-dom'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.reactRedux, global.common, global.store, global.ReactDOM, global.reactRouterDom);
    global.UIPage = mod.exports;
  }
})(this, function (exports, _react, _reactRedux, _common, _store, _reactDom, _reactRouterDom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _store2 = _interopRequireDefault(_store);

  var _reactDom2 = _interopRequireDefault(_reactDom);

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
    css: [],
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
          _react2.default.createElement(
            'div',
            { className: 'browserR' },
            _react2.default.createElement(_common.Header, null),
            _react2.default.createElement(
              'div',
              null,
              'store123'
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