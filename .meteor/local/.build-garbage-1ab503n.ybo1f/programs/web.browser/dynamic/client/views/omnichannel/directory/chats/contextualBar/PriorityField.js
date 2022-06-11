function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/PriorityField.js                                             //
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

const PriorityField = _ref => {
  let {
    id
  } = _ref;
  const t = useTranslation();
  const {
    value: data,
    phase: state,
    error
  } = useEndpointData("livechat/priorities.getOne?priorityId=".concat(id));

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || !data) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('Custom_Field_Not_Found'));
  }

  const {
    name
  } = data;
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Priority')), /*#__PURE__*/React.createElement(Info, null, name));
};

module.exportDefault(PriorityField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/6f00b103dedf70725bdea78c809cc57f10e0bd74.map
