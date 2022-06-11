function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customUserStatus/EditCustomUserStatusWithData.tsx                                                //
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
module.export({
  EditCustomUserStatusWithData: function () {
    return EditCustomUserStatusWithData;
  }
});
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
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 3);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 4);
var EditCustomUserStatus;
module.link("./EditCustomUserStatus", {
  "default": function (v) {
    EditCustomUserStatus = v;
  }
}, 5);

var EditCustomUserStatusWithData = function (_ref) {
  var _id = _ref._id,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var query = useMemo(function () {
    return {
      query: JSON.stringify({
        _id: _id
      })
    };
  }, [_id]);

  var _useEndpointData = useEndpointData('custom-user-status.list', query),
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

  if (error || !data || data.statuses.length < 1) {
    return /*#__PURE__*/React.createElement(Box, {
      fontScale: "h2",
      pb: "x20"
    }, t('Custom_User_Status_Error_Invalid_User_Status'));
  }

  var handleChange = function () {
    onChange === null || onChange === void 0 ? void 0 : onChange();
    reload === null || reload === void 0 ? void 0 : reload();
  };

  return /*#__PURE__*/React.createElement(EditCustomUserStatus, _extends({
    data: data.statuses[0],
    onChange: handleChange
  }, props));
};

module.exportDefault(EditCustomUserStatusWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customUserStatus/2e5f48944b5fc0dcaaac89f5e666263693e0cabe.map
