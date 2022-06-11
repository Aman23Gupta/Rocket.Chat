function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/tags/CurrentChatTags.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let AutoCompleteTagsMultiple;
module.link("./AutoCompleteTagsMultiple", {
  default(v) {
    AutoCompleteTagsMultiple = v;
  }

}, 1);

const CurrentChatTags = _ref => {
  let {
    value,
    handler
  } = _ref;
  return /*#__PURE__*/React.createElement(AutoCompleteTagsMultiple, {
    onChange: handler,
    value: value
  });
};

module.exportDefault(CurrentChatTags);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/tags/17c2ef622ecfff748503961088cc1b15e56e24e6.map
