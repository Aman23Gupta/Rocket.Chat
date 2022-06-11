function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/CreateDirectMessage.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Box, Modal, ButtonGroup, Button;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Modal: function (v) {
    Modal = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 2);
var UserAutoCompleteMultiple;
module.link("../../components/UserAutoCompleteMultiple", {
  "default": function (v) {
    UserAutoCompleteMultiple = v;
  }
}, 3);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useEndpointActionExperimental;
module.link("../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental: function (v) {
    useEndpointActionExperimental = v;
  }
}, 5);
var goToRoomById;
module.link("../../lib/utils/goToRoomById", {
  goToRoomById: function (v) {
    goToRoomById = v;
  }
}, 6);

var CreateDirectMessage = function (_ref) {
  var onClose = _ref.onClose;
  var t = useTranslation();

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];

  var createDirect = useEndpointActionExperimental('POST', 'dm.create');
  var onChangeUsers = useMutableCallback(function (value, action) {
    if (!action) {
      if (users.includes(value)) {
        return;
      }

      return setUsers([].concat(_toConsumableArray(users), [value]));
    }

    setUsers(users.filter(function (current) {
      return current !== value;
    }));
  });
  var onCreate = useMutableCallback(function () {
    function _callee() {
      var _await$createDirect, rid;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(createDirect({
                  usernames: users.join(',')
                }));

              case 3:
                _await$createDirect = _context.sent;
                rid = _await$createDirect.room.rid;
                goToRoomById(rid);
                onClose();
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.warn(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 9]], Promise);
    }

    return _callee;
  }());
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
//# sourceMappingURL=/dynamic/client/sidebar/header/fa82fc94b551408f198aa0335c4ba980ce5aa18d.map
