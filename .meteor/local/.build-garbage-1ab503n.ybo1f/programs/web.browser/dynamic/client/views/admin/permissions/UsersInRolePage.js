function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/UsersInRolePage.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Field, Margins, ButtonGroup, Button, Callout;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
  },

  Margins(v) {
    Margins = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Callout(v) {
    Callout = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let RoomAutoComplete;
module.link("../../../components/RoomAutoComplete", {
  default(v) {
    RoomAutoComplete = v;
  }

}, 4);
let UserAutoComplete;
module.link("../../../components/UserAutoComplete", {
  default(v) {
    UserAutoComplete = v;
  }

}, 5);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 6);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 7);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 8);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let UsersInRoleTableContainer;
module.link("./UsersInRoleTableContainer", {
  default(v) {
    UsersInRoleTableContainer = v;
  }

}, 10);

const UsersInRolePage = _ref => {
  let {
    data
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const reload = useRef();
  const [user, setUser] = useState('');
  const [rid, setRid] = useState();
  const [userError, setUserError] = useState();
  const {
    _id,
    name,
    description
  } = data;
  const router = useRoute('admin-permissions');
  const addUser = useEndpoint('POST', 'roles.addUserToRole');
  const handleReturn = useMutableCallback(() => {
    router.push({
      context: 'edit',
      _id
    });
  });
  const handleAdd = useMutableCallback(async () => {
    if (!user) {
      return setUserError(t('User_cant_be_empty'));
    }

    try {
      await addUser({
        roleName: _id,
        username: user,
        roomId: rid
      });
      dispatchToastMessage({
        type: 'success',
        message: t('User_added')
      });
      setUser();
      reload.current();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  const handleUserChange = useMutableCallback(user => {
    if (user !== '') {
      setUserError();
    }

    return setUser(user);
  });
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: "".concat(t('Users_in_role'), " \"").concat(description || name, "\"")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleReturn
  }, t('Back')))), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    w: "full",
    mi: "neg-x4"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, data.scope !== 'Users' && /*#__PURE__*/React.createElement(Field, {
    mbe: "x4"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Choose_a_room')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(RoomAutoComplete, {
    value: rid,
    onChange: setRid,
    placeholder: t('User')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Add_user')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(UserAutoComplete, {
    value: user,
    onChange: handleUserChange,
    placeholder: t('User')
  }), /*#__PURE__*/React.createElement(ButtonGroup, {
    mis: "x8",
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleAdd
  }, t('Add')))), /*#__PURE__*/React.createElement(Field.Error, null, userError)))), /*#__PURE__*/React.createElement(Margins, {
    blockStart: "x8"
  }, (data.scope === 'Users' || rid) && /*#__PURE__*/React.createElement(UsersInRoleTableContainer, {
    reloadRef: reload,
    scope: data.scope,
    rid: rid,
    roleId: _id,
    roleName: name,
    description: description
  }), data.scope !== 'Users' && !rid && /*#__PURE__*/React.createElement(Callout, {
    type: "info"
  }, t('Select_a_room')))));
};

module.exportDefault(UsersInRolePage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/d5941fe879a49c0d65151354fb81f7b0b1635698.map
