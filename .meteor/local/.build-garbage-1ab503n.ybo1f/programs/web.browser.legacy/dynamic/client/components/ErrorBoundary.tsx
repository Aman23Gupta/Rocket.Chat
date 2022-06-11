function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/ErrorBoundary.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _inheritsLoose;

module.link("@babel/runtime/helpers/inheritsLoose", {
  default: function (v) {
    _inheritsLoose = v;
  }
}, 0);
module.export({
  ErrorBoundary: function () {
    return ErrorBoundary;
  }
});
var Component;
module.link("react", {
  Component: function (v) {
    Component = v;
  }
}, 0);

var ErrorBoundary = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ErrorBoundary, _Component);

  function ErrorBoundary() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      hasError: false
    };
    return _this;
  }

  ErrorBoundary.getDerivedStateFromError = function () {
    function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }

    return getDerivedStateFromError;
  }();

  var _proto = ErrorBoundary.prototype;

  _proto.render = function () {
    function render() {
      if (this.state.hasError) {
        return null;
      }

      return this.props.children;
    }

    return render;
  }();

  return ErrorBoundary;
}(Component);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/294d4ae30f031c91173a1bd9ad829df661fd2f45.map
