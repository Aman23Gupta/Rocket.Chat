function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/ScrollableContentWrapper.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["style"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 1);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 2);
let Scrollbars;
module.link("rc-scrollbars", {
  Scrollbars(v) {
    Scrollbars = v;
  }

}, 0);
let React, useMemo, memo, forwardRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  memo(v) {
    memo = v;
  },

  forwardRef(v) {
    forwardRef = v;
  }

}, 1);
const styleDefault = {
  width: '100%',
  height: '100%',
  flexGrow: 1,
  willChange: 'transform',
  overflowY: 'hidden'
};
const ScrollableContentWrapper = /*#__PURE__*/forwardRef(function WrappedComponent(_ref, ref) {
  let {
    children,
    style,
    onScroll,
    overflowX,
    renderView
  } = _ref;
  const scrollbarsStyle = useMemo(() => _objectSpread(_objectSpread({}, style), styleDefault), [style]);
  return /*#__PURE__*/React.createElement(Scrollbars, {
    autoHide: true,
    autoHideTimeout: 2000,
    autoHideDuration: 500,
    style: scrollbarsStyle,
    onScrollFrame: onScroll,
    renderView: renderView,
    renderTrackHorizontal: overflowX ? undefined : props => /*#__PURE__*/React.createElement("div", _extends({}, props, {
      className: "track-horizontal",
      style: {
        display: 'none'
      }
    })),
    renderThumbVertical: _ref2 => {
      let {
        style
      } = _ref2,
          props = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/React.createElement("div", _extends({}, props, {
        style: _objectSpread(_objectSpread({}, style), {}, {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '7px'
        })
      }));
    },
    children: children,
    ref: sRef => {
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
});
module.exportDefault( /*#__PURE__*/memo(ScrollableContentWrapper));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/9a0e8ae022497c7c32a25f495bf5fd559d1f87d0.map
