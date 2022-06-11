function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachments.tsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useBlockRendered;
module.link("../hooks/useBlockRendered", {
  useBlockRendered: function (v) {
    useBlockRendered = v;
  }
}, 1);
var Item;
module.link("./Item", {
  "default": function (v) {
    Item = v;
  }
}, 2);

var Attachments = function (_ref) {
  var _ref$attachments = _ref.attachments,
      attachments = _ref$attachments === void 0 ? null : _ref$attachments,
      file = _ref.file;

  var _useBlockRendered = useBlockRendered(),
      className = _useBlockRendered.className,
      ref = _useBlockRendered.ref;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: className,
    ref: ref
  }), attachments === null || attachments === void 0 ? void 0 : attachments.map(function (attachment, index) {
    return /*#__PURE__*/React.createElement(Item, {
      key: index,
      file: file,
      attachment: attachment
    });
  }));
};

module.exportDefault(Attachments);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/7655138a7c5a8c0033279b68263a755fb11899cb.map
