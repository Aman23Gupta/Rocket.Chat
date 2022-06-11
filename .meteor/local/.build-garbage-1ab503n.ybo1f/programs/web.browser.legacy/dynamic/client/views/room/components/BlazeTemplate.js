function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/BlazeTemplate.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["name", "flexShrink", "overflow", "onClick", "children"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var Blaze;
module.link("meteor/blaze", {
  Blaze: function (v) {
    Blaze = v;
  }
}, 1);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 2);
var React, memo, useLayoutEffect, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useLayoutEffect: function (v) {
    useLayoutEffect = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 3);

var BlazeTemplate = function (_ref) {
  var name = _ref.name,
      flexShrink = _ref.flexShrink,
      overflow = _ref.overflow,
      onClick = _ref.onClick,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var ref = useRef();
  useLayoutEffect(function () {
    if (!ref.current || !Template[name]) {
      return;
    }

    var view;
    var timeout = setTimeout(function () {
      view = Blaze.renderWithData(Template[name], props, ref.current);
    }, 10);
    return function () {
      clearTimeout(timeout);
      view && Blaze.remove(view);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, JSON.stringify(props)]);
  return /*#__PURE__*/React.createElement(Box, {
    "rcx-blaze-template": true,
    display: "flex",
    onClick: onClick,
    flexDirection: "column",
    flexGrow: 1,
    ref: ref,
    flexShrink: flexShrink,
    overflow: overflow
  });
};

module.exportDefault( /*#__PURE__*/memo(BlazeTemplate));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/components/17233128abcf706e4f63a3d3c3c1d5ff9daae6b0.map
