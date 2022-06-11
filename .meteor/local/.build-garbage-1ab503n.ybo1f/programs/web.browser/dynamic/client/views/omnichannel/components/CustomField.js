function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/components/CustomField.js                                                                  //
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
let FormSkeleton;
module.link("../directory/Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 5);
let Field;
module.link("./Field", {
  default(v) {
    Field = v;
  }

}, 6);
let Info;
module.link("./Info", {
  default(v) {
    Info = v;
  }

}, 7);
let Label;
module.link("./Label", {
  default(v) {
    Label = v;
  }

}, 8);

const CustomField = _ref => {
  let {
    id,
    value
  } = _ref;
  const t = useTranslation();
  const {
    value: data,
    phase: state,
    error
  } = useEndpointData("livechat/custom-fields/".concat(id));

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || !data || !data.customField) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('Custom_Field_Not_Found'));
  }

  const {
    label
  } = data.customField;
  return label && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, label), /*#__PURE__*/React.createElement(Info, null, value));
};

module.exportDefault(CustomField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/components/8ecd181603965170e8c3938285817b1c077adec7.map
