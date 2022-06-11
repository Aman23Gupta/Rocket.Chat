function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/IframeModal.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["url", "confirm", "cancel"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Box, Modal;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Modal: function (v) {
    Modal = v;
  }
}, 0);
var React, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);

var iframeMsgListener = function (confirm, cancel) {
  return function (e) {
    var data;

    try {
      data = JSON.parse(e.data);
    } catch (e) {
      return;
    }

    data.result ? confirm(data) : cancel();
  };
};

var IframeModal = function (_ref) {
  var url = _ref.url,
      confirm = _ref.confirm,
      cancel = _ref.cancel,
      props = _objectWithoutProperties(_ref, _excluded);

  useEffect(function () {
    var listener = iframeMsgListener(confirm, cancel);
    window.addEventListener('message', listener);
    return function () {
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/e2f37408c29315d3a9a9672e852fc7b09b339986.map
