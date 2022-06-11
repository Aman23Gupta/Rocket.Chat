function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/TitleLink.tsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Title;
module.link("./Title", {
  default(v) {
    Title = v;
  }

}, 1);

const TitleLink = _ref => {
  let {
    link,
    title
  } = _ref;
  return /*#__PURE__*/React.createElement(Title, {
    is: "a",
    href: "".concat(link, "?download"),
    color: undefined,
    target: "_blank",
    download: title,
    rel: "noopener noreferrer"
  }, title);
};

module.exportDefault(TitleLink);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/2023c5af893a7390ff1e171870ff2c0106475b8e.map
