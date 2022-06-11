function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/groups/OAuthGroupPage.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_id"];

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

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Button;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var s;
module.link("underscore.string", {
  "default": function (v) {
    s = v;
  }
}, 2);
var useEditableSettingsGroupSections;
module.link("../../../../contexts/EditableSettingsContext", {
  useEditableSettingsGroupSections: function (v) {
    useEditableSettingsGroupSections = v;
  }
}, 3);
var useModal;
module.link("../../../../contexts/ModalContext", {
  useModal: function (v) {
    useModal = v;
  }
}, 4);
var useAbsoluteUrl, useMethod;
module.link("../../../../contexts/ServerContext", {
  useAbsoluteUrl: function (v) {
    useAbsoluteUrl = v;
  },
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var GroupPage;
module.link("../GroupPage", {
  "default": function (v) {
    GroupPage = v;
  }
}, 8);
var Section;
module.link("../Section", {
  "default": function (v) {
    Section = v;
  }
}, 9);

function OAuthGroupPage(_ref) {
  var _id = _ref._id,
      group = _objectWithoutProperties(_ref, _excluded);

  var sections = useEditableSettingsGroupSections(_id);
  var solo = sections.length === 1;
  var t = useTranslation();

  var sectionIsCustomOAuth = function (sectionName) {
    return sectionName && /^Custom OAuth:\s.+/.test(sectionName);
  };

  var getAbsoluteUrl = useAbsoluteUrl();

  var callbackURL = function (sectionName) {
    var id = s.strRight(sectionName, 'Custom OAuth: ').toLowerCase();
    return getAbsoluteUrl("_oauth/" + id);
  };

  var dispatchToastMessage = useToastMessageDispatch();
  var refreshOAuthService = useMethod('refreshOAuthService');
  var addOAuthService = useMethod('addOAuthService');
  var removeOAuthService = useMethod('removeOAuthService');
  var modal = useModal();

  var handleRefreshOAuthServicesButtonClick = function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatchToastMessage({
                  type: 'info',
                  message: t('Refreshing')
                });
                _context.prev = 1;
                _context.next = 4;
                return _regeneratorRuntime.awrap(refreshOAuthService());

              case 4:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Done')
                });
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[1, 7]], Promise);
    }

    return _callee;
  }();

  var handleAddCustomOAuthButtonClick = function () {
    modal.open({
      title: t('Add_custom_oauth'),
      text: t('Give_a_unique_name_for_the_custom_oauth'),
      type: 'input',
      showCancelButton: true,
      closeOnConfirm: true,
      inputPlaceholder: t('Custom_oauth_unique_name')
    }, function () {
      function _callee2(inputValue) {
        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(inputValue === false)) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", false);

                case 2:
                  if (!(inputValue === '')) {
                    _context2.next = 5;
                    break;
                  }

                  modal.showInputError(t('Name_cant_be_empty'));
                  return _context2.abrupt("return", false);

                case 5:
                  _context2.prev = 5;
                  _context2.next = 8;
                  return _regeneratorRuntime.awrap(addOAuthService(inputValue));

                case 8:
                  _context2.next = 13;
                  break;

                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2["catch"](5);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context2.t0
                  });

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, [[5, 10]], Promise);
      }

      return _callee2;
    }());
  };

  return /*#__PURE__*/React.createElement(GroupPage, _extends({
    _id: _id
  }, group, {
    headerButtons: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: handleRefreshOAuthServicesButtonClick
    }, t('Refresh_oauth_services')), /*#__PURE__*/React.createElement(Button, {
      onClick: handleAddCustomOAuthButtonClick
    }, t('Add_custom_oauth')))
  }), sections.map(function (sectionName) {
    if (sectionIsCustomOAuth(sectionName)) {
      var id = s.strRight(sectionName, 'Custom OAuth: ').toLowerCase();

      var handleRemoveCustomOAuthButtonClick = function () {
        modal.open({
          title: t('Are_you_sure'),
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: t('Yes_delete_it'),
          cancelButtonText: t('Cancel'),
          closeOnConfirm: true
        }, function () {
          function _callee3() {
            return _regeneratorRuntime.async(function () {
              function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return _regeneratorRuntime.awrap(removeOAuthService(id));

                    case 3:
                      _context3.next = 8;
                      break;

                    case 5:
                      _context3.prev = 5;
                      _context3.t0 = _context3["catch"](0);
                      dispatchToastMessage({
                        type: 'error',
                        message: _context3.t0
                      });

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }

              return _callee3$;
            }(), null, null, [[0, 5]], Promise);
          }

          return _callee3;
        }());
      };

      return /*#__PURE__*/React.createElement(Section, {
        key: sectionName,
        groupId: _id,
        help: /*#__PURE__*/React.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: t('Custom_oauth_helper', callbackURL(sectionName))
          }
        }),
        sectionName: sectionName,
        solo: solo
      }, /*#__PURE__*/React.createElement("div", {
        className: "submit"
      }, /*#__PURE__*/React.createElement(Button, {
        danger: true,
        onClick: handleRemoveCustomOAuthButtonClick
      }, t('Remove_custom_oauth'))));
    }

    return /*#__PURE__*/React.createElement(Section, {
      key: sectionName,
      groupId: _id,
      sectionName: sectionName,
      solo: solo
    });
  }));
}

module.exportDefault( /*#__PURE__*/memo(OAuthGroupPage));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/groups/bd28b3563484702aa31ed812691027834b4b25c8.map
