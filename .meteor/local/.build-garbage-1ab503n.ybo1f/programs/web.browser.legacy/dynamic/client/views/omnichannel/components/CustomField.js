function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/components/CustomField.js                                                                  //
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
var FormSkeleton;
module.link("../directory/Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 5);
var Field;
module.link("./Field", {
  "default": function (v) {
    Field = v;
  }
}, 6);
var Info;
module.link("./Info", {
  "default": function (v) {
    Info = v;
  }
}, 7);
var Label;
module.link("./Label", {
  "default": function (v) {
    Label = v;
  }
}, 8);

var CustomField = function (_ref) {
  var id = _ref.id,
      value = _ref.value;
  var t = useTranslation();

  var _useEndpointData = useEndpointData("livechat/custom-fields/" + id),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error;

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || !data || !data.customField) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('Custom_Field_Not_Found'));
  }

  var label = data.customField.label;
  return label && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, label), /*#__PURE__*/React.createElement(Info, null, value));
};

module.exportDefault(CustomField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/components/468f9f620aa6a1cd784e9cc6761a89c3330502a6.map
