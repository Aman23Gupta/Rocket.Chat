function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/TimeRangeInput.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Box, InputBox;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  InputBox: function (v) {
    InputBox = v;
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
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var TimeRangeInput = function (_ref) {
  var onChange = _ref.onChange,
      startDefault = _ref.start,
      finishDefault = _ref.finish;
  var t = useTranslation();

  var _useState = useState(startDefault),
      _useState2 = _slicedToArray(_useState, 2),
      start = _useState2[0],
      setStart = _useState2[1];

  var _useState3 = useState(finishDefault),
      _useState4 = _slicedToArray(_useState3, 2),
      finish = _useState4[0],
      setFinish = _useState4[1];

  var handleChangeFrom = useMutableCallback(function (_ref2) {
    var value = _ref2.currentTarget.value;
    setStart(value);
    onChange(value, finish);
  });
  var handleChangeTo = useMutableCallback(function (_ref3) {
    var value = _ref3.currentTarget.value;
    setFinish(value);
    onChange(start, value);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    mie: "x2"
  }, t('Open'), ":", /*#__PURE__*/React.createElement(InputBox, {
    type: "time",
    value: start,
    onChange: handleChangeFrom
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    mis: "x2"
  }, t('Close'), ":", /*#__PURE__*/React.createElement(InputBox, {
    type: "time",
    value: finish,
    onChange: handleChangeTo
  })));
};

module.exportDefault(TimeRangeInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/552e1b7670fb3869b14796337f6a7a88d056a6e9.map
