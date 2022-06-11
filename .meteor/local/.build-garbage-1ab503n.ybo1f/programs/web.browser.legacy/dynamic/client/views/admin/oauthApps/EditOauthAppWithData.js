function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/oauthApps/EditOauthAppWithData.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_id"];

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
var React, useCallback, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
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
var EditOauthApp;
module.link("./EditOauthApp", {
  "default": function (v) {
    EditOauthApp = v;
  }
}, 5);

function EditOauthAppWithData(_ref) {
  var _id = _ref._id,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var params = useMemo(function () {
    return {
      appId: _id
    };
  }, [_id]);

  var _useEndpointData = useEndpointData('oauth-apps.get', params),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error,
      reload = _useEndpointData.reload;

  var onChange = useCallback(function () {
    reload();
  }, [reload]);

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(Box, {
      pb: "x20",
      maxWidth: "x600",
      w: "full",
      alignSelf: "center"
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

  if (error || !data || !_id) {
    return /*#__PURE__*/React.createElement(Box, {
      fontScale: "h2",
      pb: "x20"
    }, t('error-application-not-found'));
  }

  return /*#__PURE__*/React.createElement(EditOauthApp, _extends({
    data: data.oauthApp,
    onChange: onChange
  }, props));
}

module.exportDefault(EditOauthAppWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/oauthApps/6e9f5e8d6c7cab4a404d8be88016a76ee69a7837.map
