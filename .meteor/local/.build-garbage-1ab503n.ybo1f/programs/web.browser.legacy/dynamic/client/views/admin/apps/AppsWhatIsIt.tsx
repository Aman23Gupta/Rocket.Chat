function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppsWhatIsIt.tsx                                                                            //
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
var Button, Box, Throbber;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Box: function (v) {
    Box = v;
  },
  Throbber: function (v) {
    Throbber = v;
  }
}, 0);
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var Apps;
module.link("../../../../app/apps/client", {
  Apps: function (v) {
    Apps = v;
  }
}, 2);
var ExternalLink;
module.link("../../../components/ExternalLink", {
  "default": function (v) {
    ExternalLink = v;
  }
}, 3);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 4);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 5);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var readMeUrl = 'https://go.rocket.chat/i/developing-an-app';

var AppsWhatIsIt = function () {
  var t = useTranslation();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var appsRouter = useRoute('admin-marketplace');
  var enableAppsEngine = useMethod('apps/go-enable');
  var isAppsEngineEnabled = useMethod('apps/is-enabled');

  var handleClick = function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoading(true);
                _context.prev = 1;
                _context.next = 4;
                return _regeneratorRuntime.awrap(enableAppsEngine());

              case 4:
                _context.next = 6;
                return _regeneratorRuntime.awrap(isAppsEngineEnabled());

              case 6:
                if (!_context.sent) {
                  _context.next = 11;
                  break;
                }

                _context.next = 9;
                return _regeneratorRuntime.awrap(Apps.getAppClientManager().initialize());

              case 9:
                _context.next = 11;
                return _regeneratorRuntime.awrap(Apps.load(true));

              case 11:
                appsRouter.push();
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](1);
                setError(_context.t0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[1, 14]], Promise);
    }

    return _callee;
  }();

  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Apps_WhatIsIt')
  }), /*#__PURE__*/React.createElement(Page.ScrollableContent, null, error ? /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4",
    maxWidth: "x600",
    alignSelf: "center"
  }, error.message) : /*#__PURE__*/React.createElement(Box, {
    alignSelf: "center",
    maxWidth: "x600",
    width: "full",
    withRichContent: true
  }, /*#__PURE__*/React.createElement("p", null, t('Apps_WhatIsIt_paragraph1')), /*#__PURE__*/React.createElement("p", null, t('Apps_WhatIsIt_paragraph2')), /*#__PURE__*/React.createElement("p", null, t('Apps_WhatIsIt_paragraph3'), " ", /*#__PURE__*/React.createElement(ExternalLink, {
    to: readMeUrl
  })), /*#__PURE__*/React.createElement("p", null, t('Apps_WhatIsIt_paragraph4')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: loading,
    minHeight: "x40",
    onClick: handleClick
  }, loading ? /*#__PURE__*/React.createElement(Throbber, {
    inheritColor: true
  }) : t('Enable')))));
};

module.exportDefault(AppsWhatIsIt);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/6855bd34347505215943423e19f6fdb7953a4dc1.map
