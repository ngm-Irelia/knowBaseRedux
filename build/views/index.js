/*!
 * knowbaseredux - undefined
 * @version v0.1.0
 * @link undefined
 * hi ngm.
 */
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('UIPage', ['exports', 'react', 'react-redux', '../../build/common/common', '../../build/store/store'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-redux'), require('../../build/common/common'), require('../../build/store/store'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.reactRedux, global.common, global.store);
    global.UIPage = mod.exports;
  }
})(this, function (exports, _react, _reactRedux, _common, _store) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _store2 = _interopRequireDefault(_store);

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
    css: ['/css/index.css'],
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
            null,
            _react2.default.createElement(_common.Header, null),
            _react2.default.createElement(
              'div',
              { 'class': 'main-product' },
              _react2.default.createElement(
                'div',
                { 'class': 'layui-container' },
                _react2.default.createElement(
                  'p',
                  { 'class': 'title' },
                  'NGM\u7684\u7F51\u7AD9',
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u77E5\u8BC6\u4ECB\u7ECD'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { 'class': 'layui-row layui-col-space25' },
                  _react2.default.createElement(
                    'div',
                    { 'class': 'layui-col-sm6 layui-col-md3' },
                    _react2.default.createElement(
                      'div',
                      { 'class': 'content' },
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { alt: '1', src: '/image/img/Big_icon1.png' })
                      ),
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                          'p',
                          { 'class': 'label' },
                          '\u53EF\u89C6\u5316\u5C55\u793A'
                        ),
                        _react2.default.createElement(
                          'p',
                          null,
                          '\u767E\u5EA6\u5730\u56FE\uFF0Carcgis\uFF0CD3.js\uFF0Cecharts\uFF0C\u7B49\u6280\u672F\u7684\u53EF\u89C6\u5316\u5C55\u793A'
                        )
                      ),
                      _react2.default.createElement(
                        'a',
                        { href: '1' },
                        '\u67E5\u770B >'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { 'class': 'layui-col-sm6 layui-col-md3 ' },
                    _react2.default.createElement(
                      'div',
                      { 'class': 'content' },
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { alt: '1', src: '/image/img/Big_icon2.png' })
                      ),
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                          'p',
                          { 'class': 'label' },
                          'H5\u5C55\u793A'
                        ),
                        _react2.default.createElement(
                          'p',
                          null,
                          'H5\u4E00\u4E9B\u6548\u679C\u7684\u5C55\u793A'
                        )
                      ),
                      _react2.default.createElement(
                        'a',
                        { href: '1' },
                        '\u67E5\u770B >'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { 'class': 'layui-col-sm6 layui-col-md3 ' },
                    _react2.default.createElement(
                      'div',
                      { 'class': 'content' },
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { alt: '1', src: '/image/img/Big_icon3.png' })
                      ),
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                          'p',
                          { 'class': 'label' },
                          'CSS3\u6548\u679C'
                        ),
                        _react2.default.createElement(
                          'p',
                          null,
                          '\u7EAFCSS3\u5B9E\u73B0\u7684\u4E00\u4E9B\u6548\u679C'
                        )
                      ),
                      _react2.default.createElement(
                        'a',
                        { href: 'www.baidu.com' },
                        '\u67E5\u770B >'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { 'class': 'layui-col-sm6 layui-col-md3 ' },
                    _react2.default.createElement(
                      'div',
                      { 'class': 'content' },
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { alt: '1', src: '/image/img/Big_icon4.png' })
                      ),
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                          'p',
                          { 'class': 'label' },
                          '\u77E5\u8BC6\u6742\u8BB0'
                        ),
                        _react2.default.createElement(
                          'p',
                          null,
                          '\u4F7F\u7528\u4E2D\u6280\u672F\u7684\u8BB0\u5F55~~'
                        )
                      ),
                      _react2.default.createElement(
                        'a',
                        { href: '1' },
                        '\u67E5\u770B >'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(_common.Footer, null)
          )
        );
      }
    }]);

    return Index;
  }(_react.Component);

  Index.UIPage = page;

  exports.default = Index;
});