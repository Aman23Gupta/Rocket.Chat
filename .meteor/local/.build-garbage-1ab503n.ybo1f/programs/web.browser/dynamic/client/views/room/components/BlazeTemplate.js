function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/BlazeTemplate.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["name", "flexShrink", "overflow", "onClick", "children"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let Blaze;
module.link("meteor/blaze", {
  Blaze(v) {
    Blaze = v;
  }

}, 1);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 2);
let React, memo, useLayoutEffect, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useLayoutEffect(v) {
    useLayoutEffect = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 3);

const BlazeTemplate = _ref => {
  let {
    name,
    flexShrink,
    overflow,
    onClick,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const ref = useRef();
  useLayoutEffect(() => {
    if (!ref.current || !Template[name]) {
      return;
    }

    let view;
    const timeout = setTimeout(() => {
      view = Blaze.renderWithData(Template[name], props, ref.current);
    }, 10);
    return () => {
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
    flexShrink,
    overflow
  });
};

module.exportDefault( /*#__PURE__*/memo(BlazeTemplate));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/components/8e32e5eaed2c8bd479118f3b4b3dd231f4d41858.map
