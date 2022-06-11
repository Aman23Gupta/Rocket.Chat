function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/CloudPage.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 1);
var Box, Button, ButtonGroup, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useMutableCallback, useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
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
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 4);
var useQueryStringParameter, useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useQueryStringParameter: function (v) {
    useQueryStringParameter = v;
  },
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 5);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 6);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 7);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var ConnectToCloudSection;
module.link("./ConnectToCloudSection", {
  "default": function (v) {
    ConnectToCloudSection = v;
  }
}, 9);
var ManualWorkspaceRegistrationModal;
module.link("./ManualWorkspaceRegistrationModal", {
  "default": function (v) {
    ManualWorkspaceRegistrationModal = v;
  }
}, 10);
var TroubleshootingSection;
module.link("./TroubleshootingSection", {
  "default": function (v) {
    TroubleshootingSection = v;
  }
}, 11);
var WhatIsItSection;
module.link("./WhatIsItSection", {
  "default": function (v) {
    WhatIsItSection = v;
  }
}, 12);
var WorkspaceLoginSection;
module.link("./WorkspaceLoginSection", {
  "default": function (v) {
    WorkspaceLoginSection = v;
  }
}, 13);
var WorkspaceRegistrationSection;
module.link("./WorkspaceRegistrationSection", {
  "default": function (v) {
    WorkspaceRegistrationSection = v;
  }
}, 14);
var cloudConsoleUrl;
module.link("./constants", {
  cloudConsoleUrl: function (v) {
    cloudConsoleUrl = v;
  }
}, 15);

function CloudPage() {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var cloudRoute = useRoute('cloud');
  var page = useRouteParameter('page');
  var errorCode = useQueryStringParameter('error_code');
  var code = useQueryStringParameter('code');
  var state = useQueryStringParameter('state');
  var token = useQueryStringParameter('token');
  var finishOAuthAuthorization = useMethod('cloud:finishOAuthAuthorization');
  var checkRegisterStatus = useMethod('cloud:checkRegisterStatus');
  var connectWorkspace = useMethod('cloud:connectWorkspace');
  useEffect(function () {
    var acceptOAuthAuthorization = function () {
      function _callee() {
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(page !== 'oauth-callback')) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  if (!errorCode) {
                    _context.next = 6;
                    break;
                  }

                  dispatchToastMessage({
                    type: 'error',
                    title: t('Cloud_error_in_authenticating'),
                    message: t('Cloud_error_code', {
                      errorCode: errorCode
                    })
                  });
                  cloudRoute.push();
                  return _context.abrupt("return");

                case 6:
                  _context.prev = 6;
                  _context.next = 9;
                  return _regeneratorRuntime.awrap(finishOAuthAuthorization(code, state));

                case 9:
                  _context.next = 14;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context["catch"](6);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context.t0
                  });

                case 14:
                  _context.prev = 14;
                  cloudRoute.push();
                  return _context.finish(14);

                case 17:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[6, 11, 14, 17]], Promise);
      }

      return _callee;
    }();

    acceptOAuthAuthorization();
  }, [errorCode, code, state, page, dispatchToastMessage, t, cloudRoute, finishOAuthAuthorization]);

  var _useSafely = useSafely(useState()),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      registerStatus = _useSafely2[0],
      setRegisterStatus = _useSafely2[1];

  var setModal = useSetModal();
  var fetchRegisterStatus = useMutableCallback(function () {
    function _callee2() {
      var _registerStatus;

      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _regeneratorRuntime.awrap(checkRegisterStatus());

              case 3:
                _registerStatus = _context2.sent;
                setRegisterStatus(_registerStatus);
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context2.t0
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee2;
  }());
  useEffect(function () {
    var acceptWorkspaceToken = function () {
      function _callee3() {
        var isConnected;
        return _regeneratorRuntime.async(function () {
          function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;

                  if (!token) {
                    _context3.next = 8;
                    break;
                  }

                  _context3.next = 4;
                  return _regeneratorRuntime.awrap(connectWorkspace(token));

                case 4:
                  isConnected = _context3.sent;

                  if (isConnected) {
                    _context3.next = 7;
                    break;
                  }

                  throw Error(t('An error occured connecting'));

                case 7:
                  dispatchToastMessage({
                    type: 'success',
                    message: t('Connected')
                  });

                case 8:
                  _context3.next = 13;
                  break;

                case 10:
                  _context3.prev = 10;
                  _context3.t0 = _context3["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context3.t0
                  });

                case 13:
                  _context3.prev = 13;
                  _context3.next = 16;
                  return _regeneratorRuntime.awrap(fetchRegisterStatus());

                case 16:
                  return _context3.finish(13);

                case 17:
                case "end":
                  return _context3.stop();
              }
            }
          }

          return _callee3$;
        }(), null, null, [[0, 10, 13, 17]], Promise);
      }

      return _callee3;
    }();

    acceptWorkspaceToken();
  }, [connectWorkspace, dispatchToastMessage, fetchRegisterStatus, t, token]);

  var handleManualWorkspaceRegistrationButtonClick = function () {
    var handleModalClose = function () {
      setModal(null);
      fetchRegisterStatus();
    };

    setModal( /*#__PURE__*/React.createElement(ManualWorkspaceRegistrationModal, {
      onClose: handleModalClose
    }));
  };

  var isConnectToCloudDesired = registerStatus === null || registerStatus === void 0 ? void 0 : registerStatus.connectToCloud;
  var isWorkspaceRegistered = registerStatus === null || registerStatus === void 0 ? void 0 : registerStatus.workspaceRegistered;
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Connectivity_Services')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, !isWorkspaceRegistered && /*#__PURE__*/React.createElement(Button, {
    onClick: handleManualWorkspaceRegistrationButtonClick
  }, t('Cloud_Register_manually')), /*#__PURE__*/React.createElement(Button, {
    is: "a",
    primary: true,
    href: cloudConsoleUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, t('Cloud_console')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    marginInline: "auto",
    marginBlock: "neg-x24",
    width: "full",
    maxWidth: "x580"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x24"
  }, /*#__PURE__*/React.createElement(WhatIsItSection, null), isConnectToCloudDesired && /*#__PURE__*/React.createElement(React.Fragment, null, isWorkspaceRegistered ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WorkspaceLoginSection, {
    onRegisterStatusChange: fetchRegisterStatus
  }), /*#__PURE__*/React.createElement(TroubleshootingSection, {
    onRegisterStatusChange: fetchRegisterStatus
  })) : /*#__PURE__*/React.createElement(WorkspaceRegistrationSection, {
    email: registerStatus === null || registerStatus === void 0 ? void 0 : registerStatus.email,
    token: registerStatus === null || registerStatus === void 0 ? void 0 : registerStatus.token,
    workspaceId: registerStatus === null || registerStatus === void 0 ? void 0 : registerStatus.workspaceId,
    uniqueId: registerStatus === null || registerStatus === void 0 ? void 0 : registerStatus.uniqueId,
    onRegisterStatusChange: fetchRegisterStatus
  })), !isConnectToCloudDesired && /*#__PURE__*/React.createElement(ConnectToCloudSection, {
    onRegisterStatusChange: fetchRegisterStatus
  })))));
}

module.exportDefault(CloudPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/aff9a07c0d3810d93d027f4030c416ed7c275bb8.map
