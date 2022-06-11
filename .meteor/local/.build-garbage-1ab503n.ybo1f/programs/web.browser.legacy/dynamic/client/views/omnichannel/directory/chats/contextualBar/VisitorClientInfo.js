function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/VisitorClientInfo.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var UAParser;
module.link("ua-parser-js", {
  "default": function (v) {
    UAParser = v;
  }
}, 1);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 3);
var AsyncStatePhase;
module.link("../../../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 4);
var Field;
module.link("../../../components/Field", {
  "default": function (v) {
    Field = v;
  }
}, 5);
var Info;
module.link("../../../components/Info", {
  "default": function (v) {
    Info = v;
  }
}, 6);
var Label;
module.link("../../../components/Label", {
  "default": function (v) {
    Label = v;
  }
}, 7);
var FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 8);

var VisitorClientInfo = function (_ref) {
  var uid = _ref.uid;
  var t = useTranslation();

  var _useEndpointData = useEndpointData("livechat/visitors.info?visitorId=" + uid),
      userData = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error;

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || !userData || !userData.visitor.userAgent) {
    return null;
  }

  var clientData = {};
  var ua = new UAParser();
  ua.setUA(userData.visitor.userAgent);
  clientData.os = ua.getOS().name + " " + ua.getOS().version;
  clientData.browser = ua.getBrowser().name + " " + ua.getBrowser().version;
  clientData.host = userData.visitor.host;
  clientData.ip = userData.visitor.ip;
  return /*#__PURE__*/React.createElement(React.Fragment, null, clientData.os && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('OS')), /*#__PURE__*/React.createElement(Info, null, clientData.os)), clientData.browser && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Browser')), /*#__PURE__*/React.createElement(Info, null, clientData.browser)), clientData.host && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Host')), /*#__PURE__*/React.createElement(Info, null, clientData.host)), clientData.ip && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('IP')), /*#__PURE__*/React.createElement(Info, null, clientData.ip)));
};

module.exportDefault(VisitorClientInfo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/480b7efc73c6bef082fff873f987841038b7c4c7.map
