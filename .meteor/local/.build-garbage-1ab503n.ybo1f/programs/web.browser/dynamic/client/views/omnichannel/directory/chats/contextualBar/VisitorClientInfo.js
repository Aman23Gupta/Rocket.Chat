function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/VisitorClientInfo.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let UAParser;
module.link("ua-parser-js", {
  default(v) {
    UAParser = v;
  }

}, 1);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 3);
let AsyncStatePhase;
module.link("../../../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 4);
let Field;
module.link("../../../components/Field", {
  default(v) {
    Field = v;
  }

}, 5);
let Info;
module.link("../../../components/Info", {
  default(v) {
    Info = v;
  }

}, 6);
let Label;
module.link("../../../components/Label", {
  default(v) {
    Label = v;
  }

}, 7);
let FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 8);

const VisitorClientInfo = _ref => {
  let {
    uid
  } = _ref;
  const t = useTranslation();
  const {
    value: userData,
    phase: state,
    error
  } = useEndpointData("livechat/visitors.info?visitorId=".concat(uid));

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || !userData || !userData.visitor.userAgent) {
    return null;
  }

  const clientData = {};
  const ua = new UAParser();
  ua.setUA(userData.visitor.userAgent);
  clientData.os = "".concat(ua.getOS().name, " ").concat(ua.getOS().version);
  clientData.browser = "".concat(ua.getBrowser().name, " ").concat(ua.getBrowser().version);
  clientData.host = userData.visitor.host;
  clientData.ip = userData.visitor.ip;
  return /*#__PURE__*/React.createElement(React.Fragment, null, clientData.os && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('OS')), /*#__PURE__*/React.createElement(Info, null, clientData.os)), clientData.browser && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Browser')), /*#__PURE__*/React.createElement(Info, null, clientData.browser)), clientData.host && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Host')), /*#__PURE__*/React.createElement(Info, null, clientData.host)), clientData.ip && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('IP')), /*#__PURE__*/React.createElement(Info, null, clientData.ip)));
};

module.exportDefault(VisitorClientInfo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/78a6b539464715de074d6f100c1e91d1d0f5be49.map
