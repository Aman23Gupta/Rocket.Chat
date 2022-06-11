function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customSounds/EditCustomSound.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_id", "onChange"];

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
var Box, Button, ButtonGroup, Skeleton, Throbber, InputBox;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  },
  Throbber: function (v) {
    Throbber = v;
  },
  InputBox: function (v) {
    InputBox = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 2);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 3);
var EditSound;
module.link("./EditSound", {
  "default": function (v) {
    EditSound = v;
  }
}, 4);

function EditCustomSound(_ref) {
  var _id = _ref._id,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var query = useMemo(function () {
    return {
      query: JSON.stringify({
        _id: _id
      })
    };
  }, [_id]);

  var _useEndpointData = useEndpointData('custom-sounds.list', query),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error,
      reload = _useEndpointData.reload;

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(Box, {
      pb: "x20"
    }, /*#__PURE__*/React.createElement(Skeleton, {
      mbs: "x8"
    }), /*#__PURE__*/React.createElement(InputBox.Skeleton, {
      w: "full"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      mbs: "x8"
    }), /*#__PURE__*/React.createElement(InputBox.Skeleton, {
      w: "full"
    }), /*#__PURE__*/React.createElement(ButtonGroup, {
      stretch: true,
      w: "full",
      mbs: "x8"
    }, /*#__PURE__*/React.createElement(Button, {
      disabled: true
    }, /*#__PURE__*/React.createElement(Throbber, {
      inheritColor: true
    })), /*#__PURE__*/React.createElement(Button, {
      primary: true,
      disabled: true
    }, /*#__PURE__*/React.createElement(Throbber, {
      inheritColor: true
    }))), /*#__PURE__*/React.createElement(ButtonGroup, {
      stretch: true,
      w: "full",
      mbs: "x8"
    }, /*#__PURE__*/React.createElement(Button, {
      primary: true,
      danger: true,
      disabled: true
    }, /*#__PURE__*/React.createElement(Throbber, {
      inheritColor: true
    }))));
  }

  if (error || !data || data.sounds.length < 1) {
    return /*#__PURE__*/React.createElement(Box, {
      fontScale: "h2",
      pb: "x20"
    }, error);
  }

  var handleChange = function () {
    onChange && onChange();
    reload && reload();
  };

  return /*#__PURE__*/React.createElement(EditSound, _extends({
    data: data.sounds[0],
    onChange: handleChange
  }, props));
}

module.exportDefault(EditCustomSound);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customSounds/1b8667d71c03a5799579a9d9ce6afb4a37ce49a7.map
