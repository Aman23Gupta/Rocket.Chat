function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customUserStatus/EditCustomUserStatusWithData.tsx                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["_id", "onChange"];

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
module.export({
  EditCustomUserStatusWithData: () => EditCustomUserStatusWithData
});
let Box, Button, ButtonGroup, Skeleton, Throbber, InputBox;
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
let EditCustomUserStatus;
module.link("./EditCustomUserStatus", {
  default(v) {
    EditCustomUserStatus = v;
  }

}, 5);

const EditCustomUserStatusWithData = _ref => {
  let {
    _id,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const query = useMemo(() => ({
    query: JSON.stringify({
      _id
    })
  }), [_id]);
  const {
    value: data,
    phase: state,
    error,
    reload
  } = useEndpointData('custom-user-status.list', query);

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

  const handleChange = () => {
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
//# sourceMappingURL=/dynamic/client/views/admin/customUserStatus/0304288f054eb8a7a91f2c511175918130320708.map
