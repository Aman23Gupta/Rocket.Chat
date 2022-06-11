function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/contacts/contextualBar/ContactEditWithData.js                                    //
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
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 3);
var useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 4);
var FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 5);
var ContactNewEdit;
module.link("./ContactNewEdit", {
  "default": function (v) {
    ContactNewEdit = v;
  }
}, 6);

function ContactEditWithData(_ref) {
  var id = _ref.id,
      close = _ref.close;
  var t = useTranslation();

  var _useEndpointData = useEndpointData("omnichannel/contact?contactId=" + id),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error; // TODO OMNICHANNEL


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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/contacts/contextualBar/a4629419a561a7bf76d9df9621f3e1c114b1ba73.map
