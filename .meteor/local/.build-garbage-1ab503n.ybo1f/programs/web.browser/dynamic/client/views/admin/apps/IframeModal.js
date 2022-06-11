function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/IframeModal.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["url", "confirm", "cancel"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Box, Modal;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Modal(v) {
    Modal = v;
  }

}, 0);
let React, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);

const iframeMsgListener = (confirm, cancel) => e => {
  let data;

  try {
    data = JSON.parse(e.data);
  } catch (e) {
    return;
  }

  data.result ? confirm(data) : cancel();
};

const IframeModal = _ref => {
  let {
    url,
    confirm,
    cancel
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  useEffect(() => {
    const listener = iframeMsgListener(confirm, cancel);
    window.addEventListener('message', listener);
    return () => {
      window.removeEventListener('message', listener);
    };
  }, [confirm, cancel]);
  return /*#__PURE__*/React.createElement(Modal, _extends({
    height: "x360"
  }, props), /*#__PURE__*/React.createElement(Box, {
    padding: "x12",
    w: "full",
    h: "full",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement("iframe", {
    style: {
      border: 'none',
      height: '100%',
      width: '100%'
    },
    src: url
  })));
};

module.exportDefault(IframeModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/064add087443e1fcdc29e9305f4e98842c45bac3.map
