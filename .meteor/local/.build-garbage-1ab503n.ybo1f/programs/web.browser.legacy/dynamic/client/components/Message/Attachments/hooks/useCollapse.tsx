function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/hooks/useCollapse.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  useCollapse: function () {
    return useCollapse;
  }
});
var useToggle;
module.link("@rocket.chat/fuselage-hooks", {
  useToggle: function (v) {
    useToggle = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var Attachment;
module.link("../Attachment", {
  "default": function (v) {
    Attachment = v;
  }
}, 2);
var useAttachmentIsCollapsedByDefault;
module.link("../context/AttachmentContext", {
  useAttachmentIsCollapsedByDefault: function (v) {
    useAttachmentIsCollapsedByDefault = v;
  }
}, 3);

var useCollapse = function (attachmentCollapsed) {
  var collpaseByDefault = useAttachmentIsCollapsedByDefault();

  var _useToggle = useToggle(collpaseByDefault || attachmentCollapsed),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      collapsed = _useToggle2[0],
      toogleCollapsed = _useToggle2[1];

  return [collapsed, /*#__PURE__*/React.createElement(Attachment.Collapse, {
    collapsed: collapsed,
    onClick: toogleCollapsed
  })];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/hooks/0b20a0f0c5417e99a43c00a35d6945a95adcacab.map
