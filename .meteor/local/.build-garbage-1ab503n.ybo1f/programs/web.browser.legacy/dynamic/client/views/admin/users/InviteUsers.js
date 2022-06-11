function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/InviteUsers.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["data"];

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

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
module.export({
  InviteUsers: function () {
    return InviteUsers;
  }
});
var Box, Button, Icon, TextAreaInput;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  TextAreaInput: function (v) {
    TextAreaInput = v;
  }
}, 0);
var React, useCallback, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var validateEmail;
module.link("../../../../lib/emailValidator", {
  validateEmail: function (v) {
    validateEmail = v;
  }
}, 2);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 3);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);

function InviteUsers(_ref) {
  var data = _ref.data,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var sendInvites = useMethod('sendInvitationEmail');
  var getEmails = useCallback(function (text) {
    return text.split(/[\ ,;]+/i).filter(function (val) {
      return validateEmail(val);
    });
  }, []);

  var handleClick = function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(sendInvites(getEmails(text)));

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Emails_sent_successfully!')
                });
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0.message
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 6]], Promise);
    }

    return _callee;
  }();

  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, props, /*#__PURE__*/React.createElement(Box, {
    is: "h2",
    fontScale: "h2",
    mb: "x8"
  }, t('Send_invitation_email')), /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2",
    mb: "x8"
  }, t('Send_invitation_email_info')), /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 5,
    flexGrow: 0,
    onChange: function (e) {
      return setText(e.currentTarget.value);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleClick,
    disabled: !getEmails(text).length,
    alignItems: "stretch",
    mb: "x8"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: "x16"
  }), t('Send')));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/c762097720a3ea211e237249948a501e3f1f5ba0.map
