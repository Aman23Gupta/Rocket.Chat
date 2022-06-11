function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/groups/AssetsGroupPage.js                                                               //
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
var useEditableSettingsGroupSections;
module.link("../../../../contexts/EditableSettingsContext", {
  useEditableSettingsGroupSections: function (v) {
    useEditableSettingsGroupSections = v;
  }
}, 2);
var useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 3);
var useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 4);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var GroupPage;
module.link("../GroupPage", {
  "default": function (v) {
    GroupPage = v;
  }
}, 6);
var Section;
module.link("../Section", {
  "default": function (v) {
    Section = v;
  }
}, 7);

function AssetsGroupPage(_ref) {
  var _id = _ref._id,
      group = _objectWithoutProperties(_ref, _excluded);

  var sections = useEditableSettingsGroupSections(_id);
  var solo = sections.length === 1;
  var t = useTranslation();
  var refreshClients = useMethod('refreshClients');
  var dispatchToastMessage = useToastMessageDispatch();

  var handleApplyAndRefreshAllClientsButtonClick = function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(refreshClients());

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Clients_will_refresh_in_a_few_seconds')
                });
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
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

  return /*#__PURE__*/React.createElement(GroupPage, _extends({
    _id: _id
  }, group, {
    headerButtons: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: handleApplyAndRefreshAllClientsButtonClick
    }, t('Apply_and_refresh_all_clients')))
  }), sections.map(function (sectionName) {
    return /*#__PURE__*/React.createElement(Section, {
      key: sectionName,
      groupId: _id,
      hasReset: false,
      sectionName: sectionName,
      solo: solo
    });
  }));
}

module.exportDefault( /*#__PURE__*/memo(AssetsGroupPage));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/groups/8839183ab69b740cdead662b628b6fcf7b8ea56d.map
