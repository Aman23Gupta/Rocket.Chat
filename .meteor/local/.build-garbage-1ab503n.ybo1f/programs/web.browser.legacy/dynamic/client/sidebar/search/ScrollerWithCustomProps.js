function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/search/ScrollerWithCustomProps.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["style"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var React, forwardRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  }
}, 0);
var ScrollableContentWrapper;
module.link("../../components/ScrollableContentWrapper", {
  "default": function (v) {
    ScrollableContentWrapper = v;
  }
}, 1);
var ScrollerWithCustomProps = /*#__PURE__*/forwardRef(function () {
  function ScrollerWithCustomProps(props, ref) {
    return /*#__PURE__*/React.createElement(ScrollableContentWrapper, _extends({}, props, {
      ref: ref,
      renderView: function (_ref) {
        var style = _ref.style,
            props = _objectWithoutProperties(_ref, _excluded);

        return /*#__PURE__*/React.createElement("div", _extends({}, props, {
          style: _objectSpread({}, style)
        }));
      },
      renderTrackHorizontal: function (props) {
        return /*#__PURE__*/React.createElement("div", _extends({}, props, {
          style: {
            display: 'none'
          },
          className: "track-horizontal"
        }));
      }
    }));
  }

  return ScrollerWithCustomProps;
}());
module.exportDefault(ScrollerWithCustomProps);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/search/147c0635664b81ae0f3139aea1a25b7365e96562.map
