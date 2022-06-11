function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/appearance/AppearancePage.tsx                                                              //
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

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);
var ButtonGroup, Button, Box;
module.link("@rocket.chat/fuselage", {
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Box: function (v) {
    Box = v;
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
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
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
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 7);
var AppearanceForm;
module.link("./AppearanceForm", {
  "default": function (v) {
    AppearanceForm = v;
  }
}, 8);

var reduceAppearance = function (settings) {
  return settings.reduce(function (acc, _ref) {
    var _objectSpread2;

    var _id = _ref._id,
        value = _ref.value;
    acc = _objectSpread(_objectSpread({}, acc), {}, (_objectSpread2 = {}, _objectSpread2[_id] = value, _objectSpread2));
    return acc;
  }, {});
};

var AppearancePage = function (_ref2) {
  var settings = _ref2.settings;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var save = useMethod('livechat:saveAppearance');

  var _useForm = useForm(reduceAppearance(settings)),
      values = _useForm.values,
      handlers = _useForm.handlers,
      commit = _useForm.commit,
      reset = _useForm.reset,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var handleSave = useMutableCallback(function () {
    function _callee() {
      var mappedAppearance;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mappedAppearance = Object.entries(values).map(function (_ref3) {
                  var _ref4 = _slicedToArray(_ref3, 2),
                      _id = _ref4[0],
                      value = _ref4[1];

                  return {
                    _id: _id,
                    value: value
                  };
                });
                _context.prev = 1;
                _context.next = 4;
                return _regeneratorRuntime.awrap(save(mappedAppearance));

              case 4:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Settings_updated')
                });
                commit();
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                dispatchToastMessage({
                  type: 'success',
                  message: _context.t0
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[1, 8]], Promise);
    }

    return _callee;
  }());

  var handleResetButtonClick = function () {
    reset();
  };

  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Appearance')
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleResetButtonClick
  }, t('Reset')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave,
    disabled: !hasUnsavedChanges
  }, t('Save')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "x600",
    w: "full",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(AppearanceForm, {
    values: values,
    handlers: handlers
  }))));
};

module.exportDefault(AppearancePage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/appearance/4efc1b82507397ae68b95ab93aa21802889a72a2.map
