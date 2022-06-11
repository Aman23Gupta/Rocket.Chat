function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/WorkspaceLoginSection.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onRegisterStatusChange"];

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
var Box, Button, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely: function (v) {
    useSafely = v;
  }
}, 1);
var React, useState, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 2);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 3);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);

function WorkspaceLoginSection(_ref) {
  var onRegisterStatusChange = _ref.onRegisterStatusChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var checkUserLoggedIn = useMethod('cloud:checkUserLoggedIn');
  var getOAuthAuthorizationUrl = useMethod('cloud:getOAuthAuthorizationUrl');
  var logout = useMethod('cloud:logout');
  var disconnectWorkspace = useMethod('cloud:disconnectWorkspace');

  var _useSafely = useSafely(useState(false)),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      isLoggedIn = _useSafely2[0],
      setLoggedIn = _useSafely2[1];

  var _useSafely3 = useSafely(useState(true)),
      _useSafely4 = _slicedToArray(_useSafely3, 2),
      isLoading = _useSafely4[0],
      setLoading = _useSafely4[1];

  var handleLoginButtonClick = function () {
    function _callee() {
      var url;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoading(true);
                _context.prev = 1;
                _context.next = 4;
                return _regeneratorRuntime.awrap(getOAuthAuthorizationUrl());

              case 4:
                url = _context.sent;
                window.location.href = url;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 11:
                _context.prev = 11;
                setLoading(false);
                return _context.finish(11);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[1, 8, 11, 14]], Promise);
    }

    return _callee;
  }();

  var handleLogoutButtonClick = function () {
    function _callee2() {
      var _isLoggedIn;

      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                setLoading(true);
                _context2.prev = 1;
                _context2.next = 4;
                return _regeneratorRuntime.awrap(logout());

              case 4:
                _context2.next = 6;
                return _regeneratorRuntime.awrap(checkUserLoggedIn());

              case 6:
                _isLoggedIn = _context2.sent;
                setLoggedIn(_isLoggedIn);
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);
                dispatchToastMessage({
                  type: 'error',
                  message: _context2.t0
                });

              case 13:
                _context2.prev = 13;
                setLoading(false);
                return _context2.finish(13);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[1, 10, 13, 16]], Promise);
    }

    return _callee2;
  }();

  var handleDisconnectButtonClick = function () {
    function _callee3() {
      var success;
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                setLoading(true);
                _context3.prev = 1;
                _context3.next = 4;
                return _regeneratorRuntime.awrap(disconnectWorkspace());

              case 4:
                success = _context3.sent;

                if (success) {
                  _context3.next = 7;
                  break;
                }

                throw Error(t('An error occured disconnecting'));

              case 7:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Disconnected')
                });
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](1);
                dispatchToastMessage({
                  type: 'error',
                  message: _context3.t0
                });

              case 13:
                _context3.prev = 13;
                _context3.next = 16;
                return _regeneratorRuntime.awrap(onRegisterStatusChange && onRegisterStatusChange());

              case 16:
                setLoading(false);
                return _context3.finish(13);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, [[1, 10, 13, 18]], Promise);
    }

    return _callee3;
  }();

  useEffect(function () {
    var checkLoginState = function () {
      function _callee4() {
        var _isLoggedIn2;

        return _regeneratorRuntime.async(function () {
          function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  setLoading(true);
                  _context4.prev = 1;
                  _context4.next = 4;
                  return _regeneratorRuntime.awrap(checkUserLoggedIn());

                case 4:
                  _isLoggedIn2 = _context4.sent;
                  setLoggedIn(_isLoggedIn2);
                  _context4.next = 11;
                  break;

                case 8:
                  _context4.prev = 8;
                  _context4.t0 = _context4["catch"](1);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context4.t0
                  });

                case 11:
                  _context4.prev = 11;
                  setLoading(false);
                  return _context4.finish(11);

                case 14:
                case "end":
                  return _context4.stop();
              }
            }
          }

          return _callee4$;
        }(), null, null, [[1, 8, 11, 14]], Promise);
      }

      return _callee4;
    }();

    checkLoginState();
  }, [checkUserLoggedIn, dispatchToastMessage, setLoading, setLoggedIn]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "section"
  }, props), /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    color: "neutral-800"
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_workspace_connected'))), /*#__PURE__*/React.createElement(ButtonGroup, null, isLoggedIn ? /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    disabled: isLoading,
    onClick: handleLogoutButtonClick
  }, t('Cloud_logout')) : /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: isLoading,
    onClick: handleLoginButtonClick
  }, t('Cloud_login_to_cloud'))), /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    color: "neutral-800"
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_workspace_disconnect'))), /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    disabled: isLoading,
    onClick: handleDisconnectButtonClick
  }, t('Disconnect'))));
}

module.exportDefault(WorkspaceLoginSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/e05b908b82b89d5c7cc444c69493c51081ee894a.map
