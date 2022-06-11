function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/NewRolePage.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var Box, ButtonGroup, Button, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 3);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 4);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 8);
var RoleForm;
module.link("./RoleForm", {
  "default": function (v) {
    RoleForm = v;
  }
}, 9);

var NewRolePage = function () {
  var t = useTranslation();
  var router = useRoute('admin-permissions');
  var dispatchToastMessage = useToastMessageDispatch();

  var _useForm = useForm({
    name: '',
    description: '',
    scope: 'Users',
    mandatory2fa: false
  }),
      values = _useForm.values,
      handlers = _useForm.handlers;

  var saveRole = useEndpoint('POST', 'roles.create');
  var handleSave = useMutableCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(saveRole(values));

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Saved')
                });
                router.push({});
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
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
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee;
  }());
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, /*#__PURE__*/React.createElement(Box, {
    w: "full",
    alignSelf: "center",
    mb: "neg-x8"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x8"
  }, /*#__PURE__*/React.createElement(RoleForm, {
    values: values,
    handlers: handlers
  })))), /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    w: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave
  }, t('Save')))));
};

module.exportDefault(NewRolePage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/96c75d8480aa6d2f7598d4f8a1c76caa00109cc7.map
