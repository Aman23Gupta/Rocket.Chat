function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/PortalWrapper.ts                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _inheritsLoose;

module.link("@babel/runtime/helpers/inheritsLoose", {
  default: function (v) {
    _inheritsLoose = v;
  }
}, 0);
var PureComponent;
module.link("react", {
  PureComponent: function (v) {
    PureComponent = v;
  }
}, 0);

var PortalWrapper = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(PortalWrapper, _PureComponent);

  function PortalWrapper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.state = {
      errored: false
    };
    return _this;
  }

  PortalWrapper.getDerivedStateFromError = function () {
    function getDerivedStateFromError() {
      return {
        errored: true
      };
    }

    return getDerivedStateFromError;
  }() // eslint-disable-next-line @typescript-eslint/no-empty-function
  ;

  var _proto = PortalWrapper.prototype;

  _proto.componentDidCatch = function () {
    function componentDidCatch() {}

    return componentDidCatch;
  }();

  _proto.render = function () {
    function render() {
      if (this.state.errored) {
        return null;
      }

      return this.props.portal;
    }

    return render;
  }();

  return PortalWrapper;
}(PureComponent);

module.exportDefault(PortalWrapper);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/bfdb9426f2244ce365ce9ca844fd950fca024107.map
