function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/ScrollableContentWrapper.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["style"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);
var Scrollbars;
module.link("rc-scrollbars", {
  Scrollbars: function (v) {
    Scrollbars = v;
  }
}, 0);
var React, useMemo, memo, forwardRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  memo: function (v) {
    memo = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  }
}, 1);
var styleDefault = {
  width: '100%',
  height: '100%',
  flexGrow: 1,
  willChange: 'transform',
  overflowY: 'hidden'
};
var ScrollableContentWrapper = /*#__PURE__*/forwardRef(function () {
  function WrappedComponent(_ref, ref) {
    var children = _ref.children,
        style = _ref.style,
        onScroll = _ref.onScroll,
        overflowX = _ref.overflowX,
        renderView = _ref.renderView;
    var scrollbarsStyle = useMemo(function () {
      return _objectSpread(_objectSpread({}, style), styleDefault);
    }, [style]);
    return /*#__PURE__*/React.createElement(Scrollbars, {
      autoHide: true,
      autoHideTimeout: 2000,
      autoHideDuration: 500,
      style: scrollbarsStyle,
      onScrollFrame: onScroll,
      renderView: renderView,
      renderTrackHorizontal: overflowX ? undefined : function (props) {
        return /*#__PURE__*/React.createElement("div", _extends({}, props, {
          className: "track-horizontal",
          style: {
            display: 'none'
          }
        }));
      },
      renderThumbVertical: function (_ref2) {
        var style = _ref2.style,
            props = _objectWithoutProperties(_ref2, _excluded);

        return /*#__PURE__*/React.createElement("div", _extends({}, props, {
          style: _objectSpread(_objectSpread({}, style), {}, {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '7px'
          })
        }));
      },
      children: children,
      ref: function (sRef) {
        if (ref && sRef) {
          if (typeof ref === 'function') {
            var _sRef$view;

            ref((_sRef$view = sRef.view) !== null && _sRef$view !== void 0 ? _sRef$view : null);
            return;
          }

          ref.current = sRef.view;
        }
      }
    });
  }

  return WrappedComponent;
}());
module.exportDefault( /*#__PURE__*/memo(ScrollableContentWrapper));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/7a012df4c1b75fec9eb9a8fd164905e58e0426fa.map
