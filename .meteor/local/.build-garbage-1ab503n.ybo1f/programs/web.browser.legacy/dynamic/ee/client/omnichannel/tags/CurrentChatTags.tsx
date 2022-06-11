function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/tags/CurrentChatTags.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var AutoCompleteTagsMultiple;
module.link("./AutoCompleteTagsMultiple", {
  "default": function (v) {
    AutoCompleteTagsMultiple = v;
  }
}, 1);

var CurrentChatTags = function (_ref) {
  var value = _ref.value,
      handler = _ref.handler;
  return /*#__PURE__*/React.createElement(AutoCompleteTagsMultiple, {
    onChange: handler,
    value: value
  });
};

module.exportDefault(CurrentChatTags);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/tags/f117dde0dd7cf5f110331b66398dbb950524aa5c.map
