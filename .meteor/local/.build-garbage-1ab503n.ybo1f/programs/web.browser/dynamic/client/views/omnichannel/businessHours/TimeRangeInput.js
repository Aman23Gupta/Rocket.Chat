function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/TimeRangeInput.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, InputBox;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  InputBox(v) {
    InputBox = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const TimeRangeInput = _ref => {
  let {
    onChange,
    start: startDefault,
    finish: finishDefault
  } = _ref;
  const t = useTranslation();
  const [start, setStart] = useState(startDefault);
  const [finish, setFinish] = useState(finishDefault);
  const handleChangeFrom = useMutableCallback(_ref2 => {
    let {
      currentTarget: {
        value
      }
    } = _ref2;
    setStart(value);
    onChange(value, finish);
  });
  const handleChangeTo = useMutableCallback(_ref3 => {
    let {
      currentTarget: {
        value
      }
    } = _ref3;
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/661e5afc1d7b05c8af0da16b7ddcc81a33a4ddc2.map
