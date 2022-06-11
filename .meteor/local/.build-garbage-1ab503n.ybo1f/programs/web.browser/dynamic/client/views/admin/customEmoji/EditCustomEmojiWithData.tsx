function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customEmoji/EditCustomEmojiWithData.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["_id", "onChange", "close"];

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
let Box, Button, ButtonGroup, Skeleton, Throbber, InputBox, Callout;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Skeleton(v) {
    Skeleton = v;
  },

  Throbber(v) {
    Throbber = v;
  },

  InputBox(v) {
    InputBox = v;
  },

  Callout(v) {
    Callout = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 3);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 4);
let EditCustomEmoji;
module.link("./EditCustomEmoji", {
  default(v) {
    EditCustomEmoji = v;
  }

}, 5);

const EditCustomEmojiWithData = _ref => {
  let {
    _id,
    onChange,
    close
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const query = useMemo(() => ({
    query: JSON.stringify({
      _id
    })
  }), [_id]);
  const {
    value: data = {
      emojis: {
        update: []
      }
    },
    phase: state,
    error,
    reload
  } = useEndpointData('emoji-custom.list', query);

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

  const handleChange = () => {
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
//# sourceMappingURL=/dynamic/client/views/admin/customEmoji/eef682265f0b794263cca19b67be737a13440891.map
