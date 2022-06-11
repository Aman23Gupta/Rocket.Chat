function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/emailInbox/EmailInboxEditWithData.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 3);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 4);
let EmailInboxForm;
module.link("./EmailInboxForm", {
  default(v) {
    EmailInboxForm = v;
  }

}, 5);
let FormSkeleton;
module.link("./Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 6);

function EmailInboxEditWithData(_ref) {
  let {
    id
  } = _ref;
  const t = useTranslation();
  const {
    value: data,
    error,
    phase: state
  } = useEndpointData("email-inbox/".concat(id));

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
//# sourceMappingURL=/dynamic/client/views/admin/emailInbox/3d2581ebddcc2c082d7ef1cb0a54762367e5dca8.map
