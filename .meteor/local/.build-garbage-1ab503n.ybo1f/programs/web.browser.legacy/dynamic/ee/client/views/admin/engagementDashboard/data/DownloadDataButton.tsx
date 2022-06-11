function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/data/DownloadDataButton.tsx                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["attachmentName", "headers", "dataAvailable", "dataExtractor"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var ActionButton;
module.link("@rocket.chat/fuselage", {
  ActionButton: function (v) {
    ActionButton = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useToastMessageDispatch;
module.link("../../../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var downloadCsvAs;
module.link("../../../../../../client/lib/download", {
  downloadCsvAs: function (v) {
    downloadCsvAs = v;
  }
}, 4);

var DownloadDataButton = function (_ref) {
  var attachmentName = _ref.attachmentName,
      headers = _ref.headers,
      dataAvailable = _ref.dataAvailable,
      dataExtractor = _ref.dataExtractor,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var handleClick = function () {
    if (!dataAvailable) {
      return;
    }

    Promise.resolve(dataExtractor()).then(function (data) {
      if (!data) {
        return;
      }

      downloadCsvAs([headers].concat(_toConsumableArray(data)), attachmentName);
    }).catch(function (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    });
  };

  return /*#__PURE__*/React.createElement(ActionButton, _extends({
    small: true,
    mis: "x16",
    disabled: !dataAvailable,
    onClick: handleClick,
    "aria-label": t('Download_Info'),
    icon: "download"
  }, props));
};

module.exportDefault(DownloadDataButton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/data/ddc06e4a06f1065f5c4f81a144109293c0225635.map
