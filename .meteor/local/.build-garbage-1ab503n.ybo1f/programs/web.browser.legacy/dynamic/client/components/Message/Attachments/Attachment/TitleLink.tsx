function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/TitleLink.tsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Title;
module.link("./Title", {
  "default": function (v) {
    Title = v;
  }
}, 1);

var TitleLink = function (_ref) {
  var link = _ref.link,
      title = _ref.title;
  return /*#__PURE__*/React.createElement(Title, {
    is: "a",
    href: link + "?download",
    color: undefined,
    target: "_blank",
    download: title,
    rel: "noopener noreferrer"
  }, title);
};

module.exportDefault(TitleLink);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/f0aa94d9a03580573aa0c420855bd91c909d5fb2.map
