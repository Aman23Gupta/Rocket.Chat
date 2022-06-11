function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/agents/AddAgent.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["reload"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
var Button, Box, Field;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var UserAutoComplete;
module.link("../../../components/UserAutoComplete", {
  "default": function (v) {
    UserAutoComplete = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useEndpointAction;
module.link("../../../hooks/useEndpointAction", {
  useEndpointAction: function (v) {
    useEndpointAction = v;
  }
}, 5);

function AddAgent(_ref) {
  var reload = _ref.reload,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      username = _useState2[0],
      setUsername = _useState2[1];

  var saveAction = useEndpointAction('POST', 'livechat/users/agent', {
    username: username
  });
  var handleSave = useMutableCallback(function () {
    function _callee() {
      var result;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (username) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return _regeneratorRuntime.awrap(saveAction());

              case 4:
                result = _context.sent;

                if (result.success) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                reload();
                setUsername();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }());
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/agents/53b74c5e1442ea90c2ad47748578fce350511228.map
