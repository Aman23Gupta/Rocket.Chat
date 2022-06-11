function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/InformationRoute.tsx                                                                        //
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
var Callout, ButtonGroup, Button, Icon;
module.link("@rocket.chat/fuselage", {
  Callout: function (v) {
    Callout = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React, useState, useEffect, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var PageSkeleton;
module.link("../../../components/PageSkeleton", {
  "default": function (v) {
    PageSkeleton = v;
  }
}, 4);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 5);
var useMethod, useServerInformation, useEndpoint;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  },
  useServerInformation: function (v) {
    useServerInformation = v;
  },
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var downloadJsonAs;
module.link("../../../lib/download", {
  downloadJsonAs: function (v) {
    downloadJsonAs = v;
  }
}, 8);
var InformationPage;
module.link("./InformationPage", {
  "default": function (v) {
    InformationPage = v;
  }
}, 9);

var InformationRoute = function () {
  var t = useTranslation();
  var canViewStatistics = usePermission('view-statistics');

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      statistics = _useState6[0],
      setStatistics = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      instances = _useState8[0],
      setInstances = _useState8[1];

  var _useState9 = useState(function () {
    return function () {
      return undefined;
    };
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      fetchStatistics = _useState10[0],
      setFetchStatistics = _useState10[1];

  var getStatistics = useEndpoint('GET', 'statistics');
  var getInstances = useMethod('instances/get');
  useEffect(function () {
    var didCancel = false;

    var fetchStatistics = function () {
      function _callee() {
        var _ref,
            _ref$refresh,
            refresh,
            _await$Promise$all,
            _await$Promise$all2,
            _statistics,
            _instances,
            _args = arguments;

        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref$refresh = _ref.refresh, refresh = _ref$refresh === void 0 ? false : _ref$refresh;
                  setLoading(true);
                  setError(false);
                  _context.prev = 3;
                  _context.next = 6;
                  return _regeneratorRuntime.awrap(Promise.all([getStatistics({
                    refresh: refresh
                  }), getInstances()]));

                case 6:
                  _await$Promise$all = _context.sent;
                  _await$Promise$all2 = _slicedToArray(_await$Promise$all, 2);
                  _statistics = _await$Promise$all2[0];
                  _instances = _await$Promise$all2[1];

                  if (!didCancel) {
                    _context.next = 12;
                    break;
                  }

                  return _context.abrupt("return");

                case 12:
                  setStatistics(_statistics);
                  setInstances(_instances);
                  _context.next = 19;
                  break;

                case 16:
                  _context.prev = 16;
                  _context.t0 = _context["catch"](3);
                  setError(_context.t0);

                case 19:
                  _context.prev = 19;
                  setLoading(false);
                  return _context.finish(19);

                case 22:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[3, 16, 19, 22]], Promise);
      }

      return _callee;
    }();

    setFetchStatistics(function () {
      return fetchStatistics;
    });
    fetchStatistics();
    return function () {
      didCancel = true;
    };
  }, [canViewStatistics, getInstances, getStatistics]);
  var info = useServerInformation();

  var handleClickRefreshButton = function () {
    if (isLoading) {
      return;
    }

    fetchStatistics({
      refresh: true
    });
  };

  var handleClickDownloadInfo = function () {
    if (isLoading) {
      return;
    }

    downloadJsonAs(statistics, 'statistics');
  };

  if (isLoading) {
    return /*#__PURE__*/React.createElement(PageSkeleton, null);
  }

  if (error || !statistics) {
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
      title: t('Info')
    }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
      primary: true,
      type: "button",
      onClick: handleClickRefreshButton
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "reload"
    }), " ", t('Refresh')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Callout, {
      type: "danger"
    }, t('Error_loading_pages'))));
  }

  if (canViewStatistics) {
    return /*#__PURE__*/React.createElement(InformationPage, {
      canViewStatistics: canViewStatistics,
      info: info,
      statistics: statistics,
      instances: instances,
      onClickRefreshButton: handleClickRefreshButton,
      onClickDownloadInfo: handleClickDownloadInfo
    });
  }

  return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
};

module.exportDefault( /*#__PURE__*/memo(InformationRoute));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/ad54389a01bcc4d17bf2debe30fdce313ad326cb.map
