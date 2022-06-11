function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/CreateDirectMessage.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Modal, ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Modal(v) {
    Modal = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  memo(v) {
    memo = v;
  }

}, 2);
let UserAutoCompleteMultiple;
module.link("../../components/UserAutoCompleteMultiple", {
  default(v) {
    UserAutoCompleteMultiple = v;
  }

}, 3);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useEndpointActionExperimental;
module.link("../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental(v) {
    useEndpointActionExperimental = v;
  }

}, 5);
let goToRoomById;
module.link("../../lib/utils/goToRoomById", {
  goToRoomById(v) {
    goToRoomById = v;
  }

}, 6);

const CreateDirectMessage = _ref => {
  let {
    onClose
  } = _ref;
  const t = useTranslation();
  const [users, setUsers] = useState([]);
  const createDirect = useEndpointActionExperimental('POST', 'dm.create');
  const onChangeUsers = useMutableCallback((value, action) => {
    if (!action) {
      if (users.includes(value)) {
        return;
      }

      return setUsers([...users, value]);
    }

    setUsers(users.filter(current => current !== value));
  });
  const onCreate = useMutableCallback(async () => {
    try {
      const {
        room: {
          rid
        }
      } = await createDirect({
        usernames: users.join(',')
      });
      goToRoomById(rid);
      onClose();
    } catch (error) {
      console.warn(error);
    }
  });
  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Direct_Messages')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Box, null, t('Direct_message_creation_description')), /*#__PURE__*/React.createElement(Box, {
    mbs: "x16",
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(UserAutoCompleteMultiple, {
    value: users,
    onChange: onChangeUsers
  }))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    disabled: users.length < 1,
    onClick: onCreate,
    primary: true
  }, t('Create')))));
};

module.exportDefault( /*#__PURE__*/memo(CreateDirectMessage));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/3f84378f3a3068cfc8b97c5130def469daf93909.map
