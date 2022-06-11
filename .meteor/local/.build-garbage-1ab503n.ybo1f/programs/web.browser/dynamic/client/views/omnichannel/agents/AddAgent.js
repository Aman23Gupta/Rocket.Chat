function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/agents/AddAgent.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["reload"];

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
let Button, Box, Field;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
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
let UserAutoComplete;
module.link("../../../components/UserAutoComplete", {
  default(v) {
    UserAutoComplete = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useEndpointAction;
module.link("../../../hooks/useEndpointAction", {
  useEndpointAction(v) {
    useEndpointAction = v;
  }

}, 5);

function AddAgent(_ref) {
  let {
    reload
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const [username, setUsername] = useState();
  const saveAction = useEndpointAction('POST', 'livechat/users/agent', {
    username
  });
  const handleSave = useMutableCallback(async () => {
    if (!username) {
      return;
    }

    const result = await saveAction();

    if (!result.success) {
      return;
    }

    reload();
    setUsername();
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    alignItems: "center"
  }, props), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Username')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(UserAutoComplete, {
    value: username,
    onChange: setUsername
  }), /*#__PURE__*/React.createElement(Button, {
    disabled: !username,
    onClick: handleSave,
    mis: "x8",
    primary: true
  }, t('Add')))));
}

module.exportDefault(AddAgent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/agents/e7a566856240165d6fa7946cd85d1356b0c97376.map
