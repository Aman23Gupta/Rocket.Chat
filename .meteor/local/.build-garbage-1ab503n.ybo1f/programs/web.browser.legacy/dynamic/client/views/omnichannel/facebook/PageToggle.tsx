function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/facebook/PageToggle.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Box, Field, ToggleSwitch;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);

var PageToggle = function (_ref) {
  var name = _ref.name,
      id = _ref.id,
      subscribed = _ref.subscribed,
      onToggle = _ref.onToggle,
      className = _ref.className;

  var _useState = useState(subscribed),
      _useState2 = _slicedToArray(_useState, 2),
      isSubscribed = _useState2[0],
      setIsSubscribed = _useState2[1];

  var handleToggle = useMutableCallback(function () {
    return onToggle(id, isSubscribed, setIsSubscribed);
  });
  return /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, name), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: isSubscribed,
    onChange: handleToggle
  }))));
};

module.exportDefault(PageToggle);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/facebook/7de974626d1b232e0016259aa68bbd7cdf304aee.map
