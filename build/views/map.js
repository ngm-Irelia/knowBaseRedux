/*!
 * knowbaseredux - undefined
 * @version v0.1.0
 * @link undefined
 * hi ngm.
 */
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('UIPage', ['exports', 'react', '../../build/components/knowBase'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../../build/components/knowBase'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.KnowBase);
    global.UIPage = mod.exports;
  }
})(this, function (exports, _react, _knowBase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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

  //import Header from '../../build/components/header.jsx';

  var page = {
    title: '首页',
    css: [],
    js: []
  };

  var Map = function (_Component) {
    _inherits(Map, _Component);

    function Map() {
      _classCallCheck(this, Map);

      return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
    }

    _createClass(Map, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log("in index");
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_knowBase.Header, null),
          'map page !!!!',
          _react2.default.createElement(
            'div',
            null,
            ' aaaaaaaaaaa '
          )
        );
      }
    }]);

    return Map;
  }(_react.Component);

  Map.UIPage = page;

  exports.default = Map;
});