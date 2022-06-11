function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/data/DownloadDataButton.tsx                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["attachmentName", "headers", "dataAvailable", "dataExtractor"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let ActionButton;
module.link("@rocket.chat/fuselage", {
  ActionButton(v) {
    ActionButton = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useToastMessageDispatch;
module.link("../../../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let downloadCsvAs;
module.link("../../../../../../client/lib/download", {
  downloadCsvAs(v) {
    downloadCsvAs = v;
  }

}, 4);

const DownloadDataButton = _ref => {
  let {
    attachmentName,
    headers,
    dataAvailable,
    dataExtractor
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();

  const handleClick = () => {
    if (!dataAvailable) {
      return;
    }

    Promise.resolve(dataExtractor()).then(data => {
      if (!data) {
        return;
      }

      downloadCsvAs([headers, ...data], attachmentName);
    }).catch(error => {
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/data/379ae6f1b98125c421b3e1941578984bfa56f0a6.map
