function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/TroubleshootingSection.js                                                                  //
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
var Box, Button, ButtonGroup, Throbber;
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
  Throbber: function (v) {
    Throbber = v;
  }
}, 0);
var useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely: function (v) {
    useSafely = v;
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
var Subtitle;
module.link("../../../components/Subtitle", {
  "default": function (v) {
    Subtitle = v;
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
var statusPageUrl;
module.link("./constants", {
  statusPageUrl: function (v) {
    statusPageUrl = v;
  }
}, 7);

function TroubleshootingSection(_ref) {
  var onRegisterStatusChange = _ref.onRegisterStatusChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useSafely = useSafely(useState(false)),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      isSyncing = _useSafely2[0],
      setSyncing = _useSafely2[1];

  var syncWorkspace = useMethod('cloud:syncWorkspace');

  var handleSyncButtonClick = function () {
    function _callee() {
      var isSynced;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setSyncing(true);
                _context.prev = 1;
                _context.next = 4;
                return _regeneratorRuntime.awrap(syncWorkspace());

              case 4:
                isSynced = _context.sent;

                if (isSynced) {
                  _context.next = 7;
                  break;
                }

                throw Error(t('An error occured syncing'));

              case 7:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Sync Complete')
                });
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 13:
                _context.prev = 13;
                _context.next = 16;
                return _regeneratorRuntime.awrap(onRegisterStatusChange && onRegisterStatusChange());

              case 16:
                setSyncing(false);
                return _context.finish(13);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[1, 10, 13, 18]], Promise);
    }

    return _callee;
  }();

  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "section"
  }, props), /*#__PURE__*/React.createElement(Subtitle, null, t('Cloud_troubleshooting')), /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    color: "neutral-800"
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_workspace_support'))), /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    disabled: isSyncing,
    minHeight: "x40",
    onClick: handleSyncButtonClick
  }, isSyncing ? /*#__PURE__*/React.createElement(Throbber, {
    is: "span",
    inheritColor: true
  }) : t('Sync'))), /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    color: "neutral-800"
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_status_page_description'), ":", ' ', /*#__PURE__*/React.createElement("a", {
    href: statusPageUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, statusPageUrl))));
}

module.exportDefault(TroubleshootingSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/9d904a2d3114b4eee8597f3bee0f0ad7d82e301c.map
