function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/emailInbox/EmailInboxEditWithData.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 3);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 4);
var EmailInboxForm;
module.link("./EmailInboxForm", {
  "default": function (v) {
    EmailInboxForm = v;
  }
}, 5);
var FormSkeleton;
module.link("./Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 6);

function EmailInboxEditWithData(_ref) {
  var id = _ref.id;
  var t = useTranslation();

  var _useEndpointData = useEndpointData("email-inbox/" + id),
      data = _useEndpointData.value,
      error = _useEndpointData.error,
      state = _useEndpointData.phase;

  if ([state].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || !data) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('EmailInbox_not_found'));
  }

  return /*#__PURE__*/React.createElement(EmailInboxForm, {
    id: id,
    data: data
  });
}

module.exportDefault(EmailInboxEditWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/emailInbox/e20555a807798341f5a32edb13ba734ff7c687ed.map
