function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/RoomList/ScrollerWithCustomProps.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["style"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
let React, forwardRef;
module.link("react", {
  default(v) {
    React = v;
  },

  forwardRef(v) {
    forwardRef = v;
  }

}, 0);
let ScrollableContentWrapper;
module.link("../../components/ScrollableContentWrapper", {
  default(v) {
    ScrollableContentWrapper = v;
  }

}, 1);
const ScrollerWithCustomProps = /*#__PURE__*/forwardRef(function ScrollerWithCustomProps(props, ref) {
  return /*#__PURE__*/React.createElement(ScrollableContentWrapper, _extends({}, props, {
    ref: ref,
    renderView: _ref => {
      let {
        style
      } = _ref,
          props = _objectWithoutProperties(_ref, _excluded);

      return /*#__PURE__*/React.createElement("div", _extends({}, props, {
        style: _objectSpread({}, style)
      }));
    },
    renderTrackHorizontal: props => /*#__PURE__*/React.createElement("div", _extends({}, props, {
      style: {
        display: 'none'
      },
      className: "track-horizontal"
    }))
  }));
});
module.exportDefault(ScrollerWithCustomProps);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/RoomList/7dd54504accc4341047689e9bd0002f1d5b02737.map
