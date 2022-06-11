function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/ActionSettingInput.js                                                            //
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
var Button, Field;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Field: function (v) {
    Field = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 2);
var useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 3);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);

function ActionSettingInput(_ref) {
  var _id = _ref._id,
      actionText = _ref.actionText,
      value = _ref.value,
      disabled = _ref.disabled,
      sectionChanged = _ref.sectionChanged;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var actionMethod = useMethod(value);

  var handleClick = function () {
    function _callee() {
      var data, args;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(actionMethod());

              case 3:
                data = _context.sent;
                args = [data.message].concat(data.params);
                dispatchToastMessage({
                  type: 'success',
                  message: t.apply(void 0, _toConsumableArray(args))
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 8]], Promise);
    }

    return _callee;
  }();

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Button, {
    "data-qa-setting-id": _id,
    children: t(actionText),
    disabled: disabled || sectionChanged,
    primary: true,
    onClick: handleClick
  })), sectionChanged && /*#__PURE__*/React.createElement(Field.Hint, null, t('Save_to_enable_this_action')));
}

module.exportDefault(ActionSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/9084684034ab0e931fe6281d86e6a6e0f182dc46.map
