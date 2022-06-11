function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/PriorityField.js                                             //
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

var PriorityField = function (_ref) {
  var id = _ref.id;
  var t = useTranslation();

  var _useEndpointData = useEndpointData("livechat/priorities.getOne?priorityId=" + id),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error;

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || !data) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('Custom_Field_Not_Found'));
  }

  var name = data.name;
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Priority')), /*#__PURE__*/React.createElement(Info, null, name));
};

module.exportDefault(PriorityField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/8ebb65dd0b2684a7f9ee0d62f1c8e1e7b6375396.map
