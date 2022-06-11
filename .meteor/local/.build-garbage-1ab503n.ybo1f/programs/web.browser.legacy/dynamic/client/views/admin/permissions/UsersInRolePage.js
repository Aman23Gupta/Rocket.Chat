function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/UsersInRolePage.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Box, Field, Margins, ButtonGroup, Button, Callout;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var RoomAutoComplete;
module.link("../../../components/RoomAutoComplete", {
  "default": function (v) {
    RoomAutoComplete = v;
  }
}, 4);
var UserAutoComplete;
module.link("../../../components/UserAutoComplete", {
  "default": function (v) {
    UserAutoComplete = v;
  }
}, 5);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 6);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 7);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 8);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var UsersInRoleTableContainer;
module.link("./UsersInRoleTableContainer", {
  "default": function (v) {
    UsersInRoleTableContainer = v;
  }
}, 10);

var UsersInRolePage = function (_ref) {
  var data = _ref.data;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var reload = useRef();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      rid = _useState4[0],
      setRid = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      userError = _useState6[0],
      setUserError = _useState6[1];

  var _id = data._id,
      name = data.name,
      description = data.description;
  var router = useRoute('admin-permissions');
  var addUser = useEndpoint('POST', 'roles.addUserToRole');
  var handleReturn = useMutableCallback(function () {
    router.push({
      context: 'edit',
      _id: _id
    });
  });
  var handleAdd = useMutableCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (user) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", setUserError(t('User_cant_be_empty')));

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return _regeneratorRuntime.awrap(addUser({
                  roleName: _id,
                  username: user,
                  roomId: rid
                }));

              case 5:
                dispatchToastMessage({
                  type: 'success',
                  message: t('User_added')
                });
                setUser();
                reload.current();
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[2, 10]], Promise);
    }

    return _callee;
  }());
  var handleUserChange = useMutableCallback(function (user) {
    if (user !== '') {
      setUserError();
    }

    return setUser(user);
  });
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Users_in_role') + " \"" + (description || name) + "\""
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
//# sourceMappingURL=/dynamic/client/views/admin/permissions/ec8b0cf2ba2e5a036eb8a617d782dcb6a937bff5.map
