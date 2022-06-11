function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customEmoji/EditCustomEmojiWithData.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_id", "onChange", "close"];

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
var Box, Button, ButtonGroup, Skeleton, Throbber, InputBox, Callout;
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
  },
  Callout: function (v) {
    Callout = v;
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
var EditCustomEmoji;
module.link("./EditCustomEmoji", {
  "default": function (v) {
    EditCustomEmoji = v;
  }
}, 5);

var EditCustomEmojiWithData = function (_ref) {
  var _id = _ref._id,
      onChange = _ref.onChange,
      close = _ref.close,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var query = useMemo(function () {
    return {
      query: JSON.stringify({
        _id: _id
      })
    };
  }, [_id]);

  var _useEndpointData = useEndpointData('emoji-custom.list', query),
      _useEndpointData$valu = _useEndpointData.value,
      data = _useEndpointData$valu === void 0 ? {
    emojis: {
      update: []
    }
  } : _useEndpointData$valu,
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

  if (error || !data || !data.emojis || data.emojis.update.length < 1) {
    return /*#__PURE__*/React.createElement(Callout, {
      title: t('Custom_Emoji_Error_Invalid_Emoji'),
      type: "danger"
    });
  }

  var handleChange = function () {
    onChange === null || onChange === void 0 ? void 0 : onChange();
    reload === null || reload === void 0 ? void 0 : reload();
  };

  return /*#__PURE__*/React.createElement(EditCustomEmoji, _extends({
    data: data.emojis.update[0],
    close: close,
    onChange: handleChange
  }, props));
};

module.exportDefault(EditCustomEmojiWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customEmoji/6fabd30b4695e417fb01be88ec4025e5155cb9c8.map
