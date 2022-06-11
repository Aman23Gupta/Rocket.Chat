function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/contacts/contextualBar/ContactEditWithData.js                                    //
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
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 3);
let useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 4);
let FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 5);
let ContactNewEdit;
module.link("./ContactNewEdit", {
  default(v) {
    ContactNewEdit = v;
  }

}, 6);

function ContactEditWithData(_ref) {
  let {
    id,
    close
  } = _ref;
  const t = useTranslation();
  const {
    value: data,
    phase: state,
    error
  } = useEndpointData("omnichannel/contact?contactId=".concat(id)); // TODO OMNICHANNEL

  if ([state].includes(AsyncStatePhase.LOADING)) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || !data || !data.contact) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('Contact_not_found'));
  }

  return /*#__PURE__*/React.createElement(ContactNewEdit, {
    id: id,
    data: data,
    close: close
  });
}

module.exportDefault(ContactEditWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/contacts/contextualBar/5d07014876cebc6210c7bae35fd29a634583cd9b.map
